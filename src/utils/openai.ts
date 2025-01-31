import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateText(prompt: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a ReformUK journalist and content creator writing in UK English. Your style is similar to Nigel Farage - direct, factual, and focused on reform and positive change. You write with authority and conviction about local issues and their national implications."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion.choices[0]?.message?.content || 'Content generation failed';
  } catch (error) {
    console.error('Error generating text:', error);
    return 'Content generation failed';
  }
}

export async function generateImage(prompt: string): Promise<string> {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `${prompt} - in a professional political campaign style, focusing on community and reform themes`,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      style: "natural",
    });

    return response.data[0]?.url || '';
  } catch (error) {
    console.error('Error generating image:', error);
    return '';
  }
}

// Cache generated content to avoid unnecessary API calls
const contentCache = new Map<string, { text: string; timestamp: number }>();
const IMAGE_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function getCachedContent(key: string, generateFn: () => Promise<string>): Promise<string> {
  const cached = contentCache.get(key);
  const now = Date.now();

  if (cached && (now - cached.timestamp) < IMAGE_CACHE_DURATION) {
    return cached.text;
  }

  const newContent = await generateFn();
  contentCache.set(key, { text: newContent, timestamp: now });
  return newContent;
}

// For CommonJS compatibility
module.exports = {
  generateText,
  generateImage,
  getCachedContent,
};
