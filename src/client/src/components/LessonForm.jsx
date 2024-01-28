import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import fetchCaptchaKey from '../helpers/fetchCaptchaKey';
import submitFormData from '../helpers/submitFormData';

function LessonForm () {

    const [captchaKey, setCaptchaKey] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        recaptchaValue: null,
    });

    useEffect(() => {
        const key = fetchCaptchaKey();
        setCaptchaKey(key);
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

  // Consider making button inactive until captcha is complete and valid

  const handleCaptchaChange = (value) => {
    setFormData({
      ...formData,
      recaptchaValue: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.recaptchaValue) {
      // Send form info to database
      console.log('Form submitted:', formData);
      // Make POST request to api endpoint that triggers lambda function sendAndStore
        submitFormData(formData);
    } else {
        // Make this something other than an alert
      alert('Please complete the captcha test.');
    }
  };

  return (
    !formSubmitted ? (
      <>
      <h1 className="mb-2">Contact Me</h1>
      <p>Fill out this form or contact me at belenhernandez.violin@gmail.com with any inquiries or to set up your first lesson!</p>
      <Form onSubmit={handleSubmit} className="mt-2">
        <Form.Group controlId="formName">
          <Form.Label className="visibility-hidden">Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="formEmail">
          <Form.Label className="visibility-hidden">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="formPhoneNumber">
          <Form.Label className="visibility-hidden">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
  
        <Form.Group controlId="formMessage">
          <Form.Label className="visibility-hidden">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
  
        <ReCAPTCHA
          sitekey={captchaKey}
          onChange={handleCaptchaChange}
        />
  
        <Button id="submit-btn" type="submit">Submit</Button>
  
      </Form>
      </>
    ) : (
      <div className="d-flex flex-column justify-content-center h-100">
      <h1>Thank you for your message!</h1>
      <p>I will be in touch shortly.</p>
      </div>
    )
  );
};

export default LessonForm;
