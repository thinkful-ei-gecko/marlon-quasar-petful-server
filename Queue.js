'use strict';

class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(value){
    const node = new _Node(value, null);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
  }

  peek(){
    return this.first.value;
  }

  isEmpty(){
    if(this.first === null){
      return null;
    }
  }
}

module.exports = Queue;