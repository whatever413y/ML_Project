"use client"

import { Answer } from "@/lib/types"
import { useSearchParams } from "next/navigation"

export default function Page() {
	const searchParams = useSearchParams()
	const data = searchParams.get("data")

	const results = JSON.parse(atob(data!)) as Answer[]

	return (
		<main className="max-w-5xl mx-auto">
			<h1 className="text-5xl text-center font-bold pt-16 pb-5">Your Personality Test Results</h1>

			<pre>{JSON.stringify(results, null, 2)}</pre>
		</main>
	)
}
