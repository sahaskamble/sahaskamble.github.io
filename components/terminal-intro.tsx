"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface TerminalIntroProps {
  onComplete: () => void
}

export function TerminalIntro({ onComplete }: TerminalIntroProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [canSkip, setCanSkip] = useState(false)

  const lines = [
    "$ whoami",
    "> Sahas Kamble - Full Stack Developer",
    "$ ls -la skills/",
    "> React.js  Next.js  Node.js  React-Native",
    "> Flask  Java  C++  System-Administration",
    "$ cat experience.txt",
    "> 8+ Projects Built | 3+ Years Experience",
    "> Web • Mobile • Desktop Applications",
    "$ ./start_portfolio.sh",
    "> Loading portfolio interface...",
    "> Welcome to the interactive experience!",
  ]

  useEffect(() => {
    setCanSkip(true)
    const timer = setTimeout(() => {
      if (currentLine < lines.length) {
        if (currentChar < lines[currentLine].length) {
          setCurrentChar((prev) => prev + 1)
        } else {
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1)
            setCurrentChar(0)
          }, 500)
        }
      } else {
        setTimeout(onComplete, 1000)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [currentLine, currentChar, lines, onComplete])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  const handleSkip = () => {
    onComplete()
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-300 text-sm ml-2">terminal</span>
          </div>
          <div className="p-6 font-mono text-blue-400 min-h-[300px]">
            {lines.slice(0, currentLine + 1).map((line, index) => (
              <div key={index} className="mb-2">
                {index === currentLine ? (
                  <span>
                    {line.slice(0, currentChar)}
                    {showCursor && <span className="bg-blue-400 text-black">_</span>}
                  </span>
                ) : (
                  line
                )}
              </div>
            ))}
          </div>
        </div>
        {canSkip && (
          <div className="mt-4 text-center">
            <Button
              onClick={handleSkip}
              variant="outline"
              className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
            >
              Skip Intro [Enter]
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
