import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(cors());
  app.use(express.json({ limit: "25mb" }));

  // Initialize Google AI
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

  // API Routes
  app.post("/generate-image", async (req, res) => {
    try {
      const { baseImage, referenceImage } = req.body;

      if (!process.env.GEMINI_API_KEY) {
        return res.json({ 
          success: false, 
          error: "GEMINI_API_KEY not configured" 
        });
      }

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

      const candidates = result.response.candidates;
      if (!candidates || candidates.length === 0) {
        throw new Error("No image generated from AI model");
      }

      const img = candidates[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!img) {
        throw new Error("Invalid response format from AI model");
      }

      res.json({
        success: true,
        imageData: img,
        mimeType: "image/png"
      });

    } catch (error: any) {
      console.error("Image generation error:", error);
      res.json({ 
        success: false, 
        error: error.message || "Failed to generate image" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}/`);
    console.log(`📡 API endpoints available at http://localhost:${port}/generate-image`);
    console.log(`🎨 Frontend served from: ${staticPath}`);
  });
}

startServer().catch(console.error);
