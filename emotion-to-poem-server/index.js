const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/generate-poem', async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral',
        prompt: `Convert this emotional expression into a beautiful poem:\n\n${text}`,
        stream: false  // ✅ important: tells Ollama to give full result instead of streaming
      })
    });

    const data = await response.json();

    console.log('Ollama response:', data);

    res.json({ poem: data.response });
  } catch (error) {
    console.error('Error generating poem:', error.message);
    res.status(500).json({ error: 'Error generating poem.' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
