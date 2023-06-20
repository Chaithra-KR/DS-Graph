# Graph #

<br>
<hr>

> ### **What is graph ?**
> A graph is a nonlinear data structure that consists of collection of nodes (also called vertices) and a set of edges that connect pairs of nodes. It is used to represent relationships or connections between objects.

<br>

Trees are a specific type of graph data structure.

Based on characteristics of edges ,graph is divided into two types
1. Directed
2. Undirected 

### Directed: ###
    *  A graph in which the edges have a direction
    *  Edges are usually represented by arrows pointing in the direction the graph can be traversed
    <br>
      ![Example for directed graph](https://media.geeksforgeeks.org/wp-content/cdn-uploads/SCC1.png)<br>
      Image-credit : [GeeksforGeeks](https://www.geeksforgeeks.org/)
    

### Undirected: ###
    > A graph in which the edges are bidirectional
    > A graph can be traversed in either direction
    > The absence of an arrow tells that the graphs is undirected
    <br>
      ![Example for undirected graph](https://media.geeksforgeeks.org/wp-content/cdn-uploads/cycleGraph-300x156.png)
      Image-credit : [GeeksforGeeks](https://www.geeksforgeeks.org/)

<br>
<hr>
    
### More graph types: ###
<br>

#### Isolate graph: #### 

* A graph that have only vertex with no edges
<br>

#### Multi graph : #### 

* multiple edges from one vertex in graph
  ![Example for multi graph](https://media.geeksforgeeks.org/wp-content/uploads/hamiltonian-circuit2-2.jpg)<br>
  Image-credit : [GeeksforGeeks](https://www.geeksforgeeks.org/)
  <br>

#### Cyclic graph : ####

* If a graph has a minimum of one cycle present, it is called a cyclic graph. 
  ![Example for cyclic graph](https://study.com/cimages/multimages/16/cyclic_graphs.png)<br>
  Image-credit : [Study.com](https://study.com/)
  <br>

#### Pseudo graph : ####

* A graph G with a self-loop and some multiple edges is called a pseudo graph. 
  ![Example for pseudo graph](https://media.geeksforgeeks.org/wp-content/uploads/pseudo-2.png)<br>
  Image-credit : [GeeksforGeeks](https://www.geeksforgeeks.org/)
  <br>

#### Disconnected graph : ####

* A graph that have disconnected vertexes
  ![Example for disconnected graph](https://media.geeksforgeeks.org/wp-content/uploads/bfs_disconnected.jpg)<br>
  Image-credit : [GeeksforGeeks](https://www.geeksforgeeks.org/)
  <br>
  
#### Weighted / Labeled graph : ####

* A graph that contains values or labels assigned to its edges 
  ![Example for weighted graph](https://media.geeksforgeeks.org/wp-content/uploads/20210618164116/gfg2-300x168.png)<br>
  Image-credit : [GeeksforGeeks](https://www.geeksforgeeks.org/)
  <br>
  <hr>

## graph representations: ##

  > ### **Adjacency matrix** ###
  > The adjacency matrix representation is a way to represent a graph using a matrix. In this representation, a graph with n vertices is represented by an n x n matrix, where each cell of the matrix indicates whether there is an edge between two vertices.

  > ### **Adjacency list** ###
  >The adjacency list representation is another way to represent a graph, where each vertex of the graph maintains a list of its adjacent vertices. In this representation, the graph is typically represented using an array or a dictionary, where each element corresponds to a vertex, and the associated value is a list of its adjacent vertices.
  <br>
  <hr>

### Applications of graph: ###

    * In social networks, where individuals are represented as vertices, and relationships or connections between individuals are
    represented as edges. 

    * In Routing and Network Analysis, to analyze computer networks, transportation networks, and communication systems. Algorithms like Dijkstra's algorithm and the shortest path algorithms help in finding optimal routes, calculating distances, and analyzing network performance.

    * used to model the web pages and hyperlinks in the World Wide Web.

    * In search engines , to rank web pages based on their importance and popularity.

    * In recommendation system to model user-item interactions and provide personalized recommendations. 
  <br>
  <hr>

### Advantages of graphs: ###

* Graphs can be used to model and analyze complex systems and relationships.

* They are useful for visualizing and understanding data.

* Graph algorithms are widely used in computer science and other fields, such as social network analysis, logistics, and transportation.

* Graphs can be used to represent a wide range of data types, including social networks, road networks, and the internet.
<br>

### Disadvantages of graphs: ###

* Large graphs can be difficult to visualize and analyze.

* Graph algorithms can be computationally expensive, especially for large graphs.

* The interpretation of graph results can be subjective and may require domain-specific knowledge.

*Graphs can be susceptible to noise and outliers, which can impact the accuracy of analysis results.
<br>