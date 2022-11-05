import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "../../Footer";
import "./contact.css";

const Contact = () => {
  const name = "Jonathan Akhagbosu";

  const [messageForm, setMessageForm] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setMessageForm((prevItems) => {
      return { ...prevItems, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(messageForm));
    setIsSubmit(true);
  }

  function validate(values) {
    const errors = {};
    if (!values.fName) {
      errors.fName = "Please enter your first name";
    }
    if (!values.lName) {
      errors.lName = "Please enter your last name";
    }
    if (!values.email) {
      errors.email = "Please enter your email address";
    }
    if (!values.message) {
      errors.message = "Please enter a message";
    }
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Message Sent!");
      setMessageForm({ fName: "", lName: "", email: "", message: "" });
    }
  }, [formErrors]);

  return (
    <div className="container">
      <div className="contact__container">
        <div className="contact__header">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="name__container">
            <div className="detail__container">
              <label className="label" htmlFor="first_name">
                First name
              </label>
              <input
                type="text"
                name="fName"
                value={messageForm.fName}
                onChange={handleChange}
                id="first_name"
                placeholder="Enter your first name"
                className={formErrors.fName ? "error_box" : ""}
              />
              <p className="label error">{formErrors.fName}</p>
            </div>
            <div className="detail__container">
              <label className="label" htmlFor="last_name">
                Last name
              </label>
              <input
                type="text"
                name="lName"
                value={messageForm.lName}
                onChange={handleChange}
                id="last_name"
                placeholder="Enter your last name"
                className={formErrors.lName ? "error_box" : ""}
              />
              <p className="label error">{formErrors.lName}</p>
            </div>
          </div>
          <div className="detail__container">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={messageForm.email}
              onChange={handleChange}
              id="email"
              placeholder="yourname@email.com"
              className={formErrors.email ? "error_box" : ""}
            />
            <p className="label error">{formErrors.email}</p>
          </div>
          <div className="detail__container">
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={messageForm.message}
              onChange={handleChange}
              cols="30"
              rows="10"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className={formErrors.message ? "error_box" : ""}
            />
            <p className="label error">{formErrors.message}</p>
          </div>
          <div className="checkbox__container">
            <input type="checkbox" name="agree" /> You agree to providing your
            data to {name} who may contact you
          </div>
          <button type="submit" id="btn__submit">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
