import { useState } from "react";
import { amazingImg } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import { amazing, Mamazing } from "../../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersectionObserver from "../../constant/useIntersectionObserver";

const AmazingFeatures = () => {
  useIntersectionObserver(".section-img", "animate-fadeRight");
  useIntersectionObserver(".section-info", "animate-fadeLeft");
  const [activeList, setActiveList] = useState("features");

  const handleClick = (link) => {
    setActiveList(link);
  };

  const currentList = activeList === "features" ? amazing : Mamazing;
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.content}`}>
          <div className={`${layout.sectionImg} section-img hide`}>
            <img src={amazingImg} alt="laptop and phone" />
          </div>
          <div
            className={`${layout.sectionInfo} section-info hide border border-gray-300 px-[18px]`}>
            <div className="flex gap-4 py-6">
              <Button
                className={`button-primary max-0.5xl:px-3 max-0.5xl:text-[14px]`}
                onClick={() => handleClick("features")}
                asLink={false}>
                Amazing Features
              </Button>
              <Button
                className={`button-secondary max-0.5xl:px-3 max-0.5xl:text-[14px]`}
                onClick={() => handleClick("morefeatures")}
                asLink={false}>
                More Amazing Features
              </Button>
            </div>
            <div>
              {currentList.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-workSans text-lg text-text-blue font-semibold">
                      {item.title}
                    </h4>
                    <p className="font-workSans text-[16px] text-text-p leading-6">
                      {item.text}
                    </p>
                  </div>
                  <div className="bg-text-blue/10 rounded-lg py-[10px] px-4 m-1">
                    {" "}
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-text-blue text-[26px] font-black"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazingFeatures;
