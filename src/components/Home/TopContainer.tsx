import dynamic from "next/dynamic";

const MapNoSSR = dynamic(() => import("../Map-V2"), {
  ssr: false,
});

const TopContainer = () => {
  return (
    <>
      <div className="mt-6 flex flex-col items-center justify-center space-y-6">
        <blockquote className="text-center italic">
          &ldquo;Passion Équestre, À Deux Pas&rdquo;
        </blockquote>
        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <button
              style={{ width: "20em" }}
              className="h-2em rounded-full bg-[#FEC5BB]  px-6 py-4 font-bold  text-white  hover:bg-[#E8E8E4]"
            >
              Pension
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              style={{ width: "20em" }}
              className="rounded-full bg-[#FEC89A] px-6 py-4 font-bold text-white hover:bg-[#E8E8E4]"
            >
              Demi-pension
            </button>
          </div>
        </div>
        <div
          id="maptest"
          style={{ height: "48vh" }}
          className="h-[calc(100vh - 100px)] sm:h-[calc(100vh - 150px)] sticky top-0 min-h-[200px] w-full "
        >
          <MapNoSSR></MapNoSSR>
        </div>
      </div>
    </>
  );
};

export default TopContainer;
