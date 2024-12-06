import { layout } from "../../style";
import { whyPrepcohort } from "../../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyPrepcohort = () => {
  return (
    <section className={`${layout.section} bg-bg-sc2`}>
      <div className={`${layout.container}`}>
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="font-workSans text-text-h font-bold text-[30px] md:text-[40px] leading-[26px] mb-[11px]">
            Why Prepcohort?
          </h3>
          <p className="font-workSans text-[16px] text-lg text-text-c">
            Opt for Prepcohort as your e-learning platform as we provide
            outstanding features for your teaching convenience
          </p>
        </div>
        <div
          className={`${layout.sectionInfo} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-20`}>
          {whyPrepcohort.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white p-6 space-y-4 rounded-lg h-full shadow-lg">
              <div className="bg-text-blue/10 self-start rounded-lg p-4">
                {" "}
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-text-blue text-2xl font-black"
                />
              </div>
              <h4 className="font-workSans text-2xl text-cards-h font-semibold">
                {item.title}
              </h4>
              <p className="font-workSans text-[16px] text-cards-p leading-6">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPrepcohort;
