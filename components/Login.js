import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./header.module.css";
import { useRouter } from "next/router";

function Login() {
  const [session, loading] = useSession();

  return (
    <>
      {(!session || session === null) && (
        <>
          <a
            href={`/api/auth/signin`}
            className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Sign in
          </a>
        </>
      )}
      {session && (
        <>
          {session.user.image && (
            <span
              style={{
                backgroundImage: `url(${session.user.image})`,
              }}
              className={styles.avatar}
            />
          )}

          <a
            href={`/api/auth/signout`}
            className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </a>
        </>
      )}
    </>
  );
}

export default Login;
