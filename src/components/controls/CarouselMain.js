import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import cricket from '../img/cricket.jpg';
import MI from '../img/MumbaiIndians.jpg';
import Virat from '../img/virat.jpeg';


const items = [
  {
    id: 1,
    src: cricket,
    altText: "For making us India's Fastest Growing App",
    caption: 'Thank You India'
  },
  
  {
    id: 2,
    src: Virat,
    caption: 'Star Performer: Virat Kohli',
    altText: 'Captain India National Cricket Team'
  },
  {
    id: 3,
    src: MI,
    altText: 'For Winning IPL Season 13!!',
    caption: 'Congrats Mumbai Indians'
  }

];

const CarouselMain = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} class="rounded" alt={item.altText} />
        <CarouselCaption className="text-light font-weight-bolder" captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              padding: 5px;
              height: 250px;
              background: white;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default CarouselMain;