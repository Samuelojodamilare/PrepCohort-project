import { heroImg1 } from "../../assets";
import { frontendUrl } from "../../services/graphqlClient";
import { layout } from "../../style";
import Button from "./../common/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersectionObserver from "../../constant/useIntersectionObserver";

const Hero = () => {
  useIntersectionObserver(".section-info", "animate-fadeRight");
  useIntersectionObserver(".section-img", "animate-fadeLeft");
  return (
    <section id="hero" className={`relative bg-bg-st1 mt-0.5`}>
      <div className={`${layout.container} pt-[166px]`}>
        <div className={`${layout.content}`}>
          <div className="1xl:px-[18px] pb-10 xl:mb-0 xl:pt-[45px] 1xl:pt-[90px] section-info hide">
            <h2 className="font-workSans text-black text-[40px] 0.5xl:text-[55px] 1xl:text-[70px] leading-[48px] 0.5xl:leading-[65px] 1xl:leading-[85px] font-bold mb-3 md:max-w-[510px]">
              Access expert guidance and tailored resources for exam success
            </h2>
            <p className="font-workSans text-black text-[16px] leading-[32px] mb-[30px] 0.5xl:max-w-[469px]">
              Empower your future through education! Join thousands learning
              together on Prepcohort. Practice along as you study,
            </p>
            <div className="flex gap-5 mb-14">
              <Button className={`button-secondary `}>
                Start Practicing
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="hidden 2xl:block"
                />
              </Button>
              <Button
                className={`text-black border border-white`}
                href={frontendUrl}>
                Join a School
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
          <div className="section-img hide flex flex-1 justify-end items-start xl:ml-10">
            <div className="relative xl:w-[455px] xl:h-[455px] 1xl:w-[600px] 1xl:h-[600px] 2xl:w-[642px] 2xl:h-[642px] rounded-full p-[34px] bg-gradient-to-br from-[#FF7200] to-[#6A78FF] flex justify-center items-center">
              <img
                src={heroImg1}
                alt="a boy with a laptop"
                height={532}
                width={532}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
