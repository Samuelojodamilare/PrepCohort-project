import { useEffect, useRef, useState } from "react";
import { layout } from "../style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { testimonials } from "../constant";
import TestimonialCard from "./TestimonialCard";

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
        <div className="flex flex-col text-center 0.5xl:mb-[50px] mb-[30px] pt-16">
          <h2 className="font-workSans text-primary font-bold text-[24px] leading-[26px] mb-[11px]">
            Testimonial
            <svg
              className="relative inline-block w-[55px] overflow-hidden ml-[9px] fill-secondary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 55 13">
              <g clipPath="url(#clip0_324_36194)">
                <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
              </g>
            </svg>
          </h2>
          <p className="font-workSans font-bold text-[30px] 0.5xl:text-[40px] leading-[47px] text-text-h">
            What Our Students are Saying
          </p>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
        <div className="relative flex justify-center z-20">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
