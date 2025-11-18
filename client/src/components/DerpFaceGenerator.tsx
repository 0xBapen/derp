import { useState } from 'react'
import { Upload, Sparkles, Loader2, X, Download } from 'lucide-react'
import { generateImage } from '@/actions/generateImage'
import '@/styles/derp-generator.css'

export default function DerpFaceGenerator() {
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
    <section 
      id="pfp-generator" 
      className="relative bg-[#f9e174] py-[120px]"
      style={{
        backgroundImage: 'url(/images/diagrams.png)',
        backgroundPosition: '50%',
        backgroundSize: 'auto',
      }}
    >
      <div className="container max-w-[1100px] mx-auto px-4">
        <div 
          className="bg-white border-8 border-[var(--black)] rounded-3xl flex flex-col items-center text-center p-8 md:p-14"
          style={{ boxShadow: '-3px 3px 0 0 var(--black)' }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-pp-grotesk">
            Derp Face PFP Generator
          </h2>
          <p className="text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
            <strong>Transform any character into DERP style while keeping the iconic face intact</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 w-full">
              {/* Upload Card */}
              <div className="derp-card">
                <div className="derp-card-content">
                  <div className="derp-card-header">
                    <div className="derp-icon-circle orange">
                      <Upload size={16} color="white" />
                    </div>
                    <h2 className="derp-card-title">Upload Your Image</h2>
                  </div>
                
                  <div className="derp-card-body">
                    <label 
                      className={`derp-upload-area ${
                        isDragging ? 'dragging' : selectedImage ? 'has-image' : ''
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      {selectedImage ? (
                        <>
                          <img
                            src={selectedImage}
                            alt="Selected reference"
                            className="derp-upload-preview"
                          />
                          <div className="derp-upload-overlay">
                            <div className="derp-overlay-content">
                              <div className="derp-icon-circle orange">
                                <Upload size={24} color="white" />
                              </div>
                              <p className="derp-overlay-text">Click or drag to change</p>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              setSelectedImage(null)
                              setError(null)
                            }}
                            className="derp-close-button"
                            type="button"
                          >
                            <X size={20} color="white" />
                          </button>
                        </>
                      ) : (
                        <div className="derp-upload-placeholder">
                          <div className={`derp-upload-icon ${isDragging ? 'dragging' : ''}`}>
                            <Upload size={40} />
                          </div>
                          <div className="derp-upload-text">
                            <p className="derp-upload-title">
                              {isDragging ? 'Drop your image here!' : 'Upload Reference Image'}
                            </p>
                            <p className="derp-upload-subtitle">
                              Click to browse or drag and drop your image
                            </p>
                            <p className="derp-upload-hint">
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

                    <button
                      onClick={handleGenerate}
                      disabled={!selectedImage || isGenerating}
                      className="derp-generate-button"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 size={24} className="derp-spin" />
                          Generating Magic...
                        </>
                      ) : (
                        <>
                          <Sparkles size={24} />
                          Transform to DERP Style
                        </>
                      )}
                    </button>

                    {error && (
                      <div className="derp-error-message">
                        <p>{error}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Generated Image Card */}
              <div className="derp-card">
                <div className="derp-card-content">
                  <div className="derp-card-header">
                    <div className="derp-icon-circle yellow">
                      <Sparkles size={16} color="black" />
                    </div>
                    <h2 className="derp-card-title">Generated PFP</h2>
                  </div>
                
                  <div className={`derp-generated-area ${generatedImage ? 'has-image' : ''}`}>
                    {generatedImage ? (
                      <div className="derp-generated-image">
                        <img
                          src={generatedImage}
                          alt="Generated character"
                          className="derp-fade-in"
                        />
                      </div>
                    ) : (
                      <div className="derp-generated-placeholder">
                        <div className="derp-placeholder-icon">
                          <img
                            src="/base-character.png"
                            alt="Base character"
                            className="derp-base-character"
                          />
                        </div>
                        <div className="derp-placeholder-text">
                          <p className="derp-placeholder-title">
                            {isGenerating
                              ? 'Creating your DERP character...'
                              : 'Your transformed character will appear here'}
                          </p>
                          <p className="derp-placeholder-subtitle">
                            Upload a reference image to get started
                          </p>
                        </div>
                        {isGenerating && (
                          <div className="derp-loading-spinner">
                            <Loader2 size={32} className="derp-spin" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {generatedImage && (
                    <button
                      className="derp-download-button"
                      onClick={() => {
                        const link = document.createElement('a')
                        link.href = generatedImage
                        link.download = 'derp-character.png'
                        link.click()
                      }}
                    >
                      <Download size={20} />
                      Download Your DERP Character
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

