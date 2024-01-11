// Vertex - a node
// Edge - connection between nodes
// Weighted, Unwighted - values assigned to distances between verticies
// Directed, Undirected - directions assigned to distances between verticies

class Graph {
  private vertexList: Record<string, string[]>;

  constructor() {
    this.vertexList = {};
  }

  addVertex(vertexName: string) {
    if (this.vertexList[vertexName])
      throw new Error(`Graph: vertex "${vertexName}" already exists`);
    this.vertexList[vertexName] = [];
  }

  addEdge(vertex1: string, vertex2: string) {
    this.vertexList[vertex1].push(vertex2);
    this.vertexList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.vertexList[vertex1] = this.vertexList[vertex1].filter((vertexName) => vertexName !== vertex2);
    this.vertexList[vertex2] = this.vertexList[vertex2].filter((vertexName) => vertexName !== vertex1);
  }

  removeVertex(vertexName: string) {
    const keys = Object.keys(this.vertexList);
    keys.forEach((key) => {
        this.vertexList[key] = this.vertexList[key].filter((vertex) => vertex !== vertexName)
    })
    delete this.vertexList[vertexName];
  }
}

const graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");

graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Dallas", "Aspen");

console.log(graph);

graph.removeVertex("Tokyo")

console.log(graph)
