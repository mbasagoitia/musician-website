import { useEffect, useState } from 'react';
import fm from 'front-matter';

function Home() {

  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    fetch('/content/pages/home.md')
      .then((response) => response.text())
      .then((markdownContent) => {
        const parsedContent = fm(markdownContent);
        setPageContent(parsedContent.attributes);
      });
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isWideScreen = windowWidth >= 520;

  return (
    <div id="home" className={`fixed-background`}>
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${pageContent.backgroundImage})`,
          backgroundPosition: '60%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: isWideScreen ? 'fixed' : 'scroll'
        }}
      />
      <div className="overlay-container">
        <div className="hp-content-wrapper">
          <h1 className="hp-title">{pageContent.hpTitle}</h1>
          <h2 className="hp-subtitle">{pageContent.hpSubtitle}</h2>
        </div>
      </div>
    </div>
  );
  
  }

export default Home;