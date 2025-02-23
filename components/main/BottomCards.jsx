import { FaPlus } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { BsSliders2 } from "react-icons/bs";

const headingData = [
  {
    icon: <FaPlus />,
    title: "Add New Project",
  },
  {
    icon: <FiDownload />,
    title: "Download report",
  },
  {
    icon: <CiCalendar />,
    title: "dd/mm/yyyy - dd/mm/yyyy",
  },
  {
    icon: <BsSliders2 />,
    title: "Filter",
  },
];

const cardData = [
  {
    title: "Insurance App",
    title2: "Verti",
    bar: 2,
    color: "red",
    title3: "100 hours over Budget",
  },
  {
    title: "Neo",
    title2: "Bankia",
    bar: 1,
    color: "yellow",
    title3: "1000 solid hours",
  },
  {
    title: "VR Website",
    title2: "Verti",
    bar: 1,
    color: "teal",
    title3: "2000 solid hours",
  },
  {
    title: "VR Website",
    title2: "Verti",
    bar: 2,
    color: "teal",
    title3: "1100 solid hours",
  },
];

const BottomCards = () => {
  return (
    <div className="flex w-full flex-col">
      {/* heading =========================== */}
      <div className="flex gap-4 items-center">
        <span className="text-3xl font-semibold">Budget status</span>
        <div className="flex gap-4">
          {headingData?.map((item, index) => (
            <div
              key={index}
              className={`border-teal-700 border-2 px-2 py-1 rounded-md text-sm flex items-center gap-2 ${
                index === 0 ? "bg-teal-700 text-white" : "text-teal-700"
              }`}
            >
              {item?.icon}
              {item?.title}
            </div>
          ))}
        </div>
      </div>
      {/* cards =======================================s= */}
      <div className="flex gap-4 mt-4 justify-between">
        {cardData?.map((item, index) => (
          <div
            className="bg-white shadow-md p-4 rounded-md w-[280px] flex flex-col gap-2"
            key={index}
          >
            {/* image and title ---------------- */}
            <div className="flex gap-3 justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-semibold">{item?.title}</span>
                <span className="text-gray-500 text-sm">{item?.title2}</span>
              </div>
              <div className="rounded-full h-[40px] w-[40px] bg-black/80 flex items-center justify-center"></div>
            </div>
            {/* ----------------------------- */}
            <div className="flex">
              <div className="flex flex-col *:flex *:justify-between text-sm">
                <div className="">
                  <span className="text-gray-500">Total Budget:</span>
                  <span>70.000 €</span>
                </div>
                <div className="">
                  <span className="text-gray-500">Profitability (100%):</span>
                  <span className={`${index === 0 ? "text-red-600" : ""}`}>
                    {index === 0 ? "-2.500" : "4000"} €
                  </span>
                </div>
              </div>
              <div className=""></div>
            </div>
            {/* color bar -------------------------------------- */}
            <div className="relative overflow-hidden rounded-full">
              <div
                className={`h-4 top-0 absolute ${
                  item?.bar === 1 ? "w-[50%]" : ""
                } ${item?.bar === 2 ? "w-full" : ""}`}
                style={{ backgroundColor: `${item?.color}` }}
              ></div>
              <div
                className={`h-4 rounded-full`}
                style={{ backgroundColor: `${item?.color}`, opacity: "30%" }}
              ></div>
            </div>
            {/* ---------------------------------- */}
            <div className="flex justify-between text-xs">
              <span>Actual hours: 1.100</span>
              <span className={`${index === 0 ? "text-red-600" : ""}`}>
                {item?.title3}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomCards;
