# Portfolio Setup Guide

## ✅ Completed
1. ✓ Vite + React + TypeScript project created
2. ✓ Dependencies installed (Tailwind, GSAP, Lucide, Axios)
3. ✓ Tailwind configured with dark mode
4. ✓ Folder structure created
5. ✓ Translations file created (src/lib/i18n.ts)
6. ✓ Language context created (src/contexts/LanguageContext.tsx)

## 📝 Next Steps

### 1. Update src/App.tsx

Replace the content with a simple layout that includes all sections.

### 2. Update src/main.tsx

Wrap App with LanguageProvider:

```tsx
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LanguageProvider } from './contexts/LanguageContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
)
```

### 3. Create Components

Create these files in src/components/:
- Navigation.tsx (navbar with dark mode toggle and language switcher)
- Hero.tsx (hero section with title and description)
- About.tsx (about section with skills)
- Experience.tsx (experience timeline)
- Projects.tsx (projects grid)
- Contact.tsx (contact info and social links)
- Footer.tsx (footer)

### 4. Simple Component Template

Each component should follow this pattern:

```tsx
import { useLanguage } from '../contexts/LanguageContext'

export function ComponentName() {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t.section.title}
        </h2>
        {/* Content here */}
      </div>
    </section>
  )
}
```

### 5. Run the Project

```bash
cd /home/WHISKY/Projects/portfolio3
npm run dev
```

## 🎨 Key Features to Implement

1. **Dark Mode Toggle** - Use `document.documentElement.classList.toggle('dark')`
2. **Language Switcher** - Buttons for EN/FR/AR
3. **Smooth Scroll** - Use `element.scrollIntoView({ behavior: 'smooth' })`
4. **Animations** - Use GSAP for entrance animations
5. **Responsive Design** - Use Tailwind breakpoints (sm, md, lg, xl)

## 🚀 Quick Start

The project structure is ready. You now need to:
1. Create the component files
2. Update App.tsx to import and render all components
3. Add GSAP animations as needed
4. Test in browser

All translations are ready in src/lib/i18n.ts!
