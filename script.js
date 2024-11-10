document.getElementById('routeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;

    try {
        const response = await fetch('/find-route', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ start, end })
        });
        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error('Error:', error);
    }
});

function displayResult({ path, distance }) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Route Information</h2>
        <p>Path: ${path.join(' -> ')}</p>
        <p>Total Distance: ${distance}</p>
    `;
}
