import Link from "next/link";

const NavbarMenuUser = () => {
  return (
    <>
      <div className="px-4 py-3">
        <span className="block text-sm text-[#00122D] dark:text-[#00122D]">
          Bonnie Green
        </span>
        <span className="block truncate  text-sm text-white dark:text-white">
          name@flowbite.com
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
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-[#00122D] dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </a>
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
          <Link href={"/connexion"}>
            <button className="ml-[0.5rem] mr-4 mt-[0.4rem] rounded-full bg-white px-4  py-2  text-xs font-semibold  shadow dark:text-[#C13131] dark:hover:bg-[#C13131] dark:hover:text-white">
              Sign out
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarMenuUser;
