import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MenuUser from "./MenuUser ";
import { useSession } from "next-auth/react";


const ButtonDropDown = () => {
  const { data: session } = useSession();  
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
      {/* BUTTON USER DROPDOWN*/}
      <button
        type="button"
        className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 p-1 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
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
          src={session?.user?.image as string}
          alt="user photo"
        />
      </button>

      {/* USER DROPDOWN */}
      <div
        className={`${isMenuOpen ? "absolute" : "hidden"
          } r-0 dark:bg-[#[#ffcfd2]  ] absolute right-[-1.1rem] top-[2.4rem] z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white bg-gradient-to-b from-[#78ABF4] to-[#ffcfd2] p-4 text-base shadow  dark:divide-gray-600`}
        id="user-dropdown"
      >
        <MenuUser />
      </div>
    </>
  );
};

export default ButtonDropDown;
