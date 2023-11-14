import { TestCard } from "@/components/test/card"
import { Question } from "@/components/test/question"
import { Progress } from "@/components/ui/progress"

export default function Page() {
	return (
		<main className="max-w-5xl mx-auto">
			<h1 className="uppercase text-5xl text-center font-bold py-16">Personality Test</h1>
			<div className="grid grid-cols-3 gap-2">
				<TestCard />
			</div>
			<div className="max-w-md mx-auto grid gap-5 mt-20 mb-5">
				<Progress value={50} />
			</div>
			<div className="max-w-xl mx-auto grid gap-5 my-10 w-full">
				<Question />
			</div>
		</main>
	)
}
