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

// useEffect for handling scroll events
useEffect(() => {
  const handleScroll = debounce(() => {
    const bioSection = document.getElementById('bio');
    const bioSectionRect = bioSection.getBoundingClientRect();

    if (bioSectionRect.top > 0 && !navbarExpanded) {
      // Set transparent background when the user has not scrolled past the bio section and navbar is closed
      setNavbarStyle({
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000', // Adjust z-index as needed
        backgroundColor: 'transparent',
      });
    } else if (bioSectionRect.top > 0 && navbarExpanded) {
      // Set gray background when the user has scrolled past the bio section or navbar is open
      setNavbarStyle({
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000', // Adjust z-index as needed
        backgroundColor: 'gray',
      });
    } else if (bioSectionRect.top <= 0) {
      // Set gray background when the user has scrolled past the bio section or navbar is open
      setNavbarStyle({
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000', // Adjust z-index as needed
        backgroundColor: 'gray',
      });
    }
  }, 100);

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [navbarExpanded, setNavbarStyle]);

// useEffect for handling changes in navbarExpanded state
useEffect(() => {
  if (!navbarExpanded) {
    // Set transparent background when the navbar is closed
    setNavbarStyle({
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '1000', // Adjust z-index as needed
      backgroundColor: 'transparent',
    });
  } else {
    // Set gray background when the navbar is open
    setNavbarStyle({
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '1000', // Adjust z-index as needed
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