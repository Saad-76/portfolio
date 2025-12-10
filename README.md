# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Showcasing professional experience, projects, and skills with a beautiful glassmorphism design.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with vibrant gradient accents
- **Responsive Layout**: Fully responsive across all devices
- **Multi-page Navigation**: Organized sections for better UX
- **TypeScript**: Full type safety throughout the codebase
- **Performance Optimized**: Built with Next.js 16 for optimal performance
- **SEO Friendly**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel / GitHub Pages ready

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Home page
│   │   ├── projects/     # Projects page
│   │   ├── experience/   # Experience page
│   │   └── about/        # About page
│   ├── components/       # Reusable React components
│   └── data/             # Portfolio data (content)
├── public/               # Static assets
└── package.json
```

## 🎨 Customization

All portfolio content is centralized in `src/data/portfolio.ts`. Update:
- Personal information
- Projects
- Experience
- Skills
- Education
- Contact details

## ⚙️ Environment Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Fill in your EmailJS credentials in `.env.local`:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** Never commit `.env.local` to GitHub! It's already in `.gitignore`.

## 🚢 Deployment

### Vercel (Recommended - Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [https://vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - Click "Deploy"
   - Your site will be live in minutes!

### GitHub Pages (Static Export)

1. Update `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

2. Build and deploy:
```bash
npm run build
# The 'out' folder contains your static site
# Push 'out' folder contents to gh-pages branch
```

3. Enable GitHub Pages in repository settings

### Netlify (Alternative)

1. Push to GitHub
2. Connect repository on Netlify
3. Add environment variables
4. Deploy automatically

## 📝 License

This project is private and proprietary.


## 👤 Author

**Saad Mehmood**
- GitHub: [@Saad-76](https://github.com/Saad-76)
- LinkedIn: [Profile](https://www.linkedin.com/in/saad-mehmood-537903213/)
- Email: saadmehmood131@gmail.com

---

Built with ❤️ using Next.js and TypeScript
# portfolio
