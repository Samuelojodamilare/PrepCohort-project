import { questionBankImg } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import useIntersectionObserver from "../../constant/useIntersectionObserver";

const AbundantQuestionBank = () => {
  useIntersectionObserver(".section-info", "animate-fadeRight");
  useIntersectionObserver(".section-img", "animate-fadeLeft");
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.contentReverse}`}>
          <div className={`${layout.sectionInfo} max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              Abundant Question Bank
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              Access a diverse question bank on our e-learning platform,
              providing a wide range of practice questions to reinforce your
              understanding and prepare you thoroghly for exams. From
              multiple-choice to in-depth problem-solving.
            </p>
            <Button className={`button-secondary`}>Start Now</Button>
          </div>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[550px] xl:w-[400px] 1xl:w-[570px] h-auto">
              <img
                src={questionBankImg}
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

export default AbundantQuestionBank;
