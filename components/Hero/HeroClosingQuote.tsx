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
        "mt-16 max-w-3xl text-center mx-auto",
        "italic text-lg md:text-xl",
        "text-muted-foreground leading-relaxed",
        className
      )}
    >
      {closingStatement}
    </blockquote>
  )
}
