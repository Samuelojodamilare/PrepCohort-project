import { moreStudentImg } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import { consoleUrl } from "../../services/graphqlClient";
const MoreStudent = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.contentReverse}`}>
          <div className={`${layout.sectionInfo} max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              Reach More Students
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              You can set your school up privately and only invite student to a
              cohort with emailed access or you can publish your courses
              publicly and allow learners to pay and register to join a cohort
              in the specific course
            </p>
            <Button className={`button-secondary`} href={consoleUrl}>
              Register Now
            </Button>
          </div>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[650px] h-auto">
              <img
                src={moreStudentImg}
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

export default MoreStudent;
