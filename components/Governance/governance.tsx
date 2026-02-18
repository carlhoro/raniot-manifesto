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
            <div className= "bg-linear-to-tl from-gray-100 from-50%  to-cyan-300 max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center rounded-2xl pr-4">
                <div className=" p-6 flex flex-col items-center text-center md:col-span-2 lg:col-span-2">
                    <h2 className="text-3xl font-extrabold text-gray-900">{DIGITAL_GOV_CONTENT.title}</h2>
                    <p className=" text-black my-4 text-center mt-10 font-medium font-stretch-110%">
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
                <div className="architecture-logo-bg bg-white rounded-xl shadow p-14 md:p-6 ms:p-2 flex flex-col items-center text-center border-4 border-gray-700/30">
                    <h2 className="text-xl font-semibold text-gray-900">
                    {DIGITAL_GOV_CONTENT.headerGov}
                    </h2>
                    <div className="mt-6 space-y-5 text-sm lg:text-lg text-gray-600">
                        <div>
                            <p className="font-medium text-gray-900">
                                {DIGITAL_GOV_CONTENT.digitalGovermentTitle}
                            </p>
                            <p className="mt-1 pt-3">
                                {DIGITAL_GOV_CONTENT.digitalGovermentCaption}
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">
                            {DIGITAL_GOV_CONTENT.orchestrationTitle}
                            </p>
                            <p className="mt-1 pt-3">
                                {DIGITAL_GOV_CONTENT.orchestrationCaption}
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">
                            {DIGITAL_GOV_CONTENT.comunicationTitle}
                            </p>
                            <p className="mt-1 pt-3">
                                {DIGITAL_GOV_CONTENT.comunicationCaption}
                            </p>
                        </div>
                        <div className="pt-2 flex justify-center">
                            <a href="https://github.com/carlhoro/raniot-digital-operations-orchestration" target="_blank"
                                className="mt-8 rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6
                                           font-medium bg-red-400  text-white transition duration-150 ease-in-out">
                                            
                                {ARCHITECTURE_SECTION.buttonCaption}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
