'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'

const PROMPT = `You will receive an input base image. This base character must always stay exactly the same:
– same face shape
– same eyes
– same mouth
– same head outline
– same drawing style
– same line thickness
– no shading unless the base already has it
– no changes to the facial expression

Using this base image as the unmodified core, apply ONLY the visual features from the given reference character (such as hairstyle, outfit, accessories, colors, and background). 

Rules:
1. DO NOT change the face, eyes, mouth, or proportions of the original base character.
2. Keep the base character's art style exactly the same as the original simple line-drawing style.
3. Add hair, outfit, accessories, or color **on top of** the base character without altering the original lines.
4. Integrate the reference character's style in a minimal, clean line-art form that matches the base style.
5. Background may be adapted to match the reference, but still drawn in the same simple, clean style.
6. NEVER replace the character with the reference — only apply the reference's traits onto the base figure.

Output:
A single image where the base character remains unchanged, but enhanced with the hairstyle, clothing, color scheme, accessories, and background inspired by the reference.`

export async function generateImage(
  baseImageBase64: string,
  referenceImageBase64: string
) {
  try {
    console.log('[v0] Starting image generation...')

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY

    if (!apiKey) {
      return {
        success: false,
        error:
          'API key not configured. Please add GOOGLE_GEMINI_API_KEY to your environment variables.',
      }
    }

    if (!baseImageBase64 || typeof baseImageBase64 !== 'string') {
      console.log('[v0] Invalid base image data')
      return {
        success: false,
        error: 'Invalid base image data',
      }
    }

    if (!referenceImageBase64 || typeof referenceImageBase64 !== 'string') {
      console.log('[v0] Invalid reference image data')
      return {
        success: false,
        error: 'Invalid reference image data',
      }
    }

    console.log('[v0] Base image size:', baseImageBase64.length)
    console.log('[v0] Reference image size:', referenceImageBase64.length)

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-image' })

    const result = await model.generateContent([
      {
        inlineData: {
          data: baseImageBase64,
          mimeType: 'image/png',
        },
      },
      {
        inlineData: {
          data: referenceImageBase64,
          mimeType: 'image/png',
        },
      },
      PROMPT,
    ])

    console.log('[v0] Response received from Gemini')

    const response = result.response

    if (!response?.candidates || response.candidates.length === 0) {
      console.log('[v0] No candidates in response')
      return {
        success: false,
        error: 'No response generated from API',
      }
    }

    const candidate = response.candidates[0]
    if (!candidate?.content?.parts || candidate.content.parts.length === 0) {
      console.log('[v0] No parts in candidate')
      return {
        success: false,
        error: 'No content in API response',
      }
    }

    for (const part of candidate.content.parts) {
      if (part.inlineData) {
        console.log('[v0] Image generated successfully')
        return {
          success: true,
          imageData: part.inlineData.data,
          mimeType: part.inlineData.mimeType,
        }
      }
    }

    console.log('[v0] No image in response')
    return {
      success: false,
      error: 'No image generated in response. The model may have returned text instead.',
    }
  } catch (error) {
    console.error('[v0] Error generating image:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate image',
    }
  }
}
