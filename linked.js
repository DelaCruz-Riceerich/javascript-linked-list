class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    

    display() {
        let current = this.head;
        let output = "";
        while (current !== null) {
            output += current.data + " ";
            current = current.next;
        }

        document.getElementById("output").textContent = output;
    }
}
