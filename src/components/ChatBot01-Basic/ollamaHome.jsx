import React, { useState } from "react";
import '../ChatBot01-Basic/ollamaHome.css'
const OllamaHome = () => {
  const [input, setInput] = useState(""); // Store user input
  const [response, setResponse] = useState(""); // Store the response
  const [loading, setLoading] = useState(false); // Show loading state

  // Handle form input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing
  
    setLoading(true);
    setResponse("Loading....."); // Clear previous response
  
    try {
      const responseStream = await fetch("http://localhost:4042/ollama/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });
  
      if (!responseStream.ok) {
        throw new Error(`HTTP error! Status: ${responseStream.status}`);
      }
  
      const data = await responseStream.json(); // Parse JSON response
      console.log("API Response:", data); // Debugging
  
      console.log(data);
      setResponse(data.response || "No response received"); 
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Error fetching response");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <h2>Ollama ChatBot</h2>

      {/* Input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {/* Display the response */}
      <div className="response">
        <h3>Ollama Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default OllamaHome;
