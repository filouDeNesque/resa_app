import Image from "next/image";
import Link from "next/link";
import USerDropDownMenu from "./UserDropDownMenu";
import TitleMenu from "./TitleMenu";
import ButtonConnect from "./ButtonConnect";

export default function Navbar() {
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
            <ButtonConnect />

            <USerDropDownMenu />

            {/* NAVBAR Menu pour mobile*/}
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

          <TitleMenu />
        </div>
      </nav>
    </>
  );
}
