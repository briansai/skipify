import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Product from './Product';
import { data } from '../utils/constants/data';

const Carousel = () => {
  let [currentIndex, setCurrentIndex] = useState(0);
  const { slides } = data;
  const { image_url, hotspots } = slides[currentIndex];

  const directions = {
    last: () => {
      !currentIndex
        ? setCurrentIndex(slides.length - 1)
        : setCurrentIndex(currentIndex - 1);
    },
    next: () => {
      currentIndex === slides.length - 1
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex + 1);
    },
  };

  const handleDirection = (e, direction) => {
    e.preventDefault();
    directions[direction]();
  };

  return (
    <Container className="carousel">
      <Row>
        <Col className="product">
          <Button
            variant="secondary"
            onClick={(e) => handleDirection(e, 'last')}
            className="btn__last"
          >
            {'<'}
          </Button>
          <Product image={image_url} details={hotspots[0]} />
          <Button
            variant="secondary"
            onClick={(e) => handleDirection(e, 'next')}
            className="btn__next"
          >
            {'>'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Carousel;
