import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = (e: MouseEvent) => {
    if (
      userMenuRef.current &&
      !userMenuRef.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);

  return (
    <>
      <nav className="border-gray-200 bg-white dark:bg-[#78ABF4]">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href={"/"} className="flex items-center">
            <Image
              width={40}
              height={40}
              src="/favicon.ico"
              className="mr-3 "
              alt="Home Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Stable Mate
            </span>
          </Link>
          {/* BUTTON CONNEXION */}
          <div className="relative flex items-center md:order-2">
            <Link href={"/connexion"}>
              <button className="mr-4 rounded-full  bg-white px-4 py-2 text-xs font-semibold text-[#1F3C64] shadow hover:bg-gray-100">
                Connexion
              </button>
            </Link>
            {/* BUTTON USER DROPDOWN*/}
            <button
              type="button"
              className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
              id="user-menu-button"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <Image
                width={600}
                height={600}
                className="w-8 rounded-full"
                src="/images/pp.jpeg"
                alt="user photo"
              />
            </button>

            {/* USER DROPDOWN */}
            <div
              className={`${
                isMenuOpen ? "absolute" : "hidden"
              } r-0 absolute  right-[-1.1rem] top-[2.4rem] z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white bg-gradient-to-b from-[#ffcfd2] to-[#78ABF4] p-4 text-base shadow dark:divide-gray-600 dark:bg-[#78ABF4]`}
              id="user-dropdown"
            >
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
            </div>
            {/* NAVBAR USER pour mobile*/}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
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
        </div>
      </nav>
    </>
  );
}

// const backgroundGradient = `
// background: rgb(255,207,210);
// background: linear-gradient(2deg, rgba(255,207,210,1) 1%, rgba(120,171,244,1) 100%);
// `;
