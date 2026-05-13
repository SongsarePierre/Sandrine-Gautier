/* ════════════════════════════════════════════════════════
   SCRIPT.JS — Mariage Sandrine & Gautier
   
   Fonctions principales :
   • entrerDansSite()  — animation d'entrée depuis le lion
   • togglePlay()      — play/pause du lecteur audio
   • ouvrirLightbox()  — agrandir une photo
   • toggleMenu()      — menu burger mobile
════════════════════════════════════════════════════════ */


/* ════════════════════════
   ENTRÉE DANS LE SITE
════════════════════════ */
function entrerDansSite() {
  const hero = document.getElementById('hero');
  const site = document.getElementById('site');

  // Animation de sortie du hero
  hero.classList.add('sortie');

  // Affichage du site après l'animation
  setTimeout(function() {
    hero.style.display = 'none';
    site.classList.remove('site--cache');
    site.classList.add('site--visible');
    // Déclencher les animations d'apparition
    observerSections();
  }, 800);
}


/* ════════════════════════
   ANIMATIONS AU SCROLL
════════════════════════ */
function observerSections() {
  var elements = document.querySelectorAll('.fadein');

  var observateur = new IntersectionObserver(function(entrees) {
    entrees.forEach(function(entree) {
      if (entree.isIntersecting) {
        entree.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(function(el) {
    observateur.observe(el);
  });

  // Observer aussi pour la navigation active
  observerNavigation();
}

function observerNavigation() {
  var sections = document.querySelectorAll('section[id], div[id]');
  var liensNav  = document.querySelectorAll('.nav-liens a');

  var observateur = new IntersectionObserver(function(entrees) {
    entrees.forEach(function(entree) {
      if (entree.isIntersecting) {
        var id = entree.target.getAttribute('id');
        liensNav.forEach(function(lien) {
          lien.classList.remove('actif');
          if (lien.getAttribute('href') === '#' + id) {
            lien.classList.add('actif');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function(s) { observateur.observe(s); });
}

/* Navigation douce au clic */
function allerVers(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}


/* ════════════════════════
   MENU BURGER (mobile)
════════════════════════ */
function toggleMenu() {
  var menu = document.getElementById('navLiens');
  menu.classList.toggle('ouverte');
}

function fermerMenu() {
  var menu = document.getElementById('navLiens');
  menu.classList.remove('ouverte');
}

// Fermer le menu si on clique ailleurs
document.addEventListener('click', function(e) {
  var nav = document.querySelector('.nav');
  if (nav && !nav.contains(e.target)) {
    fermerMenu();
  }
});


/* ════════════════════════
   LECTEUR AUDIO
════════════════════════ */
var audio       = null;
var estEnLecture = false;

function initLecteur() {
  audio = document.getElementById('audioPlayer');
  if (!audio) return;

  // Mise à jour de la barre de progression
  audio.addEventListener('timeupdate', function() {
    var progres = document.getElementById('progres');
    var tempsActuel = document.getElementById('tempsActuel');

    if (audio.duration) {
      var pourcent = (audio.currentTime / audio.duration) * 100;
      progres.style.width = pourcent + '%';
    }
    tempsActuel.textContent = formaterTemps(audio.currentTime);
  });

  // Afficher la durée totale quand les métadonnées sont chargées
  audio.addEventListener('loadedmetadata', function() {
    var tempsTotal = document.getElementById('tempsTotal');
    tempsTotal.textContent = formaterTemps(audio.duration);
  });

  // Remise à zéro à la fin
  audio.addEventListener('ended', function() {
    estEnLecture = false;
    document.getElementById('btnPlay').textContent = '▶';
    document.getElementById('progres').style.width = '0%';
  });
}

function togglePlay() {
  if (!audio) return;

  if (estEnLecture) {
    audio.pause();
    document.getElementById('btnPlay').textContent = '▶';
    estEnLecture = false;
  } else {
    audio.play().catch(function(err) {
      // Si le fichier audio n'est pas encore là
      console.log('Fichier audio non trouvé. Placez "our-forever-fairy-tale.mp3" dans assets/audio/');
    });
    document.getElementById('btnPlay').textContent = '⏸';
    estEnLecture = true;
  }
}

function changerPosition(e) {
  if (!audio || !audio.duration) return;
  var barre  = document.getElementById('barreProg');
  var rect   = barre.getBoundingClientRect();
  var x      = e.clientX - rect.left;
  var ratio  = Math.max(0, Math.min(1, x / rect.width));
  audio.currentTime = ratio * audio.duration;
}

function formaterTemps(secondes) {
  if (isNaN(secondes)) return '0:00';
  var m = Math.floor(secondes / 60);
  var s = Math.floor(secondes % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}


/* ════════════════════════
   LIGHTBOX (galerie)
════════════════════════ */
function ouvrirLightbox(src, legende) {
  var lb  = document.getElementById('lightbox');
  var img = document.getElementById('lightboxImg');
  var leg = document.getElementById('lightboxLegende');

  img.src = src;
  img.alt = legende || '';
  if (leg) leg.textContent = legende || '';

  lb.classList.add('ouverte');
  document.body.style.overflow = 'hidden';
}

function fermerLightbox() {
  document.getElementById('lightbox').classList.remove('ouverte');
  document.body.style.overflow = '';
}

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') fermerLightbox();
});


/* ════════════════════════
   INITIALISATION
════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  initLecteur();

  // Déclencher la première section visible (si déjà dans le site)
  if (!document.getElementById('site').classList.contains('site--cache')) {
    observerSections();
  }
});
