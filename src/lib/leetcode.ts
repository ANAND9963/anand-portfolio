export const dynamic = "force-dynamic" // ensures it runs server-side


export type SubmissionStat = {
    difficulty: string
    count: number
    submissions: number
}

export type LeetCodeUser = {
    username: string
    submitStats: {
        acSubmissionNum: SubmissionStat[]
    }
}

export async function fetchLeetCodeStats(username: string): Promise<LeetCodeUser | null> {
    const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `

    try {
        const res = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables: { username } }),
            next: { revalidate: 3600 },
        })

        if (!res.ok) {
            console.error("LeetCode API Error:", res.status, await res.text())
            return null
        }

        const data = await res.json()
        return data.data.matchedUser
    } catch (err) {
        console.error("LeetCode fetch error:", err)
        return null
    }
}
