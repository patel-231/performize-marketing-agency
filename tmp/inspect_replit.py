import urllib.request
import re
import json

url = "https://ad-ai-suite--mirzafaiz.replit.app/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req).read().decode("utf-8")

scripts = re.findall(r'src=["\']([^"\']+\.js)["\']', html)
print("Scripts found:", scripts)

for s in scripts:
    s_url = s if s.startswith("http") else url.rstrip("/") + "/" + s.lstrip("/")
    try:
        s_req = urllib.request.Request(s_url, headers={"User-Agent": "Mozilla/5.0"})
        code = urllib.request.urlopen(s_req).read().decode("utf-8")
        all_matches = set(re.findall(r'[/a-zA-Z0-9_\-\.]+\.(?:png|jpg|jpeg|webp|svg)', code))
        non_svg = [m for m in all_matches if not m.endswith(".svg")]
        print("Non-svg image assets in bundle:", non_svg)
        
        http_matches = set(re.findall(r'https?://[^\s"\'<>)]+', code))
        media_urls = [h for h in http_matches if any(k in h.lower() for k in [".jpg", ".png", ".webp", "unsplash", "cloudinary", "images", "avatar", "profile"])]
        print("External media URLs:", media_urls)
    except Exception as e:
        print("Error reading bundle:", e)
