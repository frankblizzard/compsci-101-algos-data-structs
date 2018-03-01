import Graph from "graph";

describe("Graph Tests ", () => {

  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("Should add a vertex to the graph", () => {
    const value = 2;
    graph.addVertex(value);

    expect(graph.vertices[0].value).toEqual(value);
  });

  it("Should add an edge to the graph, connecting 2 vertices", () => {
    graph.addVertex(1);
    graph.addVertex(2);

    graph.addEdge(1, 2);

    expect(graph.vertices[0].edges[0].value).toEqual(2);
    expect(graph.vertices[1].edges[0].value).toEqual(1);
  });

  it("Should find a vertex in the graph", () => {
    graph.addVertex(1);
    const index = graph.findVertexIndex(1);
    expect(graph.vertices[index].value).toEqual(1);
  });

  it("Should remove an edge from the graph", () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addEdge(1,2);
    expect(graph.vertices[0].edges[0].value).toEqual(2);

    graph.removeEdge(1,2);
    expect(graph.vertices[0].edges.length).toEqual(0);
    expect(graph.vertices[1].edges.length).toEqual(0);
  });

});
