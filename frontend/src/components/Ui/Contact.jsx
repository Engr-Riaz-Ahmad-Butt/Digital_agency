import React, { useRef } from 'react';
import { useState } from 'react';
import image from '../../assets/img/image.png';
import { Container, Row, Col } from "reactstrap";
import RImage from '../../assets/img/Rectangle 38.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/contact.css';


const Contact = () => {

  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      // Send a POST request to the backend's /send-email endpoint
      const response = await axios.post('http://localhost:5000/send-email', data); // This URL should match the backend's route
      console.log(response.data);
      setEmailSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section className='contact-page' id='contact'>
      <Container>
        <div className='contact-top'>
          <Link to='/home' className='back-home'>Back to Home</Link>
          <div className='contact-hero'>
            <div className='hero-left'>
              <h1 className='contact-title'>Contact Us</h1>
              <p className='contact-sub'>Questions about services, pricing or strategy? Send us a message we’re happy to help.</p>
              <div className='contact-info'>
                <h3 className='info-title'><i className='ri-find-replace-line'></i> Quick Find Us</h3>
                <ul className='info-list'>
                  <li className='info-item email-item'>
                    <span className='info-icon'><i className='ri-mail-line'></i></span>
                    <div className='info-content'>
                      <strong>Email</strong>
                      <p>engr.riazahmadbutt@gmail.com</p>
                    </div>
                  </li>
                  <li className='info-item hours-item'>
                    <span className='info-icon'><i className='ri-time-line'></i></span>
                    <div className='info-content'>
                      <strong>Opening Hours</strong>
                      <p>Monday - Saturday</p>
                    </div>
                  </li>
                  <li className='info-item location-item'>
                    <span className='info-icon'><i className='ri-map-pin-line'></i></span>
                    <div className='info-content'>
                      <strong>Location</strong>
                      <p>Islamabad, Pakistan</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='hero-right'>
              <img src={image} alt='contact hero' className='hero-illustration' />
            </div>
            
          </div>
          
        </div>

        <Row className='contact-main g-4'>
          <Col md='6'>
            <div className='contact-card'>
              <h3 className='card-title'>Send Us a Message</h3>
              <form ref={form} onSubmit={sendEmail} className='contact-form'>
                <div className='form-row'>
                  <div className='form-group'>
                    <input name='username' type='text' className='form-control' placeholder='Your Name' required />
                  </div>
                  <div className='form-group'>
                    <input name='email' type='email' className='form-control' placeholder='Your Email' required />
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group full'>
                    <input name='phone' type='tel' className='form-control' placeholder='Phone Number' />
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group full'>
                    <input name='subject' type='text' className='form-control' placeholder='Subject' />
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group full'>
                    <textarea name='details' className='form-control wym' placeholder='Tell us more details or any specific query you have...' />
                  </div>
                </div>

                <div className='form-row form-actions'>
                  <button className='contact-btn' type='submit'>Send Message</button>
                  {emailSent && <p className='sent-msg'>Email sent successfully!</p>}
                </div>
              </form>
            </div>
          </Col>

          <Col md='6'>
            <div className='map-card'>
              <div className='map-wrapper'>
                <iframe
                  title='location'
                  src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26607.35960849459!2d73.09508770996854!3d33.52946681262129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sphase%207%20bahria%20town%20islamabad%20soltridge!5e0!3m2!1sen!2s!4v1690799867463!5m2!1sen!2s'
                  loading='lazy'
                  allowFullScreen
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Contact;