import { createRoot } from 'react-dom/client'
import '@/global.css'
import App from '@/App.tsx'
import '@/lib/i18n.ts'

createRoot(document.getElementById('root')!).render(<App />)
