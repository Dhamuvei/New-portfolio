import React from "react";
import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_szue9p9', 'template_1qg1icw', form.current, '02Hqgatl2xZ1CG2fc')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
   
   
    return(
        <section id='contact'>
            <h5>In Touch</h5>
            <h2>Contact Us</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className="contact-icon"/>
                        <h4>Email</h4>
                        
                        <a href="mailto:dhamuchandiran.c@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact-icon"/>
                        <h4>WhatsApp</h4>
                        <h5></h5>
                        <a href="https://wa.me/+917092758683"  target="_blan"k>Send a Message</a>
                    </article>
                   
                </div>
                {/* End Of Contact Option */}
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name ="name" placeholder="Your Full Name" required/>
                <input type="email" name="name" placeholder="your Email" required />
                <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                <button type="submit" value="Send"  className="btn btn-primary">Send Message</button>
               </form>
            </div>
           </section>
    )
}

export default Contact;