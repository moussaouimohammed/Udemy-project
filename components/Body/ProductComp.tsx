import React from 'react'
import Product from './Product'
import productsData from './productsData'
import Slider from 'react-slick'

const ProductComp = ({ image }) => {
  const settings = {
    infinite: false,
    className: 'center',
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <Slider {...settings}>
        {productsData.map(({ id, name, image, price, prevprice }) => (
          <div className="grid px-2 mt-8 space-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
            <Product
              key={id}
              name={name}
              image={image}
              price={price}
              prevprice={prevprice}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductComp
