# AI-Powered Study Planner

An AI-powered study planning and exam schedule management system that helps users track their study progress and receive personalized recommendations.

## Features

- Interactive study plan visualization
- Multi-modal study logging (text, voice, file uploads)
- Pomodoro timer for focused study sessions
- AI-generated study summaries and recommendations
- Local storage of API configuration
- Admin dashboard for plan management
- Real-time notifications

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure your OpenAI API:
   - Open the Settings page
   - Enter your OpenAI API URL
   - (Optional) Enter your API key if required
   - Click "Save Settings"

4. Start the development server:
```bash
npm start
```

## Project Structure

```
project-root/
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── StudyPlan.js
│       │   ├── StudyLog.js
│       │   ├── TomatoTimer.js
│       │   ├── AISummary.js
│       │   ├── AdminDashboard.js
│       │   └── Settings.js
│       ├── App.js
│       ├── index.js
│       └── api.js
└── functions/
    ├── openai-api.js
    ├── update-plan.js
    ├── upload-file.js
    └── notifications.js
```

## Deployment to Cloudflare Pages

1. Install Wrangler CLI globally:
```bash
npm install -g wrangler
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Cloudflare Pages:
```bash
wrangler pages publish build
```

4. Configure Environment Variables in Cloudflare Pages Dashboard:
   - Go to your project settings
   - Add the following environment variables:
     * `OPENAI_API_URL` (optional default API URL)
     * `OPENAI_API_KEY` (optional default API key)

## Local Development

1. The application uses React for the frontend and Cloudflare Pages Functions for the backend.
2. API configuration is stored in the browser's localStorage for security and convenience.
3. File uploads are handled securely with proper validation.
4. The Pomodoro timer helps maintain focused study sessions.

## Security

- API configuration is stored locally in the browser
- File uploads are validated for type and size
- Sensitive information is not exposed in the frontend
- Error handling is implemented throughout the application

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License