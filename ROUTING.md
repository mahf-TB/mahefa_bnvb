# Système de Routing

Ce projet utilise `react-router-dom` avec `createBrowserRouter` pour la gestion des routes.

## Structure des Routes

### Pages disponibles

- **/** - Page d'accueil (Home)
- **/about** - À propos (Compétences et Formation)
- **/experience** - Expérience professionnelle
- **/projects** - Portfolio de projets
- **/contact** - Page de contact
- ***** - Page 404 pour les routes non trouvées

### Architecture

```
src/
├── router.tsx              # Configuration du router avec createBrowserRouter
├── layouts/
│   └── RootLayout.tsx     # Layout principal avec Header et Outlet
├── pages/
│   ├── Home.tsx           # Page d'accueil
│   ├── About.tsx          # Page à propos
│   ├── Experience.tsx     # Page expérience
│   ├── ProjectsPage.tsx   # Page projets
│   ├── Contact.tsx        # Page contact
│   └── NotFound.tsx       # Page 404
└── components/
    └── header.tsx         # Header avec navigation active
```

## Navigation

Le Header inclut une barre de navigation avec les liens suivants :
- Accueil
- À propos
- Expérience
- Projets
- Contact

Le lien actif est mis en évidence visuellement.

## Comment ajouter une nouvelle route

1. Créer un nouveau composant de page dans `src/pages/`
2. Importer le composant dans `src/router.tsx`
3. Ajouter la route dans l'array `children` du router
4. (Optionnel) Ajouter le lien dans `navLinks` du header

Exemple :
```tsx
// Dans router.tsx
import MaNouvellePage from "./pages/MaNouvellePage";

// Ajouter dans children
{
  path: "ma-route",
  element: <MaNouvellePage />,
}

// Dans header.tsx navLinks
{ path: "/ma-route", label: "Ma Page" }
```
