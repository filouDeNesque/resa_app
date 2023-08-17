<div align="center">

<h1> StableMate</h1>
<h5> Pension et demi-pension organiseur</h5>
  <img src="./public/favicon.ico" alt="Horse Icon">
  </div>
<div align="center">
  <img src="https://img.shields.io/badge/Node-14.17.4-green">

</div>
<div align="center">
  <img src="https://img.shields.io/badge/next-13.4.2-blue">
  <img src="https://img.shields.io/badge/react-18.2.0-blue">
  <img src="https://img.shields.io/badge/next--auth-4.22.1-blue">
  <img src="https://img.shields.io/badge/leaflet--defaulticon--compatibility-0.1.2-blue">
  <img src="https://img.shields.io/badge/%40prisma%2Fclient-4.14.0-blue">
  <img src="https://img.shields.io/badge/react--leaflet-4.2.1-blue">
</div>
<div align="center">
  
  <img src="https://img.shields.io/badge/%40t3--oss%2Fenv--nextjs-0.3.1-blue">
  <img src="https://img.shields.io/badge/%40types%2Freact--leaflet-3.0.0-blue">
  <img src="https://img.shields.io/badge/%40next--auth%2Fprisma--adapter-1.0.5-blue">
  <img src="https://img.shields.io/badge/react--dom-18.2.0-blue">
  <img src="https://img.shields.io/badge/zod-3.21.4-blue">
</div>

**Description :**
Stable Mate - Équitation Connectée est une application innovante qui facilite la mise en relation entre les propriétaires de chevaux, les écuries et les cavaliers intéressés par la demi-pension.

**Fonctionnalités clés :**

🏠 **Écuries :**
Les écuries peuvent utiliser l'application pour afficher les places disponibles pour la demi-pension. Elles peuvent gérer leurs disponibilités, gérer les réservations des demi-pensionnaires et rendre leurs chevaux disponibles à la demi-pension.

👤 **Propriétaires :**
Les propriétaires de chevaux peuvent mettre leurs chevaux disponibles à la demi-pension. Ils peuvent réserver des créneaux dans un calendrier pour prévenir les demi-pensionnaires des disponibilités.

📆 **Calendrier :**
L'application propose un calendrier interactif où les propriétaires et les demi-pensionnaires peuvent réserver des créneaux pour organiser les séances d'équitation.

🔎 **Recherches :**
Les cavaliers peuvent effectuer des recherches en fonction de leurs préférences, telles que la localisation, le niveau de compétence du cheval, etc. Cela leur permet de trouver des chevaux adaptés à la demi-pension.

💬 **Messagerie :**
La messagerie intégrée facilite la communication entre les propriétaires, les écuries et les cavaliers. Ils peuvent discuter, planifier les détails et échanger des informations importantes.

**Avantages :**

✅ **Facilité :**
L'application simplifie le processus de recherche et de réservation d'une demi-pension, offrant une expérience transparente pour les propriétaires et les cavaliers.

✅ **Flexibilité :**
Les propriétaires et les demi-pensionnaires peuvent gérer leurs disponibilités et leurs réservations de manière flexible via le calendrier.

✅ **Communication Améliorée :**
La messagerie intégrée facilite la communication en temps réel entre les parties prenantes, améliorant ainsi la collaboration.

✅ **Large Choix :**
Les cavaliers ont accès à une variété de chevaux disponibles à la demi-pension, adaptés à leurs besoins et préférences.

Rejoignez StableMate et créez des connexions plus fortes entre propriétaires, écuries et cavaliers. 🐎🌟

---

## &#x1F3AF; TodoList

- [x] Import de la liste des écuries
- [ ] Schema BDD
  - [ ] [Ecurie](#2-ecurie)
  - [ ] [Cheval](#3-cheval)
  - [ ] [Utilisateur](#4-utilisateur)
- [ ] Revoir le Readme.md
- [ ] Mise en place d'une nouvelle structure de fichier

### Reflection

#### 1. Nouvelle structure à mettre en place

- <span style="color:#ffafcc;">Src</span>
  - <span style="color:#a2d2ff;">Components</span>
    - <span style="color:#f08080;">Button</span>
    - <span style="color:#f08080;">Label</span>
    - <span style="color:#f08080;">Box</span>
  - <span style="color:#a2d2ff;">Pages</span>
    - <span style="color:#f08080;"> Api</span>
    - <span style="color:#f08080;"> App.tsx</span>
  - <span style="color:#ffafcc;">Types</span>
  - <span style="color:#ffafcc;">Hooks</span>
  - <span style="color:#ffafcc;">Libs</span>
  - <span style="color:#ffafcc;">Types</span>
  - <span style="color:#ffafcc;">Server</span>

#### 2. Ecurie

| Propriété        | Type                    | Description                                            |
| ---------------- | ----------------------- | ------------------------------------------------------ |
| Note (optionnel) | number                  | Note attribuée à l'écurie (facultatif)                 |
| Propriétaire     | relation id utilisateur | Identifiant de l'utilisateur propriétaire (facultatif) |
| Nombre de places | number                  | Nombre de places disponibles                           |

#### 3. Cheval

| Propriété        | Type                            | Description                                             |
| ---------------- | ------------------------------- | ------------------------------------------------------- |
| Note (optionnel) | number                          | Note attribuée au cheval (facultatif)                   |
| Propriétaire     | relation id utilisateur         | Identifiant de l'utilisateur propriétaire               |
| Âge              | number                          | Âge du cheval                                           |
| Nom              | string                          | Nom du cheval                                           |
| Écurie           | relation id écurie              | Identifiant de l'écurie à laquelle le cheval appartient |
| Adresse          | relation id adresse de cavalier | Identifiant de l'adresse du cavalier associé au cheval  |

#### 4. Utilisateur

| Propriété       | Type                 | Description                                 |
| --------------- | -------------------- | ------------------------------------------- |
| Identifiant     | unique               | Identifiant unique de l'adresse             |
| id cavalier     | relation id cavalier | Identifiant du cavalier associé à l'adresse |
| name            | string               | Nom de l'adresse                            |
| StreetAddress   | string               | Adresse de rue                              |
| PostalCode      | string               | Code postal de l'adresse                    |
| AddressLocality | string               | Ville de l'adresse                          |
| AddressCountry  | string               | Pays de l'adresse                           |
| lon             | number               | Longitude géographique                      |
| lat             | number               | Latitude géographique                       |
| place_id        | string               | Identifiant de lieu                         |

---

## &#x1F4DA; Documentation

### Palette de couleur
- [Palette de couleur](https://coolors.co/palette/fbf8cc-fde4cf-ffcfd2-f1c0e8-cfbaf0-a3c4f3-90dbf4-8eecf5-98f5e1-b9fbc0)


### Geocoding search

- [nominatim](https://nominatim.org/release-docs/develop/)

### Refacto avec un context + reducer

Le context conserve les données dans les parents
permet de transmettre le context sans le passé en props

Le reducer reduit la declaration des states
gère un etat complexe de composant

lien d'exemple:
[Exemple 1](https://codesandbox.io/s/usereducer-hook-swkwl?file=/src/ShopContext.js:587-592)

<details>
<summary>Utilisation de reducer dans le fichier page/search/index.tsx
</summary>

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

</details>
