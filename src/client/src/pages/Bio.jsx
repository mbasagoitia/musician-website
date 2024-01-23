import { Button } from 'react-bootstrap';

function Bio () {

    const externalLink = "https://digscholarship.unco.edu/dissertations/721/";

    const openLink = () => {
      window.open(externalLink, '_blank');
    };

    return (
        <div id="bio" className="bio">
            <h1 className="my-4">Bio</h1>
            <div className="bio-text">
                <div className="bio-photo">
                    <img src="/images/headshot-2.jpg" alt="headshot-with-violin" />
                </div>
                <p>
                Dr. Belén Hernández started her musical journey in her native Argentina. 
                She graduated with a bachelor’s degree in violin performance from the Universidad 
                Nacional de Tucumán. She then joined the Orquesta Sinfónica de Salta in 2007 as a 
                full-time violinist.
                </p>
                <p>        
                In 2010 she received the Tarr Award (full tuition scholarship) 
                at Carson-Newman University where she completed a BM in Music Theory, applied violin (2014).
                During her undergraduate studies, Dr. Hernández was granted the Presser Scholar Award, and
                became a member of multiple national honor societies, including Pi Kappa Lambda, Alpha Chi,
                and Omicron Delta Kappa.
                </p>
                <p>
                Dr. Hernández continued her higher education studies at 
                the University of Northern Colorado where she earned a MM in Violin Performance (2016) 
                and Doctor of Arts in Violin Performance with a secondary emphasis in Orchestral Conducting
                (2020).  Her doctoral dissertation, “Life and Legacy of Luis Gianneo: A Comprehensive 
                Study of His Compositions for Violin,” reflects her deep love for Argentine music.
                </p>
                <p>
                She has performed in many orchestras in Argentina and the United States. In the 
                United States, she has performed with the Greeley Philharmonic Orchestra (CO), 
                Colorado MahlerFest, Cheyenne Symphony Orchestra (WY), El Paso Symphony Orchestra
                (TX), Las Cruces Symphony Orchestra (NM), Ohio Light Opera (OH), Symphony of the
                Mountains (TN), among others.
                </p>
                <p>
                Dr. Hernández has been one of the violin 
                teachers at Centro Andino para la Educación y la Cultura (CApEC) in Tilcara, Argentina
                (2008-2010), and Flourish Music Academy in Greeley, Colorado (2017-2019). She has 
                coached orchestral sectionals at the Denver School of the Arts, Denver Young Artists
                Symphony, Cherry Creek Honor Orchestra, among others. Dr. Hernández was the orchestra
                director at Horizon Middle School in El Paso, Texas, from 2019 until 2022. Under her
                guidance, this brand-new orchestra program, was awarded Superior rating at UIL Concert 
                and Sight-Reading Contest. 
                </p>
                <p>
                Dr. Belén Hernández is currently teaching violin at the 
                Kreismusikschule Kaiserslautern and is serving as the violin coach and assistant conductor
                at the Youth Symphony Orchestra of Kaiserslautern County. Additionally, she has established
                her home violin studio in Otterbach, Germany.
                </p>
            </div>
            <div className="d-flex justify-content-center">
                <Button onClick={openLink} id="diss-btn">View Dissertation</Button>
            </div>
        </div>
    )
}

export default Bio;