# Cloudinary Usage Examples

After your assets are uploaded to Cloudinary, here's how to use them in your components:

## Import the Helper

```tsx
import { CloudinaryImage, CloudinaryVideo, getImageUrl } from '@/lib/cloudinary';
```

## Example 1: Hero Video

```tsx
<CloudinaryVideo
  publicId="resonance-digital/videos/hero-main"
  poster="resonance-digital/posters/hero-main"
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
/>
```

## Example 2: Logo

```tsx
<CloudinaryImage
  publicId="resonance-digital/logos/rdl-logo"
  alt="Resonance Digital Logo"
  width={200}
  height={80}
  className="h-12 w-auto"
/>
```

## Example 3: Project Thumbnails

```tsx
<CloudinaryImage
  publicId="resonance-digital/work/vfx/project-1"
  alt="VFX Project"
  width={600}
  height={400}
  responsive
  className="w-full h-auto"
/>
```

## Example 4: Background Image

```tsx
const bgUrl = getImageUrl('resonance-digital/backgrounds/section-bg', {
  width: 1920,
  quality: 80,
  format: 'webp'
});

<section style={{ backgroundImage: `url(${bgUrl})` }}>
  ...
</section>
```

## Recommended Folder Structure in Cloudinary

```
resonance-digital/
├── logos/
│   ├── rdl-logo
│   └── rdl-logo-white
├── videos/
│   ├── hero-main
│   └── showreels/
│       ├── vfx-2024
│       ├── brands-2024
│       └── ...
├── posters/ (video thumbnails)
├── work/
│   ├── vfx/
│   ├── brands/
│   ├── real-estate/
│   └── content/
├── brands/ (client logos)
├── team/
└── backgrounds/
```

## Key Benefits

- **Automatic optimization**: WebP format, responsive sizes
- **Lazy loading**: Built-in performance
- **CDN delivery**: Fast worldwide
- **Video streaming**: No large downloads
