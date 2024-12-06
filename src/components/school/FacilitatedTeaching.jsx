import React from "react";
import { layout } from "../../style";
import Button from "./../common/Button";
import { teachingImg } from "../../assets";
import { consoleUrl } from "../../services/graphqlClient";

const FacilitatedTeaching = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.content}`}>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[600px] xl:w-[500px] 1xl:w-[650px] h-auto">
              <img
                src={teachingImg}
                alt="dashboard image"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className={`${layout.sectionInfo} ml-6 max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              Facilitated Teaching
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              From interactive lessons to clear communication channels, our
              features are crafted to enhance your school’s teaching methods,
              making teachers deliver their contents better and as well
              optimizing instructor-learner interaction
            </p>
            <Button className={`button-primary`} href={consoleUrl}>
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitatedTeaching;
