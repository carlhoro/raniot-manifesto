import { GOVERNANCE_LAYER_CONTENT } from "@/core/lib/constants/constants";

interface LayerContentProps {
    variant: "copilot" | "powerAutomate" | "n8n" | "whatsapp";
  }
  
  export default function GovernanceLayerContent({ variant }: LayerContentProps) {
  
    const config = GOVERNANCE_LAYER_CONTENT;
  
    const layer = config[variant];
  
    return (
        <div className={`rounded-2xl border ${layer.border} lg:p-12 md:p-8`}>
        <div className={`h-3 w-32 rounded-full bg-linear-to-r ${layer.accent} mb-4`} />
            <div className="space-y-8 max-w-2xl mx-auto text-center">
                {layer.paragraphs.map((text, index) => (
                    <p
                    key={index}
                    className="text-xl md:text-2xl font-medium leading-relaxed 
                              tracking-wide text-gray-800 dark:text-gray-100"
                    >
                    {text}
                    </p>
                ))}
            </div>
        </div>
    );
  }
  