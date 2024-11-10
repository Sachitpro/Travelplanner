const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index'); 
});


router.get('/about', (req, res) => {
    res.render('about');  
});

// Route planner page
router.get('/route-planner', (req, res) => {
    res.render('route-planner');  
});


router.post('/find-route', (req, res) => {
    const { start, end } = req.body;

    if (!start || !end) {
        return res.status(400).json({ message: "Both start and end locations are required." });
    }

    const graph = req.app.locals.graph;  
    const { path, distance } = graph.dijkstra(start, end);

    if (distance === Infinity) {
        return res.status(404).json({ message: "No path found." });
    }

    res.json({ path, distance });
});

module.exports = router;