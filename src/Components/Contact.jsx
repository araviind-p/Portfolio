// import React, { useState } from "react";
// import { FaCheck } from "react-icons/fa";

// const Contact = () => {
// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   message: "",
// });
// const [submitted, setSubmitted] = useState(false);

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({
//     ...formData,
//     [name]: value,
//   });
// };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");
//     setSubmitted(true);
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Me</h2>
//       {submitted ? (
// <p className="submitted-message">Form has been submitted!</p>
//       ) : (
//         <form action="https://formsubmit.co/aravindparavind10@gmail.com" method="POST" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               name="message"
// value={formData.message}
// onChange={handleChange}
//               required
//             />
//           </div>
//           <a type="submit" href="mailTo:aravindparavind10@gmail.com">
//             <button className="submit-btn">
//               {" "}
//               Submit
//               <FaCheck> </FaCheck>{" "}
//             </button>
//           </a>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Contact;

////////////////////////////////

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qxc2udf",
        "template_f4cbblr",
        form.current,
        "UO8L5U3zMr4ve36RF"
      )
      .then(
        () => {
          setSubmitted(true);
          setMessage("SUCCESS! Your message has been sent.");
        },
        (error) => {
          setMessage("FAILED... Please try again later.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      {submitted ? (
        <p className="submitted-message">{message}</p>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact Me</h2>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <a href="/">
            <button className="submit-btn" type="Submit">
              {" "}
              Submit
              <FaCheck> </FaCheck>{" "}
            </button>
          </a>
        </form>
      )}
    </div>
  );
};

export default Contact;
