import React from 'react'
import { Container, Form, FormLabel, Button } from 'react-bootstrap'

const Contact = () => {
  let name= " Esther Ajuzieogu";
    return (
      <Container className='contact-container'>
        <h2 className='contact-me'>Contact me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <Form className='form'>
        <div className="label-holder">
        <div className="label first-label">
          <FormLabel>First Name</FormLabel>
          <input type="text" name="" id="first_name" placeholder='Enter your first name' required/>
          </div>
          <div className="label">
          <FormLabel>Last Name</FormLabel>
          <input type="text" name="" id="last_name" placeholder='Enter your last name' required/>
          </div>
          </div>
        <div className="label">
        <FormLabel>Email</FormLabel>
          <input type="email" name="" id="email" placeholder='yourname@email.com' required/>
        </div>
        <div className="label">
        <FormLabel>Message</FormLabel>
         
          <textarea className='message-text'  id="message" placeholder='Send me a message and i will reply you as soon as possible..'>
          
          </textarea>
        </div>
          <div className="checkbox">
            <input className='check' type="checkbox" name="" id="" />
            <FormLabel className='consent'>You agree to providing your data to{name} who may contact you.</FormLabel>
          </div>

          <Button className="send-message" variant="primary" id="btn__submit" type="submit">
     Send message
      </Button>
      </Form>
      </Container>
    )
  }
  
  export default Contact;