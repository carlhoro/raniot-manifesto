import { KNOWLEDGE_SECTION } from "@/core/lib/constants/constants";

export function Knowledge() {
    return (
        <section id="Knowledge" className="w-full px-6 py-10 lg:px-24 lg:py-10 bg-white dark:bg-gray-900 flex justify-center items-center">
            <div className="py-4 px-4 mx-auto max-w-full lg:py-16 lg:px-6">
                <div className="max-w-7xl text-gray-500 sm:text-lg dark:text-gray-400">
                    <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                        {KNOWLEDGE_SECTION.headercaption}
                    </p>
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">{KNOWLEDGE_SECTION.tittle}</h2>
                    <li className="flex gap-x-3 py-5">
                        <svg
                        viewBox="0 0 20 20"
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
                                {KNOWLEDGE_SECTION.titleList}
                            </strong>
                        </span>
                    </li>
                    <p className="mb-4 font-light">{KNOWLEDGE_SECTION.captionOpenning}</p>
                    <p className="mb-4 font-medium">{KNOWLEDGE_SECTION.captionClosing}</p>
                    <a href="#hero" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                        Volver a Hero
                        <svg className="ml-1 w-6 h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    )
}