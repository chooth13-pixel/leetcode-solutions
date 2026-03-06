// Data Structure Design
// Title: Q3. All O`one Data Structure
// Problem Link: https://leetcode.com/problems/all-oone-data-structure/description/?envType=problem-list-v2&envId=ssd-ssd3-data-structure-design
// Difficulty: Hard
// Time O(1) Space O(n)

class Node {
    key: string;
    rank: number;
    next: Node;
    prev: Node;
    constructor(key: string, prev: Node, next: Node) {
        this.key = key;
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

class AllOne {
    keyNodeMap: Map<string, Node>;
    rankListMap: Map<number, RankList>;
    headRank: RankList
    tailRank: RankList
    constructor() {
        this.keyNodeMap = new Map()
        this.rankListMap = new Map();
    }

    inc(key: string): void {
        if (!this.keyNodeMap.has(key)) {
            const newNode = new Node(key, null, null)
            this.keyNodeMap.set(key, newNode)
            this.enterRank(newNode, 1)
        } else {
            const node = this.keyNodeMap.get(key)
            this.promote(node)
        }
    }

    dec(key: string): void {
        const node = this.keyNodeMap.get(key)
        if (node.rank === 1) {
            this.leaveRank(node)
            this.keyNodeMap.delete(key)
        } else {
            this.demote(node)
        }
    }

    getMaxKey(): string {
        return this.headRank?.head?.key ?? ''
    }

    getMinKey(): string {
        return this.tailRank?.head?.key ?? ''
    }

    promote(node: Node) {
        const rankList = this.leaveRank(node)
        node.rank++
        if (!this.getRank(node.rank)) {
            this.createRank(node.rank, rankList)
        }
        this.enterRank(node, node.rank)
    }

    demote(node: Node) {
        const rankList = this.leaveRank(node)
        node.rank--
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
        if (rankList.tail) {
            rankList.tail.next = node
        }
        if (!rankList.head) {
            rankList.head = node
        }
        node.prev = rankList.tail
        rankList.tail = node
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
        return rankList
    }

    removeRank(rankList: RankList) {
        if (rankList.prev) {
            rankList.prev.next = rankList.next
        }
        if (rankList.next) {
            rankList.next.prev = rankList.prev
        }
        if (rankList === this.headRank) {
            this.headRank = rankList.prev
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
        if (this.headRank && rank > this.headRank.rank) {
            const newRankList = new RankList(null, rank, this.headRank, null)
            this.headRank.next = newRankList
            this.headRank = newRankList
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
            if (!this.headRank) {
                this.headRank = newRankList
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
            if (!this.headRank) {
                this.headRank = newRankList
            }
            if (!this.tailRank) {
                this.tailRank = newRankList
            }
            this.rankListMap.set(rank, newRankList)
            return newRankList
        }
        const newRankList = new RankList(null, rank, null, null)
        this.headRank = newRankList
        this.tailRank = newRankList
        this.rankListMap.set(rank, newRankList)
        return newRankList
    }
}
