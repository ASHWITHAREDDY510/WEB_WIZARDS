import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
      alert(data.message || "Account Created");
    } catch (err) {
      alert("Backend is not running.");
    }
  };

  return <div className="auth-page">
    <div className="auth-container">
      <div className="auth-left">
        <span className="auth-tag">🚀 Welcome to Web Wizards</span>
        <h1>Start Your<br />Developer Journey</h1>
      </div>

      <div className="auth-card">
        <h2>Join Web Wizards</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name"
            value={form.name} onChange={handleChange} />

          <input type="email" name="email" placeholder="Email Address"
            value={form.email} onChange={handleChange} />

          <input type="password" name="password" placeholder="Password"
            value={form.password} onChange={handleChange} />

          <button type="submit" className="btn-primary auth-btn">
            Create Account
          </button>
        </form>

        <button className="social-btn"><FaGoogle /> Continue with Google</button>
        <button className="social-btn"><FaGithub /> Continue with GitHub</button>
      </div>
    </div>
  </div>;
}

export default Login;
