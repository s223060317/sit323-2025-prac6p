const express = require('express');
const app = express();

// Middleware to handle JSON input
app.use(express.json());

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers." });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
});

// Subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers." });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers." });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers." });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed." });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
});

// Handle unknown routes
app.all('*', (req, res) => {
    res.status(404).json({ error: "API endpoint not found." });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
