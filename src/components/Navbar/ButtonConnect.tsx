import { useSession } from "next-auth/react";
import Link from "next/link";

const ButtonConnect = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Link href={"/connexion"}>
          <button className="mr-4 rounded-full  bg-white px-4 py-2 text-xs font-semibold text-[#1F3C64] shadow hover:bg-gray-100">
            Connexion
          </button>
        </Link>
      </>
    );
  }
};

export default ButtonConnect;
