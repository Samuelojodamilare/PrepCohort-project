import { examBg } from "../../assets";
import { layout } from "../../style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { examPlatform } from "../../constant";

const QuestionBankPage = () => {
  const [Slider, setSlider] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-slick").then((module) => {
        setSlider(() => module.default);
      });
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <section
      className={layout.section}
      style={{ backgroundImage: `url(${examBg})` }}>
      <div className={layout.container}>
        <div className="flex flex-col text-center mb-8 mt-10">
          <h3 className="font-workSans text-primary font-bold text-[24px] leading-[26px] mb-[11px]">
            Question Banks Provided For Learning
          </h3>
          <p className="font-workSans text-lg text-text-h">
            Diverse question banks are made available and schools can bring
            theirs online for students to practice
          </p>
        </div>
        <Slider {...settings}>
          {examPlatform.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md !w-[90%] !flex flex-col items-center p-4 space-y-2 mx-3 mb-8">
              <div className="w-[230px] h-[150px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <h4 className="text-center font-bold text-lg">{item.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default QuestionBankPage;
