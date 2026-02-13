import { IOT_SECTION } from "@/core/lib/constants/constants";
import { IotSection } from "./iot-section";

export function IoT() {
    return (
      <section className="lg:px-2">
        <div id="iot" className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-20 lg:overflow-visible lg:px-0 dark:bg-gray-900">
          {/* backgrounf pattern */} 
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute top-0 left-0 h-full w-6xl mask-[radial-gradient(64rem_80rem_at_top,white,transparent)] stroke-gray-300 dark:stroke-gray-800"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width="200"
                  height="200"
                  x="50%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="20%" y="-1" className="overflow-visible fill-gray-300 dark:fill-gray-700/50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth="0"
                />
              </svg>
              <rect width="100%" height="100%" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" strokeWidth="0" />
            </svg>
          </div>
          {/* content */} 
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            {/* Header */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                    {IOT_SECTION.headerCaption}
                  </p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                    {IOT_SECTION.title}
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                    {IOT_SECTION.subHeader}
                  </p>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="hidden lg:block m-3 p-6 lg:sticky lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">                  
              <img
                src="/logo/esp8266.png"
                alt="Piloto IoT ESP8266"
                className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228 dark:bg-gray-800 dark:ring-white/10"
              />
            </div>
            {/* Content */}
            <div className=" lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg dark:text-gray-400">
                  <p>
                    {IOT_SECTION.caption}
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
                    <li className="flex gap-x-3">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                      >
                        <path
                          d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {IOT_SECTION.strongListItem1}
                        </strong>
                        {IOT_SECTION.listItem1}
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
                      >
                        <path d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z" />
                      </svg>
                      <span>
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {IOT_SECTION.strongListItem2}
                        </strong>{" "}
                        {IOT_SECTION.listItem2}
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    {IOT_SECTION.secondCaption}
                  </p>
                  <div className="architecture-logo-bg">
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {IOT_SECTION.closingHeader}
                    </h2>
                    <p className="mt-6">
                      {IOT_SECTION.closingCaption}
                    </p>
                    <a href="https://github.com/carlhoro/raniot-manifesto" target="_blank"
                        className="mt-8 rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium bg-red-400  text-white transition duration-150 ease-in-out">
                        {IOT_SECTION.buttonCaption}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  