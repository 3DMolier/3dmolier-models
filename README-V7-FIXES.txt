# V7 fixes

Changes:
- Replaced JPGdirect preview images text with: All models are made to the same quality standard.
- Replaced the 5th collage image with a different model image on each page.
- Model detail pages now show one large preview image.
- Large preview images use local WebP paths and include a remote JPG fallback if WebP files have not been generated yet.
- Fixed Gesture Emoji Collection 4 image mapping.
- Updated data.js, image-manifest.json and image-sitemap.xml.

Recommended:
Run `python download-and-convert-images.py` locally before uploading, so all local WebP files are generated.
