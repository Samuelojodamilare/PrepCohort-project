import React from "react";
import { schoolbannerImg } from "../../assets";
import { consoleUrl } from "../../services/graphqlClient";
import { layout } from "../../style";
import Button from "./../common/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <section id="hero" className={`relative bg-bg-sc1 mt-0.5 overflow-hidden`}>
      <div className={`${layout.container} pt-[166px] `}>
        <div className={`${layout.content} `}>
          <div className="1xl:px-[18px] pb-10 xl:mb-0 xl:pt-[45px] 1xl:pt-[90px]">
            <h2 className="font-workSans text-text-sch text-[40px] 0.5xl:text-[55px] 1xl:text-[70px] leading-[48px] 0.5xl:leading-[65px] 1xl:leading-[85px] font-bold mb-3 md:max-w-[730px]">
              Join Prepcohort and take charge of your own virtual school
            </h2>
            <p className="font-workSans text-black text-[16px] leading-[32px] mb-[30px] 0.5xl:max-w-[550px]">
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
          <div className="flex flex-1 justify-end items-start xl:ml-10 overflow-hidden">
            <div className="absolute top-[170px] right-[10px] xl:w-[455px] xl:h-[455px] 1xl:w-[600px] 1xl:h-[600px] 2xl:w-[642px] 2xl:h-[642px] rounded-full p-[34px] bg-gradient-to-br from-[#FF7200] to-[#6A78FF] flex justify-center items-center">
              <div className="absolute top-[30px] right-[50px] w-[540px] h-auto">
                <img
                  src={schoolbannerImg}
                  alt="a boy with a laptop"
                  height={532}
                  width={532}
                  className="w-full h-auto object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
