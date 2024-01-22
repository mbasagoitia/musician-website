import Carousel from 'react-bootstrap/Carousel';

function ImageSlider () {
  return (
    <Carousel fade indicators={false} controls={false} className="mt-4">
      <Carousel.Item interval={4000}>
        <img src="/images/slider-img-1.jpg" alt="headshot" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/slider-img-2.jpg" alt="playing violin" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/slider-img-3.jpg" alt="playing violin in a meadow" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="/images/slider-img-4.jpg" alt="playing violin in a meadow" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;