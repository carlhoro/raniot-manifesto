import * as React from "react"
import { cn } from "@/core/utilities/cn"

type SectionSize = "default" | "hero"
type SectionAs = "section" | "header" | "div"

interface SectionContainerProps {
  children: React.ReactNode
  size?: SectionSize
  as?: SectionAs
  className?: string
}

export function SectionContainer({
  children,
  size = "default",
  as = "section",
  className,
}: SectionContainerProps) {
  const Component = as
  return (
      <section className="hero-logo-bg min-h-dvh w-full 
      relative overflow-hidden 
      bg-gray-800 bg-linear-to-b from-gray-800 from-85% to-white">
      <div id="hero" className="max-w-full mx-auto">
        <Component
          className={cn(
            "mx-auto w-full px-6 md:px-12 lg:px-24",
            size === "hero"
              ? "max-w-5xl min-h-[85vh] py-24 flex flex-col justify-center"
              : "max-w-4xl py-24",
            className
          )}
        >
          {children}
        </Component>
      </div>
    </section>
  )
}
