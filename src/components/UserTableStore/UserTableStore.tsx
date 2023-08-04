import type { UserPlace } from "./types/UserTableStoreTypes";
type UserTableprops = {
  UserStore: UserPlace[];
  setUserStore: React.Dispatch<React.SetStateAction<UserPlace[]>>;
};

const UserTableStore = ({ UserStore }: UserTableprops) => {
  return (
    <div className="relative overflow-x-auto pt-6 shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
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
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {user.id_Api}
              </th>
              <td className="px-6 py-4">{user.id_Api}</td>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.type}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};
export default UserTableStore;
