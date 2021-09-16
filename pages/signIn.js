import { signIn, useSession } from "next-auth/client";

export default function SignIn() {
  const [session, loading] = useSession();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <a href="/">
          <img
            className="mx-auto h-12 w-auto"
            src="/images/logo.png"
            alt="Logo"
          />
        </a>
        <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h3>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Continue with GitHub
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              {!session && (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
