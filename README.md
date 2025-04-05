Emotion to Poem 🌸🖋️
A web app that turns your emotional text into beautiful poetry using a locally running language model (Mistral via Ollama).

🧠 Tech Stack
Frontend: React (Vite) + TailwindCSS

Backend: Node.js + Express

LLM: Ollama running the Mistral model locally

🛠️ Setup Instructions
⚙️ Prerequisites
Node.js installed

Ollama installed and running locally

Pull the Mistral model using:

bash
Copy
Edit
ollama pull mistral
▶️ Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
🧠 Backend
bash
Copy
Edit
cd server
npm install
node index.js
📡 Ensure Ollama is running locally on http://localhost:11434.

📁 Folder Structure
bash
Copy
Edit
emotion-to-poem/
│
├── client/        # React frontend with Tailwind styling
├── server/        # Express backend connecting to Ollama
└── README.md
