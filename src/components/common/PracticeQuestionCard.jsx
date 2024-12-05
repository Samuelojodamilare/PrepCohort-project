import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { frontendUrl } from "../../services/graphqlClient";
import TruncateText from "../../libs/TruncateText";
import { faPercent, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";

const PracticeQuestionCard = ({ label, id, description }) => {
  return (
    <a
      href={`${frontendUrl}/explore?searchTab=questions_bank`}
      // href={`${frontendUrl}/quiz/quiz/MOCK/${id}`}
      target="_blank"
      rel="noreferrer"
      className="bg-white max-w-[80%] min-w-[300px] overflow-hidden">
      <div
        className="flex flex-col items-center font-workSans space-y-2 rounded-xl my-10 mr-[30px]"
        style={{
          boxShadow: "11px 15px 30px 0px rgba(128, 137, 225, 0.1)",
        }}>
        <div className="w-full h-[150px] bg-[#1F4497] flex-col p-4 justify-center items-center box-border">
          <div className="rounded-full w-[85px] h-[85px] mx-auto flex justify-center items-center bg-white mb-2">
            <p className="text-2xl p-0 m-0 text-center font-semibold text-[#1F4497]">
              {label[0]}
            </p>
          </div>
          <div className="p-0 m-0 text-center text-white font-medium">
            {label}
          </div>
        </div>

        <div className="flex flex-col p-4 w-full">
          <div className="flex justify-between items-center">
            {description && (
              <p className="p-0 m-0 text-sm font-semibold text-[#1F4497]">
                {TruncateText(description, 19)}
              </p>
            )}
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-yellow-300 text-[12px]"
                />
              ))}
              <p className="p-0 m-0 text-sm font-semibold text-black ml-2">
                5.0
              </p>
            </div>
          </div>

          <div className="mt-4 mb-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-sm mr-2 bg-[#1F4497] text-white p-[6px] rounded-full"
                />
                <p className="p-0 m-0 text-sm font-semibold text-black">
                  Total Attempts{" "}
                </p>
              </div>
              <p className="text-sm p-0 m-0 font-semibold text-black">10</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPercent}
                  className="text-lg mr-2 bg-[#1F4497] text-white py-[6px] px-[9px] rounded-full"
                />
                <p className="p-0 m-0 text-sm font-semibold text-black">
                  Average Score{" "}
                </p>
              </div>
              <p className="text-sm p-0 m-0 font-semibold text-black">100%</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PracticeQuestionCard;
