// Cache System Design 
// Title: Q1. LRU Cache
// Problem Link: https://leetcode.com/problems/lru-cache/description/?envType=problem-list-v2&envId=ssd-ssd1-cache-system-design
// Difficulty: Medium
// Time O(1) Space O(n)

class Node {
    key: number;
    val: number;
    next: Node;
    prev: Node;
    constructor(key: number, val: number, next: Node, prev: Node) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkList {
    head: Node;
    tail: Node;
    constructor() {
        this.head = new Node(null, -1, null, null);
        this.tail = this.head;
    }
    getHead() {
        return this.head.next;
    }
}

class LRUCache {
    capacity: number;
    count: number;
    keyNodeMap: Map<number, Node>;
    list: DoublyLinkList;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.count = 0;
        this.keyNodeMap = new Map();
        this.list = new DoublyLinkList();
    }

    get(key: number): number {
        if (this.keyNodeMap.has(key)) {
            const node = this.keyNodeMap.get(key);
            const val = node.val;
            this.put(key, val);
            return val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (this.keyNodeMap.has(key)) {
            const node = this.keyNodeMap.get(key);
            if (node === this.list.tail) {
                if (node.val !== value) {
                    node.val = value;
                }
                return;
            } else {
                node.next.prev = node.prev;
                node.prev.next = node.next;
            }
        } else {
            if (this.count >= this.capacity) {
                this.keyNodeMap.delete(this.list.head.next.key);
                this.list.head.next = this.list.head.next.next;
                if (!this.list.head.next) {
                    this.list.tail = this.list.head;
                } else {
                    this.list.head.next.prev = this.list.head;
                }
            } else {
                this.count++;
            }
        }
        const newNode = new Node(key, value, null, this.list.tail);
        this.list.tail.next = newNode;
        this.keyNodeMap.set(key, newNode);
        this.list.tail = newNode;
    }
}
