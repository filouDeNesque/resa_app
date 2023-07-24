import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Layout from "~/components/Layout";

const MapNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Layout>
          <div className="flex items-center justify-center">
            <MapNoSSR></MapNoSSR>
          </div>
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
