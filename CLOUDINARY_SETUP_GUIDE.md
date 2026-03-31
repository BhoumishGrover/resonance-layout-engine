# 🎓 Complete Cloudinary Setup - Step by Step Guide

## What is Cloudinary?

Think of Cloudinary as a "smart Google Drive for images and videos". Instead of storing assets in your code, you upload them to Cloudinary, and it:
- Automatically optimizes file sizes
- Delivers them via fast CDN worldwide
- Creates different sizes for mobile/desktop
- Streams videos efficiently

**Why we're using it:** Your 3-5GB of assets would make your website slow and your git repo huge. Cloudinary solves both problems.

---

## 🚀 PART 1: Create Your Cloudinary Account (5 minutes)

### Step 1: Go to Cloudinary
Open this link in your browser:
https://cloudinary.com/users/register_free

### Step 2: Sign Up
- Enter your email
- Create a password
- Click "Sign up for free"
- Verify your email (check inbox)

### Step 3: Fill Out Welcome Form
They'll ask a few questions:
- **Use case**: Select "Website/Application"
- **Role**: Select "Developer" or "Designer"
- **Company name**: "Resonance Digital" (or leave blank)
- Click "Continue"

### Step 4: You're In! 🎉
You should now see the Cloudinary Dashboard.

---

## 📋 PART 2: Get Your Credentials (2 minutes)

### Step 5: Find Your Dashboard
You should see a section called **"Account Details"** or **"Product Environment Credentials"**

You'll see three important pieces of information:
```
Cloud Name: dxxxxxx (some random letters/numbers)
API Key: 123456789012345 (a long number)
API Secret: abcDefGHijKLmnoPQRst (letters and numbers - KEEP SECRET!)
```

### Step 6: Copy These Values
**IMPORTANT:** Keep these handy - we'll need them in the next step!

- Click the "eye" icon next to API Secret to reveal it
- Copy all three values to a notepad temporarily

---

## ⚙️ PART 3: Configure Your Project (3 minutes)

### Step 7: Open Your Terminal
Navigate to your project:
```bash
cd /Users/RDL/site-2/resonance-layout-engine
```

### Step 8: Create .env File
Copy the example file:
```bash
cp .env.example .env
```

### Step 9: Edit .env File
Open the `.env` file in your code editor and replace these lines:

**BEFORE:**
```
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
VITE_CLOUDINARY_API_KEY=your_api_key_here
VITE_CLOUDINARY_API_SECRET=your_api_secret_here
```

**AFTER** (use YOUR actual values from Step 6):
```
VITE_CLOUDINARY_CLOUD_NAME=dxxxxxx
VITE_CLOUDINARY_API_KEY=123456789012345
VITE_CLOUDINARY_API_SECRET=abcDefGHijKLmnoPQRst
```

Save the file!

---

## 📤 PART 4: Upload Your Assets (30-60 minutes)

You have TWO options. I recommend **Option A** for first-timers.

---

### OPTION A: Manual Upload (EASIEST - Recommended!)

### Step 10: Go to Media Library
- In your Cloudinary Dashboard
- Click **"Media Library"** in the left sidebar
- You should see an empty library

### Step 11: Create Folder Structure
Click **"Create Folder"** and create this structure:
```
resonance-digital/
  ├── logos/
  ├── videos/
  ├── work/
  ├── brands/
  └── team/
```

**How:**
1. Click "Create Folder"
2. Name it: `resonance-digital`
3. Click inside that folder
4. Create subfolders: `logos`, `videos`, `work`, `brands`, `team`

### Step 12: Upload Assets from Google Drive

**Option 12A: Direct from Google Drive (if Drive folder is already on your Mac)**
- Open Google Drive folder in Finder
- Drag and drop files into Cloudinary folders
- Wait for uploads to complete

**Option 12B: Download First**
1. Download your Google Drive folder to Desktop
2. Drag files from Desktop to Cloudinary Media Library
3. Organize into the folders you created

### Step 13: Wait for Processing
- Cloudinary will show upload progress
- Large videos take longer
- You'll see thumbnails when done

### Step 14: Note Your Asset Names
For each uploaded file, note its location:
- Logo uploaded to `resonance-digital/logos/` → becomes `resonance-digital/logos/rdl-logo`
- Video uploaded to `resonance-digital/videos/` → becomes `resonance-digital/videos/hero`

---

### OPTION B: Automated Script Upload

If you prefer automation:

### Step 10 (Alt): Download Google Drive Assets
Download your entire Google Drive folder to:
```
~/Downloads/resonance-assets
```

### Step 11 (Alt): Run Migration Script
In terminal:
```bash
cd /Users/RDL/site-2/resonance-layout-engine

node scripts/migrate-assets.js --local=~/Downloads/resonance-assets
```

### Step 12 (Alt): Watch Progress
The script will:
- Show each file being uploaded
- Display success/error messages
- Create `asset-manifest.json` when done

---

## 🧪 PART 5: Test It Works (5 minutes)

### Step 15: Create Test Component
Let's test with one image to make sure everything works.

In terminal:
```bash
npm run dev
```

### Step 16: Quick Test
I'll help you create a test page to verify assets load correctly once you tell me:
1. Name of one image you uploaded
2. The folder you put it in

Example: "I uploaded `logo.png` to `resonance-digital/logos/`"

---

## 📊 What You Should Have Now

✅ Cloudinary account created
✅ Cloud Name, API Key, API Secret obtained
✅ `.env` file configured
✅ Assets uploaded to Cloudinary
✅ Know where each asset is located

---

## 🎯 Next: What I'll Do

Once you confirm assets are uploaded, I will:

1. **Create an asset manifest** - A file that maps original names to Cloudinary IDs
2. **Update all components** - Replace placeholder paths with Cloudinary URLs
3. **Test each page** - Verify images/videos load
4. **Optimize components** - Add lazy loading, responsive images

---

## 🆘 Troubleshooting

**"Can't find Account Details"**
- Look for "Programmable Media" → "Dashboard"
- Credentials are usually at the top of the dashboard

**"Upload failed"**
- Check file size (free tier: 100MB per file max)
- For huge videos, split or compress first
- Check internet connection

**"Can't create .env file"**
- Make sure you're in the right directory
- Try: `touch .env` then edit manually

**".env not working"**
- Make sure file is named exactly `.env` (with the dot)
- Restart your dev server after creating it
- Check no extra spaces in the values

---

## ⏭️ After Upload

Come back here and tell me:

1. ✅ "Assets uploaded!"
2. Share your asset structure (what folders/files you created)
3. I'll update all the code to use your assets

**Estimated time: 30-60 minutes total**

---

## 🎓 Understanding the Flow

**Current State:**
```
Your Google Drive → 3-5GB of files
Your website → Uses placeholder images
Problem → Can't store 5GB in git repo
```

**After Cloudinary:**
```
Your Google Drive → Uploaded to Cloudinary ☁️
Cloudinary → Optimizes & delivers via CDN 🚀
Your website → Loads from Cloudinary URLs
Result → Fast loading, small git repo ✅
```

---

Ready to start? Begin with **Part 1** above! 🚀
