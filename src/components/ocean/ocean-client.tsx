"use client"

import { OceanList } from "@/lib/constant"
import { OceanCard } from "./ocean-card"

export const OceanClient = () => {
	return OceanList.map(({ title, color, description }) => <OceanCard key={title} title={title} color={color} description={description} />)
}
