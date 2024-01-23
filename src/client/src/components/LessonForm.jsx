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
        sitekey="your-recaptcha-site-key"
        onChange={handleCaptchaChange}
      />

      <Button type="submit">Submit</Button>
    </Form>
    </>
  );
};

export default LessonForm;
