import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import './App.css';
import Navigation from './client/src/components/Navigation';
import MainPage from './client/src/pages/MainPage';

function App() {

  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({
    position: 'absolute',
    backgroundColor: 'transparent'
  });

  useEffect(() => {
    const handleScroll = debounce(() => {
      const bioSection = document.getElementById('bio');
      const bioSectionRect = bioSection.getBoundingClientRect();

      if (bioSectionRect.top > 0 && !navbarExpanded) {
        setNavbarStyle({
          top: '0',
          left: '0',
          right: '0',
          zIndex: '1000',
          backgroundColor: 'transparent',
        });
      } else if (bioSectionRect.top > 0 && navbarExpanded) {
        setNavbarStyle({
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '1000',
          backgroundColor: 'gray',
        });
      } else if (bioSectionRect.top <= 0) {
        setNavbarStyle({
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '1000',
          backgroundColor: 'gray',
        });
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarExpanded, setNavbarStyle]);

  useEffect(() => {
    if (!navbarExpanded) {
      setNavbarStyle({
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000',
        backgroundColor: 'transparent',
      });
    } else {
      setNavbarStyle({
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000',
        backgroundColor: 'gray',
      });
    }
  }, [navbarExpanded, setNavbarStyle]);

    
    

  return (
    <div className="App">
      <Navigation navbarStyle={navbarStyle} navbarExpanded={navbarExpanded} setNavbarExpanded={setNavbarExpanded} />
      <MainPage />
    </div>
  );
}

export default App;