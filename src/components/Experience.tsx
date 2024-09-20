import Link from "next/link";
import React from "react";

export default function Experience() {
  return (
    <>
      <div className="full-container pb-6">
        <h2 className="text-3xl font-semibold text-white">Work Experience</h2>
      </div>
      <div className="full-container flex">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {/*-------------- Codeclouds IT solutions pvt. ltd start -------------- */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <h2 className="text-2xl font-semibold text-white">
              <Link href={"https://www.codeclouds.com/"}>
                Codeclouds IT solutions pvt. ltd
              </Link>
            </h2>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 py-2">
              Web developre | November 2022 &nbsp;
              <span className="text-white">(Present)</span>
            </time>
            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Role & Responsibility
          </h3> */}

            <ul className="list-disc ml-5 text-base font-normal text-gray-500 dark:text-gray-400">
              <li className="mb-4 mt-3">
                Created SaaS e-commerce applications utilizing headless
                e-commerce services and integrated the GitHub API to dynamically
                generate websites, resulting in over a 30% boost in development
                efficiency.
              </li>
              <li className="mb-4 mt-3">
                GeEnhanced back-end performance through the implementation of
                backend clustering, which improved processing efficiency.
              </li>
              <li className="mb-4 mt-3">
                Employed CI/CD pipelines (Continuous Integration/Continuous
                Deployment) for smooth and automated deployment processes.
              </li>
              <li className="mb-4 mt-3">
                I have deployed and managed websites on serverless platforms
                like Vercel, which increased site scalability and reduced
                hosting expenses by 25%.
              </li>
              <li className="mb-4 mt-3">
                Analyzed SEO performance with tools such as Google Analytics,
                SEMrush, and Ahrefs to ensure ongoing optimization and adherence
                to best practices, leading to an approximate 20% rise in organic
                traffic.
              </li>
              <li className="mb-4 mt-3">
                Worked collaboratively with cross-functional teams to improve
                both front-end and back-end performance, enhancing the overall
                user experience.
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          {/*-------------- Codeclouds IT solutions pvt. ltd end -------------- */}

          {/*-------------- Devant IT solutions pvt. ltd start -------------- */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <h2 className="text-2xl font-semibold text-white">
              <Link href={"https://www.devantitsolutions.com/"}>
                Devant IT solutions pvt. ltd
              </Link>
            </h2>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 py-2">
              Associate software engineer | July 2022 - November 2022 &nbsp;
              {/* <span className="text-white">(Present)</span> */}
            </time>
            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Marketing UI design in Figma
          </h3> */}
            <ul className="list-disc ml-5 text-base font-normal text-gray-500 dark:text-gray-400">
              <li className="mb-4 mt-3">
                Developed and maintained a high-performance shipment tracking
                system using Laravel/PHP, improving shipment visibility and
                reducing processing time by 30%.
              </li>
              <li className="mb-4 mt-3">
                Integrated third-party platform APIs (e.g., payment gateways,
                logistics services) to enhance system capabilities and
                interoperability.
              </li>
              <li className="mb-4 mt-3">
                Engineered data synchronization processes for over 12 warehouses
                achieving a great accuracy rate in data updates and reducing
                synchronization errors.
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          {/*-------------- Devant IT solutions pvt. ltd end -------------- */}

          {/*-------------- Ejob start -------------- */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <h2 className="text-2xl font-semibold text-white">
              <Link href={"https://www.ejobindia.com/"}>Ejobindia</Link>
            </h2>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 py-2">
              Web development training | March 2021 - August 2021
              {/* <span className="text-white">(Present)</span> */}
            </time>
            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Marketing UI design in Figma
          </h3> */}
            <ul className="list-disc ml-5 text-base font-normal text-gray-500 dark:text-gray-400">
              <li className="mb-4 mt-3">
                Completed Professional web development training.
              </li>
              <li className="mb-4 mt-3">
                Gained in-depth Knowledge of various types of technologies like
                CodeIgniter, HTML, CSS, JS, PHP, HTML, CSS, Bootstrap, Ajax,
                MVC, Jquery, API.
              </li>
              <li className="mb-4 mt-3">
                Worked on a live project and developed a covid vaccine booking
                web application and also developed a blog website (cms) using
                CodeIgniter.
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          {/*-------------- Ejob end -------------- */}
        </ol>
      </div>
    </>
  );
}
