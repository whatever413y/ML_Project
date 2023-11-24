export type Answer = {
	category: string
	answers: Answers[]
}

export type Answers = {
	question: number
	value: number
}

export type Chart = {
	category: string
	total: number
}