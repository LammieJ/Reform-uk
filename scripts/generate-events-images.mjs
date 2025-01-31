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
    console.log('Downloading image from:', url);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }
    
    const buffer = await response.arrayBuffer();
    await fs.writeFile(outputPath, Buffer.from(buffer));
    console.log('Image successfully saved to:', outputPath);
    
    // Verify file exists and has content
    const stats = await fs.stat(outputPath);
    console.log('File size:', stats.size, 'bytes');
    
    if (stats.size === 0) {
      throw new Error('Saved file is empty');
    }
  } catch (error) {
    console.error('Error downloading image:', error);
    throw error;
  }
}

async function generateEventsImages() {
  console.log('Generating events page images...');
  console.log('Working directory:', process.cwd());
  console.log('Root directory:', rootDir);

  try {
    // Create images directory if it doesn't exist
    const publicDir = join(rootDir, 'public', 'images');
    await fs.mkdir(publicDir, { recursive: true });
    console.log('Created/verified images directory:', publicDir);

    // Generate hero image with a new prompt
    const heroPrompt = "A modern town hall meeting in Birmingham, showing rows of empty chairs facing a stage with ReformUK teal blue banners. The scene should be photographed from a high angle to show the geometric pattern of chairs and walkways. The lighting should be warm and inviting, with spotlights highlighting the stage area. The image should have a professional, civic atmosphere with clean lines and modern architecture. No people, just the venue setup ready for an event.";
    
    console.log('Starting hero image generation...');
    const heroImageUrl = await generateImage(heroPrompt);
    
    if (heroImageUrl) {
      const imagePath = join(publicDir, 'events-hero.jpg');
      await downloadImage(heroImageUrl, imagePath);
      
      // Double check the file exists
      const exists = await fs.access(imagePath).then(() => true).catch(() => false);
      if (!exists) {
        throw new Error('File not found after saving');
      }
      
      console.log('Hero image generation complete');
    }

  } catch (error) {
    console.error('Error in generateEventsImages:', error);
    process.exit(1);
  }
}

generateEventsImages().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
