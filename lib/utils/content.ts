import { IMAGE_PROMPTS } from "../constants";

export function getRandomImagePrompt(): string {
  const randomIndex = Math.floor(Math.random() * IMAGE_PROMPTS.length);
  return IMAGE_PROMPTS[randomIndex];
}

export function formatContent(content: string): string {
  return content
    .trim()
    .replace(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
    .replace(/\s+#/g, ' #'); // Ensure hashtags have proper spacing
}