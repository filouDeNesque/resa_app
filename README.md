# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Geocoding search

- [nominatim](https://nominatim.org/release-docs/develop/)

## TodoList

#### Intégration

-- mise en place bouton supprimer
-- mise en place handler API
-- mise en place design button

### Reflection

-- Ajout d'une liste d'ecurie
-- Ajout la liste d'ecurie à la recherche
-- Affichage de cette liste dans la carte
-- Ajout de cette liste dans la selection (attention à l'id_api pour retrouver l'adresse) /BDD

-- separation des handler des components
-- modification des informations d'une place (Update)

## Nouvelle structure à mettre en place

src/components
src/components/ui (button, label, box)
src/pages
src/pages/api
src/types (typescript types)
src/hooks
src/libs
src/types
src/server

## Refacto avec use Reducer

Utilisation de reducer dans le fichier page/search/index.tsx

```js
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import React, { useEffect, useReducer } from "react";
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

interface AppState {
  suggestions: Suggestion[];
  userTableStore: UserPlace[];
  updateStore: boolean;
}

type AppAction =
  | { type: "SET_SUGGESTIONS", payload: Suggestion[] }
  | { type: "SET_USER_TABLE_STORE", payload: UserPlace[] }
  | { type: "SET_UPDATE_STORE", payload: boolean };

const initialState: AppState = {
  suggestions: [],
  userTableStore: [],
  updateStore: false,
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_SUGGESTIONS":
      return { ...state, suggestions: action.payload };
    case "SET_USER_TABLE_STORE":
      return { ...state, userTableStore: action.payload };
    case "SET_UPDATE_STORE":
      return { ...state, updateStore: action.payload };
    default:
      return state;
  }
};

export default function Home() {
  const { data: session } = useSession();
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    void fetch("api/UserStore/readMany", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
    })
      .then((res) => res.json())
      .then((data: DataRes) => {
        dispatch({ type: "SET_USER_TABLE_STORE", payload: data?.data });
      });
  }, [dispatch]);

  if (session) {
    return (
      <>
        <Layout>
          <div className="w-50%  max-h-50vh flex flex-col items-center justify-center">
            <SearchBox
              suggestions={state.suggestions}
              setSuggestions={(suggestions) =>
                dispatch({ type: "SET_SUGGESTIONS", payload: suggestions })
              }
            />
            <div className="h-23 min-h-10 grid w-full grid-cols-2 gap-2 overflow-y-scroll pb-2 pl-2 pr-2">
              <ActionBox
                suggestions={state.suggestions}
                setUpdateStore={(updateStore) =>
                  dispatch({ type: "SET_UPDATE_STORE", payload: updateStore })
                }
              />
              <div className="sticky top-0" style={{ minHeight: "18em" }}>
                <MapNoSSR suggestions={state.suggestions}></MapNoSSR>
              </div>
            </div>
            <UserTableStore
              UserStore={state.userTableStore}
              setUserStore={(userTableStore) =>
                dispatch({
                  type: "SET_USER_TABLE_STORE",
                  payload: userTableStore,
                })
              }
              setUpdateStore={(updateStore) =>
                dispatch({ type: "SET_UPDATE_STORE", payload: updateStore })
              }
              updateStore={state.updateStore}
            />
          </div>
        </Layout>
      </>
    );
  }

  return (
    <Layout>
      <h2>Connectez-vous</h2>
    </Layout>
  );
}
```

## Import la liste des écuries

- Création d'un convert stabs en suggestions
- Création d'un fichier api read
- Création d'un parser de api à suggestion
- 
