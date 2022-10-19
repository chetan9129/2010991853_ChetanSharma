import React, { useState } from "react";
import "../CSS/Contact.css";

const Contact = () => {
  const [first, setfirst] = useState(false);
  // const submit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="homeStyle">
      <div
        name="contact"
        className="homeStyle_main d-flex justify-content-center  p-4"
      >
        <form
          action="https://getform.io/f/70df9fe7-f899-4806-beb8-a27927ea5c68"
          method="POST"
          className="d-flex flex-column "
        >
          <div className="pb-2">
            <p className="p  mt-4 fw-bolder text-warning form_header">
              Contact Me
            </p>
            <p className="py-4 form_para">
              //Submit the form below or send me an email to -
              <em> anku9129@gmail.com</em>
            </p>
          </div>
          <input
            className="p-2 bg-light"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-light"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="p-2 bg-light"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="form_button mt-5 text-black border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Contact Me
          </button>
        </form>
      </div>
      <div className="mapImport">
        <h1 className="mapImort_heading">You can find me Here!!!</h1>
        {!first && (
          <div>
            <iframe
              class="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ChitkaraUniversity&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
