/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let shortestSoFar = Infinity;
    let edges = 0;
    let nodesToEvalStack = [this.root];

    // from parent, if that parent has children, add them to stack and increment edge count
    // inside each child, if that child has children, add them to stack and increment edge count
    // etc...
    // when we reach a node that does not have children, we've reached a leaf
    // if current edges count is less that shortest so far, then set shortestSoFar to edges
    // reset edges


    // while we still have nodes in our stack
    while (nodesToEvalStack.length) {
      // grab the node at the top of the stack
      let current = nodesToEvalStack.pop();

      if (current) {
        edges++;
        if (current.left === null && current.right === null) {
          if (edges < shortestSoFar) shortestSoFar = edges;
          edges = 1;
        }
        // if the node has add any of its child nodes to the stack
        if (current.left) nodesToEvalStack.push(current.left);
        if (current.right) nodesToEvalStack.push(current.right);
      }
    }
    return shortestSoFar;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
