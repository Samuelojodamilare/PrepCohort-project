import { practiceBg, practiceDesign } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersectionObserver from "../../constant/useIntersectionObserver";

const PracticeMode = () => {
  useIntersectionObserver(".section-info", "animate-slideUp");
  return (
    <section
      className={`${layout.section} relative`}
      style={{
        backgroundImage: `url(${practiceBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className={`${layout.container} relative z-10 py-8`}>
        <div className={`flex justify-center items-center section-info hide`}>
          <div className="text-center">
            <h3 className="font-workSans font-bold text-white text-[35px] xl:text-[40px] leading-[40px] mb-[34px]">
              Plunge into Practice Mode
            </h3>
            <p className="font-poppins font-normal text-white text-[22px] leading-6 mb-[34px] max-w-[609px]">
              Access diverse question bank that provides a wide range of
              practice questions to reinforce your understanding and prepare you
              thoroughly for exams
            </p>
            <Button className={`button-secondary`}>
              Start Practising Now
              <FontAwesomeIcon
                icon={faArrowRight}
                className="hidden 2xl:block"
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-text-h/75 z-0"></div>
      <div className="hidden 2xl:block absolute right-0 top-0">
        <img src={practiceDesign} alt="design" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default PracticeMode;
