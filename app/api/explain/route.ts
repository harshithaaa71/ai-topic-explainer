export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return Response.json(
        { error: "Please enter a topic." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Explain the topic "${topic}" in simple terms for a student.`,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const explanation =
      data.choices?.[0]?.message?.content ||
      "No explanation generated.";

    return Response.json({ explanation });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to generate explanation." },
      { status: 500 }
    );
  }
}