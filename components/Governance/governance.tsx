"use client";

import { useState } from "react";
import LayerModal from "./governanaceModal";
import {ARCHITECTURE_SECTION, DIGITAL_GOV_CONTENT, GOVERMENT_MODAL_OPTIONS } from "@/core/lib/constants/constants";
import GovernanceLayerContent from "./governanceLayerContent";

type LayerType = "copilot" | "n8n" | "whatsapp" | null;

export function Governance() {
const [activeLayer, setActiveLayer] = useState<LayerType>(null);

    return (
        <section id="architecture" className="w-full px-6 py-10 lg:px-24 lg:py-10 flex justify-center items-center" >
            <div className= "bg-linear-to-tl from-gray-100 from-50%  to-cyan-300 max-w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center rounded-2xl pr-4">
                <div className=" p-6 flex flex-col items-center text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">{DIGITAL_GOV_CONTENT.title}</h2>
                    <p className="lg:text-2xl my-4 text-center mt-10 font-medium font-stretch-110%">
                        {DIGITAL_GOV_CONTENT.caption}
                    </p>
                    <img
                        className="w-full max-w-3xl  border-4 border-gray-400 bg-origin-padding p-1 opacity-90 mt-10"
                        src="/logo/stack.png"
                        alt="Stack"
                    />
                    <div className="mt-6 flex flex-wrap justify-center lg:gap-14 md:gap-8 sm:gap-6 gap-2">
                        <a
                            href="#"
                            onClick={(e) => {
                            e.preventDefault();
                            setActiveLayer("copilot");
                            }}
                            className="bg-blue-500 inline-flex items-center gap-2 px-4 py-3 rounded-md text-gray-800 text-md font-medium hover:bg-cyan-300 transition duration-400"
                        >
                            {DIGITAL_GOV_CONTENT.tool365}
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                            e.preventDefault();
                            setActiveLayer("n8n");
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-rose-500 text-md text-gray-800 font-medium hover:bg-cyan-300 transition duration-400"
                        >
                            {DIGITAL_GOV_CONTENT.tooln8n}
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                            e.preventDefault();
                            setActiveLayer("whatsapp");
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-gray-800 text-md font-medium hover:bg-cyan-300 transition duration-400"
                        >
                            {DIGITAL_GOV_CONTENT.toolWhatsapp}
                        </a>
                    </div>
                    <LayerModal
                        isOpen={activeLayer !== null}
                        onClose={() => setActiveLayer(null)}
                        title={
                            activeLayer === GOVERMENT_MODAL_OPTIONS.copilot ? GOVERMENT_MODAL_OPTIONS.copilotTitle : 
                            activeLayer === GOVERMENT_MODAL_OPTIONS.n8n ? GOVERMENT_MODAL_OPTIONS.n8nTitle :
                            activeLayer === GOVERMENT_MODAL_OPTIONS.whatsapp ? GOVERMENT_MODAL_OPTIONS.whatsappTitle : ""
                        }
                        >
                        {activeLayer && <GovernanceLayerContent variant={activeLayer} />}
                        </LayerModal>
                </div>
                <div className="architecture-logo-bg bg-white rounded-xl shadow p-8 m-12 md:p-6 sm:p-4 flex flex-col items-center text-center border-4 border-gray-700/30">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
                    {DIGITAL_GOV_CONTENT.headerGov}
                    </h2>
                    <div className="flex flex-col items-center mt-8 space-y-8 text-base w-full lg:text-xl text-gray-700 leading-relaxed">
                        <div>
                            <p className="font-semibold text-gray-900 text-lg lg:text-2xl">
                                {DIGITAL_GOV_CONTENT.digitalGovermentTitle}
                            </p>
                            <p className="mt-1 max-w-5xl pt-3">
                                {DIGITAL_GOV_CONTENT.digitalGovermentCaption}
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-900 text-lg lg:text-2xl">
                            {DIGITAL_GOV_CONTENT.orchestrationTitle}
                            </p>
                            <p className="mt-1 max-w-5xl pt-3">
                                {DIGITAL_GOV_CONTENT.orchestrationCaption}
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-900 text-lg lg:text-2xl">
                            {DIGITAL_GOV_CONTENT.comunicationTitle}
                            </p>
                            <p className="mt-1 max-w-5xl pt-3">
                                {DIGITAL_GOV_CONTENT.comunicationCaption}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                                {DIGITAL_GOV_CONTENT.operativeTitle}
                            </h3>
                            <p className="lg:text-xl mb-2 text-gray-700 max-w-5xl leading-relaxed">
                                {DIGITAL_GOV_CONTENT.operativeCaption}
                            </p>
                            <div className="bg-white rounded-2xl shadow-xl p-2 border border-gray-200 hover:shadow-2xl transition duration-300">
                                <img
                                    src="/logo/QR_operativeInfoCode.png"
                                    alt="QR Acceso a la capa operativa"
                                    className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
