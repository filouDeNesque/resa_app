import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Layout from "~/components/Layout";
import { HomeProvider } from "~/layout/home/home.context";

const MapNoSSR = dynamic(() => import("../components/Map-V2"), {
  ssr: false,
});

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Layout>
        
          <HomeProvider>
            <div className="mt-6 flex flex-col items-center justify-center space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold">
                  Bienvenue sur notre site
                </h2>
                <p className="text-gray-500">
                  Trouvez le cheval parfait près de chez vous
                </p>
              </div>
              <blockquote className="text-center italic">
              &ldquo;Les chevaux nous offrent l&apos;opportunité de nous connecter avec
                la nature et de trouver la liberté dans la course.&rdquo;
              </blockquote>
              <p className="text-center">
                Vous êtes passionné par les chevaux ? Recherchez des écuries,
                des centres équestres et des chevaux à vendre près de chez vous.
                Profitez de notre carte interactive pour découvrir toutes les
                options disponibles à proximité.
              </p>
              <div id="maptest" style={{ height: '48vh' }} className="sticky top-0 w-full h-[calc(100vh - 100px)] w-full min-h-[200px] sm:h-[calc(100vh - 150px)]">
                <MapNoSSR></MapNoSSR>
              </div>
            </div>
          </HomeProvider>
        </Layout>
      </>
    );
  }

  return (
    <Layout>
      <h2>Connecter vous</h2>
    </Layout>
  );
}
