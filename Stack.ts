import {Basic} from "./interface";

export class Stack<T> implements Basic<T>{
    container:T[]=[]
    constructor() {
    }

    pop(): void {
         this.container.pop()
    }

    push(item:T): void {
        this.container.push(item)
    }

    size(): number {
        return this.container.length
    }
    
}