import Link from "next/link";

const TitleMenu = () => {
  return (
    <>
      {/* NAVBAR-USER sur laptop */}
      <div
        className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
        id="navbar-user"
      >
        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-[#78ABF4] md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-[#78ABF4]">
          <li>
            <Link
              href={"/"}
              className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-[#00122D] md:dark:text-[#00122D]"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/search"}
              className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-[#1F3C64] md:dark:hover:bg-transparent md:dark:hover:text-[#1F3C64]"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-[#1F3C64] md:dark:hover:bg-transparent md:dark:hover:text-[#1F3C64]"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-[#1F3C64] md:dark:hover:bg-transparent md:dark:hover:text-[#1F3C64]"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TitleMenu;
