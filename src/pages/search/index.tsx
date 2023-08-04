import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import Layout from "~/components/Layout";
import SearchBox from "~/components/SearchBox";
import type { Suggestion } from "~/components/SearchBox/types/SearchBoxTypes";
import UserTableStore from "~/components/UserTableStore/UserTableStore";
import type { UserPlace } from "~/components/UserTableStore/types/UserTableStoreTypes";
import ActionBox from "../../components/SearchBox/ActionBox";

const MapNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

interface DataRes {
  message: string;
  data: UserPlace[];
}

export default function Home() {
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);
  const [userTableStore, setUserTableStore] = React.useState<UserPlace[]>([]);
  const [updateStore, setUpdateStore] = React.useState<boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    void fetch("api/UserStore/readMany", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then((data: DataRes) => {
        setUserTableStore(data?.data);
      });
  }, [setUserTableStore, setUpdateStore, updateStore]);

  if (session) {
    return (
      <>
        <Layout>
          <div className="w-50% max-h-50vh flex flex-col items-center justify-center">
            <SearchBox
              suggestions={suggestions}
              setSuggestions={setSuggestions}
            />
            <div className="h-23 grid w-full grid-cols-2 gap-2 overflow-y-scroll pb-2 pl-2 pr-2">
              <ActionBox
                suggestions={suggestions}
                setUpdateStore={setUpdateStore}
              />
              <MapNoSSR suggestions={suggestions}></MapNoSSR>
            </div>
            <UserTableStore
              //  fetch la liste des user store par userID (Session)
              UserStore={userTableStore}
              setUserStore={setUserTableStore}
            />
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
