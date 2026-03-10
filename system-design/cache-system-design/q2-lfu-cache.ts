// Cache System Design 
// Title: Q2. LFU Cache 
// Problem Link: https://leetcode.com/problems/lfu-cache/?envType=problem-list-v2&envId=ssd-ssd1-cache-system-design 
// Difficulty: Hard
// Time O(1) Space O(n)

class Node {
    key: number;
    val: number;
    rank: number;
    next: Node;
    prev: Node;
    constructor(key: number, val: number, prev: Node, next: Node) {
        this.key = key;
        this.val = val;
        this.rank = 1;
        this.next = next;
        this.prev = prev;
    }
}

class RankList {
    head: Node;
    tail: Node;
    next: RankList;
    prev: RankList;
    rank: number
    constructor(node, rank, prev, next) {
        this.head = node;
        this.tail = node;
        this.next = next;
        this.prev = prev;
        this.rank = rank
    }
}

class LFUCache {
    capacity: number;
    count: number;
    keyNodeMap: Map<number, Node>;
    rankListMap: Map<number, RankList>;
    tailRank: RankList
    constructor(capacity: number) {
        this.capacity = capacity;
        this.count = 0;
        this.keyNodeMap = new Map();
        this.rankListMap = new Map();
    }

    get(key: number): number {
        if (this.keyNodeMap.has(key)) {
            const node = this.keyNodeMap.get(key)
            this.promote(node)
            return node.val
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        if (this.keyNodeMap.has(key)) {
            const node = this.keyNodeMap.get(key)
            node.val = value
            this.promote(node)
        } else {
            if (this.count >= this.capacity) {
                this.evict()
            }
            const newNode = new Node(key, value, null, null)
            this.enterRank(newNode, 1)
            this.keyNodeMap.set(key, newNode)
        }
    }

    evict() {
        const rankList = this.tailRank
        const rankTail = rankList.tail
        this.keyNodeMap.delete(rankTail.key)
        this.leaveRank(rankTail)
    }

    promote(node: Node) {
        const rankList = this.leaveRank(node)
        node.rank++
        if (!this.getRank(node.rank)) {
            this.createRank(node.rank, rankList)
        }
        this.enterRank(node, node.rank)
    }

    enterRank(node: Node, rank: number) {
        let rankList = this.getRank(rank)
        if (!rankList) {
            rankList = this.createRank(rank, null)
        }
        if (rankList.head) {
            rankList.head.prev = node
        }
        if (!rankList.tail) {
            rankList.tail = node
        }
        node.next = rankList.head
        rankList.head = node
        this.count++
    }

    leaveRank(node: Node) {
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }

        const rankList = this.getRank(node.rank)
        if (rankList.tail === node) {
            rankList.tail = node.prev
        }
        if (rankList.head === node) {
            rankList.head = node.next
        }

        node.prev = null
        node.next = null
        if (!rankList.head && !rankList.tail) {
            this.removeRank(rankList)
        }
        this.count--
        return rankList
    }

    removeRank(rankList: RankList) {
        if (rankList.prev) {
            rankList.prev.next = rankList.next
        }
        if (rankList.next) {
            rankList.next.prev = rankList.prev
        }
        if (rankList === this.tailRank) {
            this.tailRank = rankList.next
        }
        this.rankListMap.delete(rankList.rank)
    }

    getRank(rank: number) {
        if (this.rankListMap.has(rank)) {
            return this.rankListMap.get(rank)
        }
        return null
    }

    createRank(rank: number, previousRank: RankList) {
        if (this.tailRank && rank < this.tailRank.rank) {
            const newRankList = new RankList(null, rank, null, this.tailRank)
            this.tailRank.prev = newRankList
            this.tailRank = newRankList
            this.rankListMap.set(rank, newRankList)
            return newRankList
        }
        if (previousRank && !this.getRank(previousRank.rank)) {
            const newRankList = new RankList(null, rank, previousRank.prev, previousRank.next)
            if (previousRank.prev) {
                previousRank.prev.next = newRankList
            }
            if (previousRank.next) {
                previousRank.next.prev = newRankList
            }
            if (!this.tailRank) {
                this.tailRank = newRankList
            }
            this.rankListMap.set(rank, newRankList)
            return newRankList
        }
        if (previousRank && this.getRank(previousRank.rank)) {
            const newRankList = new RankList(null, rank, previousRank, previousRank.next)
            if (previousRank.next) {
                previousRank.next.prev = newRankList
            }
            previousRank.next = newRankList

            if (!this.tailRank) {
                this.tailRank = newRankList
            }
            this.rankListMap.set(rank, newRankList)
            return newRankList
        }
        const newRankList = new RankList(null, rank, null, null)
        this.tailRank = newRankList
        this.rankListMap.set(rank, newRankList)
        return newRankList
    }
}

