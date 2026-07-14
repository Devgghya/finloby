import os
import sys
from pypdf import PdfReader

def extract_pdf_text(filepath):
    try:
        reader = PdfReader(filepath)
        text = ""
        for i, page in enumerate(reader.pages):
            page_text = page.extract_text()
            if page_text:
                text += f"\n--- PAGE {i+1} ---\n" + page_text
        return text
    except Exception as e:
        return f"Error reading {filepath}: {str(e)}"

if __name__ == "__main__":
    content_dir = "content files"
    output_dir = "extracted_content"
    os.makedirs(output_dir, exist_ok=True)
    
    if not os.path.exists(content_dir):
        print(f"Directory {content_dir} not found.")
        sys.exit(1)
        
    for filename in os.listdir(content_dir):
        if filename.endswith(".pdf"):
            filepath = os.path.join(content_dir, filename)
            print(f"Extracting: {filename}")
            text = extract_pdf_text(filepath)
            
            txt_filename = filename.replace(".pdf", ".txt")
            out_path = os.path.join(output_dir, txt_filename)
            with open(out_path, "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Saved: {txt_filename}")
