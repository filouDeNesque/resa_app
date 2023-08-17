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
        <div className="flex flex-wrap	justify-center md:space-x-6">
          <div className="flex flex-col items-center">
            <button className=" xs:my-0 my-2 h-[1.8rem] w-[14rem] rounded-full bg-[#FEC5BB] font-bold text-[#1F3C64]   shadow hover:bg-[#E8E8E4] md:mx-1 md:my-0 md:h-[2rem] md:w-[20rem]  ">
              Pension
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button className="xs:my-0 my-2 h-[1.8rem] w-[14rem] rounded-full bg-[#FEC89A] font-bold text-[#1F3C64]  shadow hover:bg-[#E8E8E4] md:my-0 md:h-[2rem] md:w-[20rem] ">
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
