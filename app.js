const express = require('express');
const path = require('path');
const routes = require('./routes'); 
const Graph = require('./graph'); 
const app = express();
const port = 3000;


const graph = new Graph();

// Add edges to the graph
graph.addEdge("Muscat", "Sohar", 200);
graph.addEdge("Muscat", "Salalah", 900);
graph.addEdge("Muscat", "Nizwa", 200);
graph.addEdge("Muscat", "Sur", 300);
graph.addEdge("Sohar", "Nizwa", 150);
graph.addEdge("Nizwa", "Salalah", 600);
graph.addEdge("Salalah", "Sur", 400);
graph.addEdge("Nizwa", "Bahla", 50);
graph.addEdge("Sur", "Dhofar", 450);
graph.addEdge("Khasab", "Ibra", 300);
graph.addEdge("Qurm", "Muscat", 30);
graph.addEdge("Dhofar", "Muscat", 500);
graph.addEdge("Bahla", "Sur", 200);
graph.addEdge("Dhofar", "Khasab", 700);
graph.addEdge("Ibra", "Nizwa", 200);
graph.addEdge("Khasab", "Musandam", 100);
graph.addEdge("Muscat", "Khasab", 700);
graph.addEdge("Khasab", "Salalah", 800);
graph.addEdge("Dhofar", "Salalah", 300);
graph.addEdge("Bahla", "Ibra", 100);
graph.addEdge("Sur", "Khasab", 450);
graph.addEdge("Muscat", "Bahla", 250);
graph.addEdge("Sohar", "Sur", 400);
graph.addEdge("Nizwa", "Qurm", 200);
graph.addEdge("Ibra", "Khasab", 350);
graph.addEdge("Khasab", "Qurm", 500);
graph.addEdge("Muscat", "Sur", 300);
graph.addEdge("Muscat", "Qurm", 15);
graph.addEdge("Salalah", "Ibra", 700);
graph.addEdge("Qurm", "Bahla", 120);
graph.addEdge("Dhofar", "Bahla", 650);
graph.addEdge("Muscat", "Bahla", 250);
graph.addEdge("Sur", "Ibra", 450);
graph.addEdge("Khasab", "Muscat", 700);
graph.addEdge("Ibra", "Qurm", 250);
graph.addEdge("Sohar", "Salalah", 850);
graph.addEdge("Muscat", "Rustaq", 180);
graph.addEdge("Rustaq", "Sohar", 120);
graph.addEdge("Muscat", "Al Buraimi", 330);
graph.addEdge("Al Buraimi", "Ibri", 100);
graph.addEdge("Ibri", "Nizwa", 180);
graph.addEdge("Muscat", "Jebel Shams", 240);
graph.addEdge("Nizwa", "Jebel Shams", 80);
graph.addEdge("Sur", "Masirah Island", 250);
graph.addEdge("Ibra", "Masirah Island", 180);
graph.addEdge("Sur", "Ras Al Hadd", 50);
graph.addEdge("Salalah", "Mirbat", 80);
graph.addEdge("Salalah", "Thumrait", 100);
graph.addEdge("Thumrait", "Haima", 320);
graph.addEdge("Haima", "Adam", 250);
graph.addEdge("Adam", "Nizwa", 150);

app.locals.graph = graph;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});