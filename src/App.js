import './App.css';
import Navigation from './client/src/components/Navigation';
import Home from './client/src/pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      {/*
      <Bio />
      <Teaching />
      <Samples />
      <Book />
      <Footer /> */}
    </div>
  );
}

export default App;
