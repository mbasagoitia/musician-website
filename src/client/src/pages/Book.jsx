import { Button } from 'react-bootstrap';

function BookMe () {
    const externalLink = "https://docs.google.com/forms/d/e/1FAIpQLSd9xQRKMh_NPxvq6e6jO5mP9jEAQSUAy6pY30BMO6P_q56MtA/viewform?pli=1";

    const openLink = () => {
      window.open(externalLink, '_blank');
    };

    return (
        <div id="book">
        <h1 className="my-4">
            Book Me for a Performance or Event
        </h1>
        <Button onClick={openLink}>Go To Form</Button>
        </div>
    )
}

export default BookMe;