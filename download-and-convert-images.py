#!/usr/bin/env python3
"""
Downloads TurboSquid preview images listed in image-manifest.json and converts them to local WebP files.

Run locally from the project root:
    python download-and-convert-images.py

Requires:
    pip install pillow requests
"""
from pathlib import Path
import json, io, sys
import requests
from PIL import Image

ROOT = Path(__file__).resolve().parent
manifest = json.loads((ROOT / "image-manifest.json").read_text(encoding="utf-8"))

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; 3DMolierSiteImageFetcher/1.0)"
})

def save_webp(source_url: str, out_path: Path, max_width: int, quality: int):
    out_path.parent.mkdir(parents=True, exist_ok=True)
    r = session.get(source_url, timeout=40)
    r.raise_for_status()
    img = Image.open(io.BytesIO(r.content)).convert("RGB")
    w, h = img.size
    if w > max_width:
        nh = int(h * (max_width / w))
        img = img.resize((max_width, nh), Image.LANCZOS)
    img.save(out_path, "WEBP", quality=quality, method=6)

failed = []
for item in manifest:
    source = item["source"]
    try:
        print(f"Downloading: {item['title']}")
        save_webp(source, ROOT / item["large"], 1400, 82)
        save_webp(source, ROOT / item["preview"], 520, 76)
    except Exception as e:
        failed.append((item["title"], source, str(e)))
        print(f"FAILED: {item['title']} -> {e}")

if failed:
    print("\nSome images failed:")
    for title, source, err in failed:
        print(f"- {title}: {err}\n  {source}")
    sys.exit(1)

print("\nDone. All images downloaded and converted to WebP.")
