# 💍 Site Web — Mariage Sandrine & Gautier
## Guide de gestion et de modification

---

## 📁 STRUCTURE DES FICHIERS

```
mariage-sandrine-gautier/
│
├── index.html          ← Page principale (structure du site)
├── style.css           ← Tous les styles visuels (couleurs, polices, tailles)
├── script.js           ← Fonctionnalités (audio, galerie, animations)
│
└── assets/
    ├── images/
    │   ├── newspaper.jpg       ← Annonce journal
    │   ├── traditional.jpg     ← Photo tenue traditionnelle
    │   ├── casual.jpg          ← Photo soirée
    │   ├── vintage.jpg         ← Photo ancienne
    │   └── [vos nouvelles photos ici]
    │
    ├── audio/
    │   └── our-forever-fairy-tale.mp3   ← VOTRE CHANSON ICI
    │
    ├── video/
    │   └── histoire.mp4        ← VOTRE VIDÉO ICI
    │
    └── invitation.pdf          ← Votre PDF d'invitation (optionnel)
```

---

## 🎬 AJOUTER LA VIDÉO

1. Montez votre vidéo et exportez-la en format `.mp4`
2. Nommez le fichier `histoire.mp4`
3. Copiez-le dans le dossier `assets/video/`
4. **C'est tout !** La vidéo apparaîtra automatiquement.

> ✅ Si vous voulez une image de couverture différente avant lecture :
> Ouvrez `index.html`, cherchez `poster="assets/images/traditional.jpg"`
> et remplacez par le chemin de votre image.

---

## 🎵 AJOUTER LA CHANSON

1. Obtenez votre fichier audio en format `.mp3` ou `.m4a`
2. Nommez-le `our-forever-fairy-tale.mp3`
3. Copiez-le dans `assets/audio/`
4. Le lecteur fonctionnera automatiquement.

---

## 📸 AJOUTER DES PHOTOS

### Méthode simple :
1. Copiez vos photos dans `assets/images/`
2. Ouvrez `index.html` dans un éditeur de texte (Notepad++, VS Code…)
3. Cherchez `<!-- COMMENT AJOUTER DES PHOTOS -->`
4. Dupliquez ce bloc et changez le nom du fichier :

```html
<div class="gal-item" onclick="ouvrirLightbox('assets/images/VOTRE_PHOTO.jpg', 'Description')">
  <img src="assets/images/VOTRE_PHOTO.jpg" alt="Description de la photo" loading="lazy" />
  <div class="gal-overlay">🔍 Voir en grand</div>
</div>
```

### Pour une grande photo (qui prend 2 colonnes) :
```html
<div class="gal-item gal-grande" onclick="ouvrirLightbox('assets/images/PHOTO.jpg', 'Description')">
  ...
</div>
```

### Remplacer les espaces réservés ("à venir") :
Cherchez `gal-placeholder` dans `index.html` et remplacez le bloc par le code ci-dessus.

---

## 🗺️ ACTIVER LA CARTE GOOGLE MAPS

1. Allez sur [maps.google.com](https://maps.google.com)
2. Recherchez **"Paroisse Notre Dame du Lac de Messa Yaoundé"**
3. Cliquez sur le bouton **Partager** → **Intégrer une carte**
4. Copiez le code `<iframe src="https://...">`
5. Dans `index.html`, trouvez `<iframe class="carte-iframe" src="https://www.google.com/maps...`
6. Remplacez le `src="..."` par votre nouveau lien

---

## ✏️ MODIFIER LES TEXTES

### Horaires du programme :
Dans `index.html`, cherchez les balises `<div class="prog-heure">` et modifiez les heures.

### Lieux :
Cherchez `<div class="lieu-nom">` et `<div class="lieu-adresse">`.

### Citation d'amour :
Cherchez `citation-texte` dans `index.html`.

### Verset biblique (pied de page) :
Cherchez `footer-verset` dans `index.html`.

---

## 🎨 CHANGER LES COULEURS

Ouvrez `style.css`, section `:root` tout en haut :

```css
:root {
  --teal:         #0E7A8A;   /* Couleur principale (teal/bleu-vert) */
  --or:           #C4A04A;   /* Or */
  --or-clair:     #E8D5A3;   /* Or clair */
  --fond-sombre:  #0D1F22;   /* Fond sombre */
  ...
}
```

Remplacez les codes hexadécimaux (#XXXXXX) par vos couleurs.

---

## 🌐 HÉBERGER LE SITE

### Option 1 — Netlify (GRATUIT, le plus simple) :
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez votre dossier `mariage-sandrine-gautier/` dans Netlify
3. Votre site est en ligne en 30 secondes !
4. Vous obtenez une URL comme `https://sandrine-gautier.netlify.app`
   (ou achetez un vrai domaine comme `www.sandrineetgautier.com` pour ~10€/an)

### Option 2 — GitHub Pages (GRATUIT) :
1. Créez un compte sur [github.com](https://github.com)
2. Créez un nouveau dépôt public
3. Uploadez tous les fichiers
4. Activez GitHub Pages dans les paramètres

### Option 3 — Hébergeur classique (o2switch, OVH, etc.) :
1. Connectez-vous à votre panneau de contrôle (cPanel ou FTP)
2. Uploadez tous les fichiers dans le dossier `public_html/`
3. Votre site est accessible via votre domaine

---

## 📱 LE SITE EST DÉJÀ RESPONSIVE

Le site s'adapte automatiquement aux téléphones mobiles.
Aucune modification nécessaire.

---

## ❓ BESOIN D'AIDE ?

Toutes les sections importantes de `index.html` et `style.css` sont
commentées en français pour vous guider.

Cherchez les commentaires qui commencent par `<!--` dans le HTML
et `/*` dans les fichiers CSS/JS.
