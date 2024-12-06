import { schInterwovenImg } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import { consoleUrl } from "../../services/graphqlClient";

const InterwovenCourses = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.contentReverse}`}>
          <div className={`${layout.sectionInfo} max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              Interwoven Practices and Courses
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              Your students can effortlessly transition from practice sessions
              to related courses and vice versa. This interconnected approach
              ensures a fluid educational journey, allowing students to
              reinforce their understanding by navigating between relevant
              courses and related practice questions with ease
            </p>
            <Button className={`button-secondary`} href={consoleUrl}>
              Start Now
            </Button>
          </div>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[500px] xl:w-[400px] 1xl:w-[570px] h-auto">
              <img
                src={schInterwovenImg}
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

export default InterwovenCourses;
