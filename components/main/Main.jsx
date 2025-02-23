import BottomCards from "./BottomCards";
import CenterGraphs from "./CenterGraphs";
import TopCards from "./TopCards";
import TopRight from "./TopRight";

const Main = () => {
  return (
    <div className="py-7 mx-auto flex flex-col items-center max-w-7xl px-4 gap-5">
      <div className="flex gap-8">
        <div className="flex flex-col gap-7 h-full">
          <TopCards />
          <CenterGraphs />
        </div>
        <TopRight />
      </div>
      <BottomCards />
    </div>
  );
};

export default Main;
