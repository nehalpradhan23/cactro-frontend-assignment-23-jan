import { AiOutlineAppstore } from "react-icons/ai";
import { LuCircleCheckBig } from "react-icons/lu";
import { BsArrowRepeat } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";

const cardData = [
  {
    text: "Total Projects",
    number: 5,
    icon: <AiOutlineAppstore />,
  },
  {
    text: "Completed",
    number: 1,
    icon: <LuCircleCheckBig />,
  },
  {
    text: "Ongoing",
    number: 3,
    icon: <BsArrowRepeat />,
  },
  {
    text: "Delayed",
    number: 1,
    icon: <BiError />,
  },
  {
    text: "Employees",
    number: 5,
    icon: <MdOutlinePeopleAlt />,
  },
];

const TopCards = () => {
  return (
    <div className="flex gap-8 flex-wrap justify-between">
      {cardData?.map((item, index) => (
        <div
          className={`bg-white h-[120px] w-[160px] shadow-lg flex flex-col p-2 rounded-sm ${
            index === 3 ? "bg-red-400" : ""
          }`}
        >
          <span
            className={`text-3xl ${
              index === 3 ? "text-red-600" : "text-teal-500"
            }`}
          >
            {item?.icon}
          </span>
          <div
            className={`flex items-center flex-col gap-3 justify-center -mt-2 ${
              index === 3 ? "text-white" : ""
            }`}
          >
            <span className="text-4xl font-extrabold">{item?.number}</span>
            <span className="text-sm">{item?.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
