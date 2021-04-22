import { useState, useRef, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import useClickOutside from 'use-click-outside';
import { getPosition } from '../utils/functions/functions';

const Product = ({ image, details }) => {
  const [popoverClicked, setPopoverClicked] = useState(false);
  const detailsList = Object.entries(details);
  const popoverRef = useRef();
  const exitClick = () => {
    if (popoverClicked) {
      setPopoverClicked(false);
    }
  };

  useClickOutside(popoverRef, exitClick);

  const handleImageClick = (e) => {
    e.preventDefault();

    const image = document.querySelector('#product-image');
    const popover = document.querySelector('#popover');
    const imagePosition = getPosition(image);
    const xPosition = e.clientX - imagePosition.x - popover.clientWidth / 2;
    const yPosition = e.clientY - imagePosition.y - popover.clientHeight / 2;

    popover.style.left = xPosition + 'px';
    popover.style.top = yPosition + 'px';

    setPopoverClicked(true);
  };

  return (
    <Fragment>
      <div
        id="popover"
        className={popoverClicked ? 'popover' : null}
        ref={popoverRef}
      >
        {popoverClicked && (
          <Container fluid>
            <h5 className="popover__title">Hotspot</h5>
            {detailsList.map((detail, idx) => {
              const productInfo = detail[0];
              const value = detail[1];
              return (
                <div className="popover__item" key={`${productInfo}-${idx}`}>
                  {productInfo}: {value}
                </div>
              );
            })}
          </Container>
        )}
      </div>
      <div>
        <img src={image} id="product-image" onClick={handleImageClick} />
      </div>
    </Fragment>
  );
};

export default Product;
