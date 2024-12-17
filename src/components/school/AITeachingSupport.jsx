import { schoolAI } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import { consoleUrl } from "../../services/graphqlClient";
import useIntersectionObserver from "../../constant/useIntersectionObserver";

const AITeachingSupport = () => {
  useIntersectionObserver(".section-info", "animate-fadeRight");
  useIntersectionObserver(".section-img", "animate-fadeLeft");
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.contentReverse}`}>
          <div className={`${layout.sectionInfo} max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              AI Teaching Support
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              Using prepcohort gives you the option to leverage AI Assistance
              every step of managing your student learning process. From
              knowledge testing, creating lessons, grading and even in reports,
              recommendation etc, AI is plugged in as an optional assistant to
              be leverage at will to make you far more accurate , efficient and
              more personal as an instructor,
            </p>
            <Button className={`button-secondary`} href={consoleUrl}>
              Start Teaching Now
            </Button>
          </div>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[550px] xl:w-[400px] 1xl:w-[550px] h-auto">
              <img
                src={schoolAI}
                alt="screenshot of courses in s4a"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITeachingSupport;
