async function analyzeMutation() {
    const sequence = document.getElementById('sequenceInput').value;
    const position = parseInt(document.getElementById('mutationPosition').value);
    const mutation = document.getElementById('mutationType').value.toUpperCase();

    // Load Pyodide
    let pyodide = await loadPyodide();

    // Python code to analyze mutation
    const pythonCode = `
