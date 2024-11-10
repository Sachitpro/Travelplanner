class Graph {
    constructor() {
        this.adjList = new Map();  
    }

    addEdge(src, dest, weight) {
        if (!this.adjList.has(src)) this.adjList.set(src, []);  
        if (!this.adjList.has(dest)) this.adjList.set(dest, []);  
        this.adjList.get(src).push({ node: dest, weight });  
        this.adjList.get(dest).push({ node: src, weight });  
    }


    dijkstra(start, end) {
        const distances = {};  
        const prev = {};  
        const pq = new Map();  

        this.adjList.forEach((_, node) => {
            distances[node] = Infinity;  
            prev[node] = null;  
            pq.set(node, distances[node]);  
        });
        distances[start] = 0;  
        pq.set(start, 0);  

        while (pq.size) {
            const currentNode = Array.from(pq.keys()).reduce((a, b) => pq.get(a) < pq.get(b) ? a : b);
            pq.delete(currentNode);  

            if (currentNode === end) break;  


            this.adjList.get(currentNode).forEach(({ node, weight }) => {
                const newDist = distances[currentNode] + weight; 

                if (newDist < distances[node]) {  
                    distances[node] = newDist;  
                    prev[node] = currentNode;  
                    pq.set(node, newDist);  
                }
            });
        }


        const path = [];
        for (let at = end; at; at = prev[at]) {
            path.push(at);  
        }
        path.reverse();  
        return { path, distance: distances[end] };  
    }
}

module.exports = Graph;
