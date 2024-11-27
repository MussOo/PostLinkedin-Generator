export async function generateContent(topic: string) {
  const response = await fetch("/api/generate/content", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic }),
  });

  if (!response.ok) throw new Error("Failed to generate content");
  return response.json();
}

export async function generateImage(prompt: string) {
  const response = await fetch("/api/generate/image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) throw new Error("Failed to generate image");
  return response.json();
}