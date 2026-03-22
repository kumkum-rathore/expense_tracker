# 🚀 Quick Start Guide - Windows

## Prerequisites
- Download and install [Node.js](https://nodejs.org/) (LTS version recommended)
- Download and install [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
- Or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free cloud database)

## Step 1: Start MongoDB
Open Command Prompt and run:
```bash
mongod
```
Or if using MongoDB Atlas, note your connection string from the dashboard.

## Step 2: Setup Backend

Open a new Command Prompt window:
```bash
cd backend
npm install
npm run dev
```

You should see: `Server running on port 5000`

## Step 3: Setup Frontend

Open another Command Prompt window:
```bash
cd frontend/"expense tracker"
npm install
npm run dev
```

You should see something like: `➜  Local:   http://localhost:5173/`

## Step 4: Open in Browser
Click the link from frontend or go to: `http://localhost:5173`

## ✅ You're Done!
Start adding transactions and managing your expenses! 💰

---

## Troubleshooting

### "MongoDB Connection Error"
- Make sure `mongod` is running
- Or update MONGO_URI in backend/.env with your MongoDB Atlas connection string

### "Port 5000 already in use"
- Change PORT in backend/.env to a different port (like 5001)
- Update frontend API calls from 5000 to 5001

### "npm: command not found"
- Install Node.js properly
- Restart Command Prompt after installation

### "Cannot find modules"
- Delete node_modules folder and package-lock.json
- Run `npm install` again

---

For more details, check README.md
