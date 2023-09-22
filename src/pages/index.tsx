import { useSession } from "next-auth/react";
import TopContainer from "~/components/Home/TopContainer";
import Layout from "~/components/Layout";
import { HomeProvider } from "~/context/home/home.context";
import DisconnectHome from "~/components/Home/DisconnectHome";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Layout>
          <HomeProvider>
            <TopContainer />
          </HomeProvider>
        </Layout>
      </>
    );
  }
  return (
    <Layout>
      <DisconnectHome />
    </Layout>
  );
}
