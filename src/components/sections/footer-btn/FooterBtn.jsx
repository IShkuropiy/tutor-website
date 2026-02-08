import { useState } from "react";
import "./Index.css";

export default function FooterBtn({ pdfUrl, shareUrl }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e) => {
    e.preventDefault();
    
    // Use the prop shareUrl if provided, otherwise fallback to current page URL
    const linkToCopy = shareUrl || window.location.href;

    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <footer className="post__footer">
      <a 
        href={pdfUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="post-btn"
        download // Optional: forces download instead of opening in browser
      >
        Download PDF
      </a>
      
      <a
        className="post-btn btn--ghost"
        href="#"
        onClick={handleShare}
      >
        {copied ? "Copied!" : "Share"}
      </a>
    </footer>
  );
}