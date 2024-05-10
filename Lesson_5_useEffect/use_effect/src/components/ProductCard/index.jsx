import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ProductCard({ images, title, price }) {
  return (
    <div>
      {/* <img src={images[0]} alt={title} /> */}
      <Carousel showThumbs={false}>
        {
          images.map(el => <div><img src={el} /></div>)
        }
      </Carousel>
      <p>{title}</p>
      <p>{price}$</p>
    </div>
  )
}
