import React, { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isValidEmail = (text) => {
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return emailRegex.test(text);
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (value.trim() === "") {
      setErrorMessage(`Please enter your ${name}!`);

      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 7500);
    } else if (name == "email" && !isValidEmail(value)) {
      setErrorMessage("Please enter a valid email!");
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 7500);
    }
  };

  return (
    <div className="container mt-5">
      <form className="d-flex flex-column">
        <div className="form-group mb-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            required
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
        </div>
        <button
          type="submit"
          className="submit-button btn btn-primary align-self-center mt-3"
        >
          Submit
        </button>

        {showNotification && (
          <div className="alert alert-danger mt-3">{errorMessage}</div>
        )}
      </form>
    </div>
  );
}

export default Form;
