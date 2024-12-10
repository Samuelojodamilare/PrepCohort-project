import { effortlessImg } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import { consoleUrl } from "../../services/graphqlClient";
import useIntersectionObserver from "../../constant/useIntersectionObserver";

const EffortlessGrading = () => {
  useIntersectionObserver(".section-info", "animate-fadeRight");
  useIntersectionObserver(".section-img", "animate-fadeLeft");
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.content}`}>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[600px] xl:w-[500px] 1xl:w-[600px] h-auto">
              <img
                src={effortlessImg}
                alt="group of people learning"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className={`${layout.sectionInfo} ml-6 max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              Effortless Grading System
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              Grading and feedback have never been easier and better integrated.
              You can use auto-grading, rubric, standard grading or any
              combination of the 3 in our platform while feedback can be done
              individually or addressed to people with similar grades or
              learning status.
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

export default EffortlessGrading;
