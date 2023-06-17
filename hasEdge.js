class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    
    }
    display(){
        for(let vertex in this.adjacencyList){
            const neighbors = []
            this.adjacencyList[vertex].forEach(element => {
                neighbors.push(element)
            });
        console.log(vertex + "->" + neighbors);
        }
    }

    hasEdge(vertex1,vertex2){
        return(this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
    }
}

const graph = new Graph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)

graph.addEdge(1,2)
graph.addEdge(2,3)
graph.display()
console.log(graph.hasEdge(1,2));