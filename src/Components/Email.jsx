import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../CSS/Email.css";

const Email = () => {

  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitted(true);

    emailjs.sendForm('service_9hxwmhk', 'template_24rzx1k', form.current, 'bUMWWRav-TqaZYw18')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className='main email'>
        <div className='form'>
        <p className='text-center secondary'>Write me an email </p>
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" placeholder="What's your name?"/>
            <label>Email</label>
            <input type="email" name="email" placeholder="What's your email?"/>
            <label>Message</label>
            <textarea name="message" placeholder='Write something...'/>
            <input type="submit" value="Send" />
            </form>
            { submitted ? <div className="success-message">Email sent! Thank you so much.</div> : null}
        </div>
    </section>
  );
};

export default Email;