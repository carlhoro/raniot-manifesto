import { PERSONAL_SECTION } from "@/core/lib/constants/constants";

export function Personal() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div id="personal" className="gap-16 items-center py-8 px-4 mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Automatización, arquitectura, contratos digitales, orquestación</h2>
                    <p className="mb-4">
                        {PERSONAL_SECTION.intro}
                    </p>
                    <p> {PERSONAL_SECTION.recognition}</p>
                    <p> {PERSONAL_SECTION.inflection} </p>
                    <h2 className="">
                        {PERSONAL_SECTION.inflectionTitle}
                    </h2>
                    <p> {PERSONAL_SECTION.inflectionCaption} </p>
                    <h2>{PERSONAL_SECTION.orchestrationTitle}</h2>
                    <p> {PERSONAL_SECTION.orchestrationCaption} </p>
                    {PERSONAL_SECTION.visionTitle}
                    <ul>
                        <li>{PERSONAL_SECTION.visionItem1}.</li>
                        <li>{PERSONAL_SECTION.visionItem2}.</li>
                        <li>{PERSONAL_SECTION.visionItem3}.</li>
                        <li>{PERSONAL_SECTION.visionItem4}.</li>
                    </ul>
                    <p>{PERSONAL_SECTION.visionCaption}</p>
                </div>
                <div>
                    <div className="mt-8">
                        <img className="w-full rounded-lg" src="/logo/capital.jpg" alt="capital medellin"/>
                    </div>
                    <div className="mt-8">
                        <img className="w-full rounded-lg" src="/logo/ideaton.png" alt="udea premiacion"/>
                    </div>
                </div>
            </div>
        </section>
    )
}