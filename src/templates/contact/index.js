import React, { Component } from "react"
import Layout from "../../components/common/Layout"
import SEO from "../../components/SEO/SEO"
import Button from "../../components/common/Button/Button"

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
    if (this.state["bot-field"] !== "") {
      alert("Humans do not spam !!")
      return
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Your form has been submitted sucessfully! \n We will get in touch with you shortly"))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact"/>
        <form
          name="contact"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input style={{ display: "none" }} name="bot-field" onChange={this.handleChange}/>
          <input placeholder="Name" name="name" onChange={this.handleChange}/>
          <input placeholder="Email" name="email" onChange={this.handleChange}/>
          <Textarea placeholder="Message" name="message" onChange={this.handleChange}/>
          <Button type="submit">Submit</Button>
        </form>
      </Layout>
    )
  }
}

export default Contact
