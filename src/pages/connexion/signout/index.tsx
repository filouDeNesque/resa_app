import { signIn } from "next-auth/react";

export default function Connexion() {


  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={()=>void signIn("google")}
      >
        Se connecter avec Google
      </button>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={()=>void signIn("discord")}
      >
        Se connecter avec discord
      </button>
    </div>
  );
}