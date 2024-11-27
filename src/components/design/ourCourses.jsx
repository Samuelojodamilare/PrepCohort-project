import { frontendUrl } from "../../services/graphqlClient";
import { courseImg } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";

const ourCourses = ({ imageUrl, label, institutionName, id }) => {
  return (
    <a
      href={`${frontendUrl}/explore/course-intro/${id}`}
      target="_blank"
      rel="noreferrer"
      className="bg-white w-[300px] text-primary">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-[230px] h-[150px] ">
          <img
            src={courseImg}
            alt="chalkboard"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center my-3">
            <div>
              <p>{label}</p>
              <p>{institutionName}</p>
            </div>
            <div>
              <span className="bg-green-400 text-[12px] text-white p-1 font-medium">
                New
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p>5.0</p>
              {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-yellow-500"
                />
              ))}
            </div>
            <div>
              <FontAwesomeIcon icon={faUsers} className="text-sm mr-2" />
              <p>202</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ourCourses;
