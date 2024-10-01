"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };
    const slideData = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "Trending Item",
            mainTitle: "Women's Latest Fashion Sale",
            price: "$20"
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "New Fashion Summer Sale",
            mainTitle: "Latest Shoes",
            price: "$30"
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "Trending Accessories",
            mainTitle: "Modern Sunglasses",
            price: "$15"
        },
    ];

  return (
    <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
            {slideData.map((item) => (
            <Slide key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
            />
        ))}
        </Slider>
        </div>
    </div>
  )
}

export default Hero;
