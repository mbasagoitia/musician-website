import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';

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
