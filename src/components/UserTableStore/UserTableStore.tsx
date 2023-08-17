import ButtonErase from "./ButtonErase/ButtonErase";
import type { UserTableprops } from "./types/UserTableStoreTypes";


const UserTableStore = ({
  UserStore,
  setUpdateStore,
  updateStore,
}: UserTableprops) => {
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/UserStore/delete?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // const data = await response.json();
        console.log("data")
        // Faire quelque chose après la suppression réussie, par exemple recharger la liste des utilisateurs.
        setUpdateStore(!updateStore);
      } else {
        console.error(
          "Error deleting user:",
          response.status,
          response.statusText
        );
        // Gérer les erreurs ici.
      }
    } catch (error) {
      console.error("Error:", error);
      // Gérer les erreurs ici.
    }
  };

  const handleClick = (id?: string) => {
    if (id != undefined) {
      void handleDelete(id);
    }
  };

  const getButtonEraseProps = (id?: string) => {
    return {
      onClick: handleClick,
      id: id,
    };
  };

  return (
    <div className="relative  max-w-full overflow-x-auto mt-4 shadow-md sm:rounded-lg" style={{maxHeight:"50vh"}}>
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400 sticky top-0 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Adresse
            </th>
            <th scope="col" className="px-6 py-3">
              Lon
            </th>
            <th scope="col" className="px-6 py-3">
              Lat
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Del</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {UserStore.map((user) => (
            <tr
              key={user.id_Api}
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="whitespace-wrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {user.name}
              </th>
              <td className="px-6 py-4 ">{user.lon}</td>
              <td className="px-6 py-4">{user.lat}</td>
              <td className="px-6 py-4">{user.type}</td>
              <td className="px-6 py-4 ">
                <ButtonErase {...getButtonEraseProps(user.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTableStore;
