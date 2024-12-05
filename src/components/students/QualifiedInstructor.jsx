import { instructorImg } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";

const QualifiedInstructor = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.content}`}>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[550px] h-auto">
              <img
                src={instructorImg}
                alt="guy and a lady"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className={`${layout.sectionInfo} max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              Qualified Instructors
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              Learn from experienced professionals across different schools who
              bring expertise and real-world insights to your virtual classroom,
              guaranteeing a high-quality and enriching learning experience. You
              can join the community for up close mentorship.
            </p>
            <Button className={`button-primary`}>Start Learning Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifiedInstructor;
