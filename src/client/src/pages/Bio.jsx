import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import fm from 'front-matter';

function Bio () {
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
      const fetchMarkdownContent = async () => {
        try {
          const response = await fetch('content/pages/bio/bio.md');
          const markdownContent = await response.text();
          const parsedContent = fm(markdownContent);
          setPageContent(parsedContent);
        } catch (error) {
          console.error('Error fetching Markdown content:', error);
        }
      };

      fetchMarkdownContent();
    }, []);

    const externalLink = "https://digscholarship.unco.edu/dissertations/721/";

    const openLink = () => {
      window.open(externalLink, '_blank');
    };

    return (
      pageContent ? (
        <div id="bio" className="bio">
            <h1 className="my-4">Bio</h1>
            {pageContent.attributes.bio_image && (
              <img src={pageContent.attributes.bio_image} alt="bio-headshot" className="bio-photo" />
            )}
            <div className="bio-text" dangerouslySetInnerHTML={{ __html: pageContent.body }} />
            <div className="d-flex justify-content-center">
                <Button onClick={openLink} id="diss-btn" className="mt-2">View Dissertation</Button>
            </div>
        </div>
      ) : null
    );
}

export default Bio;
