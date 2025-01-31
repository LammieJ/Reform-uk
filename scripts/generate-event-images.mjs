#!/usr/bin/env node
import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';
import { promises as fs } from 'fs';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Load environment variables from .env.local
dotenv.config({ path: join(rootDir, '.env.local') });

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateImage(prompt) {
  try {
    console.log('Using OpenAI API Key:', process.env.OPENAI_API_KEY.substring(0, 10) + '...');
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

async function generateEventImages() {
  console.log('Generating event images...');
  console.log('Working directory:', process.cwd());
  console.log('Root directory:', rootDir);

  try {
    // Create images directory if it doesn't exist
    const publicDir = join(rootDir, 'public', 'images');
    await fs.mkdir(publicDir, { recursive: true });

    // Generate hero image
    const heroPrompt = "A dynamic political rally scene in Erdington, Birmingham, UK, showing a diverse crowd of engaged citizens at a community event. The image should capture the energy and spirit of political reform and community engagement, with ReformUK's signature teal blue color subtly incorporated. Professional photojournalistic style.";
    
    console.log('Generating hero image...');
    const heroImageUrl = await generateImage(heroPrompt);
    
    if (heroImageUrl) {
      console.log('Image URL generated:', heroImageUrl);
      // Download and save the image
      const response = await fetch(heroImageUrl);
      const buffer = await response.arrayBuffer();
      const imagePath = join(publicDir, 'events-hero.jpg');
      await fs.writeFile(imagePath, Buffer.from(buffer));
      console.log('Hero image saved to:', imagePath);
    } else {
      console.error('Failed to generate hero image');
    }
  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateEventImages().catch(console.error);
