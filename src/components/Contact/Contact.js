/* eslint-disable */
import { useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {

  function sendEmail(e) {
      e.preventDefault();
      emailjs
      .sendForm(
        "service_xcde6xg",
       'template_xsnk10l',
       e.target, 
       "vUCuYt6JvPJgr-4Mj"
  )
      .then(
        (result) => {
         alert("Great, your request has been sent!"); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset(`Message Sent`);
    }
  
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code ===200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
      console.log('Message Sent');
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    }
  };
 

  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={sendEmail}>
              
                  <Row>
                 
     <Col size={12} sm={6} className="px-1">
         <input required type="text" name="user_name" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} /> 
                     </Col>
                    <Col size={12} sm={6} className="px-1"> 
                    <input required type="text" name="user_name" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                   </Col> 
                    <Col size={12} sm={6} className="px-1">
                    <input required type="email" name="user_email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input required type="text" name="user_name" placeholder="Phone Number" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                    <textarea required rows={6} className="px-1" name="message"  placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col> 
     
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )

}

