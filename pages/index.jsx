import Layout from "../components/layout";
import Hero from "../components/Hero";
import { getSession } from "next-auth/client";
import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Login from "../components/Login";
import portfolios from "./portfolio";

export default function Page({ session }) {
  return (
    <Layout>
      {/* Navigation bar bigin */}

      <Disclosure as="nav" className="bg-white shadow mb-4">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="/images/logo.png"
                        alt="Logo"
                      />
                    </a>
                    <a href="/">
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/images/logo.png"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {/* Current: "border-green-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                    {session && (
                      <>
                        <a
                          href="/protected"
                          className=" text-gray-900 inline-flex items-center px-1 pt-1 hover:bg-green-200 hover:border-b-2 text-sm font-medium"
                        >
                          Dashboard
                        </a>
                      </>
                    )}

                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 hover:bg-green-200 hover:border-b-2 text-sm font-medium"
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 hover:bg-green-200 hover:border-b-2 text-sm font-medium"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 hover:bg-green-200 hover:border-b-2 text-sm font-medium"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Login />
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {session && (
                  <a
                    href="/protected"
                    className="bg-green-50  text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  >
                    Dashboard
                  </a>
                )}
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                  Calendar
                </a>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4 sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      tom@example.com
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Navigation bar end */}
      <main>
        <>
          <Hero />
          <div>
            {/* Logo cloud */}
            <div className="bg-gray-100 mb-20">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <p className="text-3xl text-center font-semibold text-gray-500">
                  Portfolio
                </p>
                <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide ">
                  Growing list of web and mobile apps that once were just ideas.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
                  {portfolios?.map(
                    ({ image, url, title, bgColor, color, description }) => (
                      <div
                        key={title}
                        className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 bg-gray-200  cursor-pointer rounded-lg flex-wrap"
                        style={{ backgroundColor: bgColor }}
                      >
                        <div className="col-span-1 w-80 m-auto flex justify-center items-center pt-3 md:col-span-2 md:col-start-2 cursor-pointer lg:col-span-1 flex-wrap rounded-lg h-40 ">
                          <a href={url} target="_blank">
                            <img
                              className="logocloud object-cover"
                              src={image}
                              alt={title}
                            />
                          </a>
                        </div>
                        <p
                          className="block mt-3 p-4 text-center font-semibold"
                          style={{ color: color }}
                        >
                          {description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // const baseUrl = "https://www.publictrades.com";

  // const rawData = await fetch(`${baseUrl}/api/portfolios`);
  // const data = await rawData.json();

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
