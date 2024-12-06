import React from "react";
import { layout } from "../../style";
import { offerImg } from "../../assets";
import { offer } from "../../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offer = () => {
  return (
    <section className={`${layout.section} bg-bg-sc2`}>
      <div className={`${layout.container}`}>
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="font-workSans text-text-h font-bold text-[30px] md:text-[40px] leading-[26px] mb-[11px]">
            What we offer
          </h3>
          <p className="font-workSans text-[16px] md:text-lg text-text-c">
            We provide innovative, comprehensive and user-friendly tools that
            empowers schools run effectively
          </p>
        </div>
        <div className={`${layout.content}`}>
          <div className={`${layout.sectionImg}`}>
            <div className="w-[550px] xl:w-[400px] 1xl:w-[550px] h-auto">
              <img
                src={offerImg}
                alt="A man standing folding arms"
                className="w-full h-auto"
              />
            </div>
            <img />
          </div>
          <div
            className={`${layout.sectionInfo} grid grid-cols-1 md:grid-cols-2 gap-6 mt-20`}>
            {offer.map((item) => (
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
      </div>
    </section>
  );
};

export default Offer;
