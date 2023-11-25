'use client'

import { Answer } from '@/lib/types'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const data = JSON.parse(atob(searchParams.get('data')!)) as Answer[]

  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-5xl text-center font-bold pt-16 pb-5">
        Your Personality Test Results
      </h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
