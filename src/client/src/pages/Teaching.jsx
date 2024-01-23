import { Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import TeachingPhilosophy from '../components/TeachingPhilosophy';
import StudioPolicy from '../components/StudioPolicy';
import LessonForm from '../components/LessonForm';

function Teaching() {

    const [modalOpen, setModalOpen] = useState(false);
    const [component, setComponent] = useState(null);

    const handleClick = (e) => {
        setModalOpen(true);
        setComponent(e.target.id);
    }

  return (
    <>
    <div className={`modal-bg ${modalOpen ? "modal-open" : ""}`}>
      {modalOpen && (
        <div className="modal-content">
            <div className="modal-content">
                {component === "view-tp" ? <TeachingPhilosophy /> : component === "view-sp" ? <StudioPolicy /> : component === "lesson-form" ? <LessonForm /> : null}
            </div>
        </div>
      )}
    </div>
    <div id="teaching" className="teaching">
      <h1 className="my-4">Teaching</h1>
      <Row className="teaching-row">
        <Col sm={4}>
          <div className="teaching-card">
            <div className="teaching-img-container">
              <img src="images/headshot-4.jpg" alt="headshot with violin" />
            </div>
            <p>Teaching Philosophy</p>
            <Button id="view-tp" onClick={(e) => handleClick(e)}>View</Button>
          </div>
        </Col>
        <Col sm={4}>
          <div className="teaching-card">
            <div className="teaching-img-container">
              <img src="images/headshot-1.jpg" alt="headshot with violin" />
            </div>
            <p>Studio Policy</p>
            <Button id="view-sp" onClick={(e) => handleClick(e)}>View</Button>
          </div>
        </Col>
        <Col sm={4}>
          <div className="teaching-card">
            <div className="teaching-img-container">
              <img src="images/headshot-6.jpg" alt="closeup of fingers playing violin" />
            </div>
            <p>Contact Me for Lessons</p>
            <Button id="lesson-form" onClick={(e) => handleClick(e)}>Open Form</Button>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default Teaching;
