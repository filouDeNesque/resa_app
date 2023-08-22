/* eslint-disable @typescript-eslint/no-misused-promises */
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";


const MenuUser = () => {
  const handleLogout = () => {
    return signOut();
  };
  const { data: session } = useSession();
  console.log(session?.user)

  return (
    <>
      <div className="px-4 py-3">
        <span className="block text-sm text-[#00122D] dark:text-[#00122D]">
          {session?.user.name}
        </span>
        <span className="block truncate  text-sm text-white dark:text-white">
          {session?.user.email}
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-[#00122D] dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </a>
        </li>
        <li>
          <Link
            href={"/setting"}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-[#00122D] dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-[#00122D] dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Earnings
          </a>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="ml-[0.5rem] mr-4 mt-[0.4rem] rounded-full bg-white px-4  py-2  text-xs font-semibold  shadow dark:text-[#C13131] dark:hover:bg-[#C13131] dark:hover:text-white"
          >
            Sign out
          </button>
        </li>
      </ul>
    </>
  );
};

export default MenuUser;
