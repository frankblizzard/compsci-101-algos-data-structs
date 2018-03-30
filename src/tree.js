class Tree {
  root = null;

  traverse(callback, node) {
    callback(node);
    // recursively execute the traversal across all children
    node.children.forEach((childNode) => this.traverse(callback, childNode));
  }


  insert(value, parentValue) {
    // Create a node
    const newNode = {
      value,
      children: []
    };

    // if there is no root node, create it and return
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // find the parent node that you want to insert a child for
    this.traverse((node) => {
      // When found, insert the new value as a child
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    }, this.root);
  }
}

export default Tree;
