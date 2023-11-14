import { questions } from "@/lib/constant"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export const Question = () => {
	return questions.map((question) => (
		<Card key={question} className="grid gap-2">
			<CardHeader>
				<CardTitle className="capitalize text-center text-lg font-medium">{question}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex gap-10 items-center justify-center">
					<h1 className="capitalize text-muted-foreground">Disagree</h1>
					<RadioGroup className="flex gap-10 items-center">
						<RadioGroupItem value="-2" className="h-11 w-11" />
						<RadioGroupItem value="-1" className="h-9 w-9" />
						<RadioGroupItem value="0" className="h-7 w-7" />
						<RadioGroupItem value="1" className="h-9 w-9" />
						<RadioGroupItem value="2" className="h-11 w-11" />
					</RadioGroup>
					<h1 className="capitalize text-muted-foreground">Agree</h1>
				</div>
			</CardContent>
		</Card>
	))
}
