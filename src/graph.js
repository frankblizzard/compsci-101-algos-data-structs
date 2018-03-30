import { remove } from "./helpers";

class Graph {
  vertices = {};

  /**
   * Add a top level vertex to the graph.
   * @param {any} value
   */
  addVertex(value) {
    const vertex = { value, edges: [] };
    if (!this.vertices[value]) {
      this.vertices[value] = vertex;
    }
  }

  /**
   * Remove a vertex from the graph.
   * @param {any} value
   */
  removeVertex(value) {
    if (this.vertices[value]) {
      delete this.vertices[value];
    }

    // Remove all edges pointing to the vertex
    Object.values(this.vertices).forEach((vertex) => {
      vertex.edges.forEach((edgeValue) => {
        if (edgeValue === value) {
          remove(edgeValue, vertex.edges);
        }
      })
    });
  }


  /**
   * Add an edge to the graph
   * @param {any} startValue - the value of the first vertex in the edge
   * @param {any} endValue  - the value of the vertex to connect the start vertex to.
   */
  addEdge(startValue, endValue) {
    // Find each of the vertices
    const startVertex = this.vertices[startValue];
    const endVertex = this.vertices[endValue];

    // If one of them doesn't exist, throw an error.
    if (!startVertex || !endVertex) {
      throw new Error("Both vertices must exist before connecting them with an edge.");
    }

    startVertex.edges.push(endVertex.value);
    endVertex.edges.push(startVertex.value);
  }

  /**
   * Remove an edge from the graph
   * @param {any} startValue - the value of the first vertex in the edge
   * @param {any} endValue  - the end vertex of the edge you want to remove.
   */
  removeEdge(startValue, endValue) {
    // Find each of the vertices
    const startVertex = this.vertices[startValue];
    const endVertex = this.vertices[endValue];

    // If one of them doesn't exist, throw an error.
    if (!startVertex || !endVertex) {
      throw new Error("Both vertices must exist before removing any edges.");
    }

    // Remove the end edge from the start vertex
    remove(endValue, startVertex.edges);
    // Remove the start edge from the end vertex
    remove(startValue, endVertex.edges);
  }
}

export default Graph;
