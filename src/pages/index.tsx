import { useSession } from "next-auth/react";
import TopContainer from "~/components/Home/TopContainer";
import Layout from "~/components/Layout";
import { HomeProvider } from "~/layout/home/home.context";

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
      <h2>Connecter vous</h2>
    </Layout>
  );
}
