# Portfolio: Allan Rakotomamonjy

Basé sur le template open source [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio) de Naman Barkiya (licence MIT, voir `LICENSE`). Le design est conservé tel quel : cartes, timeline, 7 thèmes, police Cal Sans. Le contenu est entièrement remplacé.

Le site est en **export statique** : `npm run build` produit un site HTML dans `out/`, sans serveur. Il s'héberge donc gratuitement sur GitHub Pages, Vercel ou Netlify.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Modifier le contenu

Tout se trouve dans `config/` :

| Fichier | Contenu |
| --- | --- |
| `config/site.ts` | nom, e-mail, téléphone, LinkedIn, GitHub, CV |
| `config/projects.ts` | projets : chaque objet crée sa page `/projects/<id>/` ; les 3 premiers sont mis en avant sur l'accueil |
| `config/experience.ts` | expériences (avec leur page de détail) et formation |
| `config/skills.ts` | compétences ; les 6 premières sont sur l'accueil. Ajoute `rating: 1–5` pour afficher les étoiles |
| `config/pages.ts` | titres et sous-titres des pages |
| `config/socials.ts` | icônes du pied de page |

- Photo : `public/profile-img.jpg` (carrée)
- Images des projets : `public/projects/`
- CV : `public/cv/Allan_Rakotomamonjy_CV.pdf`

Le formulaire de contact ouvre la messagerie du visiteur avec le message pré-rempli. Il n'a besoin d'aucun serveur ni d'aucune clé.

Pour activer Google Analytics (facultatif), définis la variable d'environnement `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID`.

## Mettre en ligne gratuitement

Dépôt : https://github.com/allan77x77/new-portfolio

Pour l'instant, le site n'est **pas déployé** : le code est seulement stocké dans le dépôt. Un `git push` ne publie rien.

### Option A : GitHub Pages (quand tu voudras publier)

Le workflow `.github/workflows/deploy.yml` est en mode manuel. Il règle seul le sous-dossier `/new-portfolio`.

1. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
2. **Actions → Deploy to GitHub Pages → Run workflow**.
3. Le site sera en ligne sur https://allan77x77.github.io/new-portfolio/ 1 à 2 minutes plus tard.

Pour envoyer une modification dans le dépôt, sans la publier :

```bash
git add .
git commit -m "Update portfolio"
git push
```

### Option B : Vercel

Importer le dépôt sur https://vercel.com/new puis cliquer sur **Deploy**. Ajouter ensuite la variable `NEXT_PUBLIC_SITE_ORIGIN` avec l'URL Vercel, pour que les aperçus de liens soient corrects.
