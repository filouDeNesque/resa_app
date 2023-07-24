import React from "react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Layout from "~/components/Layout";
import SearchBox from "~/components/SearchBox";
import type { Suggestion } from "~/components/SearchBox/types/SearchBoxTypes";
import ActionBox from "../../components/SearchBox/ActionBox";

const MapNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

export default function Home() {
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Layout>
          <div className="flex flex-col items-center justify-center">
            <SearchBox
              suggestions={suggestions}
              setSuggestions={setSuggestions}
            />
            <div className="min-h-1/2 flex h-full w-full items-center justify-center pb-2 pl-2 pr-2">
              <ActionBox suggestions={suggestions} />
              <MapNoSSR suggestions={suggestions}></MapNoSSR>
            </div>
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
