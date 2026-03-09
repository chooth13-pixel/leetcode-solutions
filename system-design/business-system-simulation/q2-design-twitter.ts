// Business System Simulation 
// Title: Q2. Design Twitter 
// Problem Link: https://leetcode.com/problems/design-twitter/description/?envType=problem-list-v2&envId=ssd-ssd4-business-system-simulation
// Difficulty: Medium
// Time O(n x log(n)) Space O(n)

type Tweet = {
    post: number,
    time: number,
}

class Twitter {
    followDb: Map<number, Set<number>>
    tweetDb: Map<number, Tweet[]>
    time: number
    constructor() {
        this.followDb = new Map()
        this.tweetDb = new Map()
        this.time = 0
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.tweetDb.has(userId)) {
            this.tweetDb.set(userId, [{ post: tweetId, time: this.time++ }])
        } else {
            this.tweetDb.get(userId).push({ post: tweetId, time: this.time++ })
        }
    }
    
    //Time O(nlogn)
    getNewsFeed(userId: number): number[] {
        const followeeIds = this.followDb.get(userId) ?? new Set([])
        const feed = []
        const maxPQ = new MaxPriorityQueue((tweet: Tweet) => tweet.time)

        let count = 10
        const selfTweets = this.tweetDb.get(userId) ?? []
        for (let i = selfTweets.length - 1; i >= 0; i--) {
            maxPQ.enqueue(selfTweets[i])
            if (count === 1) break
            count--
        }

        const iterator = followeeIds.values()
        let fId = iterator.next().value
        while (fId) {
            let count = 10
            const otherTweets = this.tweetDb.get(fId) ?? []
            for (let i = otherTweets.length - 1; i >= 0; i--) {
                maxPQ.enqueue(otherTweets[i])
                if (count === 1) break
                count--
            }
            fId = iterator.next().value
        }
        for (let i = 0; i < 10; i++) {
            if (!maxPQ.front()) break
            feed.push(maxPQ.dequeue().post)
        }
        return feed
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.followDb.has(followerId)) {
            this.followDb.set(followerId, new Set([followeeId]))
        } else {
            this.followDb.get(followerId).add(followeeId)
        }
    }

    unfollow(followerId: number, followeeId: number): void {
        const followeeIds = this.followDb.get(followerId) ?? new Set([])
        if (followeeIds.has(followeeId)) {
            followeeIds.delete(followeeId)
        }
    }
}
