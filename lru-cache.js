class DataNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DataList {
  constructor() {
    this.head = new DataNode();
    this.tail = new DataNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insert(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  promote(node) {
    this.remove(node);
    this.insert(node);
  }

  getLast() {
    return this.tail.prev;
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
   
    this.dataList = new DataList();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
 
    this.dataList.promote(node);

    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.capacity === 0) {
      return;
    }

    let node;

    if (this.map.has(key)) {
      node = this.map.get(key);
      node.value = value;
      this.dataList.promote(node);
      return;
    }

    if (this.map.size === this.capacity) {
      node = this.dataList.getLast();
      this.map.delete(node.key);
      this.dataList.remove(node);
    }

    node = new DataNode(key, value);
    this.map.set(key, node);
    this.dataList.insert(node);
  }
}
