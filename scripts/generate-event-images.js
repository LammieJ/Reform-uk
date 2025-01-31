#!/usr/bin/env node
require('dotenv').config({ path: '.env.local' });
const { generateImage } = require('../src/utils/openai');
const fs = require('fs').promises;
const path = require('path');
const fetch = require('node-fetch');

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
      // Download and save the image
      const response = await fetch(heroImageUrl);
      const buffer = await response.arrayBuffer();
      await fs.writeFile(
        path.join(process.cwd(), 'public', 'images', 'events-hero.jpg'),
        Buffer.from(buffer)
      );
      console.log('Hero image generated and saved successfully!');
    } else {
      console.error('Failed to generate hero image');
    }
  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateEventImages().catch(console.error);
