import Graph from "graph";

describe("Graph Tests ", () => {

  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("Should add a vertex to the graph", () => {
    const value = 2;
    graph.addVertex(value);

    expect(graph.vertices[value].value).toEqual(value);
  });

  it("Should remove a vertex to the graph", () => {
    const value = 2;
    graph.addVertex(value);

    graph.removeVertex(value);
    expect(graph.vertices[value]).toBeUndefined();
  });

  it("Should add an edge to the graph, connecting 2 vertices", () => {
    graph.addVertex(1);
    graph.addVertex(2);

    graph.addEdge(1, 2);

    expect(graph.vertices["1"].edges).toEqual([2]);
    expect(graph.vertices["2"].edges).toEqual([1]);
  });

  it("Should find a vertex in the graph", () => {
    graph.addVertex(1);
    const vertex = graph.vertices["1"];
    expect(vertex.value).toEqual(1);
  });

  it("Should remove an edge from the graph", () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addEdge(1,2);
    graph.removeEdge(1,2);

    expect(graph.vertices["1"].edges).toHaveLength(0);
  });

});
