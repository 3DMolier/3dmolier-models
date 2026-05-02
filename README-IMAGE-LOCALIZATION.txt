# 3D Molier Models — v6 update

This package contains the updated static website with trust blocks, stronger AI files, answer blocks and local image paths.

Important limitation: the ChatGPT execution environment could not resolve/download `p.turbosquid.com`, so the actual WebP image files are not bundled yet. The website is prepared to use local WebP paths.

To generate local WebP images on your computer:
1. Install Python 3.
2. Open this project folder in Terminal / Command Prompt.
3. Run:
   pip install pillow requests
   python download-and-convert-images.py
4. This creates:
   assets/images/previews/*.webp
   assets/images/large/*.webp
5. Commit and push the generated image files together with the site.

After images are generated, the website no longer uses TurboSquid image hotlinks in img tags, Open Graph images, image sitemap or model data.
