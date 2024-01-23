import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";

function LessonForm () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    recaptchaValue: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
    } else {
      alert('Please complete the captcha test.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Your Name</Form.Label>
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
        <Form.Label>Email Address</Form.Label>
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
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
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
        sitekey="your-recaptcha-site-key"
        onChange={handleCaptchaChange}
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LessonForm;
