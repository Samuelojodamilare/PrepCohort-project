import { useEffect, useRef, useState } from "react";
import { layout } from "../../style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { testimonials } from "../../constant";
import TestimonialCard from "../students/TestimonialCard";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="cursor-pointer text-[18px] bg-[#F1F2FD] text-primary w-[50px] h-[50px] inline-block text-center leading-[35px] p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-500 mx-2">
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="cursor-pointer text-[18px] bg-[#F1F2FD] text-primary w-[50px] h-[50px] inline-block text-center leading-[35px] p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-500 mx-2">
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );

  const [Slider, setSlider] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-slick").then((module) => {
        setSlider(() => module.default);
      });
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!Slider) return null;
  return (
    <section className={`${layout.section} bg-bg-m`}>
      <div className={`${layout.container}`}>
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="font-workSans text-text-h font-bold text-[30px] md:text-[40px] leading-[26px] mb-[11px]">
            What we offer
          </h3>
          <p className="font-workSans text-[16px] md:text-lg text-text-c">
            We provide innovative, comprehensive and user-friendly tools that
            empowers schools run effectively
          </p>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
        <div className="relative flex justify-center z-20 mt-5">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
