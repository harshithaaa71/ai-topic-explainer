"use client";

import { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const explainTopic = async () => {
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    setLoading(true);
    setExplanation("");

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();

      if (data.explanation) {
        setExplanation(data.explanation);
      } else {
        setExplanation("Error generating explanation.");
      }

    } catch (error) {
      console.error(error);
      setExplanation("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white">
      
      <h1 className="text-3xl font-bold mb-6">
        AI Study Topic Explainer
      </h1>

      <input
        className="border p-3 w-80 rounded mb-4 text-white bg-gray-800"
        placeholder="Enter a topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={explainTopic}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Explain Topic
      </button>

      {loading && (
        <p className="mt-4">Generating explanation...</p>
      )}

      {explanation && (
        <div className="mt-6 max-w-xl bg-gray-800 p-4 rounded">
          {explanation}
        </div>
      )}

    </main>
  );
}