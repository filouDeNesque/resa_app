import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Layout from "~/components/Layout";
import  { HomeProvider } from "~/layout/home/home.context";

const MapNoSSR = dynamic(() => import("../components/Map-V2"), {
  ssr: false,
});

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Layout>
          <div className="flex items-center justify-center">
            <h1>Home</h1>
          </div>

          {/* Context 
                context contient reducer pour un affichage des ecuries (getstabs)
                Affichage de la map des ecurie avec une utilisation du reducer get stabs
               
                
               -nouveau module map sans props
               -utiliser le context dans la maps 
            */}
          <HomeProvider>
            <div
              id="maptest"
              className="sticky top-0"
              style={{ height: "400px", width: "600px" }}
            >
              <MapNoSSR></MapNoSSR>
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
