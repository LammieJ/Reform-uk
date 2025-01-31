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

async function generateLandingImages() {
  console.log('Generating landing page images...');
  console.log('Working directory:', process.cwd());
  console.log('Root directory:', rootDir);

  try {
    // Create images directory if it doesn't exist
    const publicDir = join(rootDir, 'public', 'images');
    await fs.mkdir(publicDir, { recursive: true });

    // Generate hero image
    const heroPrompt = "A vibrant street scene of Erdington High Street, Birmingham, UK, showing local businesses and community members. The image should capture the energy and potential of the area, with ReformUK's signature teal blue color subtly incorporated. Professional architectural and street photography style.";
    
    console.log('Generating hero image...');
    const heroImageUrl = await generateImage(heroPrompt);
    
    if (heroImageUrl) {
      console.log('Hero image URL generated:', heroImageUrl);
      const response = await fetch(heroImageUrl);
      const buffer = await response.arrayBuffer();
      const imagePath = join(publicDir, 'hero.jpg');
      await fs.writeFile(imagePath, Buffer.from(buffer));
      console.log('Hero image saved to:', imagePath);
    }

    // Generate about image
    const aboutPrompt = "A diverse group of local community leaders and residents discussing plans for Erdington's future in a modern meeting space. The scene should show engagement and positive collaboration, with ReformUK branding visible in the background. Professional corporate photography style.";
    
    console.log('Generating about image...');
    const aboutImageUrl = await generateImage(aboutPrompt);
    
    if (aboutImageUrl) {
      console.log('About image URL generated:', aboutImageUrl);
      const response = await fetch(aboutImageUrl);
      const buffer = await response.arrayBuffer();
      const imagePath = join(publicDir, 'about.jpg');
      await fs.writeFile(imagePath, Buffer.from(buffer));
      console.log('About image saved to:', imagePath);
    }

  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateLandingImages().catch(console.error);
