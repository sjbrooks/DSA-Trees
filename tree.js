/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */


  // NOTE: could use BFS or DFS pattern to add all these up
  sumValues() {
    let sum = 0;
    let nodesToEvalStack = [this.root];

    // while we still have nodes in our stack
    while (nodesToEvalStack.length) {
      // grab the node at the top of the stack
      let current = nodesToEvalStack.pop();

      // if the current node is not null
      if (current) {
        // add its value
        sum += current.val;

        // check for children and if they exist, add to stack
        for (let child of current.children) {
          nodesToEvalStack.push(child);
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let evensCount = 0;
    let nodesToEvalStack = [this.root];

    // while we still have nodes in our stack
    while (nodesToEvalStack.length) {
      // grab the node at the top of the stack
      let current = nodesToEvalStack.pop();

      if (current) {
        // add to the evens count if the node's value is even
        if (current.val % 2 === 0) evensCount++;
        
        // if the node has add any of its child nodes to the stack
        for (let child of current.children) {
          nodesToEvalStack.push(child);
        }
      }
    }
    return evensCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let numberNodesGreater = 0;
    let nodesToEvalStack = [this.root];

    // while we still have nodes in our stack
    while (nodesToEvalStack.length) {
      // grab the node at the top of the stack
      let current = nodesToEvalStack.pop();

      if (current) {
        // add to the numberNodesGreater if node's value is greater than lowerBound
        if (current.val > lowerBound) numberNodesGreater++;
        
        // if the node has add any of its child nodes to the stack
        for (let child of current.children) {
          nodesToEvalStack.push(child);
        }
      }
    }
    return numberNodesGreater;
  }
}

module.exports = { Tree, TreeNode };
