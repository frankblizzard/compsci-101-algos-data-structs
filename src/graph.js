// TODO: find vertex
// TODO: Remove Vertex
// TODO: Remove Edge
class Graph {
  vertices = [];

  /**
   * Add a top level vertex to the graph.
   * @param {any} value
   */
  addVertex(value) {
    const vertex = { value, edges: [] };
    return this.vertices.push(vertex);
  }

  /**
   * TODO: Remove a vertex from the graph.
   * @param {any} value
   */
  removeVertex(value) {
  }

  /**
   * Find a vertex in the graph.
   * TODO: make more efficient
   * @param {any} value
   */
  findVertexIndex(value) {
    return this.vertices.findIndex((vertex) => vertex.value === value);
  }

  /**
   * Add an edge to the graph
   * @param {any} startValue - the value of the first vertex in the edge
   * @param {any} endValue  - the value of the vertex to connect the start vertex to.
   */
  addEdge(startValue, endValue) {
    // Find the index of each of the
    const startIndex = this.findVertexIndex(startValue);
    const endIndex = this.findVertexIndex(endValue);

    const startVertex = this.vertices[startIndex];
    const endVertex = this.vertices[endIndex];

    if(!startVertex || !endVertex) {
      throw new Error("Both vertices must exist before connecting them with an edge.");
    }

    startVertex.edges.push(endVertex);
    endVertex.edges.push(startVertex);
  }

  /**
   * TODO: Make more efficient
   * Remove an edge from the graph
   * @param {any} startValue - the value of the first vertex in the edge
   * @param {any} endValue  - the value of the vertex to connect the start vertex to.
   */
  removeEdge(startValue, endValue) {
    // Find the index of each of the
    const startIndex = this.findVertexIndex(startValue);
    const endIndex = this.findVertexIndex(endValue);

    // Bitwise operator to shift bits and coerce boolean
    if(!~startIndex || !~endIndex) {
      throw new Error("Both vertices must exist before removing their edges.");
    }
    // get element
    // find the edge of the first one
    // remove it
    // find the edges

    // this.vertices[startIndex].edges.splice(, 1);
    // this.vertices[endIndex].edges.splice(endIndex, 1);
  }
}

export default Graph;
