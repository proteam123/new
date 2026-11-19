# Mishal Muhammed TM - Portfolio

A modern, responsive portfolio website showcasing Mishal Muhammed TM's profile, AI and machine learning projects, technical skills, professional experience, education, and contact details.

**Live portfolio:** [mishal77.vercel.app](https://mishal77.vercel.app)

The site is built with React and Vite and features a polished dark-tech visual style, animated interface elements, project demos, downloadable resume and CV files, and a contact form that opens the visitor's default email application.

## Preview

![Portfolio preview](./Screenshot%202026-07-03%20002506.png)

## Highlights

- Responsive single-page portfolio with sticky navigation
- Professional introduction and technology stack
- Interactive project showcase with images, videos, and repository links
- Animated skills constellation with category detail panels
- Education, certifications, experience, and achievement sections
- Resume and CV viewing/download options
- Email contact form with validation and clipboard support
- GitHub and LinkedIn profile links
- Reduced-motion support for accessible animations

## Featured Projects

| Project | Focus | Technologies |
| --- | --- | --- |
| **Mentora-AI** | AI academic mentoring, attendance, performance monitoring, and personalized guidance | Python, NLP, FastAPI, React |
| **AI Pose Estimation and Curl Tracker** | Real-time posture analysis and exercise repetition tracking | Python, computer vision, pose estimation |
| **Explainable Clickbait Detection** | Clickbait detection with Transformer models and word-level explanations | DistilBERT, PyTorch, LIME, FastAPI, Chart.js |
| **RAG-Based Document Q&A** | Context-grounded document question answering with source citations | FastAPI, React, TypeScript, Gemini, ChromaDB, RAG |

## Tech Stack

**Frontend**

- React 18
- TypeScript
- Vite 6
- Tailwind CSS 4
- Wouter
- Framer Motion
- Lucide React
- Sonner

**Development Tools**

- npm
- ESLint
- TypeScript
- Vite TypeScript configuration paths

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Installation

```bash
git clone https://github.com/proteam123/new.git
cd new
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:5176`.

The Vite server uses a strict port, so it will report an error instead of silently switching to another port.

### Production Build

```bash
npm run build
```

The production-ready files are written to `dist/`.

### Preview the Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server on port 5176 |
| `npm run build` | Runs the TypeScript build and creates a production bundle |
| `npm run lint` | Runs ESLint across the project |
| `npm run preview` | Serves the generated production build locally |

## Project Structure

```text
.
├── public/                 # Images, videos, resume, and CV files
├── src/
│   ├── components/         # Page sections and reusable UI components
│   ├── contexts/           # Theme provider
│   ├── lib/                # Utility modules
│   ├── pages/              # Route-level pages
│   ├── App.tsx             # Application routes and providers
│   ├── index.css           # Global Tailwind styles and theme variables
│   └── main.tsx            # React entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Customization

- Update profile and project content in `src/components/`
- Update the theme variables in `src/index.css`
- Replace downloadable documents inside `public/`
- Replace project media files in `public/`
- Update social profiles and contact details in `src/components/Hero.tsx` and `src/components/Contact.tsx`
- Update the page title and metadata in `index.html`

## Contact

- **Email:** mishalmuhammed77104.8@gmail.com
- **Phone:** +91 90722 75932
- **Location:** Kerala, India
- **GitHub:** [github.com/proteam123](https://github.com/proteam123)
- **LinkedIn:** [Mishal Muhammed](https://linkedin.com/in/mishal-muhammed-a50797353)

## License

This portfolio project is available for personal and educational use.
