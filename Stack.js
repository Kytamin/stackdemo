"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.pop = function () {
        this.container.pop();
    };
    Stack.prototype.push = function (item) {
        this.container.push(item);
    };
    Stack.prototype.size = function () {
        return this.container.length;
    };
    return Stack;
}());
exports.Stack = Stack;
