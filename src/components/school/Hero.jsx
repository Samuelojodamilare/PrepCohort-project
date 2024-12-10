import React from "react";
import { schoolbannerImg } from "../../assets";
import { consoleUrl } from "../../services/graphqlClient";
import { layout } from "../../style";
import Button from "./../common/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersectionObserver from "../../constant/useIntersectionObserver";

const Hero = () => {
  useIntersectionObserver(".section-info", "animate-fadeRight");
  useIntersectionObserver(".section-img", "animate-fadeLeft");
  return (
    <section id="hero" className={`relative bg-bg-sc1 mt-0.5 overflow-hidden`}>
      <div className={`${layout.container} pt-[166px] `}>
        <div className={`${layout.content} `}>
          <div className="1xl:px-[18px] pb-10 xl:mb-0 xl:pt-[45px] 1xl:pt-[90px] section-info hide">
            <h2 className="font-workSans text-text-sch text-[40px] 0.5xl:text-[55px] 1xl:text-[70px] leading-[48px] 0.5xl:leading-[65px] 1xl:leading-[85px] font-bold mb-3 xl:max-w-[500px] 2xl:max-w-[730px] md:max-w-[730px]">
              Join Prepcohort and take charge of your own virtual school
            </h2>
            <p className="font-workSans text-black text-[16px] leading-[32px] mb-[30px] xl:max-w-[500px] 0.5xl:max-w-[550px]">
              Connect with a larger student base and also bring your students
              onboard and provide quality education to diverse learners
            </p>
            <div className="flex gap-5 mb-14">
              <Button className={`button-secondary `} href={consoleUrl}>
                Register Now
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="hidden 2xl:block"
                />
              </Button>
            </div>
            <a
              href="https://study4as.com"
              className="text-[24px] text-text-blue font-poppins"
              aria-label="Powered by Study4AS">
              Powered by Study4AS
            </a>
          </div>
          <div className="section-img hide inline-block xl:absolute relative z-[2] xl:right-[60px] xl:top-[-80px] 2xl:right-[30px] mx-auto xl:my-[75px] xl:mb-[-100px] xl:flex xl:justify-center mt-[-40px] mr-[-32px] mb-[-165px] right-[5px] top-[120px] md:right-[-70px] md:top-[110px] md:mt-0">
            <div className="relative top-[-100px] right-[0] md:right-[70px] xl:top-[190px] 2xl:right-[70px] xl:right-[0] xl:w-[450px] 2xl:w-[540px] h-auto z-10">
              <img
                src={schoolbannerImg}
                alt="a boy with a laptop"
                height={532}
                width={532}
                className="w-full h-auto object-cover "
              />
            </div>
            <div className="hidden xl:block absolute top-[170px] right-[10px] xl:w-[455px] xl:h-[455px] 1xl:w-[600px] 1xl:h-[600px] 2xl:w-[642px] 2xl:h-[642px] rounded-full p-[34px] bg-gradient-to-br from-[#FF7200] to-[#6A78FF]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
