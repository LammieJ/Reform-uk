#!/usr/bin/env node
require('dotenv').config({ path: '.env.local' });
const OpenAI = require('openai');
const fs = require('fs').promises;
const path = require('path');
const fetch = require('node-fetch');

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateImage(prompt) {
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

async function generateEventImages() {
  console.log('Generating event images...');

  try {
    // Create images directory if it doesn't exist
    await fs.mkdir(path.join(process.cwd(), 'public', 'images'), { recursive: true });

    // Generate hero image
    const heroPrompt = "A dynamic political rally scene in Erdington, Birmingham, UK, showing a diverse crowd of engaged citizens at a community event. The image should capture the energy and spirit of political reform and community engagement, with ReformUK's signature teal blue color subtly incorporated. Professional photojournalistic style.";
    
    console.log('Generating hero image...');
    const heroImageUrl = await generateImage(heroPrompt);
    
    if (heroImageUrl) {
      console.log('Image URL generated:', heroImageUrl);
      // Download and save the image
      const response = await fetch(heroImageUrl);
      const buffer = await response.arrayBuffer();
      const imagePath = path.join(process.cwd(), 'public', 'images', 'events-hero.jpg');
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
