"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";

interface LayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function LayerModal({
  isOpen,
  onClose,
  title,
  children,
}: LayerModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/60 backdrop-blur-xs">
        <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-gray-100
                       dark:bg-gray-900 p-8 md:p-12 overflow-hidden">
            <button onClick={onClose} className="absolute top-8 right-8 z-10 text-gray-500 
                                hover:text-blue-950 dark:hover:text-white transition" >
                    <X size={60} />
            </button>

            <h2 className=" text-2xl lg:text-5xl md:text-3xl font-bold m-6 text-gray-400 dark:text-white">
            {title}
            </h2>

            <div className="mt-4 max-h-[65vh] overflow-y-auto pr-4 scrollbar-thin 
                            scrollbar-thumb-gray-400/40">
            {children}
            </div>
        </div>
    </div>
  );
}
