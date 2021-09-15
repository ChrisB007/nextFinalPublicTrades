import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./header.module.css";

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
              signIn();
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

          {/* <span className={styles.signedInText}>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email || session.user.name}</strong>
          </span> */}
        </>
      )}
    </>
  );
}

export default Login;
