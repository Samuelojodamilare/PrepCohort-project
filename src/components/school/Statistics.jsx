import React, { useEffect, useRef } from "react";
import { layout } from "../../style";
import { statBgImg, statinnerBg } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faDownload,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { CountUp } from "countup.js";

const Statistics = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const section = sectionRef.current;
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            const counters = document.querySelectorAll(".counter");
            counters.forEach((counter) => {
              const target = parseFloat(counter.getAttribute("data-target"));
              const countUp = new CountUp(counter, target, {
                duration: 2,
                decimalPlaces: 1,
                suffix: "K",
              });
              if (!countUp.error) {
                countUp.start();
              } else {
                console.error(countUp.error());
              }
            });
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      if (section) observer.observe(section);
      return () => observer.disconnect();
    }
  }, []);
  return (
    <section
      className={`${layout.section} bg-no-repeat bg-contain bg-center`}
      style={{ backgroundImage: `url(${statBgImg})` }}
      ref={sectionRef}>
      <div className={`${layout.container} py-7 md:py-14`}>
        <div className="">
          <h3 className="font-workSans text-center text-text-h font-bold text-[30px] md:text-[40px] leading-[35px] md:leading-[45px] mb-8 md:mb-16">
            Proven Statistics About Our Platform
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 py-[50px] px-[25px] rounded-b-3xl shadow-lg"
            style={{ backgroundImage: `url(${statinnerBg})` }}>
            <div className="flex flex-col items-center pt-[25px] pb-[18px] px-3 text-center">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-secondary text-[60px] mb-5"
              />
              <span
                className="counter font-workSans font-bold text-white text-[50px] my-3"
                data-target="30.3">
                0
              </span>
              <p className="font-workSans font-semibold text-[#e4e4e4] text-[16px] mt-2">
                DOWNLOAD
              </p>
            </div>
            <div className="flex flex-col items-center pt-[25px] pb-[18px] px-3 text-center max-0.5xl:border-t-2 md:border-l-2 border-dashed border-white">
              <FontAwesomeIcon
                icon={faFileAlt}
                className="text-secondary text-[60px] mb-5"
              />
              <span
                className="counter font-workSans font-bold text-white text-[50px] my-3"
                data-target="40.5">
                0
              </span>
              <p className="font-workSans font-semibold text-[#e4e4e4] text-[16px] mt-2">
                PAST QUESTIONS
              </p>
            </div>
            <div className="flex flex-col items-center pt-[25px] pb-[18px] px-3 text-center max-0.5xl:border-t-2 xl:border-l-2 border-dashed border-white">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="text-secondary text-[60px] mb-5"
              />
              <span
                className="counter font-workSans font-bold text-white text-[50px] my-3"
                data-target="88.9">
                0
              </span>
              <p className="font-workSans font-semibold text-[#e4e4e4] text-[16px] mt-2">
                INSTRUCTORS
              </p>
            </div>
            <div className="flex flex-col items-center pt-[25px] pb-[18px] px-3 text-center max-0.5xl:border-t-2 md:border-l-2 border-dashed border-white">
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                className="text-secondary text-[60px] mb-5"
              />
              <span
                className="counter font-workSans font-bold text-white text-[50px] my-3"
                data-target="100">
                0
              </span>
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
