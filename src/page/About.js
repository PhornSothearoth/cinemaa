import React from "react";

export default function About() {
  return (
    <>
      <section className="bg-black dark:bg-gray-900  container mx-auto">
        <div className="grid gap-3 max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7 mt-4 "> 
            <h3 className="max-w-2xl mb-4 text-white text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              About Cinemaa.
            </h3>
            <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              About Cinemaa Cambodia. Cinemaa is the no. 1 and the
              first International Standard Cinema in Cambodia, created and
              operated by Khmer since 2023. Our rapid growth and expansion from
              1 to 13 cinemaa locations in the past 12 years across the country,
              has shown our strength in delivery and influence in the film and
              entertainment industry. Today, we have successfully implemented
              and deployed advanced cinema technologies and levelled up our
              offerings, beyond cinema norms. Our team is dedicated to providing
              top tier immersive cinema experience and excellent services with
              the essence of Khmer hospitality. With our new direction in place,
              we are determined to inspire, drive change and make an impact in
              the industry, and exceed expectations.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
           
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioUPyn34M7Hc/v0/-1x-1.jpg"
              alt="hall cinemaa"
            />
          </div>
        </div>
      </section>
    </>
  );
}
