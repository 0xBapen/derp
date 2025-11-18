# Git Setup Guide for DERP Project

## If you're seeing "Too many files" error:

This usually means `node_modules` was accidentally committed. Here's how to fix it:

### Step 1: Remove node_modules from Git (if already committed)

```bash
# Remove node_modules from git tracking (but keep the files locally)
git rm -r --cached node_modules/
git rm -r --cached client/node_modules/
git rm -r --cached server/node_modules/

# Remove dist folder if committed
git rm -r --cached dist/
git rm -r --cached client/dist/

# Remove lock files if you want
git rm --cached package-lock.json
git rm --cached pnpm-lock.yaml

# Commit the removal
git add .gitignore
git commit -m "Remove node_modules and build files from git"
```

### Step 2: First Time Git Setup

```bash
# Initialize git (if not already done)
git init

# Add all files (respecting .gitignore)
git add .

# Make your first commit
git commit -m "Initial commit: DERP Next.js project"

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify What's Being Tracked

Before pushing, check what files git is tracking:

```bash
# See all tracked files
git ls-files

# Should NOT see:
# - node_modules/
# - dist/
# - .env files
# - package-lock.json or pnpm-lock.yaml
```

## Essential Files for GitHub

These SHOULD be in your repo:
- ✅ `package.json`
- ✅ `render.yaml`
- ✅ `.gitignore`
- ✅ `DEPLOYMENT.md`
- ✅ Source code (`client/`, `server/`, etc.)
- ✅ Configuration files (`tsconfig.json`, `vite.config.ts`, etc.)
- ✅ `.env.example` (template, NOT the actual .env)

These should NOT be in your repo:
- ❌ `node_modules/`
- ❌ `dist/`
- ❌ `.env` (actual env file with secrets)
- ❌ `pnpm-lock.yaml` or `package-lock.json` (optional)

## Quick Commands

```bash
# Check git status
git status

# See what's ignored
git status --ignored

# Check repository size
du -sh .git

# Force push (use carefully!)
git push --force origin main
```

## Troubleshooting

### Still seeing too many files?
```bash
# Clean everything and start fresh
git rm -r --cached .
git add .
git commit -m "Clean up repository"
git push --force origin main
```

### Need to reduce repo size?
```bash
# If you already pushed node_modules, you may need to clean history
git filter-branch --tree-filter 'rm -rf node_modules' --prune-empty HEAD
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

## After Successful Push

1. Go to your GitHub repository
2. Go to Settings → Secrets and variables → Actions
3. Add `GEMINI_API_KEY` as a secret if using GitHub Actions
4. Or connect to Render and add environment variables there

## Tips

- Always run `git status` before committing
- Review files with `git diff` before committing
- Use `git add -p` for selective staging
- Never commit `.env` files with actual API keys!

