import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-start bg-white p-6 m-4 rounded-lg shadow-lg min-h-[350px]">
      <div className="flex mb-[21px]">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="text-yellow-500"
          />
        ))}
      </div>
      <p className="font-workSans font-medium text-text-p 1xl:text-[18px] text-[16px] 1xl:leading-[37px] leading-[30px] max-w-[349px] mb-[18px]">
        {testimonial.text}
      </p>

      <div className="flex max-0.5xl:mt-auto">
        <img
          src={testimonial.image}
          alt={testimonial.title}
          className="lg:w-12 w-8 lg:h-12 h-8 mr-4"
        />
        <h3 className="font-workSans font-bold text-text-h lg:text-[22px] text-[18px] lg:leading-[35px] leading-[30px]">
          {testimonial.title}
        </h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
