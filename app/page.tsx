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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6">

      <h1 className="text-4xl font-bold mb-2 text-center">
        AI Study Topic Explainer
      </h1>

      <p className="text-gray-400 mb-8 text-center max-w-md">
        Enter any study topic and receive a simple AI-generated explanation.
      </p>

      <input
        className="border border-gray-600 p-3 w-80 rounded-lg mb-4 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={explainTopic}
        className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-lg font-medium"
      >
        Explain Topic
      </button>

      {loading && (
        <p className="mt-4 text-gray-300">Generating explanation...</p>
      )}

      {explanation && (
        <div className="mt-6 max-w-xl bg-gray-800 p-5 rounded-lg shadow-lg leading-relaxed">
          {explanation}
        </div>
      )}

    </main>
  );
}