import { INTENTION_SECTION } from "@/core/lib/constants/constants";

export function Intention() {
  return (
            <section id="intention" className="w-full pl-6 md:pl-12 lg:pl-24 sm:py-2 md:py-10 lg:py-20 mx-auto">
              <div className="p-3">
                <div className="ml-auto">
                  <div className="relative z-20 rounded-lg shadow-xl overflow-hidden  lg:grid lg:grid-cols-2 lg:gap-4 lg:min-h-110 
                    bg-gray-500 bg-linear-to-tr from-gray-700 from-65% to-cyan-300 ">
                    <div className="py-10 pl-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
                      <div className="lg:self-center">
                        <h2 className="leading-9 sm:py-4 lg:py-8 font-extrabold text-white sm:text-4xl lg:text-5xl sm:leading-10">
                            <span className="block">{INTENTION_SECTION.tittle}</span>
                        </h2>
                        <p className="mt-4 text-base leading-6 text-white lg:text-1xl">
                          {INTENTION_SECTION.introCaption}
                        </p>
                        <p className="mt-4 text-base leading-6 text-white  lg:text-1xl">
                        {INTENTION_SECTION.closingCaption}
                        </p>
                        <a href="https://github.com/carlhoro/raniot-manifesto" target="_blank"
                            className="mt-8 rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium bg-red-400  text-white transition duration-150 ease-in-out">
                            {INTENTION_SECTION.buttonCaption}
                        </a>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute items-start justify-center
                                      -right-12 -bottom-12">
                        <svg
                          aria-hidden="true"
                          className="absolute right-0 -bottom-10 sm:bottom-0
                                     sm:w-60 sm:h-60 md:w-120 md:h-120 lg:w-160 lg:h-160 text-white opacity-35"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                            0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                            -.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032
                            .892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338
                            -2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
                            -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026
                            A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337
                            1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651
                            .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943
                            .359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
                            0 .268.18.58.688.482A10.019 10.019 0 0022 12.017
                            C22 6.484 17.523 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    </section>
  )
}
