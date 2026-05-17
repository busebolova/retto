import type React from "react"
// Style 1: Clean Underline
export const HeadingStyle1 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-4xl md:text-6xl font-medium tracking-tight text-white relative inline-block ${className}`}>
    {children}
    <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-500/30 transform"></span>
  </h2>
)

// Style 2: Gradient Text
export const HeadingStyle2 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2
    className={`text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text ${className}`}
  >
    {children}
  </h2>
)

// Style 3: Elegant with Line
export const HeadingStyle3 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <div className="w-12 h-[1px] bg-gray-500 mr-4"></div>
    <h2 className="text-4xl md:text-6xl font-light tracking-wide text-white">{children}</h2>
  </div>
)

// Style 4: Bold with Background
export const HeadingStyle4 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${className}`}>
    <span className="bg-gray-800 px-4 py-2 text-white">{children}</span>
  </h2>
)

// Style 5: Split Style
export const HeadingStyle5 = ({
  firstWord,
  restWords,
  className = "",
}: {
  firstWord: string
  restWords: string
  className?: string
}) => (
  <h2 className={`text-4xl md:text-6xl tracking-tight ${className}`}>
    <span className="font-bold text-white">{firstWord}</span>{" "}
    <span className="font-light text-gray-400">{restWords}</span>
  </h2>
)

// Style 8: Minimal with Dot
export const HeadingStyle8 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-4xl md:text-6xl font-medium tracking-tight text-white ${className}`}>
    {children}
    <span className="text-gray-400">.</span>
  </h2>
)

// Style 10: Bracket Highlight
export const HeadingStyle10 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-4xl md:text-6xl font-medium tracking-tight text-white ${className}`}>
    <span className="text-gray-500">[</span> {children} <span className="text-gray-500">]</span>
  </h2>
)
