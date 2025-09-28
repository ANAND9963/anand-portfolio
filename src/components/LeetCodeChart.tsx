"use client"

import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts"

type Props = {
    easy: number
    medium: number
    hard: number
}

export function LeetCodeChart({ easy, medium, hard }: Props) {
    const data = [
        { name: "Easy", value: easy, color: "#22c55e" },
        { name: "Medium", value: medium, color: "#eab308" },
        { name: "Hard", value: hard, color: "#ef4444" },
    ]

    return (
        <PieChart width={300} height={300}>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={120} label>
                {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Legend />
            <Tooltip />
        </PieChart>
    )
}
