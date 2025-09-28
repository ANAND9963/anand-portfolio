import { fetchLeetCodeStats } from "@/lib/leetcode"
import { LeetCodeChart } from "./LeetCodeChart"
import Image from "next/image"

export async function LeetCodeStats() {
    const username = "Anand9963"
    const user = await fetchLeetCodeStats(username)

    if (!user) {
        return (
            <section className="container mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
                    LeetCode Stats
                </h2>
                <p className="text-center text-red-500 mt-4">
                    Failed to load LeetCode stats.
                </p>
            </section>
        )
    }

    const easy =
        user.submitStats.acSubmissionNum.find((s) => s.difficulty === "Easy")
            ?.count || 0
    const medium =
        user.submitStats.acSubmissionNum.find((s) => s.difficulty === "Medium")
            ?.count || 0
    const hard =
        user.submitStats.acSubmissionNum.find((s) => s.difficulty === "Hard")
            ?.count || 0
    const total = easy + medium + hard

    return (
        <section className="container mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
                LeetCode Stats
            </h2>

            <div className="flex flex-col items-center mt-8 bg-gray-900 rounded-2xl p-6 shadow-xl">
                {/* Client-side chart */}
                <LeetCodeChart easy={easy} medium={medium} hard={hard} />
                <p className="mt-4 text-lg font-semibold text-gray-200">
                    Total Solved: {total}
                </p>
            </div>

            {/* Badges + Heatmap */}
            <div className="mt-8 bg-gray-900 rounded-2xl p-6 shadow-xl text-center">
                <h3 className="text-lg font-semibold text-white mb-4">
                    Progress & Badges
                </h3>
                <Image
                    src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Source%20Sans%20Pro&ext=heatmap`}
                    alt="LeetCode Stats Card"
                    width={800}
                    height={400}
                    className="rounded-xl w-full"
                    unoptimized
                />
            </div>
        </section>
    )
}
