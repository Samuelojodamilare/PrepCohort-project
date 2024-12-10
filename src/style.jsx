const styles = {
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "px-3 0.5xl:px-10",
  paddingY: "py-12 0.5xl:py-16",

  marginX: "mx-0 0.5xl:mx-10",
  marginY: "my-2 0.5xl:my-4",

  paragraph:
    "font-poppins font-normal text-text-p text-[14px] leading-[26px] max-w-[321px]",
  heading5:
    "font-workSans font-bold text-primary text-[24px] leading-[26px] mb-[21px]",
};

export const layout = {
  section: `${styles.paddingY} w-full`,

  contentReverse: `flex flex-col-reverse xl:flex-row ${styles.marginX}`,
  content: `flex flex-col xl:flex-row`,

  sectionImg: `${styles.flexCenter} section-img hide flex-1 relative`,
  sectionImgReverse: `${styles.flexCenter} flex-1 relative`,

  sectionInfo: `${styles.flexStart}  section-info hide flex-1 flex-col`,
  container: `px-3 2xl:px-[18px] 2xl:max-w-[1356px] 1xl:max-w-[1140px] xl:max-w-[960px] 0.5xl:max-w-[540px] md:max-w-[720px] w-full mx-auto`,
};

export default styles;
