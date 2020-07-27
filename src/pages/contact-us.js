import React from "react"
import Layout from "../components/common/Layout"
import SEO from "../components/SEO/SEO"
import s from './contact.module.scss';

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us"/>
    <div className={s.contact}>
      <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" netlify-honeypot="bot-field">
        <ul>
          <li style={{ display: "none" }}>
            <label>Don’t fill this out if you're human:</label>
            <input aria-label="bot-field" name="bot-field"/>
          </li>
          <li>
            <label>Name:</label>
            <input aria-label="Name" type="text" name="name"/>
          </li>
          <li>
            <label>Email:</label>
            <input aria-label="Email" type="email" name="email"/>
          </li>
          <li>
            <label>Subject:</label>
            <input aria-label="Subject" type="text" name="text"/>
          </li>
          <li>
            <label>Message:</label>
            <textarea aria-label="Message" name="message"/>
          </li>
          <li>
            <label></label>
            <button  className={s.primaryButton} aria-label="Send" type="submit">Send</button>
          </li>
        </ul>
      </form>
    </div>
  </Layout>
)

export default ContactUs
