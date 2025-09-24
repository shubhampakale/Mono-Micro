const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());


app.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
