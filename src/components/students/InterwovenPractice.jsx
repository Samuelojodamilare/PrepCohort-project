import { interwovenImg } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import useIntersectionObserver from "../../constant/useIntersectionObserver";
const InterwovenPractice = () => {
  useIntersectionObserver(".section-info", "animate-fadeRight");
  useIntersectionObserver(".section-img", "animate-fadeLeft");
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.contentReverse}`}>
          <div className={`${layout.sectionInfo} max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              Interwoven Practices and Courses
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              Students can effortlessly transition from practice sessions to
              related courses and vice versa. This interconnected approach
              ensures a fluid educational journey, allowing studens to reinforce
              their understanding by navigating between relevant courses and
              related practice questions with ease
            </p>
            <Button className={`button-secondary`}>Start Now</Button>
          </div>
          <div className={`${layout.sectionImg} `}>
            <div className="w-[550px] xl:w-[400px] 1xl:w-[550px] h-auto">
              <img
                src={interwovenImg}
                alt="answer sheet and a pencil"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterwovenPractice;
