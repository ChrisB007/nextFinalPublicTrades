/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { portfolios } from "../pages/projectArray";

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: "Pricing", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Company", href: "#" },
];

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
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-green-50 sm:px-8"
                      >
                        Test your idea
                      </a>
                      <a
                        href="/api/auth/signin"
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

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-3xl text-center font-semibold text-gray-500">
                Portfolio
              </p>
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide ">
                Growing list of web and mobile apps that once were just ideas.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3  lg:grid-cols-4">
                {portfolios.map((portfolio) => (
                  <div
                    key={portfolio.title}
                    className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 bg-gray-200  cursor-pointer flex-wrap"
                  >
                    <a href={portfolio.url}>
                      <div className="col-span-1 w-80 flex justify-center items-center pt-3 md:col-span-2 md:col-start-2 cursor-pointer lg:col-span-1 flex-wrap rounded-lg h-full ">
                        <img
                          className=" w-60  rounded-xl object-cover  mb-4"
                          src={portfolio.image}
                          alt={portfolio.title}
                        />
                      </div>
                      <p className="block mt-3 text-center font-semibold text-gray-500">
                        Click to Visit
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
