import { whyStudy } from "../../constant";
import { layout } from "../../style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { whyStudyImg } from "../../assets";

const WhyStudy = () => {
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: "ondemand",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <section className={`${layout.section} mb-20`}>
      <div className={`${layout.container} overflow-visible`}>
        <div className="text-center mb-10 xl:mb-32">
          <h2 className="font-workSans font-bold text-text-h text-[27px] md:text-[40px] leading-[47px]">
            Why Study With Prepcohort?{" "}
          </h2>
        </div>
        <div
          className=" relative border border-[#e0e3fd] rounded-[40px] px-6 md:pr-[50px] pb-[48px] md:pl-[60px] xl:pl-[20px] 1xl:pl-[60px]"
          style={{
            boxShadow: "11px 15px 30px 0px rgba(128, 137, 225, 0.1)",
          }}>
          <div className="relative">
            <Slider {...settings} ref={sliderRef}>
              {whyStudy.map((item) => (
                <div key={item.id}>
                  <h4 className="text-[28px] 0.5xl:text-[30px] xl:text-[28px] 1xl:text-[30px] font-medium font-workSans text-text-h mt-[48px] mb-[32px]">
                    {item.title}
                  </h4>
                  <p className="text-[18px] 0.5xl:text-[20px] xl:text-[16px] 1xl:text-[20px] font-workSans text-text-h leading-[37px] xl:leading-[30px] 1xl:leading-[37px] max-w-[691px] xl:max-w-[480px] 1xl:max-w-[630px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </Slider>
            <div className="relative flex justify-center z-20">
              <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
          </div>

          <div className="inline-block xl:absolute z-[2] right-[-20px] top-[120px] xl:right-[42px] xl:top-[-70px] 2xl:right-[30px] 2xl:top-[-90px] relative mx-auto xl:my-[75px] xl:mb-[-100px] xl:flex xl:justify-center mt-[-40px] mr-[-32px] mb-[-165px] 0.5xl:right-[-50px] 0.5xl:top-[120px] md:right-[-70px] md:top-[110px] md:mt-3">
            <div className="w-[280px] h-[280px] 0.5xl:w-[360px] 0.5xl:h-[360px] md:w-[450px] md:h-[450px] xl:h-[350px] xl:w-[350px] 1xl:h-[450px] 1xl:w-[450px] rounded-full overflow-hidden">
              <img
                src={whyStudyImg}
                alt="desktop"
                className="relative z-10 w-full h-auto"
              />
            </div>
            <svg
              viewBox="0 0 612 563"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute md:w-[612px] md:h-[563px] xl:w-[500px] xl:h-[470px] 1xl:w-[612px] 1xl:h-[563px] right-[-57px] top-[-72px] z-[1] hidden md:block">
              <path
                d="M595.211 330.916C584.04 315.536 581.185 295.533 588.393 277.948C591.708 269.857 593.359 260.893 592.899 251.505C591.377 220.18 566.027 194.704 534.708 192.994C534.495 192.982 534.283 192.971 534.071 192.959C520.328 192.346 507.517 185.776 499.106 174.89C498.458 174.053 497.809 173.215 497.148 172.39C485.069 157.234 481.695 137.196 487.463 118.703C489.268 112.9 490.07 106.661 489.634 100.174C487.923 74.7337 467.02 54.3769 441.54 53.2801C426.665 52.6432 413.147 58.4459 403.521 68.129C386.44 85.3367 363.449 95.4207 339.207 95.1495C338.429 95.1377 337.638 95.1377 336.86 95.1377C332.79 95.1377 328.803 95.2674 321.631 94.4418C300.244 91.9768 280.473 82.2348 264.76 67.5039C244.483 48.4916 216.997 37.063 186.846 37.7471C129.15 39.0563 80.9264 88.6391 79.2159 146.325C77.9301 189.774 109.827 226.101 118.757 239.239C145.441 278.431 123.193 329.536 93.867 364.199C75.677 385.7 64.8598 413.652 65.3434 444.14C66.3697 509.161 119.548 562.153 184.581 562.99C207.784 563.285 229.501 557.046 248.021 545.995C285.428 523.668 327.033 509.161 370.031 502.167C393.635 498.323 415.883 490.456 436.043 479.275C458.739 466.69 485.128 461.914 510.702 466.337C516.117 467.268 521.708 467.705 527.429 467.575C573.659 466.537 611.16 428.513 611.584 382.279C611.773 363.067 605.663 345.316 595.211 330.916Z"
                fill="#4F5DE4"></path>
              <path
                d="M103.524 314.265C122.402 295.39 122.402 264.788 103.524 245.913C84.6458 227.038 54.038 227.038 35.1597 245.913C16.2814 264.788 16.2814 295.39 35.1597 314.265C54.038 333.14 84.6458 333.14 103.524 314.265Z"
                fill="#4F5DE4"></path>
              <path
                d="M519.408 173.899C529.715 173.899 538.07 165.546 538.07 155.241C538.07 144.936 529.715 136.582 519.408 136.582C509.101 136.582 500.746 144.936 500.746 155.241C500.746 165.546 509.101 173.899 519.408 173.899Z"
                fill="#4F5DE4"></path>
              <path
                d="M404.941 42.6715C408.221 39.3921 408.221 34.0752 404.941 30.7958C401.661 27.5164 396.343 27.5164 393.063 30.7958C389.783 34.0752 389.783 39.3921 393.063 42.6715C396.343 45.9509 401.661 45.9509 404.941 42.6715Z"
                fill="#4F5DE4"></path>
              <path
                d="M450.459 39.6567C457.747 32.3702 457.747 20.5565 450.459 13.27C443.171 5.98349 431.355 5.9835 424.067 13.27C416.78 20.5565 416.78 32.3703 424.067 39.6568C431.355 46.9433 443.171 46.9432 450.459 39.6567Z"
                fill="#4F5DE4"></path>
              <path
                d="M469.475 508.914C476.947 508.914 483.005 502.857 483.005 495.386C483.005 487.914 476.947 481.858 469.475 481.858C462.002 481.858 455.944 487.914 455.944 495.386C455.944 502.857 462.002 508.914 469.475 508.914Z"
                fill="#4F5DE4"></path>
              <path
                d="M341.696 525.638C343.481 525.638 344.929 524.191 344.929 522.406C344.929 520.621 343.481 519.175 341.696 519.175C339.911 519.175 338.464 520.621 338.464 522.406C338.464 524.191 339.911 525.638 341.696 525.638Z"
                fill="url(#paint0_linear_187_13357)"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudy;
