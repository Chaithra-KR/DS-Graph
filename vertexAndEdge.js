class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if (! this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if (! this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (! this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
          const neighbors = [];
          this.adjacencyList[vertex].forEach((value) => {
            neighbors.push(value);
          });
          console.log(vertex + "->" + neighbors);
        }
      }

//  OR
      
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }
}
const graph = new Graph()

graph.addVertex('a')
graph.addVertex('c')
graph.addVertex('p')

graph.display()