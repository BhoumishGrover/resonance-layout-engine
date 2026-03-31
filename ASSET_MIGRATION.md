# Asset Migration Guide

## Overview
This guide will help you migrate your 3-5GB of assets from Google Drive to Cloudinary for optimal performance.

## Step 1: Set Up Cloudinary

1. **Create Account**: https://cloudinary.com/users/register_free
   - Free tier: 25GB storage + 25GB bandwidth/month
   - Perfect for your needs!

2. **Get Credentials**:
   - Go to Dashboard
   - Copy: `Cloud Name`, `API Key`, `API Secret`

3. **Configure Environment**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Cloudinary credentials:
   ```
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
   VITE_CLOUDINARY_API_KEY=your_api_key_here
   VITE_CLOUDINARY_API_SECRET=your_api_secret_here
   ```

## Step 2: Migrate Assets

### Option A: Manual Upload via Cloudinary Dashboard (Easiest!)
1. Go to Cloudinary Dashboard → Media Library
2. Click "Upload"
3. Select "Import from URL" or drag & drop from Google Drive
4. Create folder: `resonance-digital`
5. Bulk upload all assets
6. Done! Skip to Step 3.

### Option B: Command Line Migration

1. **Download from Google Drive**:
   - Download the shared folder to a local directory (e.g., `~/Downloads/resonance-assets`)
   - Or use Google Drive Desktop app to sync

2. **Run Migration Script**:
   ```bash
   node scripts/migrate-assets.js --local=/path/to/downloaded/assets
   ```

   Example:
   ```bash
   node scripts/migrate-assets.js --local=~/Downloads/resonance-assets
   ```

3. **Wait for Upload**:
   - Script will upload all images and videos
   - Shows progress for each file
   - Generates `asset-manifest.json` with all URLs

## Step 3: Update Code References

After assets are uploaded, you'll have two options:

### Option 1: Use Asset Manifest (Recommended)
The migration script creates `asset-manifest.json` with all URLs:

```json
{
  "images": [
    {
      "originalName": "logo.png",
      "cloudinaryId": "resonance-digital/logo",
      "url": "https://res.cloudinary.com/xxx/image/upload/v123/resonance-digital/logo.png"
    }
  ],
  "videos": [...]
}
```

### Option 2: Use Cloudinary Helper (Best Performance)
Use the helper functions in `src/lib/cloudinary.tsx`:

```tsx
import { CloudinaryImage, CloudinaryVideo, getImageUrl } from '@/lib/cloudinary';

// For images
<CloudinaryImage 
  publicId="resonance-digital/logo" 
  alt="Logo"
  width={200}
  responsive
/>

// For videos
<CloudinaryVideo 
  publicId="resonance-digital/hero-video"
  poster="resonance-digital/hero-poster"
  autoPlay
  muted
  loop
/>

// For background images
<div style={{ backgroundImage: `url(${getImageUrl('resonance-digital/bg', { width: 1920 })})` }} />
```

## Step 4: Replace Placeholder Assets

Search your codebase for placeholder references:

```bash
# Find all asset references
grep -r "public/assets" src/

# Common patterns to replace:
# /assets/images/   → CloudinaryImage publicId
# /assets/videos/   → CloudinaryVideo publicId
```

## Step 5: Test Performance

1. Run dev server:
   ```bash
   npm run dev
   ```

2. Check that images/videos load correctly

3. Verify optimization:
   - Images should be WebP format
   - Videos should stream smoothly
   - Check Network tab for file sizes

## Benefits You'll Get

✅ **Automatic Optimization**: Images/videos served in optimal formats
✅ **CDN Delivery**: Fast loading worldwide
✅ **Responsive Images**: Right size for each device
✅ **Lazy Loading**: Built-in performance boost
✅ **Video Streaming**: No large file downloads
✅ **No Repo Bloat**: Keep your git repo lightweight

## Asset Organization in Cloudinary

Recommended folder structure:
```
resonance-digital/
├── logos/
├── hero/
├── brand-statements/
├── work/
│   ├── vfx/
│   ├── brands/
│   ├── real-estate/
│   └── content/
└── videos/
    ├── hero/
    ├── showreels/
    └── projects/
```

## Troubleshooting

**"Missing credentials" error**:
- Make sure `.env` file exists and has correct values
- Restart dev server after adding credentials

**Upload fails**:
- Check file size limits (free tier: 100MB per file)
- For large videos, use Cloudinary dashboard upload
- Verify internet connection

**Images not loading**:
- Check `publicId` matches uploaded path
- Verify VITE_CLOUDINARY_CLOUD_NAME is correct
- Check browser console for errors

## Next Steps

After assets are migrated:
1. ✅ Update all component asset references
2. ✅ Test all pages
3. ✅ Remove old `public/assets` folder
4. ✅ Move to performance optimization phase
