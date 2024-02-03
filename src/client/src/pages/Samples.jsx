import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import YouTubeThumbnail from '../components/ytThumbnail';
import fm from 'front-matter';

function Samples () {
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
      const fetchMarkdownContent = async () => {
        try {
          const response = await fetch('content/pages/samples/samples.md');
          const markdownContent = await response.text();
          const parsedContent = fm(markdownContent);
          setPageContent(parsedContent.attributes);
        } catch (error) {
          console.error('Error fetching Markdown content:', error);
        }
      };
  
      fetchMarkdownContent();
    }, []);

    return (
        pageContent ? (
            <div id="samples">
            <h1 className="my-4">Sample Videos</h1>
            <div className="sample-videos">
                <Row>
                    <Col className="video-col">
                        <YouTubeThumbnail videoId={pageContent.id_1} />
                        <YouTubeThumbnail videoId={pageContent.id_2} />
                        <YouTubeThumbnail videoId={pageContent.id_3} />
                    </Col>
                </Row>
                <div className="videos-subtitle">
                    <span>Music by Argentine Composers</span>
                </div>
                <Row>
                    <Col  className="video-col">
                        <YouTubeThumbnail videoId={pageContent.id_4} />
                        <YouTubeThumbnail videoId={pageContent.id_5} />
                        <YouTubeThumbnail videoId={pageContent.id_6} />
                    </Col>
                </Row>
            </div>
        </div>
        ) : null
    )
}

export default Samples;