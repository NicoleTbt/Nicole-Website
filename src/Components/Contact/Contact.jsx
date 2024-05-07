import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../CSS/Contact.css";
import coder from "../Icons/womanCode.gif";
import Schedule from "./Schedule";

const ContactForm = () => {
  //Email js Send Email //
  const form = useRef();

  //error and conditional rendering//
  const [error, setError] = useState("");
  const [submited, setSubmited] = useState(false);

  //checks if the number field has letters//
  function hasLetters(input) {
    const regex = /[a-zA-Z]/;
    return regex.test(input);
  }

  //Input validation and send mail//
  const sendEmail = (e) => {
    e.preventDefault();

    //check if necessary fields are empty --> yes set error then return preventing submission//
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message ||
      !formData.topic
    ) {
      setError("Please fill out all fields!");
      return;
    } else if (hasLetters(formData.number)) {
      setError("Number field cannot contain letters!!");
      return;
    } else if (hasLetters(formData.country)) {
      setError("Country code cannot contain letters!!");
      return;
    }

    emailjs
      .sendForm("service_786qg97", "template_leg1vfk", form.current, {
        publicKey: "VcVrh6VV_uDm1JlSL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          setError("FAILED...", error.text);
          return;
        }
      );

    //set the submitted value to true to let the confirmation box appear//
    setSubmited(true);
  };

  //Form data setting for message display//
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    number: "",
    topic: "",
    message: "",
  });

  //on input change remove errors and update the corresponding data//
  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //click on clear to reset the fields//
  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      number: "",
      topic: "",
      message: "",
    });
  };

  const Ok = () => {
    setSubmited(false);
  };

  return (
    <section id="CtSch">
      <h1 id="title">Contact Me:</h1>
      <section id="contact">
        <div id="contactCt">
          {!submited && (
            <form ref={form} onSubmit={sendEmail}>
              <div id="ContactName">
                <div className="ct">
                  <label className="lb">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />{" "}
                </div>

                <div className="ct">
                  {" "}
                  <label className="lb">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="ct">
                <label className="lb" id="email">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div id="ContactName">
                <div className="ct">
                  <label className="lb">Country Code:</label>
                  <input
                    type="text"
                    name="country"
                    maxLength="4"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>

                <div className="ct">
                  <label className="lb">Number:</label>
                  <input
                    type="text"
                    name="number"
                    minLength="6"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div id="msg">
                <div className="ctx">
                  <label className="lb">Topic:</label>
                  <input
                    type="text"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                  />
                </div>

                <div className="ct">
                  <label className="lb">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="bt">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClear}>
                  Clear
                </button>
              </div>

              <p id="error">{error}</p>
            </form>
          )}
          {submited && (
            <div id="ConfirmMessage">
              <h2>Thank You for Your Message!!</h2>

              <p>
                <span>Name:</span> {formData.firstName} {formData.lastName}
              </p>
              <p>
                <span>Number: </span> {formData.country} {formData.number}
              </p>
              <p>
                <span>Email: </span> {formData.email}
              </p>
              <p>
                <span>Topic: </span>
                {formData.topic} <br></br>
              </p>
              <p>
                <span>Message: </span> {formData.message}
              </p>

              <div className="bt">
                <button id="ok" onClick={Ok}>
                  OK!!
                </button>
              </div>
            </div>
          )}
        </div>

        <img src={coder} alt="coding" id="coder" />
      </section>
      <Schedule />
    </section>
  );
};

export default ContactForm;
