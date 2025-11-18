import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/generate-image", async (req, res) => {
  try {
    const { baseImage, referenceImage } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You will receive an input base image. This base character must always stay exactly the same:
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
A single image where the base character remains unchanged, but enhanced with the hairstyle, clothing, color scheme, accessories, and background inspired by the reference.
`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/png",
          data: baseImage
        }
      },
      {
        inlineData: {
          mimeType: "image/png",
          data: referenceImage
        }
      }
    ]);

    const img = result.response.candidates[0].content.parts[0].inlineData.data;

    res.json({
      success: true,
      imageData: img,
      mimeType: "image/png"
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.message });
  }
});

app.listen(3001, () => console.log("AI generator running on http://localhost:3001"));
