import dynamic from "next/dynamic";
import ButtonCard from "../ButtonCard/ButtonCard.component";

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

          <div className="flex flex-wrap items-center place-content-center ">

            <ButtonCard
              title="Vos Chevaux"
              content=" Consulter / personnalisez les informations sur votre cheval à tout moment."
              href="https://cdn.pixabay.com/photo/2017/02/01/12/14/animal-2030012_1280.png"
            />
            <ButtonCard
              title="Pensions"
              content=" À la recherche d'une  pension/demi-pension près de chez vous ! Trouvez la dès maintenant."
              href="https://cdn.pixabay.com/photo/2018/10/10/14/44/audit-3737447_640.jpg"
            />
            <ButtonCard
              title="Organisation"
              content=" Personnalisez les informations sur votre cheval à tout moment."
              href="https://cdn.pixabay.com/photo/2016/07/28/20/42/icon-1549619_1280.png"
            />
            <ButtonCard
              title="Pensions"
              content=" À la recherche d'une  pension/demi-pension près de chez vous ! Trouvez la dès maintenant."
              href="https://cdn.pixabay.com/photo/2018/10/10/14/44/audit-3737447_640.jpg"
            />

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
