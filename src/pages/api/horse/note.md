## Methodes
| Type   | Param              | retour  | function |
| ------ | ------------------ | ------- | -------- |
| Get    |                    | Horse[] | findMany |
| Get    | byPlaceId[]        | Horse[] | findMany |
| Get    | byStabsId          | Horse[] | findMany |
| Get    | byId               | Horse   | find     |
| Get    | byUserId           | Horse[] | findmany |
| Get    | byhalfLeaseUsersId | Horse[] | findmany |
| Put    | byId               |         | update   |
| Delete | byID               |         |          |
|        |                    |         |          |

> note: update = poste

### Fonctionalités
-[x] retrouver tout les chevaux dans la bdd
-[x] retrouver tout les chevaux par placeId (recherche proche utilisateur)
-[x] retrouver tout les chevaux par stabId (recherche par ecurie)
-[x] retrouver un cheval par id
-[x] retrouver une lise de chevaux par utilisateur
-[x] retrouver une liste de chevaux par demi pensionaire
-[x] modifier un cheval par id
-[x] Supprime un cheval par id
  

Exemple de route pour distinguer correctement les appelle à la base de données :
/api/horse/id/[id].ts
/api/horse/stab/[stabId].ts
/api/horse/placeId/[placeId].ts
/api/horse/UserId/[UserId].ts
/api/horse/byhalfLeaseUsersId/[byhalfLeaseUsersId].ts