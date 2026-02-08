import { useState } from "react";
import "./Index.css";

export default function Contact({ copyToClipboard, currentlyCopied }) {

  const email = "hello@eirs.com";

  return (

    <section className="contact-info">
      <p className="search-topics">
        If you're not yet certain of your direction, you're welcome to book a free consultation — together we'll explore your goals and find the learning format that suits you best.
      </p>

      <h2 className="contact-title">Ready to get started?</h2>

      <div className="hours-block">
        <p>Monday - Friday: 10:00 am - 7:00 pm</p>
        <p>Saturday: 10:00 am - 1:00 pm</p>
      </div>

      <div className="contact-links">

        <button
          className="contact-link"
          onClick={() => copyToClipboard("hello@eirs.com")}
        >
          {currentlyCopied === "hello@eirs.com" ? "Email Copied!" : "Email"}
        </button>

        <button
          className="contact-link"
          onClick={() => copyToClipboard("1-855-777-8234")}
        >
          {currentlyCopied === "1-855-777-8234" ? "Number Copied!" : "Call/Text: 1-855-777-8234"}
        </button>

      </div>

      <div className="bottom-section">
        <p>Thank You For Visiting!</p>
      </div>
    </section>
  );
}