class BinarySearchTree {
  add(value) {
    const newNode = {
      value
    };

    // if no root, set the root
    if (!this.root) {
      this.root = newNode;
      return;
    }

    this.traverse(this.root, newNode);
  }

  remove(value) {
    this.traverse(this.root, newNode)
  }

  traverse(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
        return;
      }

      return this.traverse(node.left, newNode);
    }

    if (newNode.value > node.value) {
      if (!node.right) {
        node.right = newNode;
        return;
      }
      return this.traverse(node.right, newNode);
    }
  }
}

export default BinarySearchTree;
