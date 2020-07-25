import React from "react"
import Layout from "../components/common/Layout"
import SEO from "../components/SEO/SEO"
import s from './contact.module.scss';

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us"/>
    <div className={s.contact}>
      <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" netlify-honeypot="bot-field">
        <p style={{ display: "none" }}>
          <label>Don’t fill this out if you're human: <input aria-label="bot-field" name="bot-field"/></label>
        </p>
        <p>
          <label>Your Name: <input aria-label="Name" type="text" name="name"/></label>
        </p>
        <p>
          <label>Your Email: <input aria-label="Email" type="email" name="email"/></label>
        </p>
        <p>
          <label>Subject: <input aria-label="Subject" type="text" name="text"/></label>
        </p>
        <p>
          <label>Message: <textarea aria-label="Message" name="message"/></label>
        </p>
        <p>
          <button aria-label="Send" type="submit">Send</button>
        </p>
      </form>
    </div>
  </Layout>
)

export default ContactUs
