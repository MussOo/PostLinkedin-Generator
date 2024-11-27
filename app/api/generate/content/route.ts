import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { SYSTEM_PROMPT } from '@/lib/constants';
import { formatContent } from '@/lib/utils/content';


// Ensure this route is dynamic
export const dynamic = 'force-dynamic';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: `Create an engaging LinkedIn post about ${topic}. Include technical insights, best practices, and make it educational yet conversational. Add relevant hashtags at the end.`
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const formattedContent = formatContent(completion.choices[0].message.content || "");
    
    return NextResponse.json({ content: formattedContent });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}