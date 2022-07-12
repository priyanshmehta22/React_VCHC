import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ContactUs = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [isloading, setisloading] = useState(false);
  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    const contact = { email, name, phone, message };
    setisloading(true);

    fetch("http://localhost:8000/contact", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        console.log("new enquiry sent");
        console.log(contact);
        setisloading(false);
        // history.go(-1);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    //redirect to home page
    // window.location.href = "/";
  };

  return (
    <div className="create">
      <div className="contact-form">
        <h2>Have some query? Write here🧑‍⚕️</h2>
        <form onSubmit={handlesubmit}>
          <label>Email</label>
          <input
            type="email"
            name="title"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          ></input>
          <label>Phone No</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
          ></input>
          <label>Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
          {!isloading && <button>Add Query</button>}
          {isloading && <button restricted>Adding Query...</button>}
        </form>
      </div>
      <div className="info">
        <h1>Contact Us</h1>
        <p>
          Phone Number:
          <a href="tel:9694096091"> Call Us</a>
        </p>
        <p>
          Email:
          <a href="mailto: veeralchildheartcentre@email.com" target={"_blank"}>
            Click to send Mail
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
