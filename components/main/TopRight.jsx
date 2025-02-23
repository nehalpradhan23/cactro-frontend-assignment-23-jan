const moods = {
  sad: { icon: "☹️", scale: 2 },
  happy: { icon: "😀", scale: 5 },
  angry: { icon: "😡", scale: 1 },
  average: { icon: "😐", scale: 3 },
  okay: { icon: "☺️", scale: 4 },
};

const userData = [
  {
    image: "",
    username: "Andrea",
    jobTitle: "UX Junior",
    mood: moods.sad,
  },
  {
    image: "",
    username: "Alvaro",
    jobTitle: "Back end developer",
    mood: moods.happy,
  },
  {
    image: "",
    username: "Juan",
    jobTitle: "UX Senior",
    mood: moods.okay,
  },
  {
    image: "",
    username: "Jose",
    jobTitle: "Marketing",
    mood: moods.angry,
  },
  {
    image: "",
    username: "Maria",
    jobTitle: "UX Junior",
    mood: moods.average,
  },
];

const TopRight = () => {
  return (
    <div className="bg-white py-4 px-4 shadow-lg rounded-md">
      <span>Team mood</span>
      <div className="flex flex-col gap-5 mt-5">
        {userData?.map((item, index) => (
          <div className="flex flex-col gap-6 mx-2" key={index}>
            <div className="flex items-center gap-3">
              {/* image -------------- */}
              <div className="">
                <div className="h-[50px] w-[50px] overflow-hidden bg-gray-300 rounded-full">
                  <img src={"/image.png"} alt="" />
                </div>
              </div>
              {/* name --------------------- */}
              <div className="flex flex-col">
                <span>{item.username}</span>
                <span className="text-gray-400 text-sm">{item.jobTitle}</span>
              </div>
            </div>
            {/* mood ---------------------------- */}
            <div className="relative w-[95%]">
              <span
                className={`absolute -top-3`}
                style={{ left: `${(item?.mood?.scale - 1) * 25}%` }}
              >
                {item?.mood?.icon}
              </span>
              <div className="bg-gray-300 w-full h-[2px]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRight;
