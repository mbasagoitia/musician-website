import { Form, Button } from 'react-bootstrap';

function LessonForm () {
  return (
      <>
      <h1 className="mb-2">Contact Me</h1>
      <p>Fill out this form with any inquiries or to set up your first lesson!</p>
      <Form className="mt-2" netlify name="Contact Form" method="POST">
      <input type="hidden" name="form-name" value="Contact Form" />
        <Form.Group controlId="formName">
          <Form.Label className="visibility-hidden">Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
        </Form.Group>
  
        <Form.Group controlId="formEmail">
          <Form.Label className="visibility-hidden">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </Form.Group>
  
        <Form.Group controlId="formPhoneNumber">
          <Form.Label className="visibility-hidden">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
          />
        </Form.Group>
  
        <Form.Group controlId="formMessage">
          <Form.Label className="visibility-hidden">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            name="message"
            required
          />
        </Form.Group>  
        <Button id="submit-btn" className="mt-4" type="submit">Submit</Button>
      </Form>
      </>
  );
};

export default LessonForm;
