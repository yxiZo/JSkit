class ListNode {
    constructor(public val: number, public next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @description 链表队列
 */
class LinkedListQueue {
    private front : ListNode | null; // 头节点 #front
    private rear : ListNode | null; // 尾节点 #rear
    private qsize: number = 0;
    constructor() {
        this.front = null;
        this.rear = null;
    }

    /* 获取队列的长度 */
    get size(): number {
        return this.qsize;
    }

    /* 判断队列是否为空 */
    isEmpty(): boolean {
        return this.size === 0;
    }

    push(num: number): void {
        const node = new ListNode(num);
        // 如果队列为空，则令头、尾节点都指向该节点
        if (this.isEmpty()) {
            this.front = node;
            this.rear = node;
        } else {
            // 如果队列不为空，则将该节点添加到尾节点之后
            this.rear.next = node;
            this.rear = node;
        }
        this.qsize++;
    }

    pop(): number | null {
        const num = this.peek();
        if (this.isEmpty()) throw new Error('队列为空');
        // 删除头节点
        this.front = this.front.next;
        this.qsize--;
        return num;
    }

    /* 访问队首元素 */
    peek(): number {
        if (this.isEmpty()) throw new Error('队列为空');
        return this.front.val;
    }

}


/**
 * @description 双向队列
 */
class DoubleEndedQueue {
    constructor() {
        this.items = [];
    }
}

export {
    LinkedListQueue,
    DoubleEndedQueue
}