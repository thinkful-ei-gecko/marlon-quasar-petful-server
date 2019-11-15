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

    let node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  peek(){
    return this.first.value;
  }

  isEmpty(){
    if(this.first === null){
      return null;
    }
  }

  display(){
    let currNode = this.first;
    while(currNode !== null){
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  getAllAsArray() {
    let currNode = this.first;
    let arr = [];
    while (currNode !== null) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }
    return arr;
  }
}

module.exports = Queue;