import React, { Component } from "react"
import Layout from "../components/common/Layout"
import SEO from "../components/SEO/SEO"
import s from "./contact.module.scss"

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = { name: "", email: "", message: "" }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    if (!!this.state["bot-field"]) {
      alert("Humans do not spam !!")
      return
    }

    if (this.state.name && this.state.email && this.state.message) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state }),
      })
        .then(() => {
          alert("Your form has been submitted sucessfully! \n We will get in touch with you shortly")
          this.setState({ name: "", email: "", message: "" })
        })
        .catch(error => alert(error))
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact Us"/>
        <div className={s.contact}>
          <form name="contact"
                method="POST"
                data-netlify-recaptcha="true"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
          >
            <ul>
              <li style={{ display: "none" }}>
                <label>Don’t fill this out if you're human:</label>
                <input aria-label="bot-field" name="bot-field" onChange={this.handleChange}/>
              </li>
              <li>
                <label>Name:</label>
                <input aria-label="Name" value={this.state.name} type="text" name="name" onChange={this.handleChange}/>
              </li>
              <li>
                <label>Email:</label>
                <input aria-label="Email" value={this.state.email} type="email" name="email"
                       onChange={this.handleChange}/>
              </li>
              <li>
                <label>Message:</label>
                <textarea aria-label="Message" value={this.state.message} name="message" onChange={this.handleChange}/>
              </li>
              <li>
                <label/>
                <button className={s.primaryButton} aria-label="Send" type="submit">Send</button>
              </li>
            </ul>
          </form>
        </div>
      </Layout>
    )
  }
}

export default Contact
