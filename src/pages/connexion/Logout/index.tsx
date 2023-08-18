import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => void signOut()}
      >
        Logout
      </button>
    </div>
  );
}
