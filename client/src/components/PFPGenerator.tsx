'use client'

import { useState } from 'react'
import { Upload, Sparkles, Loader2, X, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { generateImage } from '@/actions/generateImage'


export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
        setGeneratedImage(null)
        setError(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
        setGeneratedImage(null)
        setError(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!selectedImage) return

    setIsGenerating(true)
    setError(null)
    setGeneratedImage(null)

    try {
      const baseImageResponse = await fetch('/base-character.png')
      const baseImageBlob = await baseImageResponse.blob()
      const baseImageBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          const result = reader.result as string
          resolve(result.split(',')[1])
        }
        reader.readAsDataURL(baseImageBlob)
      })

      const referenceBase64 = selectedImage.split(',')[1]
      
      const result = await generateImage(baseImageBase64, referenceBase64)

      if (result.success && result.imageData) {
        setGeneratedImage(`data:${result.mimeType};base64,${result.imageData}`)
      } else {
        setError(result.error || 'Failed to generate image')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsGenerating(false)
    }
  }


  return (
    <main className="relative min-h-screen">
<div className="w-full py-12 md:py-20">
  <div className="w-full px-0">

          <div id="pfp" className="scroll-mt-28 mb-16">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black hover:scale-105 transition-transform duration-300 cursor-default font-pp-grotesk">
                Derp Face PFP Generator
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto hover:text-black transition-colors duration-300 ">
                Transform any character into DERP style while keeping the iconic face intact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <Card className="relative p-8 lg:p-10 bg-white backdrop-blur-xl border-4 border-black shadow-[6px_6px_0_0_#000] overflow-hidden group hover:shadow-[10px_10px_0_0_#000] transition-all duration-300 hover:-translate-y-1">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center border-2 border-black">
                      <Upload className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-black font-pp-grotesk">Upload Your Image  </h2>
                  </div>
                
                  <div className="space-y-6">
                    <label 
                      className={`relative flex flex-col items-center justify-center w-full min-h-[400px] border-2 border-dashed rounded-xl cursor-pointer transition-all overflow-hidden ${
                        isDragging 
                          ? 'border-orange-500 bg-orange-50 scale-[1.02] shadow-lg' 
                          : selectedImage 
                          ? 'border-black bg-gray-50' 
                          : 'border-black bg-gray-50 hover:border-orange-500 hover:bg-orange-50 hover:shadow-lg'
                      } group/upload`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      {selectedImage ? (
                        <>
                          <img
                            src={selectedImage || "/placeholder.svg"}
                            alt="Selected reference"
                            className="w-full h-full object-contain p-4"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover/upload:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover/upload:opacity-100 transition-opacity flex flex-col items-center gap-3">
                              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center border-2 border-black">
                                <Upload className="w-8 h-8 text-white" />
                              </div>
                              <p className="text-white font-semibold text-base drop-shadow-lg">Click or drag to change</p>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              setSelectedImage(null)
                              setError(null)
                            }}
                            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 hover:scale-110 flex items-center justify-center transition-all shadow-lg z-10 border-2 border-black"
                            type="button"
                          >
                            <X className="w-5 h-5 text-white" />
                          </button>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-5 p-10">
                          <div className={`w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 border-black ${
                            isDragging 
                              ? 'bg-orange-500 scale-110 shadow-xl' 
                              : 'bg-gray-200 group-hover/upload:bg-orange-100 group-hover/upload:scale-105'
                          }`}>
                            <Upload className={`w-12 h-12 transition-colors ${
                              isDragging 
                                ? 'text-white' 
                                : 'text-gray-600 group-hover/upload:text-orange-500'
                            }`} />
                          </div>
                          <div className="text-center space-y-2">
                            <p className="text-lg font-bold text-black">
                              {isDragging ? 'Drop your image here!' : 'Upload Reference Image'}
                            </p>
                            <p className="text-sm text-gray-600">
                              Click to browse or drag and drop your image
                            </p>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>

                    <Button
                      onClick={handleGenerate}
                      disabled={!selectedImage || isGenerating}
                      className="w-full h-16 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white border-4 border-black shadow-[0_6px_0_0_#000] hover:shadow-[0_4px_0_0_#000] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-[0_2px_0_0_#000] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      size="lg"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                          Generating Magic...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-3 h-6 w-6" />
                          Transform to DERP Style
                        </>
                      )}
                    </Button>

                    {error && (
                      <div className="p-4 bg-red-100 border-2 border-red-500 rounded-xl">
                        <p className="text-sm text-red-600 font-semibold">{error}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              <Card className="relative p-8 lg:p-10 bg-white backdrop-blur-xl border-4 border-black shadow-[6px_6px_0_0_#000] overflow-hidden group hover:shadow-[10px_10px_0_0_#000] transition-all duration-300 hover:-translate-y-1">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-black">
                      <Sparkles className="w-5 h-5 text-black" />
                    </div>
                    <h2 className="text-2xl font-bold text-black font-pp-grotesk">Generated PFP</h2>
                  </div>
                
                  <div className={`flex items-center justify-center min-h-[400px] rounded-xl border-2 overflow-hidden transition-all ${
                    generatedImage 
                      ? 'border-black bg-gray-50 shadow-inner' 
                      : 'border-dashed border-black bg-gray-50'
                  }`}>
                    {generatedImage ? (
                      <div className="relative w-full rounded-lg overflow-hidden">
                        <img
                          src={generatedImage || "/placeholder.svg"}
                          alt="Generated character"
                          className="w-full h-auto object-contain animate-in fade-in duration-500"
                        />
                      </div>
                    ) : (
                      <div className="text-center p-10 space-y-6">
                        <div className="mb-8 relative">
                          <img
                            src="/base-character.png"
                            alt="Base character"
                            className="relative max-w-md w-full h-auto mx-auto drop-shadow-2xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <p className="text-base font-semibold text-black">
                            {isGenerating
                              ? 'Creating your DERP character...'
                              : 'Your transformed character will appear here'}
                          </p>
                          <p className="text-sm text-gray-600">
                            Upload a reference image to get started
                          </p>
                        </div>
                        {isGenerating && (
                          <div className="flex justify-center">
                            <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {generatedImage && (
                    <Button
                      variant="outline"
                      className="w-full mt-6 h-14 text-base font-semibold border-4 border-black hover:bg-gray-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                      onClick={() => {
                        const link = document.createElement('a')
                        link.href = generatedImage
                        link.download = 'derp-character.png'
                        link.click()
                      }}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Your DERP Character
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
