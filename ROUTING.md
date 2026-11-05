# Routage Next.js

Le portfolio utilise l’App Router de Next.js.

| URL | Fichier | Contenu |
| --- | --- | --- |
| `/` | `app/page.tsx` | Accueil du portfolio (`src/screens/Home.tsx`) |
| `/projects` | `app/projects/page.tsx` | Liste complète des projets |
| toute autre URL | `app/not-found.tsx` | Page 404 personnalisée |

Le layout partagé (`app/layout.tsx`) contient l’en-tête, le pied de page, le thème et les analytics.
