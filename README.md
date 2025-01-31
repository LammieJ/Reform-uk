# ReformUK Erdington Branch Website

A modern, SEO-optimized website for the ReformUK Erdington Branch built with Next.js and hosted on Vercel.

## Features

- 🚀 Fast and SEO-optimized with Next.js 13 App Router
- 🎨 Responsive design with Tailwind CSS
- 🤖 AI-powered content generation using OpenAI
- 📅 Eventbrite integration for event management
- 📧 Newsletter signup with Mailchimp double opt-in
- 🔗 Social media integration (Facebook and Twitter feeds)
- 💬 Discord community link
- 📊 Analytics with Vercel Analytics

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Accounts and API keys for:
  - OpenAI
  - Mailchimp
  - Eventbrite
  - Discord (server invite link)

## Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd reform-uk-erdington
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate and verify content:
   ```bash
   # Generate content
   npm run generate-content

   # Verify content structure
   npm run verify-content
   ```
   This will use OpenAI to generate all the text and images for the site. The content is saved to `src/content/generated.json` and will be used by the site at build time. The verification step ensures all required content was generated successfully.

   Note: Content generation may take a few minutes as it makes multiple API calls to generate text and images.

4. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # OpenAI
   OPENAI_API_KEY=your_openai_api_key

   # Mailchimp
   MAILCHIMP_API_KEY=your_mailchimp_api_key
   MAILCHIMP_LIST_ID=your_mailchimp_list_id
   MAILCHIMP_API_SERVER=your_mailchimp_server_prefix

   # Eventbrite
   EVENTBRITE_API_KEY=your_eventbrite_api_key
   EVENTBRITE_ORGANIZATION_ID=your_eventbrite_org_id

   # NextAuth
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000

   # Social Media (optional)
   FACEBOOK_ACCESS_TOKEN=your_facebook_token
   TWITTER_API_KEY=your_twitter_api_key
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration Helpers

### Mailchimp Setup

Run the Mailchimp configuration helper:
```bash
./scripts/get-mailchimp-info.js
```
Follow the prompts to get your Mailchimp API key, List ID, and API server prefix.

## Project Structure

```
reform-uk-erdington/
├── src/
│   ├── app/                 # Next.js 13 app directory
│   ├── components/          # React components
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── scripts/               # Helper scripts
```

## Key Components

- `src/app/page.tsx` - Main landing page
- `src/app/events/page.tsx` - Events page with Eventbrite integration
- `src/components/NewsletterSignup.tsx` - Newsletter subscription component
- `src/components/SocialFeed.tsx` - Social media feed integration
- `src/utils/openai.ts` - OpenAI content generation utilities
- `src/utils/eventbrite.ts` - Eventbrite API integration

## Deployment

The site is configured for deployment on Vercel. Connect your repository to Vercel and it will automatically deploy your changes.

Make sure to add all environment variables to your Vercel project settings.

## Development

- Run tests: `npm test`
- Build for production: `npm run build`
- Start production server: `npm start`
- Lint code: `npm run lint`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
