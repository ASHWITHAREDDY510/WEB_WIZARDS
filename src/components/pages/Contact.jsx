import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

const API_URL = import.meta.env.VITE_API_URL;

const response = await fetch(
  `${API_URL}/contact`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  }
);
```

    const data = await response.json();
    alert(data.message);
  };

  return (
    <section className="page-container">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name"
          value={form.name} onChange={handleChange} />

        <input type="email" name="email" placeholder="Your Email"
          value={form.email} onChange={handleChange} />

        <input type="text" name="subject" placeholder="Subject"
          value={form.subject} onChange={handleChange} />

        <textarea rows="6" name="message" placeholder="Your Message"
          value={form.message} onChange={handleChange} />

        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
