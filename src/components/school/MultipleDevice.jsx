import React from "react";
import { multipleDeviceImg } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import { consoleUrl } from "../../services/graphqlClient";
import useIntersectionObserver from "../../constant/useIntersectionObserver";

const MultipleDevice = () => {
  useIntersectionObserver(".section-info", "animate-fadeRight");
  useIntersectionObserver(".section-img", "animate-fadeLeft");
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.content}`}>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[600px] xl:w-[500px] 1xl:w-[650px] h-auto">
              <img
                src={multipleDeviceImg}
                alt="laptop and phone"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className={`${layout.sectionInfo} ml-6 max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              Accessible On Multiple Devices
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              Enable your students to access your courses effortlessly across
              multiple devices with Prepcohort. Whether they prefer learning on
              big or small screens, our platform ensures a consistent,
              user-friendly experience, flexible and convenient learning
              experience
            </p>
            <Button className={`button-primary`} href={consoleUrl}>
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultipleDevice;
