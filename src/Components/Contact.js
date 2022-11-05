import { buildQueries } from '@testing-library/react';
import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import { Container, Form, FormLabel, Button } from 'react-bootstrap';


const Contact = () => {
  const name= " Esther Ajuzieogu";
  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [email, setEmail]=useState('')
 const [message, setMessage]=useState('')
  const [error, setError]=useState(false)
  var successful= document.getElementById('btn__submit')
  const submition=document.querySelector(".send-message");
  const text =document.querySelector(".success");
  const fields =document.querySelectorAll('input');
  const textarea =document.querySelectorAll('textarea');
  var check = document.getElementById('checker');
 
  const handleSubmit=(e)=>{
e.preventDefault();
if(firstName.length==0||lastName.length==0||email.length==0||message.length==0){
  setError(true);
  text.style.display='none';

}
else if(firstName.length>0||lastName.length>0||email.length>0||message.length>0){
  text.style.display='block';
  fields.forEach(input=> input.value='');
textarea.forEach(textarea=> textarea.value='');
}




  }
  

    return (
      <Container className='contact-container'>
        <h2 className='contact-me'>Contact me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <Form onSubmit={handleSubmit} className='form' id='form_wrapper'>
        <div className="label-holder">
        <div className="label first-label">
          <FormLabel>First Name</FormLabel>
          <input onChange={e=>setFirstName(e.target.value)} className='first' type="text" name="" id="first_name" placeholder='Enter your first name'  /> 
          
          {error&&firstName.length<=0?<p className='error-message'>Please enter your first name</p>:""} 
          
          </div>
          <div className="label">
          <FormLabel>Last Name</FormLabel>
          <input onChange={e=>setLastName(e.target.value)} type="text" name="" id="last_name" placeholder='Enter your last name' />
          {error&&lastName.length<=0?<p className='error-message'>Please enter your last name</p>:""} 
          </div>
          </div>
        <div className="label">
        <FormLabel>Email</FormLabel>
          <input onChange={e=>setEmail(e.target.value)} type="email" name="" id="email" placeholder='yourname@email.com' />
          {error&&email.length<=0?<p className='error-message'>Please enter your email</p>:""} 
        </div>
        <div className="label">
        <FormLabel>Message</FormLabel>
         
          <textarea onChange={e=>setMessage(e.target.value)} className='message-text'  id="message" placeholder='Send me a message and i&#39;ll reply you as soon as possible..'>
          
          </textarea>
          {error&&message.length<=0?<p className='error-message'>Please enter a message</p>:""} 
        </div>
          <div className="checkbox">
            <input className='check' type="checkbox" name="" id="checker" />
            <FormLabel className='consent'>You agree to providing your data to{name} who may contact you.</FormLabel>
          </div>

          <Button   onclick="Contact()" className="send-message" variant="primary" id="btn__submit" type="submit">
     Send message
      </Button>
      <h5 className='success' id='successful'>Message sent successfully</h5>
      </Form>
      </Container>
    )
  }
  
  export default Contact;