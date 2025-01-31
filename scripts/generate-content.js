#!/usr/bin/env node

const OpenAI = require('openai')
const fs = require('fs').promises
const path = require('path')
require('dotenv').config({ path: '.env.local' })

if (!process.env.OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY in .env.local')
  process.exit(1)
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function generateText(prompt) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a ReformUK journalist and content creator writing in UK English. Your style is similar to Nigel Farage - direct, factual, and focused on reform and positive change."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.7,
    max_tokens: 500,
  })

  return completion.choices[0]?.message?.content || ''
}

async function generateImage(prompt) {
  const response = await openai.images.generate({
    prompt: `${prompt} - in a professional political campaign style, focusing on community and reform themes`,
    n: 1,
    size: "1024x1024",
    response_format: 'url',
  })

  return response.data[0]?.url || ''
}

async function generateAllContent() {
  console.log('Generating content...')
  
  const content = {
    home: {
      hero: {
        text: await generateText('Write a compelling 2-3 sentence hero message for the ReformUK Erdington Branch website about bringing positive change to Erdington'),
        image: await generateImage('A vibrant, modern image of Erdington High Street with diverse community members, symbolizing unity and positive change')
      },
      about: {
        text: await generateText('Write a compelling 2-paragraph section about the ReformUK Erdington Branch\'s mission and vision for the local community'),
        image: await generateImage('A symbolic image representing community reform and positive change in Erdington')
      },
      priorities: await generateText('List 3 key priorities for reforming and improving Erdington, with a brief explanation for each')
    },
    events: {
      intro: await generateText('Write a compelling introduction paragraph about ReformUK Erdington Branch events and community engagement')
    },
    join: {
      intro: await generateText('Write a compelling introduction about joining ReformUK Erdington Branch and making a difference in the community'),
      benefits: await generateText('List 4 key benefits of joining ReformUK Erdington Branch'),
      image: await generateImage('A diverse group of community members working together for positive change in Erdington')
    },
    news: {
      intro: await generateText('Write an introduction paragraph about staying updated with ReformUK Erdington Branch news and developments'),
      featured: await generateText('Write 3 example news headlines and short summaries about ReformUK Erdington Branch activities')
    },
    contact: {
      intro: await generateText('Write a welcoming message encouraging people to get in touch with ReformUK Erdington Branch'),
      methods: await generateText('Write 3 different ways people can get involved with ReformUK Erdington Branch')
    }
  }

  const contentDir = path.join(__dirname, '..', 'src', 'content')
  await fs.mkdir(contentDir, { recursive: true })
  await fs.writeFile(
    path.join(contentDir, 'generated.json'),
    JSON.stringify(content, null, 2)
  )

  console.log('Content generated successfully!')
}

generateAllContent().catch(console.error)
