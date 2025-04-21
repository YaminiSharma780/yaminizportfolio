import { useState, useRef } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const handleLoad = () => {
    setSuccess(true);
    formRef.current.reset();
  };

  return (
    <div className="contact-container">
      <h1>Want to hire me?</h1>
      <iframe
        name="hiddenFrame"
        style={{ display: "none" }}
        onLoad={handleLoad}
      ></iframe>

      <form
        className="contact-form"
        action="https://formsubmit.co/reachmeout005@gmail.com"
        method="POST"
        target="hiddenFrame"
        ref={formRef}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />

        <div className="contact-form-field">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" name="fullname" placeholder="John Doe" required />
        </div>

        <div className="contact-form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" placeholder="123-456-7890" required />
        </div>

        <div className="contact-form-field">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message here..."
            required
          />
        </div>

        <button type="submit" className="contact-submit">
          Send
        </button>
      </form>

      {success && (
        <p style={{ color: "lime", marginTop: "20px" }}>
          ✅ Message sent successfully!
        </p>
      )}
    </div>
  );
}
