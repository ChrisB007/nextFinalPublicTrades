import { signIn, signOut, useSession } from "next-auth/client";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  return (
    <div className="">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/four.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-green-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Developing overlooked ideas into
                    </span>
                    <span className="block text-indigo-200">
                      Useable products
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Ever had a need for an app service that doesn't exist and
                    wished someone had it built already - We do too.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="https://www.producthunt.com/protips"
                        target="_blank"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-green-50 sm:px-8"
                      >
                        Test your idea
                      </a>
                      <a
                        href="/api/auth/signin"
                        onClick={(e) => {
                          e.preventDefault();
                          signIn("github");
                        }}
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Let's build together
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
