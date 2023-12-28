import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import "../css/register.css";

const ContactUs = () => {
  //   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  //geting inputed data when change happen
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("all field is required");
    } else {
      const res = await axios.post("/v1/api/contactus", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      if (res.data) {
        toast.success("sucess");
      }
    }
  };

  return (
    <>
      <div className="container1">
        <div className="innerform">
          <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>

            <label>Name</label>
            <input
              placeholder="enter your Name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              placeholder="enter your Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label>Message </label>
            <textarea
              placeholder="enter your message"
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
            />

            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
