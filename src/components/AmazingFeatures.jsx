import { useState } from "react";
import { amazingImg } from "../assets";
import { layout } from "../style";
import Button from "./Button";
import { amazing, Mamazing } from "../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AmazingFeatures = () => {
  const [activeList, setActiveList] = useState("features");

  const handleClick = (link) => {
    setActiveList(link);
  };

  const currentList = activeList === "features" ? amazing : Mamazing;
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.content}`}>
          <div className={`${layout.sectionImg}`}>
            <img src={amazingImg} alt="laptop and phone" />
          </div>
          <div
            className={`${layout.sectionInfo} border border-gray-300 px-[18px]`}>
            <div className="flex gap-4 py-6">
              <Button
                className={`button-primary`}
                onClick={() => handleClick("features")}>
                Amazing Features
              </Button>
              <Button
                className={`button-secondary`}
                onClick={() => handleClick("morefeatures")}>
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
