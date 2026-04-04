var PeekingIterator = function(iterator) {
    this.iterator = iterator;
    this.nextVal = iterator.hasNext() ? iterator.next() : null;
};

PeekingIterator.prototype.peek = function() {
    return this.nextVal;
};

PeekingIterator.prototype.next = function() {
    let curr = this.nextVal;
    this.nextVal = this.iterator.hasNext() ? this.iterator.next() : null;
    return curr;
};

PeekingIterator.prototype.hasNext = function() {
    return this.nextVal !== null;
};
