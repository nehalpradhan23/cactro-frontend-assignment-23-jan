const menuItems = [
  "Dashboard",
  "Projects",
  "Team",
  "Clients",
  "Time",
  "Reports",
];

import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-slate-900 p-4 flex justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-[1240px]">
        <h1 className="text-3xl tracking-[0.2em] font-medium">
          <span className="text-teal-500">H</span>
          <span className="text-white">OURS</span>
        </h1>
        {/* middle menu ===================== */}
        <div className="flex text-white gap-6 items-center font-thin">
          {menuItems?.map((item, index) => (
            <div
              className={`${
                index === 0
                  ? "underline decoration-teal-500 decoration-2 underline-offset-4"
                  : ""
              }`}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        {/* right side ----------------------------- */}
        <div className="text-white flex items-center gap-4">
          <div className="relative">
            <FaRegBell className="text-lg" />
            <div className="rounded-full p-1 bg-red-600 w-fit absolute top-0 right-0"></div>
          </div>
          <div className="flex items-center gap-2">
            {/* <Image src={""} alt="" /> */}
            <span className="rounded-full h-9 w-9 bg-white flex items-center justify-center text-black">
              U
            </span>
            Mario
            <IoIosArrowDown className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
