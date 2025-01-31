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
    console.log('Generating image with prompt:', prompt);
    
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `${prompt} - in a professional political campaign style, focusing on community and reform themes`,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      style: "natural",
    });

    if (!response.data?.[0]?.url) {
      throw new Error('No image URL in response');
    }

    return response.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}

async function downloadImage(url, outputPath) {
  try {
    console.log('Downloading image to:', outputPath);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }
    
    const buffer = await response.arrayBuffer();
    await fs.writeFile(outputPath, Buffer.from(buffer));
    console.log('Image successfully saved');
    
    const stats = await fs.stat(outputPath);
    if (stats.size === 0) {
      throw new Error('Saved file is empty');
    }
  } catch (error) {
    console.error('Error downloading image:', error);
    throw error;
  }
}

async function generatePlanImages() {
  console.log('Generating plan page images...');

  try {
    const publicDir = join(rootDir, 'public', 'images');
    await fs.mkdir(publicDir, { recursive: true });

    const images = [
      {
        name: 'taxes-hero.jpg',
        prompt: "A modern business district with ReformUK teal blue branding, showing economic prosperity and growth. Clean, professional architectural style with emphasis on financial district elements."
      },
      {
        name: 'nhs-hero.jpg',
        prompt: "A modern hospital or medical facility with ReformUK teal blue accents, showing healthcare excellence and innovation. Clean, professional medical environment without people."
      },
      {
        name: 'immigration-hero.jpg',
        prompt: "A symbolic representation of border control and immigration management, using ReformUK teal blue elements. Professional and administrative setting with emphasis on order and control."
      },
      {
        name: 'crime-hero.jpg',
        prompt: "A well-lit urban street scene with police presence and CCTV cameras, showing safety and security. Modern urban setting with ReformUK teal blue lighting elements."
      },
      {
        name: 'growth-hero.jpg',
        prompt: "A thriving high street scene with modern shops and businesses, showing economic prosperity. Urban renewal with ReformUK teal blue architectural elements."
      }
    ];

    for (const image of images) {
      console.log(`Generating ${image.name}...`);
      const imageUrl = await generateImage(image.prompt);
      await downloadImage(imageUrl, join(publicDir, image.name));
    }

    console.log('All plan images generated successfully');
  } catch (error) {
    console.error('Error generating plan images:', error);
    process.exit(1);
  }
}

generatePlanImages().catch(console.error);
