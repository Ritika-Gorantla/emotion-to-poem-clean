import { useState } from 'react';
import './index.css';

function App() {
  const [text, setText] = useState('');
  const [poem, setPoem] = useState('');
  const [loading, setLoading] = useState(false);

  async function generatePoem() {
    setLoading(true);
    setPoem('');
    console.log("Sending request to backend...");

    try {
      const response = await fetch('http://localhost:5000/api/generate-poem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      console.log("Response from backend:", data);

      if (data.poem) {
        setPoem(data.poem);
      } else {
        console.error("Poem not found in response.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">🌸 Emotion to Poem Generator 🌙</h1>
        <textarea
          className="w-full h-32 p-4 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Express your emotions..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={generatePoem}
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Generate Poem
        </button>

        {loading && (
          <div className="flex justify-center items-center mt-6">
            <div className="w-8 h-8 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
            <p className="ml-3 text-blue-700">Generating your poem...</p>
          </div>
        )}

        {poem && (
          <pre className="mt-6 whitespace-pre-wrap p-4 bg-gray-100 border rounded-lg text-gray-800">{poem}</pre>
        )}
      </div>
    </div>
  );
}

export default App;
