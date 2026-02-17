import * as React from "react"
import { cn } from "@/core/utilities/cn"

interface HeroClosingQuoteProps {
  closingStatement: string
  className?: string
}

export function HeroClosingQuote({
  closingStatement,
  className,
}: HeroClosingQuoteProps) {
  return (
    <blockquote
      className={cn(
        "sm:mt-16 max-w-5xl text-center mx-auto italic text-lg",
        "text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight",
        className
      )}
    >
      {closingStatement}
    </blockquote>
  )
}
