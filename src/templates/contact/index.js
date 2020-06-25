import React from 'react'
import Layout from '../../components/common/Layout'
import SEO from '../../components/SEO/SEO'

const Contact = ({ location }) => {
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="Contact" />
        <form
          name="contact"
          method="post"
          action="/contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact" />
            <input style={{ display: "none" }} name="bot-field" />
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <Textarea placeholder="Message" name="message" />
            <Button variantColor="blue" type="submit">Submit</Button>
        </form>
    </Layout>
  )
}

export default Contact
