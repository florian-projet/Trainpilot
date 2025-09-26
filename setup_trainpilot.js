const fs = require('fs');
const path = require('path');

// Créer les dossiers
const directories = [
  'app/api/create-checkout-session',
  'app/api/webhooks/stripe', 
  'app/coach/calendar',
  'app/coach/checkins',
  'app/coach/messages',
  'app/coach/programs',
  'app/coach/reports',
  'app/client/checkins',
  'app/client/messages', 
  'app/client/progress',
  'app/marketplace',
  'app/subscription/cancel',
  'app/subscription/success',
  'app/(auth)/login',
  'app/(auth)/register',
  'components/Layout',
  'contexts',
  'lib',
  'supabase/migrations'
];

console.log('🚀 Création de TrainPilot...');

// Créer tous les dossiers
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Dossier créé: ${dir}`);
  }
});

// Contenu des fichiers
const files = {
  'package.json': `{
  "name": "trainpilot",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@supabase/supabase-js": "^2.38.0",
    "@supabase/auth-helpers-nextjs": "^0.8.7",
    "@stripe/stripe-js": "^2.1.0",
    "stripe": "^13.10.0",
    "lucide-react": "^0.263.1",
    "clsx": "^2.0.0",
    "tailwindcss": "^3.3.0",
    "@tailwindcss/forms": "^0.5.6"
  },
  "devDependencies": {
    "typescript": "^5.2.2",
    "@types/node": "^20.8.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "eslint": "^8.51.0",
    "eslint-config-next": "14.0.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31"
  }
}`,

  '.gitignore': `# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# supabase
.branches
.temp`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`,

  'postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,

  'next.config.js': `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  }
}

module.exports = nextConfig`,

  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefcf3',
          100: '#fef7e0',
          200: '#fdecc0',
          300: '#fbda95',
          400: '#f7c467',
          500: '#D4AF37',
          600: '#b8941e',
          700: '#987517',
          800: '#7d5e18',
          900: '#684e19',
        },
        light: {
          DEFAULT: '#F7F8FA',
          100: '#F7F8FA',
        },
        dark: {
          DEFAULT: '#0F1115',
          800: '#343a40',
          900: '#212529',
          950: '#0F1115',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}`,

  '.env.example': `# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe  
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret`,

  'README.md': `# TrainPilot - Plateforme de Coaching Sportif

🚀 Application SaaS de coaching sportif connectant coaches et clients.

## Fonctionnalités

### Pour les Coaches
- Gestion des clients et programmes
- Suivi des progrès
- Messagerie intégrée
- Rapports et analytics

### Pour les Clients  
- Accès aux programmes personnalisés
- Suivi de progression
- Check-ins hebdomadaires
- Communication avec le coach

## Stack Technique

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Paiements**: Stripe
- **Icons**: Lucide React

## Installation

1. \`\`\`bash
   npm install
   \`\`\`

2. Configurez vos variables d'environnement dans \`.env.local\`

3. \`\`\`bash
   npm run dev
   \`\`\`

## 🎯 En cours de développement

Le projet est en phase de développement initial avec l'architecture complète mise en place.`,

  'app/layout.tsx': `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TrainPilot - Coaching Sportif Premium',
  description: 'Plateforme de coaching sportif premium',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}`,

  'app/page.tsx': `'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
  const { user, profile, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login')
      } else if (profile?.role === 'coach') {
        router.push('/coach')
      } else {
        router.push('/client')
      }
    }
  }, [user, profile, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-light-100 dark:bg-dark-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return null
}`,

  'app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: rgb(var(--foreground-rgb));
  background: rgb(var(--background-start-rgb));
}

a {
  color: inherit;
  text-decoration: none;
}

/* Custom classes */
.btn-primary {
  @apply bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-medium px-4 py-2 rounded-lg transition-colors;
}

.btn-secondary {
  @apply bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium px-4 py-2 rounded-lg transition-colors;
}`
};

// Créer tous les fichiers
Object.entries(files).forEach(([filename, content]) => {
  fs.writeFileSync(filename, content);
  console.log(`✅ Fichier créé: ${filename}`);
});

console.log(`
🎉 TrainPilot créé avec succès !

📋 Prochaines étapes:
1. npm install
2. Configurer .env.local 
3. npm run dev

🚀 Votre application est prête !
`);
