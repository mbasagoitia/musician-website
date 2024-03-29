import Container from 'react-bootstrap/Container';
import Home from './Home';
import Bio from './Bio';
import Teaching from './Teaching';
import Samples from './Samples';
import BookMe from './Book';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';

function MainPage () {
    return (
      <div id="main-page">
        <Home />
        <Container fluid>
          <Bio />
          <Teaching />
          <Samples />
          <BookMe />
        </Container>
          <ImageSlider />
          <Footer />
      </div>
    )
}

export default MainPage;