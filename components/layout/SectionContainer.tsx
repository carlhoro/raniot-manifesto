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
      <section className="min-h-dvh w-full 
      relative overflow-hidden before:absolute before:inset-y-0 before:right-0 before:w-[50%] 
      before:content-[''] before:bg-[url('/logo/just-logo.png')] before:bg-right before:bg-contain before:bg-no-repeat 
      before:opacity-55 before:pointer-events-none 
      before:[-webkit-mask-image:radial-gradient(80%_80%_at_70%_50%,#000_0%,#000_35%,transparent_80%)] 
      before:[mask-image:radial-gradient(80%_80%_at_70%_50%,#000_0%,#000_25%,transparent_70%)]"
      >
      <div className="max-w-screen-xl mx-auto">
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
