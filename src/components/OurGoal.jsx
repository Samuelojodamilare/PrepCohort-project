import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ourgoalbg } from "../assets";
import { goal } from "../constant";
import { layout } from "../style";

const OurGoal = () => {
  return (
    <section
      className={`${layout.section} bg-bg-st1/65`}
      style={{ backgroundImage: `url(${ourgoalbg})` }}>
      <div className={`${layout.container}`}>
        <div className={`flex flex-col`}>
          <div className="flex flex-col xl:flex-row">
            <div className="flex-1 mb-[40px] pr-3 2xl:pr-[18px]">
              <h4 className="text-primary font-workSans font-semibold text-[24px] mb-[11px]">
                Our Goal
                <svg
                  className="relative inline-block w-[55px] overflow-hidden ml-[9px] fill-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 55 13">
                  <g clipPath="url(#clip0_324_36194)">
                    <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                    <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                    <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                    <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                  </g>
                </svg>
              </h4>
              <h3 className="text-text-h font-workSans font-semibold text-[30px] md:text-[40px] leading-[40px] md:leading-[47px]">
                Ensuring your Excellence with Guiding Tools
              </h3>
            </div>
            <div className="flex-1 pl-3 2xl:pl-[18px]">
              <p className="text-text-p font-workSans font-semibold leading-[32px] pt-[10px] mb-[35px] xl:mb-0 xl:mt-[18px] border-t-2 border-secondary">
                With Prepcohort, you never learn alone. Join a vibrant community
                of motivated learners where you can engage in discucssions, seek
                assistance, and share insights. Collaborate with fellow
                students, connect with qualified instructors from different
                schools, and foster supportive environment to enhance your
                educational journey
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            {goal.map((item) => (
              <div
                key={item.id}
                className="relative z-20 overflow-hidden bg-white text-black p-6 rounded-lg shadow-lg hover:text-white transition-all duration-500 ease-in-out hover:bg-transparent">
                <div className="relative z-20 flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-4xl text-secondary mb-4"
                  />
                  <h4 className="font-semibold text-xl mb-2 ">{item.title}</h4>
                  <p className="text-center">{item.text}</p>
                </div>
                {/* <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="absolute inset-0 bg-text-h/75 z-10"></div>
                </div> */}
                {/* <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.3)", // dimming the image
                    zIndex: 11,
                  }}></div>
                <div className="absolute inset-0 bg-[rgba(54,48,93,0.92)] opacity-0 transition-opacity duration-500 hover:opacity-100 z-10 "></div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
