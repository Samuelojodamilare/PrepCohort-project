import { AIImg } from "../assets";
import { layout } from "../style";
import Button from "./Button";
const AISupport = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.content}`}>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[550px] h-auto">
              <img src={AIImg} alt="guy and a lady" className="w-full h-auto" />
            </div>
          </div>
          <div className={`${layout.sectionInfo} max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              AI Academic Support
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              Fine-tune your learning experience with our artificial
              intelligence powered system. With it you can generated related
              questions, lessons content in your learning style and
              recommendations based on your learning progress.
            </p>
            <Button className={`button-primary`}>Start Learning Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISupport;
