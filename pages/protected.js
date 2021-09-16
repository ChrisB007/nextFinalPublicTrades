import { Fragment, useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import Layout from "../components/layout";
import AccessDenied from "../components/access-denied";
import { Dialog, Transition } from "@headlessui/react";
import {
  BellIcon,
  CogIcon,
  LogoutIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  SearchCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Home", href: "/protected", icon: HomeIcon },
  { name: "Messages", href: "#", icon: InboxIcon },
  { name: "SignOut", href: "/api/auth/signout", icon: LogoutIcon },
];
const subNavigation = [
  {
    name: "Account",
    description: "Edit your information via the 'Account Page'.",
    href: "#",
    icon: CogIcon,
    current: true,
  },
  {
    name: "Notifications",
    description: "Get notified of everything that goes on.",
    href: "#",
    icon: BellIcon,
    current: false,
  },
  {
    name: "Integrations",
    description: "Find tools to help bring your ideas to live.",
    href: "#",
    icon: ViewGridAddIcon,
    current: false,
  },
  {
    name: "Additional Resources",
    description: "Get additional resources to help launch your idea.",
    href: "#",
    icon: SearchCircleIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  // If session exists, display content
  return (
    <Layout>
      <div className="relative h-screen flex bg-green-gray-50 overflow-hidden">
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-green-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-4">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="pt-5 pb-4">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=green&shade=600"
                      alt="Workflow"
                    />
                  </div>
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group p-2 rounded-md flex items-center text-base font-medium text-green-gray-600 hover:bg-green-gray-50 hover:text-green-gray-900"
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 text-green-gray-400 group-hover:text-green-gray-500"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-green-gray-200 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src={session.user.image}
                          alt="profile-image"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-green-gray-700 group-hover:text-green-gray-900">
                          {session.user.name}
                        </p>
                        <p className="text-sm font-medium text-green-gray-500 group-hover:text-green-gray-700">
                          Account Settings
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-20">
            <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-green-600">
              <div className="flex-1 flex flex-col">
                <div className="flex-shrink-0 bg-green-700 py-4 flex items-center justify-center">
                  {/* <img
                    className="h-8 w-auto object-contain"
                    src="/images/logo.png"
                    alt="Logo"
                  /> */}
                </div>
                <nav
                  aria-label="Sidebar"
                  className="py-6 flex flex-col items-center space-y-3"
                >
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-4 rounded-lg text-green-200 hover:bg-green-700"
                    >
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                      <span className="sr-only">{session.user.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex pb-5">
                <a href="#" className="flex-shrink-0 w-full">
                  <img
                    className="block mx-auto h-10 w-10 rounded-full"
                    src={session.user.image}
                    alt="profile Image"
                  />
                  <div className="sr-only">
                    <p>Lisa Marie</p>
                    <p>Account settings</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {/* Mobile top navigation */}
          <div className="lg:hidden">
            <div className="bg-gray-50 py-2 px-4 flex items-center justify-between sm:px-6">
              <div>
                <img className="h-8 w-auto" src="/images/logo.png" alt="logo" />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-green-600 rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="bg-white border-b border-green-gray-200 xl:hidden"
              >
                <div className="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8">
                  <a
                    href="#"
                    className="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-green-gray-900"
                  >
                    <ChevronLeftIcon
                      className="h-5 w-5 text-green-gray-400"
                      aria-hidden="true"
                    />
                    <span>Settings</span>
                  </a>
                </div>
              </nav>

              <div className="flex-1 flex xl:overflow-hidden">
                {/* Secondary sidebar */}
                <nav
                  aria-label="Sections"
                  className="hidden flex-shrink-0 w-96 bg-white border-r border-green-gray-200 xl:flex xl:flex-col"
                >
                  <div className="flex-shrink-0 h-20 px-6 border-b border-green-gray-200 flex items-center">
                    <img className="w-3/5" src={"/images/logo.png"} />
                    {/* <p className="text-sm font-medium text-green-gray-900"></p> */}
                  </div>
                  <div className="flex-1 min-h-0 overflow-y-auto">
                    {subNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-green-50 bg-opacity-50"
                            : "hover:bg-green-50 hover:bg-opacity-50",
                          "flex p-6 border-b border-green-gray-200"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className="flex-shrink-0 -mt-0.5 h-6 w-6 text-green-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-3 text-sm">
                          <p className="font-medium text-green-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-green-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Main content */}
                <div className="flex-1 max-h-screen xl:overflow-y-auto">
                  <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                    <h1 className="text-3xl font-extrabold text-green-gray-900">
                      Account
                    </h1>

                    <form className="mt-6 space-y-8 divide-y divide-y-green-gray-200">
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-green-gray-900">
                            Profile
                          </h2>
                          <p className="mt-1 text-sm text-green-gray-500">
                            This information will be displayed publicly so be
                            careful what you share.
                          </p>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-green-gray-900"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full border-green-gray-300 rounded-md shadow-sm text-green-gray-900 sm:text-sm focus:ring-green-500 focus:border-green-500"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-green-gray-900"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full border-green-gray-300 rounded-md shadow-sm text-green-gray-900 sm:text-sm focus:ring-green-500 focus:border-green-500"
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium text-green-gray-900"
                          >
                            Username
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-green-gray-300 bg-green-gray-50 text-green-gray-500 sm:text-sm">
                              publictrades.com/
                            </span>
                            <input
                              type="text"
                              name="username"
                              id="username"
                              autoComplete="username"
                              defaultValue="type-your-name"
                              className="flex-1 block w-full min-w-0 border-green-gray-300 rounded-none rounded-r-md text-green-gray-900 sm:text-sm focus:ring-green-500 focus:border-green-500"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label
                            htmlFor="photo"
                            className="block text-sm font-medium text-green-gray-900"
                          >
                            Porfile Photo
                          </label>
                          <div className="mt-1 flex items-center">
                            <img
                              className="inline-block h-12 w-12 rounded-full"
                              src={session.user.image}
                              alt=""
                            />
                            <div className="ml-4 flex">
                              <div className="relative bg-white py-2 px-3 border border-green-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-green-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-green-gray-50 focus-within:ring-green-500">
                                <label
                                  htmlFor="user-photo"
                                  className="relative text-sm font-medium text-green-gray-900 pointer-events-none"
                                >
                                  <span>Change</span>
                                  <span className="sr-only"> user photo</span>
                                </label>
                                <input
                                  id="user-photo"
                                  name="user-photo"
                                  type="file"
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                                />
                              </div>
                              <button
                                type="button"
                                className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-green-gray-900 hover:text-green-gray-700 focus:outline-none focus:border-green-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-gray-50 focus:ring-green-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-green-gray-900"
                          >
                            Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows={4}
                              className="block w-full border border-green-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500"
                              defaultValue={""}
                            />
                          </div>
                          <p className="mt-3 text-sm text-green-gray-500">
                            Brief description for your profile. URLs are
                            hyperlinked.
                          </p>
                        </div>

                        <div className="sm:col-span-6">
                          <label
                            htmlFor="url"
                            className="block text-sm font-medium text-green-gray-900"
                          >
                            GitHub
                          </label>
                          <input
                            type="text"
                            name="url"
                            id="url"
                            className="mt-1 block w-full border-green-gray-300 rounded-md shadow-sm text-green-gray-900 sm:text-sm focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                      </div>

                      <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-green-gray-900">
                            Personal Information
                          </h2>
                          <p className="mt-1 text-sm text-green-gray-500">
                            This information will NOT be displayed publicly.
                          </p>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-green-gray-900"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 block w-full border-green-gray-300 rounded-md shadow-sm text-green-gray-900 sm:text-sm focus:ring-green-500 focus:border-green-500"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="phone-number"
                            className="block text-sm font-medium text-green-gray-900"
                          >
                            Phone number
                          </label>
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="tel"
                            className="mt-1 block w-full border-green-gray-300 rounded-md shadow-sm text-green-gray-900 sm:text-sm focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                      </div>

                      <div className="pt-8 flex justify-end">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-green-gray-900 hover:bg-green-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* <span className={styles.signedInText}>
        <small>Signed in as</small>
        <br />
        <strong>{session.user.email || session.user.name}</strong>
      </span> */}
    </Layout>
  );
}
