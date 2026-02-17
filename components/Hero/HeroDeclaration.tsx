import * as React from "react"
import { cn } from "@/core/utilities/cn"

interface HeroDeclarationProps {
  title: string
  lead: string
  statement: string
  className?: string
}

export function HeroDeclaration({
  title,
  lead,
  className,
}: HeroDeclarationProps) {
  return (
      <div className={cn("space-y-8 px-4 mx-auto text-center lg:py-16 lg:px-4", className)}>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl
                       lg:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="mb-8 lg:text-xl dark:text-gray-400 mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl
                      font-light text-slate-300 tracking-wide leading-relaxed">
          {lead}
        </p>
      </div>
  )
}