import React from "react";
import { getSession, signIn, signOut, useSession } from "next-auth/client";
import styles from "./header.module.css";
import { useRouter } from "next/router";

function Login({ session }) {
  const user = session?.user;
  return (
    <>
      {(!session || session === null) && (
        <>
          <button
            // href={`/api/auth/signin`}
            className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={() => signIn("github")}
          >
            Sign In
          </button>
        </>
      )}
      {session && (
        <>
          {user?.image && (
            <span
              style={{
                backgroundImage: `url(${user?.image})`,
              }}
              className={styles.avatar}
            />
          )}

          <button
            // href={`/api/auth/signout`}
            className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  console.log(session);

  if (session) {
    return {
      redirect: {
        destination: "/protected",
        permanent: false,
      },
    };
  } else {
    console.log("No session yet");
  }

  return {
    props: {
      session,
    },
  };
}

export default Login;
