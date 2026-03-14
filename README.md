# Study with AI – Topic Explainer

## Project Overview

Study with AI is a simple AI-powered web application that helps students understand study topics quickly.
A user enters a topic and the system generates a simplified explanation using AI.

Example:

Input:
Photosynthesis

Output:
Photosynthesis is the process by which plants make their food using sunlight, carbon dioxide, and water.

---

## Features

* Enter any study topic
* AI generates a simple explanation
* Loading indicator while the response is generated
* Clean user interface built with Tailwind CSS
* Clear button to reset the input
* Typing animation for AI responses

---

## Technology Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* OpenRouter AI API
* Vercel deployment

---

## How AI API is Used

When a user enters a topic and clicks **Explain Topic**, the frontend sends a POST request to the API route:

/api/explain

The backend sends the topic to an AI model through the OpenRouter API and receives a simplified explanation.
The response is returned to the frontend and displayed to the user.

---

## Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/harshithaaa71/ai-topic-explainer
```

### 2. Navigate into the project folder

```
cd ai-topic-explainer
```

### 3. Install dependencies

```
npm install
```

### 4. Create environment variable file

Create a file named:

```
.env.local
```

Add your API key:

```
OPENROUTER_API_KEY=your_api_key
```

### 5. Run the development server

```
npm run dev
```

Open in your browser:

```
http://localhost:3000
```

---

## Live Deployment

The project is deployed on Vercel.

Live Link:
https://ai-topic-explainer.vercel.app

---

## Author

Harshitha
