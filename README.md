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

Rejoignez StableMate et créez des LoginPages plus fortes entre propriétaires, écuries et cavaliers. 🐎🌟

---
## Table des matières

- [Table des matières](#table-des-matières)
- [🎯 TodoList](#-todolist)
  - [Reflection](#reflection)
    - [1. Nouvelle structure à mettre en place](#1-nouvelle-structure-à-mettre-en-place)
    - [2. Ecurie](#2-ecurie)
    - [3. Cheval](#3-cheval)
    - [4. Utilisateur](#4-utilisateur)
- [📚 Documentation](#-documentation)
  - [Palette de couleur](#palette-de-couleur)
  - [Geocoding search](#geocoding-search)
  - [Refacto avec un context + reducer](#refacto-avec-un-context--reducer)
  - [Hooks personalisé](#hooks-personalisé)
  - [Structure d'arborescence suggérée :](#structure-darborescence-suggérée-)
  - [Nomenclature des fichiers :](#nomenclature-des-fichiers-)
  
## &#x1F3AF; TodoList

- [x] Import de la liste des écuries
- [x] Revoir le Readme.md
- [x] Création du repo github
- [x] Mise en place du form utilisateur
  - [x] Création d'une page setting
  - [x] Intégration du composant UserForm
  - [x] changement schema user 
  - [x] mise a jour / création du type user  
  - [x] api crud user  
    - [x] handler findByID  
    - [x] handler updateById   
    - [x] Hook updateById   
- [x] Refaire page connection
- [x] Faire page logout
- [ ] [Remplacement des input text](https://codepen.io/lucasyem/pen/ZEEYKdj)
- [ ] Mise en place du popup choix cheval [popup](https://codesandbox.io/s/practical-roentgen-oxzb4?from-embed=&file=/src/components/CustomPopup/index.js)
- [ ] Schema BDD
  - [x] [Utilisateur](#4-utilisateur)
  - [ ] [Ecurie](#2-ecurie)
  - [ ] [Cheval][def]
- [ ] Mise en place d'une nouvelle structure de fichier
  - [ ] Revoir entièrement la page search et ses composants
- [ ] Modifier les Hooks dans les composant

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

| Propriété          | Type                        | Description                                     |
| ------------------ | --------------------------- | ----------------------------------------------- |
| Identifiant        | unique                      | Identifiant unique de l'adresse                 |
| id user            | relation id user connection | Identifiant de l'utilsateur associé à l'adresse |
| name               | string                      | Nom de l'adresse                                |
| firstname          | string                      | Nom de l'adresse                                |
| StreetAddress      | string                      | Adresse de rue                                  |
| PostalCode         | string                      | Code postal de l'adresse                        |
| AddressLocality    | string                      | Ville de l'adresse                              |
| AddressCountry     | string                      | Pays de l'adresse                               |
| lon                | number                      | Longitude géographique                          |
| lat                | number                      | Latitude géographique                           |
| place_id           | string                      | Identifiant de lieu                             |
| Date d'inscription | Date                        | Date de création                                |

---

## &#x1F4DA; Documentation


### Palette de couleur

- [Palette de couleur](https://coolors.co/palette/fbf8cc-fde4cf-ffcfd2-f1c0e8-cfbaf0-a3c4f3-90dbf4-8eecf5-98f5e1-b9fbc0)
- [Figma color declinaison](https://www.figma.com/file/aRvfer9AnxV8Hgc0NI3g3N/Untitled?type=design&node-id=2-2&mode=design&t=i5TCQ1c8tHSclzwp-0)

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

### Hooks personalisé
Les hooks personnalisés peuvent être placés dans un répertoire spécifique de votre projet, généralement appelé `hooks` ou `customHooks`. Cela permet de les organiser de manière centralisée et facilite leur réutilisation dans toute votre application.

Voici comment vous pourriez organiser votre arborescence et nommer vos fichiers de hooks personnalisés :

### Structure d'arborescence suggérée :

```
src/
|-- components/
|   |-- ... (Vos composants réutilisables)
|-- hooks/
|   |-- useUserData.ts  (Hook personnalisé pour la récupération de données utilisateur)
|   |-- useOtherCustomHook.ts  (Autres hooks personnalisés)
|-- pages/
|   |-- ... (Vos pages)
|-- server/
|   |-- db.ts
|-- types/
|   |-- User.type.ts
|-- ...
```

### Nomenclature des fichiers :

Pour les noms de fichiers de hooks personnalisés, vous pouvez suivre une convention telle que `use[NomDescriptifDuHook].ts`. Cela rend vos fichiers plus explicites et facilite leur identification.

Par exemple, si vous avez un hook personnalisé pour la récupération de données utilisateur, vous pourriez nommer le fichier `useUserData.ts`. Voici à quoi cela pourrait ressembler :

```tsx
// useUserData.ts

import { useState, useEffect } from "react";

const useUserData = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [userId]);

  return userData;
};

export default useUserData;
```

En suivant cette convention, vous pouvez rapidement identifier la fonction et le rôle du hook personnalisé à partir de son nom de fichier. Cela rend également l'organisation de vos hooks personnalisés plus cohérente et prévisible.

<!-- Variable -->

[def]: #3-cheval



------
<!-- 
````mermaid
erDiagram
  User ||--o{ Account : has
  User ||--o{ Session : has
  User ||--o{ VerificationToken : has
  User ||--o{ UserPlace : has

  stabs ||--o{ UserPlace : located 
	stabs ||--o{ User: located
	stabs ||--o{ Horse: located

	Horse{
		id string
		name string 
		userId string
		driver Driver[]
	}

  User {
    id              String
    name            String
    firstname       String
    email           String
    emailVerified   DateTime
    image           String
    streetAddress   String
    postalCode      String
    addresseCity    String
    addresseCountry String
    lon             Float
    lat             Float
		accounts        Account[]
    sessions        Session[]
    UserPlace       UserPlace[]
		Horse           Horse[] 
  }

  UserPlace {
    id        String
    name      String
    type      String
    dateAdded String
    id_Api    Int
    lon       Float
    lat       Float
		userId    String
  }

  Account {
    id                String
    userId            String
    type              String
    provider          String
    providerAccountId String
    refresh_token     String
    access_token      String
    expires_at        Int
    token_type        String
    scope             String
    id_token          String
    session_state     String
  }

  Session {
    id           String
    sessionToken String
    userId       String
    expires      DateTime
  }

  VerificationToken {
    identifier String
    token      String
    expires    DateTime
  }

  stabs {
    id              String
    name            String
    StreetAddress   String
    PostalCode      String
    AddressLocality String
    AddressCountry  String
    Telephone       String
    Site            String
    lon             Float
    lat             Float
    place_id        String
		horse           Horse
  }




```` -->

---------


----