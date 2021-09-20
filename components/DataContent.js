import React from "react";

function DataContent({ portfolios }) {
  return (
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
            {portfolios?.map((portfolio) => (
              <div
                key={portfolio.title}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 bg-gray-200  cursor-pointer rounded-lg flex-wrap"
                style={{ backgroundColor: portfolio.bgColor }}
              >
                <div className="col-span-1 w-80 m-auto flex justify-center items-center pt-3 md:col-span-2 md:col-start-2 cursor-pointer lg:col-span-1 flex-wrap rounded-lg h-40 ">
                  <a href={portfolio?.url}>
                    <img
                      className=" w-32 rounded-xl object-contain"
                      src={portfolio?.image}
                      alt={portfolio?.title}
                    />
                  </a>
                </div>
                <p
                  className="block mt-3 p-4 text-center font-semibold"
                  style={{ color: portfolio.color }}
                >
                  {portfolio.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const portfolios = await fetch(`/api/portfolios`).then((res) => res.json());
  console.log(portfolios);

  return {
    props: {
      portfolios,
    },
  };
}

export default DataContent;
