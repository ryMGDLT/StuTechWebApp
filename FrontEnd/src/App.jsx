import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/") 
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage("Error: " + err));
  }, []);

  return (
    <>
      <h1>Frontend + Backend Test</h1>
      <div className="card">
        <p>
          <strong>Backend says:</strong> {message}
        </p>
        <button onClick={() => setCount((c) => c + 1)}>
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
