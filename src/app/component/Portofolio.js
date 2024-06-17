import React from "react";

const Portofolio = () => {
  return (
    <div className="bg-black border-b border-white">
      <div className="relative z-30" id="portfolio">
        <div className="container py-16 md:py-20 ">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-white sm:text-5xl lg:text-4xl">
              Check Resume for other deatils
            </h2>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <a
                  href="https://drive.google.com/file/d/1PQXfDHHN-A4q8NIP3BV01gsNSvJlxjBT/view?usp=sharing"
                  target="_blank"
                  className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 w-72"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative text-center ml-14">Click here</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
