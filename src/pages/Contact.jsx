import { useState } from "react";
import Info from "../components/sections/contact-info/Info"
import "./Contact.css";
import royal3 from "/src/assets/royal3.jpg";

export default function Contact() {
  const [copied, setCopied] = useState("");

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(""), 1500);
    } catch (e) {
      console.error("Copy failed");
    }
  };

  return (
    <main className="contacts">

      <section className="contact-hero">
        <img src={royal3} className="hero__img" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="title">Contact Me</h1>
        </div>
      </section>

    <Info copyToClipboard={copyText} currentlyCopied={copied} />

    </main>

  );
}