import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from 'react-materialize';

require('dotenv').config();
console.log(process.env);

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(process.env);
    // emailjs.init(process.env.REACT_APP_USER_ID);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="text-left">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label className="">Email</label>
      <input type="email" name="user_email" />
      <label className="">Message</label>
      <textarea name="message" />
      <Button
        className="bg-white text-black h-full rounded text-3xl p-4 text-center w-full cursor-pointer shadow-2xl hover:bg-gray-300"
        type="submit"
        value="Send"
      >
        SEND
      </Button>
    </form>
  );
};
