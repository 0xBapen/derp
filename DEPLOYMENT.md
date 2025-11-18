# Deployment Guide for DERP Nextjs

## Environment Variables

Create a `.env` file in the root directory with the following:

```env
# Required: Google Gemini API Key for AI image generation
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Server port (defaults to 3000)
PORT=3000

# Optional: Node environment
NODE_ENV=production
```

## Local Development

1. Install dependencies:
```bash
pnpm install
```

2. Run development server:
```bash
pnpm dev
```

3. Build for production:
```bash
pnpm build
```

4. Start production server:
```bash
pnpm start
```

## Deploy to Render

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Connect your repository to Render
3. Render will automatically detect the `render.yaml` file
4. Add your `GEMINI_API_KEY` in Render dashboard under Environment Variables
5. Deploy!

### Option 2: Manual Setup

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Name**: derp-nextjs
   - **Environment**: Node
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Plan**: Free
4. Add Environment Variables:
   - `NODE_ENV=production`
   - `GEMINI_API_KEY=your_actual_api_key`
5. Deploy!

## Features

✅ Single unified server serving both frontend and API
✅ Google Gemini AI image generation
✅ Automatic static file serving
✅ Health check endpoint at `/api/health`
✅ Vite-optimized frontend build
✅ Ready for production deployment

## Endpoints

- **Frontend**: `http://your-app.onrender.com/`
- **API**: `http://your-app.onrender.com/generate-image` (POST)
- **Health Check**: `http://your-app.onrender.com/api/health` (GET)

## Troubleshooting

### Image generation fails
- Make sure `GEMINI_API_KEY` is set in environment variables
- Check Render logs for API errors

### Static files not loading
- Verify build completed successfully
- Check that `dist/public` directory exists after build

### Port conflicts locally
- Change the `PORT` environment variable
- Default is 3000

