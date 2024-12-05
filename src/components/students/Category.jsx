import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categoryBg } from "../../assets";
import { category } from "../../constant";
import { layout } from "../../style";
import { frontendUrl } from "../../services/graphqlClient";

const Category = () => {
  return (
    <section
      className={`${layout.section} flex items-center justify-center bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${categoryBg})` }}>
      <div className={`${layout.container}`}>
        <div className="flex flex-col text-center mb-[50px] pt-16">
          <h2 className="font-workSans text-primary font-bold text-[24px] leading-[26px] mb-[11px]">
            Our Categories
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
          </h2>
          <p className="font-workSans font-bold text-[40px] leading-[47px] text-text-h">
            Favorite Categories to Learn From
          </p>
        </div>
        <div className="grid gap-6 0.5xl:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-5">
          {category.map((item) => (
            <a href={`${frontendUrl}/explore`} key={item.id}>
              <div
                key={item.id}
                className={`${item.size} md:px-[18px] px-3 relative bg-cover bg-center bg-no-repeat overflow-hidden`}
                style={{ backgroundImage: `url(${item.image})` }}>
                <div className="absolute inset-0 bg-text-h/75"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-secondary text-[60px] mb-5 "
                  />
                  <h3 className="text-[24px] text-white leading-[30px] font-bold hover:text-secondary transition-color duration-500 ease-in-out">
                    {item.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
          {/* <div
            className="h-24 w-full xl:h-24 xl:w-24 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${categoryImg1})` }}>
            <div className="absolute inset-0 bg-text-h/75 z-0"></div>
            <h4>Institutions</h4>
          </div>
          <div
            className="h-24 w-full xl:h-32 xl:w-24 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${categoryImg2})` }}>
            <div className="absolute inset-0 bg-text-h/75 z-0"></div>
            <h4>Institutions</h4>
          </div>
          <div
            className="h-24 w-full xl:h-32 xl:w-24 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${categoryImg3})` }}>
            <div className="absolute inset-0 bg-text-h/75 z-0"></div>
            <h4>Institutions</h4>
          </div>
          <div
            className="h-24 w-full xl:h-24 xl:w-24 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${categoryImg4})` }}>
            <div className="absolute inset-0 bg-text-h/75 z-0"></div>
            <h4>Institutions</h4>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Category;
