import { appstoreImg, mobilePhone, playstoreImg } from "../../assets";
import { layout } from "../../style";
import useIntersectionObserver from "./../../constant/useIntersectionObserver";

const Mobile = () => {
  useIntersectionObserver(".section-info", "animate-fadeRight");
  useIntersectionObserver(".section-img", "animate-fadeLeft");
  return (
    <section className={`${layout.section} bg-bg-m`}>
      <div className={`${layout.container}`}>
        <div className={`${layout.contentReverse}`}>
          <div
            className={`${layout.sectionInfo} section-info hide max-md:pt-[45px] `}>
            <h3 className="font-workSans font-bold text-[24px] leading-[26px] text-[#31265a] mb-[21px]">
              Download Mobile Version
            </h3>
            <p className="font-workSans text-[16px] text-text-p leading-[26px] mb-[33px] max-w-[513px]">
              To download the mobile version of Prepcohort, please visit the
              Google Play Store or Apple App Store on your mobile device.
            </p>
            <div className="flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.prepcohort.app&pcampaignid=web_share&_gl=1*1dqaqm4*_gcl_au*MTEzNTQ3NjY0Ny4xNzMxNzkyOTcz"
                className="flex items-center justify-center bg-black p-[10px] mb-6 rounded-lg">
                <img
                  src={playstoreImg}
                  height={32}
                  width={32}
                  alt="playstore logo"
                />
                <div className="px-3">
                  <p className="font-workSans text-sm text-white">GET IT ON</p>

                  <p className="font-workSans text-sm text-white font-semibold">
                    Google Play
                  </p>
                </div>
              </a>

              <a
                href="https://apps.apple.com/ng/app/prepcohort/id6738427505"
                className="flex items-center justify-center bg-black p-[10px] mb-6 rounded-lg">
                <img
                  src={appstoreImg}
                  height={32}
                  width={32}
                  alt="playstore logo"
                />
                <div className="px-3">
                  <p className="font-workSans text-sm text-white">GET IT ON</p>

                  <p className="font-workSans text-sm text-white font-semibold">
                    App Store
                  </p>
                </div>
              </a>
            </div>
            {/* <div className="flex items-center justify-center bg-black p-[10px] mb-6 rounded-lg">
              <img
                src={playstoreImg}
                height={32}
                width={32}
                alt="playstore logo"
              />
              <div className="px-3">
                <p className="font-workSans text-sm text-white">GET IT ON</p>

                <p className="font-workSans text-sm text-white font-semibold">
                  Google Play
                </p>
              </div>
            </div> */}
          </div>
          <div className={`${layout.sectionImg} section-img hide`}>
            <div className="w-[500px] xl:w-[400px] 1xl:w-[500px] h-auto">
              <img src={mobilePhone} alt="phone" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
