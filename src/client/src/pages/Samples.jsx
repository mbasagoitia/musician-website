import { Row, Col } from 'react-bootstrap';
import YouTubeThumbnail from '../components/ytThumbnail';

function Samples () {
    return (
        <>
        <h1 className="my-4">Sample Videos</h1>
        <div className="sample-videos">
            <Row>
                <Col className="video-col">
                    <YouTubeThumbnail videoId={"tnRi4znbSOI"} />
                    <YouTubeThumbnail videoId={"_QJvSROeS2Y"} />
                    <YouTubeThumbnail videoId={"6zPEEiy8WC0"} />
                </Col>
            </Row>
            <div className="videos-subtitle">
                <span>Music by Argentine Composers</span>
            </div>
            <Row>
                <Col  className="video-col">
                    <YouTubeThumbnail videoId={"XVQQRnerNCE"} />
                    <YouTubeThumbnail videoId={"aETiEuXz1b0"} />
                    <YouTubeThumbnail videoId={"tBxOj6xhvlQ"} />
                </Col>
            </Row>
        </div>
        </>
    )
}

export default Samples;