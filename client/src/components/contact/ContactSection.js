import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css"
import { REACT_BACKEND_API } from "../../config/config"


const ContactScreen = ({title, id}) => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    buttonText: 'Submit',
  })

  const { name, email, subject, message, buttonText} = values

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const submitContact = async event => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Submitting Contact' });
    try {
      const res = await axios.post(`${REACT_BACKEND_API}/api/contact`, {
        name,
        email,
        subject,
        message
      })
      setValues({
        ...values,
        name: '',
        email: '',
        subject: '',
        message: '',
        buttonText: 'Contact Submitted',
        res
      })
      toast.success(res.data.message);
    } catch (error) {
      setValues({ ...values, buttonText: 'Submit' });
      toast.error(error.response.data.error);
    }
  }


  return (
    <>
    <div className="contact-section-container">
      <ToastContainer />
      <div className="contact-section-content-box" id={id}>
          <h1>{title}</h1>
          <form>
            <div className="form-container">
              <input
                type="text"
                value={name}
                onChange={handleChange("name")}
                id="name"
                placeholder="Enter your Name"
              />
              <input
                type="email"
                value={email}
                onChange={handleChange("email")}
                id="email"
                placeholder="Enter your Email"
              />
              <input
                type="text"
                value={subject}
                onChange={handleChange("subject")}
                id="subject"
                placeholder="Subject"
              />
              <textarea
                type="text"
                value={message}
                onChange={handleChange("message")}
                id="message"
                rows="6"
                cols="45"
                placeholder="What's on you mind?"
              ></textarea>

              <button type="submit" id="btn-style" onClick={submitContact}>
                {buttonText}
              </button>
            </div>
          </form>
      </div>
    </div>
    </>
  );
}


export default ContactScreen;
