import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import Layout from "~/components/Layout/Layout";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/").catch((error) => {
      console.log(error);
    });
    return null;
  }

  return (
    <Layout>
      <div className="login-container">
        <div className="login-box">
          <h2>Connectez-vous</h2>
          <div className="social-buttons">
            <button
              onClick={() => void signIn("discord")}
              className="discord-button"
            >
              <FaDiscord className="mr-2" /> Se connecter avec Discord
            </button>
            <button
              onClick={() => void signIn("google")}
              className="google-button"
            >
              <FaGoogle className="mr-2" /> Se connecter avec Google
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
