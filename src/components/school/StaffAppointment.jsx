import { staffAppointImg } from "../../assets";
import { layout } from "../../style";
import Button from "./../common/Button";
import { consoleUrl } from "../../services/graphqlClient";

const StaffAppointment = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.content}`}>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[600px] xl:w-[500px] 1xl:w-[650px] h-auto">
              <img
                src={staffAppointImg}
                alt="group of people learning"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className={`${layout.sectionInfo} ml-6 max-1xl:pt-[45px]`}>
            <h4 className="text-primary font-bold font-workSans text-[22px] md:text-[24px] leading-[26px] mb-[21px]">
              Staff/Roles Appointment
            </h4>
            <p className="text-[16px] font-workSans leading-[26px] text-text-p mb-[33px] max-w-[513px] ">
              Schools can efficiently manage staff roles and appointments on
              Prepcohort, empowering administrators to assign specific roles to
              educators and other staff members. This feature streamlines
              responsibilities, ensuring a well-structured and collaborative
              environment.
            </p>
            <Button className={`button-primary`} href={consoleUrl}>
              Start Learning Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffAppointment;