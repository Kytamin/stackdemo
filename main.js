"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var stack1 = new Stack_1.Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.push(6);
stack1.pop();
console.log(stack1.size());
console.log(stack1.container);