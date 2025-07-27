# Gabriele Rizzitiello - Portfolio

Un portfolio moderno e responsive per presentare i miei progetti e competenze nel campo del Data Engineering e dei sistemi complessi.

🌐 **Live Site**: https://gabrulele.github.io/gabrulele.portfolio

## ✨ Caratteristiche

### 🎨 Design Moderno
- Layout responsive ottimizzato per tutti i dispositivi
- Design pulito e professionale con animazioni fluide
- Tipografia moderna con font Inter
- Effetti hover e transizioni smooth

### 🌙 Dark/Light Mode
- Toggle switch per passare tra tema chiaro e scuro
- Preferenze salvate nel localStorage
- Transizioni fluide tra i temi
- Colori ottimizzati per entrambe le modalità

### 🌍 Supporto Multilingue
- Disponibile in 3 lingue: Italiano, Inglese, Spagnolo
- Selettore di lingua nel header
- Traduzioni complete di tutto il contenuto
- Preferenze linguistiche salvate nel localStorage

### 📱 Responsive Design
- Menu hamburger per dispositivi mobile
- Layout adattivo per tablet e desktop
- Immagini ottimizzate per diverse risoluzioni
- Navigazione touch-friendly

### 🚀 Funzionalità Interactive
- Smooth scrolling tra le sezioni
- Animazioni di scroll reveal
- Effetto typing per il nome
- Header con effetto blur durante lo scroll

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura semantica e accessibile
- **CSS3**: 
  - CSS Custom Properties per i temi
  - CSS Grid e Flexbox per il layout
  - Animazioni e transizioni CSS
  - Media queries per il responsive design
- **JavaScript ES6+**:
  - Gestione del tema dark/light
  - Sistema di traduzioni
  - Intersection Observer API per le animazioni
  - LocalStorage per la persistenza delle preferenze

## 📁 Struttura del Progetto

```
/
├── index.html          # File HTML principale
├── style.css           # Fogli di stile CSS
├── script.js           # JavaScript per interattività
├── images/            
│   └── ritratto.jpg    # Foto profilo
└── README.md          # Documentazione
```

## 🎯 Sezioni del Portfolio

### 🏠 Hero Section
- Foto profilo con effetti hover
- Introduzione con effetto typing
- Call-to-action buttons
- Indicatore di scroll animato

### 👨‍💻 About Me
- Descrizione personale e background
- Statistiche con contatori animati
- Design card moderno

### 💼 Skills
- Categorie di competenze organizzate
- Tag interattivi per tecnologie
- Effetti hover sui elementi

### 🚀 Projects
- Grid di progetti con card moderne
- Icone FontAwesome per categorizzazione
- Link diretti ai repository GitHub
- Descrizioni tecniche dettagliate

### 📧 Contact
- Informazioni di contatto
- Link ai social media
- Design pulito e accessibile

## 🌐 Supporto Lingue

| Lingua | Codice | Stato |
|--------|--------|-------|
| Italiano | `it` | ✅ Completo |
| English | `en` | ✅ Completo |
| Español | `es` | ✅ Completo |

## 🎨 Temi

### Light Theme
- Background: Bianco e grigi chiari
- Testo: Nero e grigi scuri
- Accenti: Gradient blu-viola

### Dark Theme  
- Background: Grigi scuri e neri
- Testo: Bianco e grigi chiari
- Accenti: Gradient viola-rosa

## 📱 Breakpoint Responsive

- **Desktop**: > 1200px
- **Tablet**: 768px - 1199px  
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🚀 Come Utilizzare

1. Clona il repository:
   ```bash
   git clone https://github.com/gabrulele/gabrulele.portfolio.git
   ```

2. Apri `index.html` nel browser o usa un server locale:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   ```

3. Personalizza il contenuto:
   - Modifica le informazioni personali in `index.html`
   - Aggiorna le traduzioni in `script.js`
   - Personalizza i colori in `style.css`

## 🔧 Personalizzazione

### Modificare i Colori
I colori sono definiti come CSS Custom Properties in `:root`:

```css
:root {
  --accent-primary: #667eea;
  --accent-secondary: #764ba2;
  /* ... altri colori */
}
```

### Aggiungere Nuove Lingue
1. Aggiungi la nuova lingua nell'oggetto `translations` in `script.js`
2. Aggiungi l'opzione nel select HTML
3. Testa tutte le traduzioni

### Modificare le Animazioni
Le animazioni sono configurabili tramite CSS:

```css
.project-card {
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-10px);
}
```

## 📄 Licenza

© 2024 Gabriele Rizzitiello. Tutti i diritti riservati.

## 🤝 Contributi

Suggerimenti e miglioramenti sono sempre benvenuti! Sentiti libero di aprire un issue o una pull request.

---

Fatto con ❤️ da [Gabriele Rizzitiello](https://github.com/gabrulele)