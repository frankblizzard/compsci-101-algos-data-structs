/**
 * Linked lists are more like 'chains' than 'lists'.
 * In a doubly linked list, each element has a pointer to the previous and next element.
 * They generally have a larger memory footprint because they hold extra pointers.
 * They are better than standard arrays for inserting and deleting data.
 * Visualizing them as a JSON-like structure looks like this:
 *
 *     {
 *       value: 1,
 *       next: {
 *         value: 2,
 *         next: {
 *           value: 3,
 *           next: {...}
 *         }
 *       }
 *     }
 *
 * Big O Notation for Linked List Operations:
 *
 * Search: O(N)
 * Access: O(N)
 * Insertion: O(1)
 * Deletion: O(1)
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  access(idx) {
    // throw error if idx is greater than list length
    if (idx > this.length) {
      throw new Error("Array Index out of bounds.");
    }

    // starting with the head, slide through elements using node.next until you reach the idx you are looking for.
    let current = this.head;

    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current;
  }

  insert(value, position) {
    const newNode = { value, next: null };

    if (position === 0) {
      newNode.next = this.head; // new node should have no next node - this will be undefined
      this.head = newNode; // Set the head to the new node
    } else {
      const previous = this.access(position - 1); // Find the previous node of the position you want to insert at
      const nodeToReplace = previous.next;

      newNode.next = nodeToReplace; // Move the replaced node to the next index
      previous.next = newNode; // Set the previous nodes next pointer to point at the newly inserted node
    }

    this.length++;
  }

  delete(position) {
    // if the list is empty
    if (!this.length) {
      throw new Error("Cannot delete from empty Linked List!");
    }

    if (position === 0) {
      this.head = this.head.next; // if its the first element, just set the head to the next element
    } else {
      const previous = this.access(position - 1);
      previous.next = previous.next.next; // set the previous elements next pointer to be 2 elements along, effectively "snipping out" the deleted element
    }

    // decrement the length
    this.length--;
  }
}

export default LinkedList;
