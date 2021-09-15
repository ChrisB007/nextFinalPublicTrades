import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { getSession } from "next-auth/client";

const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   const project = await fetch("http://localhost:3000/api/projects");
//   const data = await project.json();

//   const jsut = console.log("This is a text");

//   const fakeJson = await fetch(
//     "'https://jsonplaceholder.typicode.com/todos/1'"
//   ).then((res) => res.json());

//   return {
//     props: {
//       session,
//       data,
//       fakeJson,
//       jsut,
//     },
//   };
// }

export async function getServerSideProps() {
  const readText = "This is a test";
  return {
    props: {
      readText,
    },
  };
}

export default function DataContent({ readText }) {
  //   console.log(data);
  return (
    <ul
      role="list"
      className="grid w-3/4 m-auto grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {/* {results.map((result) => (
        <li
          key={result.title}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-11/12 h-44 flex-shrink-0 mx-auto rounded-lg"
              src={result.title}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {result.title}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{result.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {result.description}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${result.title}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${result.title}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))} */}
    </ul>
  );
}
