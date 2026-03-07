// Data Structure Design
// Title: Q1. Insert Delete GetRandom O(1) 
// Problem Link: https://leetcode.com/problems/insert-delete-getrandom-o1/submissions/1935400260/?envType=problem-list-v2&envId=ssd-ssd3-data-structure-design 
// Difficulty: Medium
// Time O(1) Space O(n)

class RandomizedSet {
    indexMap: Map<number, number>
    list: number[]
    constructor() {
        this.indexMap = new Map()
        this.list = []
    }

    insert(val: number): boolean {
        if (this.indexMap.has(val)) {
            return false
        }
        this.list.push(val)
        this.indexMap.set(val, this.list.length - 1)
        return true
    }

    remove(val: number): boolean {
        if (!this.indexMap.has(val)) {
            return false
        }
        const pos = this.indexMap.get(val)
        const last = this.list.pop()
        this.indexMap.delete(val)
        if (val !== last) {
            this.list[pos] = last
            this.indexMap.set(last, pos)
        }
        return true
    }

    getRandom(): number {
        const randomIdx = Math.floor((Math.random() * 200000) % this.list.length)
        return this.list[randomIdx]
    }
}
