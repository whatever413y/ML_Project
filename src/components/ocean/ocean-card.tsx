import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"

type OceanCardProps = {
	title: string
	color: string
	description: string
}

export const OceanCard = ({ title, color, description }: OceanCardProps) => {
	return (
		<div className="grid gap-2 w-full justify-center items-center">
			<div className="flex flex-col items-center justify-center">
				<h1 className="uppercase text-center text-7xl font-black" style={{ color: color }}>
					{title.charAt(0)}
				</h1>
				<Separator style={{ backgroundColor: color }} className="w-3/4 py-[1px] rounded-full" />
			</div>

			<Card>
				<CardHeader>
					<CardTitle className="text-center text-lg font-bold tracking-wide" style={{ color: color }}>
						{title}
					</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
			</Card>
		</div>
	)
}
