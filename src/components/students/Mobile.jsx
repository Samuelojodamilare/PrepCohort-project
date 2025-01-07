import { appstoreImg, playstoreImg } from "../../assets";
import { layout } from "../../style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { mobile } from "../../constant";

const Mobile = () => {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
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
      <div className={layout.container}>
        <h3 className="font-workSans font-bold text-[30px] 0.5xl:text-start text-center 0.5xl:leading-[26px] leading-[35px] text-[#31265a] mb-[21px]">
          Download the Prepcohort Mobile App
        </h3>
        <div className="flex flex-col xl:flex-row items-start justify-between mb-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="font-workSans text-[16px] text-text-p leading-[26px] mb-0 xl:mb-[33px] max-w-[513px]">
              Get the Prepcohort app now from the Google Play Store or Apple App
              Store on your mobile device. Access exclusive mobile app features,
              including the ability to download unlimited past questions offline
              and practice as often as you want, anytime, anywhere!
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-endgap-6">
            <div className="flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.prepcohort.app&pcampaignid=web_share&_gl=1*1dqaqm4*_gcl_au*MTEzNTQ3NjY0Ny4xNzMxNzkyOTcz"
                className="flex items-center justify-center bg-black p-[10px] rounded-lg shadow-xl hover:bg-black/80 transition-colors duration-300 ease-in-out">
                <img
                  src={playstoreImg}
                  height={32}
                  width={32}
                  alt="playstore logo"
                />
                <div className="px-3">
                  <p className="font-workSans text-sm text-white">GET IT ON</p>

                  <p className="font-workSans text-sm text-white font-semibold">
                    Google Play
                  </p>
                </div>
              </a>

              <a
                href="https://apps.apple.com/ng/app/prepcohort/id6738427505"
                className="flex items-center justify-center bg-black p-[10px] rounded-lg shadow-xl hover:bg-black/80 transition-colors duration-300 ease-in-out">
                <img
                  src={appstoreImg}
                  height={32}
                  width={32}
                  alt="playstore logo"
                />
                <div className="px-3">
                  <p className="font-workSans text-sm text-white">GET IT ON</p>

                  <p className="font-workSans text-sm text-white font-semibold">
                    App Store
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {mobile.map((item) => (
            <div key={item.id} className="flex justify-center items-center">
              <div className="w-[230px] 0.5xl:w-[250px] xl:w-[200px] mx-auto h-auto overflow-hidden rounded-xl shadow-xl">
                <img
                  src={item.img}
                  alt="screenshot of mobile app"
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Mobile;
