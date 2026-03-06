// Data Structure Design
// Title: Q2. Insert Delete GetRandom O(1) - Duplicates allowed 
// Problem Link: https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/description/?envType=problem-list-v2&envId=ssd-ssd3-data-structure-design 
// Difficulty: Hard
// Time O(1) Space O(n)

class RandomizedCollection {
  private map: Map<number, Set<number>>;
  private arr: number[];

  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  insert(val: number): boolean {
    let isNew: boolean = false;

    if (!this.map.has(val)) {
      this.map.set(val, new Set());
      isNew= true
    };

    this.map.get(val)!.add(this.arr.length);
    this.arr.push(val);
    return isNew
  }

  remove(val: number): boolean {
    if (!this.map.has(val) || this.map.get(val)!.size === 0) {
      return false
    };

    let indexToRemove: number = this.map.get(val)!.values().next().value;
    let lastElement: number = this.arr[this.arr.length - 1];

    this.arr[indexToRemove] = lastElement;
    this.map.get(val)!.delete(indexToRemove);

    if (this.map.get(val)!.size === 0) {
      this.map.delete(val)
    };

    if (indexToRemove !== this.arr.length - 1) {
      this.map.get(lastElement)!.delete(this.arr.length - 1);
      this.map.get(lastElement)!.add(indexToRemove)
    };

    this.arr.pop();
    return true
  }

  getRandom(): number {
    const randomIndex: number = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex]
  }
}
