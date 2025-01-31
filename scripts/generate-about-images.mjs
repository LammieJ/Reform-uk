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

async function generateAboutImages() {
  console.log('Generating about page images...');
  console.log('Working directory:', process.cwd());
  console.log('Root directory:', rootDir);

  try {
    // Create images directory if it doesn't exist
    const publicDir = join(rootDir, 'public', 'images');
    const teamDir = join(publicDir, 'team');
    await fs.mkdir(publicDir, { recursive: true });
    await fs.mkdir(teamDir, { recursive: true });

    // Generate hero image
    const heroPrompt = "A diverse group of community leaders and residents working together in Erdington, Birmingham, UK. The scene should show collaboration and engagement in a modern community setting, with ReformUK's teal blue color subtly incorporated. Professional documentary style.";
    
    console.log('Generating hero image...');
    const heroImageUrl = await generateImage(heroPrompt);
    
    if (heroImageUrl) {
      console.log('Hero image URL generated:', heroImageUrl);
      const response = await fetch(heroImageUrl);
      const buffer = await response.arrayBuffer();
      const imagePath = join(publicDir, 'about-hero.jpg');
      await fs.writeFile(imagePath, Buffer.from(buffer));
      console.log('Hero image saved to:', imagePath);
    }

    // Generate team member images
    const teamMembers = [
      {
        name: 'sarah',
        prompt: 'A professional headshot of a confident female community leader in her 40s, wearing business casual attire with ReformUK teal blue accent. Natural, approachable expression. Professional corporate photography style.'
      },
      {
        name: 'james',
        prompt: 'A professional headshot of a friendly male community organizer in his 50s, former business owner, wearing smart casual attire. Warm, trustworthy expression. Professional corporate photography style.'
      },
      {
        name: 'amira',
        prompt: 'A professional headshot of a female healthcare professional in her 30s, wearing professional attire with a medical context. Knowledgeable and compassionate expression. Professional corporate photography style.'
      }
    ];

    for (const member of teamMembers) {
      console.log(`Generating image for ${member.name}...`);
      const imageUrl = await generateImage(member.prompt);
      
      if (imageUrl) {
        console.log(`${member.name} image URL generated:`, imageUrl);
        const response = await fetch(imageUrl);
        const buffer = await response.arrayBuffer();
        const imagePath = join(teamDir, `${member.name}.jpg`);
        await fs.writeFile(imagePath, Buffer.from(buffer));
        console.log(`${member.name} image saved to:`, imagePath);
      }
    }

  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateAboutImages().catch(console.error);
