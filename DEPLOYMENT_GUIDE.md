# Deployment Guide

This guide will help you deploy your User Registration System to the internet using **Vercel** (Frontend) and **Render** (Backend).

## Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Render account (sign up at https://render.com)
- MongoDB Atlas account (you already have this)

---

## Part 1: Deploy Backend to Render

### Step 1: Prepare Your Code

1. Make sure your `.env` file in `backend/` folder has your MongoDB Atlas connection string
2. Push your code to GitHub if you haven't already:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```

### Step 2: Deploy on Render

1. Go to https://render.com and sign in
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `registerapi-backend` (or any name you want)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
   - **Instance Type**: `Free`

5. Add Environment Variables (click "Advanced" → "Add Environment Variable"):
   - `MONGODB_URI`: Your MongoDB Atlas connection string
     - Example: `mongodb+srv://username:password@cluster0.oepvzpa.mongodb.net/test`
   - `PORT`: `3000`
   - `FRONTEND_URL`: Leave empty for now (we'll add it after deploying frontend)

6. Click **"Create Web Service"**
7. Wait 5-10 minutes for deployment to complete
8. **Copy your backend URL** (e.g., `https://registerapi-backend.onrender.com`)

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Configure Environment Variable

1. In your `frontend/` folder, create a `.env` file:
   ```bash
   VITE_API_URL=https://your-backend-url.onrender.com
   ```
   Replace with your actual backend URL from Render

### Step 2: Deploy on Vercel

1. Go to https://vercel.com and sign in
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Add Environment Variable:
   - Click **"Environment Variables"**
   - Name: `VITE_API_URL`
   - Value: Your backend URL (e.g., `https://registerapi-backend.onrender.com`)
   - Click **"Add"**

6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment
8. **Copy your frontend URL** (e.g., `https://yourapp.vercel.app`)

---

## Part 3: Update Backend CORS

1. Go back to Render dashboard
2. Open your backend service
3. Go to **"Environment"** tab
4. Add/Update environment variable:
   - `FRONTEND_URL`: Your Vercel frontend URL (e.g., `https://yourapp.vercel.app`)
5. Click **"Save Changes"**
6. Wait for automatic redeploy (~2 minutes)

---

## Part 4: Test Your Deployment

1. Visit your frontend URL (Vercel)
2. Try to sign up with a new account
3. Try to log in
4. Check MongoDB Atlas to see if data is saved

---

## Troubleshooting

### Backend Issues

**Problem**: Backend won't start
- Check Render logs for errors
- Verify `MONGODB_URI` is correct
- Make sure MongoDB Atlas allows connections from anywhere (IP: `0.0.0.0/0`)

**Problem**: CORS errors
- Make sure `FRONTEND_URL` in Render matches your Vercel URL exactly
- Include `https://` in the URL

### Frontend Issues

**Problem**: Can't connect to backend
- Check `VITE_API_URL` environment variable in Vercel
- Make sure backend URL is correct and includes `https://`
- Redeploy frontend after changing environment variables

**Problem**: 404 errors on refresh
- The `vercel.json` file should handle this (already created)

---

## Important Notes

### Free Tier Limitations

**Render Free Tier**:
- Backend may sleep after 15 minutes of inactivity
- Takes 30-50 seconds to wake up on first request
- 750 hours per month (enough for testing/assignments)

**Vercel Free Tier**:
- No sleep time
- Fast and always available
- Perfect for frontend

### MongoDB Atlas

- Already cloud-hosted ✅
- Make sure to whitelist all IPs: `0.0.0.0/0` in Network Access
- Or add Render's IP addresses

---

## Your Deployment URLs

After deployment, you'll have:

- **Frontend**: `https://yourapp.vercel.app`
- **Backend**: `https://registerapi-backend.onrender.com`
- **Database**: `cluster0.oepvzpa.mongodb.net` (already set up)

---

## Quick Commands Reference

### Push code updates:
```bash
git add .
git commit -m "Your message"
git push
```

Both Vercel and Render will automatically redeploy when you push to GitHub!

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **MongoDB Atlas**: https://www.mongodb.com/docs/atlas/

Your project is now live on the internet! 🎉
