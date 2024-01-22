import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import './App.css';
import Navigation from './client/src/components/Navigation';
import MainPage from './client/src/pages/MainPage';

function App() {

  const [navbarStyle, setNavbarStyle] = useState({
    position: 'absolute',
    backgroundColor: 'transparent'
  });

  useEffect(() => {
    const handleScroll = debounce(() => {
      const bioSection = document.getElementById('bio');
      const bioSectionRect = bioSection.getBoundingClientRect();

      if (bioSectionRect.top <= 0) {
        setNavbarStyle({
          position: 'sticky',
          top: '0',
          backgroundColor: 'grey',
        });
      } else {
        setNavbarStyle({
          position: 'absolute',
          backgroundColor: 'transparent',
        });
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navigation navbarStyle={navbarStyle} />
      <MainPage />
    </div>
  );
}

export default App;
