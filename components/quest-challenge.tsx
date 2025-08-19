"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Code, Terminal, Zap } from "lucide-react"

interface QuestChallengeProps {
  projectName: string
  onComplete: () => void
  onCancel: () => void
}

export function QuestChallenge({ projectName, onComplete, onCancel }: QuestChallengeProps) {
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [attempts, setAttempts] = useState(0)

  const challenges = [
    {
      type: "code",
      question: "What React hook is used for managing component state?",
      answer: "useState",
      hint: "It starts with 'use' and manages 'State'",
    },
    {
      type: "terminal",
      question: "Which command initializes a new Node.js project?",
      answer: "npm init",
      hint: "It's an npm command to initialize",
    },
    {
      type: "logic",
      question: "Complete the sequence: React → Next.js → ?",
      answer: "Full Stack",
      hint: "What comes after frontend frameworks?",
    },
  ]

  const currentQ = challenges[currentChallenge]

  const handleSubmit = () => {
    const isAnswerCorrect = userAnswer.toLowerCase().trim() === currentQ.answer.toLowerCase()
    setIsCorrect(isAnswerCorrect)
    setAttempts((prev) => prev + 1)

    if (isAnswerCorrect) {
      setTimeout(() => {
        if (currentChallenge < challenges.length - 1) {
          setCurrentChallenge((prev) => prev + 1)
          setUserAnswer("")
          setIsCorrect(null)
        } else {
          onComplete()
        }
      }, 1500)
    }
  }

  const getIcon = () => {
    switch (currentQ.type) {
      case "code":
        return <Code className="w-6 h-6" />
      case "terminal":
        return <Terminal className="w-6 h-6" />
      default:
        return <Zap className="w-6 h-6" />
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-blue-500/50 bg-card/95">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            {getIcon()}
            <CardTitle className="text-blue-400">Quest Challenge</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Complete the challenge to unlock: <span className="text-blue-400 font-semibold">{projectName}</span>
          </p>
          <div className="flex justify-center gap-2 mt-2">
            {challenges.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index < currentChallenge ? "bg-green-500" : index === currentChallenge ? "bg-blue-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium mb-2">{currentQ.question}</p>
            {attempts > 1 && !isCorrect && <p className="text-sm text-yellow-500">💡 Hint: {currentQ.hint}</p>}
          </div>

          <div className="space-y-2">
            <Input
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer..."
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              className="border-blue-500/50 focus:border-blue-500"
            />

            {isCorrect !== null && (
              <div className={`flex items-center gap-2 text-sm ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                {isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                {isCorrect ? "Correct! Moving to next challenge..." : "Try again!"}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSubmit} className="flex-1 bg-blue-600 hover:bg-blue-700">
              Submit Answer
            </Button>
            <Button
              onClick={onCancel}
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
