import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneOutboundFill } from "react-icons/bs";

const Contact = () => {
  // const [show, setShow] = React.useState(false);
  // setTimeout(() => {
  //   setShow(true);
  // }, 2000);
  const form = React.useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_jk60olq",
      "template_w9fqjcb",
      form.current,
      "5oTf3p7_sADnJ1dZ1"
    );
    e.target.reset();
  };
  return (
    <section>
      <div className="contact-parent">
        <div className="contact">
          <h2 className="contact-header">Contact Me</h2>
          <div className="contact-body">
            <div className="contact-button">
              <a
                href="mailto:hanlinthedeveloper@gmail.com"
                className="contact-icons"
                target="_blank"
              >
                <MdEmail />
              </a>
              <a
                href="https://m.me/100087520487148/"
                className="contact-icons"
                target="_blank"
              >
                <FaFacebookMessenger />
              </a>
              <a
                href="tel:09783261939"
                className="contact-icons"
                target="_blank"
              >
                <BsTelephoneOutboundFill />
              </a>
            </div>

            <form className="form" ref={form} onSubmit={sendEmail}>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
              <textarea
                className="form-input"
                type="textarea"
                name="message"
                placeholder="Enter Your Message"
                rows="3"
                required
                style={{ height: 100 }}
              />
              <input
                type="submit"
                className="form-input"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
