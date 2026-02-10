import { ARCHITECTURE_SECTION } from "@/core/lib/constants/constants";

export function Governance() {
    return (
        <section id="architecture" className="w-full px-6 py-16 flex justify-center items-center" >
            <div className= "bg-linear-to-tl from-gray-100 from-50% to-cyan-300 w-full max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                <div className=" p-6 flex flex-col items-center text-center md:col-span-2 lg:col-span-2">
                    <h2 className="text-3xl font-extrabold text-gray-900">Orquestacion de operaciones digitales</h2>
                    <p className=" text-black my-4 text-center mt-10 font-medium font-stretch-110%">
                        La <strong>transformación digital real</strong> no se trata de automatizar tareas aisladas,
                        sino de orquestar operaciones digitales con criterio, gobierno y continuidad es por esto que como ingeniero entiendo la creacion de tres
                        capas pensando en la escalabilidad de cada una de ellas, cada una de estas capas cumple una clara funcion.
                    </p>
                    <img
                        className="w-full max-w-3xl  border-4 border-gray-400 bg-origin-padding p-1 opacity-90 mt-10"
                        src="/logo/stack.png"
                        alt="Stack"
                    />
                    <div className="mt-6 flex flex-wrap justify-center lg:gap-14 md:gap-8 sm:gap-6 gap-2">
                        <a
                            href="#"
                            className="bg-blue-500 inline-flex items-center gap-2 px-4 py-3 rounded-md text-gray-800 text-md font-medium hover:bg-cyan-300 transition duration-400"
                        >
                            Por que copilot 365
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-rose-500 text-md text-gray-800  font-medium hover:bg-cyan-300 transition duration-400"
                        >
                            Por que n8n
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-gray-800 text-md font-medium hover:bg-cyan-300 transition duration-400 "
                        >
                            Por que whatsapp
                        </a>
                    </div>
                </div>
                <div className="architecture-logo-bg bg-white rounded-xl shadow p-14 flex flex-col items-center text-center border-4 border-gray-700/30">
                    <h3 className="text-xl font-semibold text-gray-900">
                    Orquestar antes que automatizar.
                    </h3>
                    <div className="mt-6 space-y-5 text-sm text-gray-600">
                        <div>
                            <p className="font-medium text-gray-900">
                                Gobierno Digital
                            </p>
                            <p className="mt-1 pt-5">
                                Microsoft 365 como base para identidad,
                                control documental, trazabilidad y operación
                                institucional.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">
                                Automatización
                            </p>
                            <p className="mt-1 pt-5">
                                n8n como capa de orquestación de flujos,
                                integración entre sistemas y ejecución de
                                lógica operativa.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">
                                Comunicación
                            </p>
                            <p className="mt-1 pt-5">
                                WhatsApp y ecosistema Meta como canal de
                                interacción, notificación y cierre del ciclo
                                operativo.
                            </p>
                        </div>

                        <div className="pt-2 flex justify-center">
                            <a href="https://github.com/carlhoro/raniot-digital-operations-orchestration" target="_blank"
                                className="mt-8 rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium bg-red-400  text-white transition duration-150 ease-in-out">
                                {ARCHITECTURE_SECTION.buttonCaption}
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
