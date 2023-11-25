'use client'

import { TestCard } from '@/components/test/card'
import { Progress } from '@/components/ui/progress'
import { questions } from '@/lib/constant'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Answer } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const [answers, setAnswers] = useState<Answer[]>([])
  const [section, setSection] = useState(1)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const pageSize = questions.length

  function next() {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    setCurrentStepIndex((index) => {
      if (index > pageSize) return index
      return index + 1
    })
  }

  function back() {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index
      return index - 1
    })
  }

  function submit() {
    const result = {} as any

    for (const answer of answers) {
      const questionLength = questions.find(
        (question) => question.category === answer.category.toLowerCase(),
      )?.questions.length
      result[answer.category] =
        answer.answers.reduce((total, answer) => total + answer.value, 0) /
        questionLength!
    }
    const arrayAsString = btoa(JSON.stringify(result))
    router.push(`/result?data=${arrayAsString}`)
  }

  function onChange(value: string, index: number) {
    const element = document.getElementById(`question-${index}`)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    const splitted = value.split('|')
    const category = splitted[0]
    const question = parseInt(splitted[1])
    const answerValue = parseInt(splitted[2])

    const keyIndex = answers.findIndex((answer) => answer.category === category)

    if (keyIndex !== -1) {
      const updatedAnswers = [...answers]
      const existingCategory = updatedAnswers[keyIndex]
      const questionIndex = existingCategory.answers.findIndex(
        (answer) => answer.question === question,
      )

      questionIndex !== -1
        ? (existingCategory.answers[questionIndex].value = answerValue)
        : existingCategory.answers.push({ question, value: answerValue })

      setAnswers(updatedAnswers)
    } else {
      setAnswers([
        ...answers,
        {
          category,
          answers: [
            {
              question: question,
              value: answerValue,
            },
          ],
        },
      ])
    }
  }

  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-5xl text-center font-bold pt-16 pb-5">
        Take the Personality Test
      </h1>
      <div className="grid grid-cols-3 gap-2">
        <TestCard />
      </div>
      <div className="max-w-md mx-auto grid gap-5 mt-20 mb-5">
        <Progress value={(currentStepIndex / pageSize) * 100} />
      </div>
      <div className="max-w-xl mx-auto grid gap-5 my-10 w-full">
        {questions[currentStepIndex].questions.map((question, index) => {
          const category = questions[currentStepIndex].category

          return (
            <Card
              className="grid gap-2"
              key={question}
              id={`question-${index + 1}`}
            >
              <CardHeader>
                <CardTitle className="text-center text-lg font-medium">
                  {question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-10 items-center justify-center">
                  <h1 className="capitalize text-muted-foreground">Disagree</h1>
                  <RadioGroup
                    onValueChange={(value) =>
                      onChange(`${category}|${index + 1}|${value}`, index + 1)
                    }
                    className="flex items-center gap-10"
                  >
                    <RadioGroupItem value="1" className="h-11 w-11" />
                    <RadioGroupItem value="2" className="h-9 w-9" />
                    <RadioGroupItem value="3" className="h-7 w-7" />
                    <RadioGroupItem value="4" className="h-9 w-9" />
                    <RadioGroupItem value="5" className="h-11 w-11" />
                  </RadioGroup>
                  <h1 className="capitalize text-muted-foreground">Agree</h1>
                </div>
              </CardContent>
            </Card>
          )
        })}
        <div className="flex justify-center items-center gap-5 w-full mt-10">
          {currentStepIndex !== 0 && (
            <Button size="lg" onClick={back}>
              Back
            </Button>
          )}
          {currentStepIndex !== pageSize - 1 && (
            <Button size="lg" onClick={next}>
              Next
            </Button>
          )}
          {currentStepIndex === pageSize - 1 && (
            <Button size="lg" onClick={submit}>
              Finish
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}
