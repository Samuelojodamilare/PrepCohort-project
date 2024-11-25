import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerBg, pcLogo } from "../assets";
import { footer, socials } from "../constant";
import { layout } from "../style";

const Footer = () => {
  return (
    <section
      className={`${layout.section} !pb-0 bg-text-h bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url(${footerBg})` }}>
      <div className={`${layout.container} pt-16`}>
        <div>
          <a
            href="#"
            className="flex items-center text-white text-[32px]"
            aria-label="Homepage link">
            <div className="w-[50px] h-auto">
              <img
                src={pcLogo}
                alt="Prepcohort logo"
                width={50}
                height={50}
                className="w-full h-auto object-contain"
              />
            </div>
            <h3>
              <b>Prep</b>
              Cohort
            </h3>
          </a>
        </div>
        <ul>
          {footer.map((item) => (
            <li key={item.id} className="flex my-[26px] ">
              <FontAwesomeIcon
                icon={item.iconUrl}
                className="text-secondary w-6 h-6 mr-4"
              />

              {item.title === "email" ? (
                <a
                  href={`mailto: ${item.text}`}
                  className="text-text-f transition-colors duration-300 hover:text-text-f/70">
                  {item.text}
                </a>
              ) : item.title === "phone" ? (
                <a
                  href={`tel: ${item.text}`}
                  className="text-text-f transition-colors duration-300 hover:text-text-f/70">
                  {item.text}
                </a>
              ) : (
                <p className="text-text-f">{item.text}</p>
              )}
            </li>
          ))}
        </ul>
        <div className="pb-16">
          <ul className="flex space-x-4">
            {socials.map((item) => (
              <li
                key={item.id}
                className="border border-primary rounded-full py-2 px-3 flex hover:bg-primary transition duration-300">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white ">
                  <FontAwesomeIcon icon={item.iconUrl} className=" w-4 h-4 " />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-bg-f text-center py-7">
        <p className="font-workSans 0.5xl:text-[16px] text-[15px] leading-[21px] text-text-f ">
          Copyright © <span>{new Date().getFullYear()}</span>{" "}
          <a
            href="https://prepcohort.com/#"
            className="hover:text-secondary/80 transition-colors duration-500">
            PrepCohort
          </a>{" "}
          |{" "}
          <a
            href="https://study4as.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary/80 transition-colors duration-500">
            POWERED By Study4as
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
