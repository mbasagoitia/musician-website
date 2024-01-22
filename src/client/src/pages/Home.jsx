import Container from 'react-bootstrap/Container';
import Bio from './Bio';
import Teaching from './Teaching';
import Samples from './Samples';
import BookMe from './Book';

function Home () {
    return (
        <Container fluid>
        <div className="overlay-container">
          <div className="hp-content-wrapper">
            <h1 id="hp-title">Belén Hernández</h1>
            <h2 id="hp-subtitle">Violinist/Violin Teacher</h2>
          </div>
        </div>
        <Bio />
        <Teaching />
        <Samples />
        <BookMe />
      </Container>
    )
}

export default Home;