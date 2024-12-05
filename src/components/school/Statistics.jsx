import React from "react";
import { layout } from "../../style";
import { statBgImg, statinnerBg } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faDownload,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Statistics = () => {
  return (
    <section
      className={`${layout.section} bg-no-repeat bg-contain bg-center`}
      style={{ backgroundImage: `url(${statBgImg})` }}>
      <div className={`${layout.container} py-14`}>
        <div className="">
          <h3 className="font-workSans text-center text-text-h font-bold text-[40px] leading-[26px] mb-16">
            Proven Statistics About Our Platform
          </h3>
          <div
            className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 py-[50px] px-[25px] rounded-b-3xl"
            style={{ backgroundImage: `url(${statinnerBg})` }}>
            <div className="flex flex-col items-center pt-[25px] pb-[18px] px-3 text-center w-full md:w-1/4">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-secondary text-[60px] mb-5"
              />
              <h4 className="font-workSans font-bold text-white text-[50px] my-3">
                30.3k
              </h4>
              <p className="font-workSans font-semibold text-[#e4e4e4] text-[16px] mt-2">
                DOWNLOAD
              </p>
            </div>
            <div className="flex flex-col items-center pt-[25px] pb-[18px] px-3 text-center border-l-2 border-dashed border-white w-full md:w-1/4">
              <FontAwesomeIcon
                icon={faFileAlt}
                className="text-secondary text-[60px] mb-5"
              />
              <h4 className="font-workSans font-bold text-white text-[50px] my-3">
                40.5k
              </h4>
              <p className="font-workSans font-semibold text-[#e4e4e4] text-[16px] mt-2">
                PAST QUESTIONS
              </p>
            </div>
            <div className="flex flex-col items-center pt-[25px] pb-[18px] px-3 text-center border-l-2 border-dashed border-white w-full md:w-1/4">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="text-secondary text-[60px] mb-5"
              />
              <h4 className="font-workSans font-bold text-white text-[50px] my-3">
                88.9k
              </h4>
              <p className="font-workSans font-semibold text-[#e4e4e4] text-[16px] mt-2">
                INSTRUCTORS
              </p>
            </div>
            <div className="flex flex-col items-center pt-[25px] pb-[18px] px-3 text-center border-l-2 border-dashed border-white w-full md:w-1/4">
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                className="text-secondary text-[60px] mb-5"
              />
              <h4 className="font-workSans font-bold text-white text-[50px] my-3">
                100k
              </h4>
              <p className="font-workSans font-semibold text-[#e4e4e4] text-[16px] mt-2">
                LESSONS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
