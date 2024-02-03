import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fm from 'front-matter';

function ImageSlider () {
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch('content/pages/sliding_images/sliding_images.md');
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
      <Carousel fade indicators={false} controls={false} className="mt-4">
      {pageContent.images.map((image, idx) => {
        return (
        <Carousel.Item interval={4000} key={idx}>
          <img src={image.image} alt={image.alt_text} />
        </Carousel.Item>
        )
      })}
    </Carousel>
    ) : null
  );
}

export default ImageSlider;