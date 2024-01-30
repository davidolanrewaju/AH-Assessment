import { useState } from "react";
import "./Login.css";

const Login = () => {
  // State for form input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for form validation status
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear validation error when the input changes
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is provided and has a valid format
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setFormErrors({ ...formErrors, email: "Enter a valid email address" });
      return;
    }

    // Check if password is provided and meets criteria
    if (!formData.password.trim() || formData.password.length < 6) {
      setFormErrors({
        ...formErrors,
        password: "Password must be at least 6 characters long",
      });
      return;
    }

    // If all validations pass, you can submit the form or perform additional actions
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="login-container">
        <p className="login-header">LOGIN</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.email}</span>
          </div>

          <div className="password-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.password}</span>
          </div>

          <button className="login-btn" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
