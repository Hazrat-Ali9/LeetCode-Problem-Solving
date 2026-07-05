/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation.
 * function NestedInteger() {
 * *     this.isInteger = function() {
 * *         // @return {boolean}
 * *     };
 *
 * *     this.getInteger = function() {
 * *         // @return {integer}
 * *     };
 *
 * *     this.getList = function() {
 * *         // @return {NestedInteger[]}
 * *     };
 * * };
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stack = [...nestedList].reverse();
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    while (this.stack.length) {
        let top = this.stack[this.stack.length - 1];

        if (top.isInteger()) {
            return true;
        }

        this.stack.pop();
        let list = top.getList();
        for (let i = list.length - 1; i >= 0; i--) {
            this.stack.push(list[i]);
        }
    }

    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.stack.pop().getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
