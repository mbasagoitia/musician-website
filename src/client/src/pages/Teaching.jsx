import { Row, Col, Button } from 'react-bootstrap';

function Teaching() {
  return (
    <div className="teaching">
      <h1 className="my-4">Teaching</h1>
      <Row className="teaching-row">
        <Col sm={4}>
          <div className="teaching-card">
            <div className="teaching-img-container">
              <img src="images/headshot-4.jpg" alt="headshot with violin" />
            </div>
            <p>Teaching Philosophy</p>
            <Button>View</Button>
          </div>
        </Col>
        <Col sm={4}>
          <div className="teaching-card">
            <div className="teaching-img-container">
              <img src="images/headshot-1.jpg" alt="headshot with violin" />
            </div>
            <p>Studio Policy</p>
            <Button>View</Button>
          </div>
        </Col>
        <Col sm={4}>
          <div className="teaching-card">
            <div className="teaching-img-container">
              <img src="images/headshot-6.jpg" alt="closeup of fingers playing violin" />
            </div>
            <p>Contact Me for Lessons</p>
            <Button>Open Form</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Teaching;
