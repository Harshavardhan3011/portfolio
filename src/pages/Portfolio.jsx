import React from "react";
import Slider from "react-slick";
import group1 from "./Group1.jpg";
import group2 from "./Group2.jpg";

export default function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 px-6 bg-white text-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <span className="text-green-500 text-xl font-semibold">Portfolio</span>
          <h2 className="text-4xl font-bold leading-tight">
            My Creative Works <br />
            Latest <span className="text-green-500">Projects</span>
          </h2>
          <p className="text-gray-600">
            I have selected and mentioned here some of my latest projects to share with you.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition">
            Show More
          </button>
        </div>

        {/* Right Image Carousel */}
        <div className="lg:w-1/2">
          <Slider {...settings}>
            <div>
              <img
                src={group1}
                alt="Project 1"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
            <div>
              <img
                src={group2}
                alt="Project 2"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
            
          </Slider>
        </div>
      </div>
    </section>
  );
}
