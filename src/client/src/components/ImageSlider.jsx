import Carousel from 'react-bootstrap/Carousel';

function ImageSlider () {
  // Fetch infor from sliding_images.md and map to dynamically render carousel items
  return (
    <Carousel fade indicators={false} controls={false} className="mt-4">
      <Carousel.Item interval={4000}>
        <img src="" alt="headshot" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="" alt="playing violin" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="" alt="playing violin in a meadow" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img src="" alt="playing violin in a meadow" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;