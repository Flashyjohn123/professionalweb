/**
 * John Huynh — Educator & Tutor Portfolio
 * Interactive Features & Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollspy();
  initInteractiveBook();
  initVocabFlip();
  initFiveStepFocus();
  initCuriosityCards();
});

/* ==========================================================================
   1. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  });

  // Close when clicking nav links on mobile
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    });
  });
}

/* ==========================================================================
   2. SCROLLSPY (One-Page Continuous Scroll Navigation)
   ========================================================================== */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href*="#"]');
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href.endsWith(`#${id}`)) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   3. INTERACTIVE 3D/SPREAD BOOK COMPONENT (Smooth Flipping)
   ========================================================================== */
const bookSpreads = [
  {
    spreadNum: 1,
    left: {
      chapter: "Chapter 01 · Educational Philosophy",
      pageNum: "01",
      title: "Belonging Before Brilliance",
      content: `
        <p>In every classroom, learning begins with trust. When young students (EC–6) feel fundamentally accepted for who they are, their cognitive capacity for curiosity, problem-solving, and intellectual risk-taking expands exponentially.</p>
        <div class="book-quote-callout">
          “Children don’t learn from people they don’t trust. Dignity and warmth precede academic rigor.”
        </div>
        <h4>Core Tenets</h4>
        <ul>
          <li><strong>Culturally Responsive Climate:</strong> Valuing home languages (ESL & bilingual pathways) as cognitive assets, never deficits.</li>
          <li><strong>Low Affective Filter:</strong> Normalizing mistakes as the raw material of authentic discovery.</li>
          <li><strong>Predictable Warmth:</strong> Clear, calm routines that eliminate classroom anxiety.</li>
        </ul>
      `,
      footer: "Pedagogy & Classroom Ethos"
    },
    right: {
      chapter: "Chapter 02 · Methodology & Scaffolding",
      pageNum: "02",
      title: "Making Thinking Visible",
      content: `
        <p>How do we guide learners from hesitation to joyful self-direction? By demystifying the thinking process through multimodal scaffolds and structured autonomy.</p>
        <h4>The Triad of Scaffolding</h4>
        <ul>
          <li><strong>Visual Cognates & Anchor Charts:</strong> Bridging English and native languages with vibrant visual associations.</li>
          <li><strong>Total Physical Response (TPR):</strong> Pairing motor movement with phonics and syntactic structures.</li>
          <li><strong>Sentence Stems & Structured Discourse:</strong> Equipping every student to lead group discussions with confidence.</li>
        </ul>
        <div class="book-badge-list">
          <span class="book-badge">EC–6 ESL Pathway</span>
          <span class="book-badge">Multisensory Phonics</span>
          <span class="book-badge">Inquiry-Led</span>
        </div>
      `,
      footer: "Instructional Systems · John Huynh"
    }
  },
  {
    spreadNum: 2,
    left: {
      chapter: "Chapter 03 · Youth Instruction in Action",
      pageNum: "03",
      title: "Dynamic Class Instruction (Ages 3–12)",
      content: `
        <p>As a Class Instructor at the <strong>Hurst Recreation Center</strong>, I design dynamic, standards-aligned curriculum where diverse learners build teamwork, problem-solving, and emotional resilience.</p>
        <h4>Classroom Strategies</h4>
        <ul>
          <li><strong>Gamified Team Stations:</strong> Small cooperative groups that rotate through hands-on challenges.</li>
          <li><strong>Peer Conflict Resolution:</strong> Guided 'peace circles' where learners practice emotional regulation and restorative talk.</li>
          <li><strong>Active Play Transitions:</strong> High-engagement kinesthetic bridges between cognitive tasks.</li>
        </ul>
        <div class="book-quote-callout">
          “Structure provides the sandbox; play and purpose bring the creativity to life.”
        </div>
      `,
      footer: "City of Hurst · Youth Instruction"
    },
    right: {
      chapter: "Chapter 04 · Individualized Tutoring",
      pageNum: "04",
      title: "1-on-1 Growth with Tutor of Dragons",
      content: `
        <p>Tutoring with <strong>Tutor of Dragons</strong> in Southlake, Texas allows deep personalization. Every student receives a tailored roadmap rooted in their specific learning pace and passions.</p>
        <h4>Diagnostic Process</h4>
        <ul>
          <li><strong>Baseline Strengths Discovery:</strong> Pinpointing what lights the student up before attacking learning gaps.</li>
          <li><strong>Micro-Milestone Tracking:</strong> Celebrating incremental breakthroughs to build self-efficacy.</li>
          <li><strong>Transparent Parent Loops:</strong> Weekly actionable summaries keeping families aligned and empowered.</li>
        </ul>
        <div class="book-badge-list">
          <span class="book-badge">Tutor of Dragons</span>
          <span class="book-badge">Custom Growth Roadmaps</span>
          <span class="book-badge">Confidence Building</span>
        </div>
      `,
      footer: "One-on-One Mastery · Tutor of Dragons"
    }
  },
  {
    spreadNum: 3,
    left: {
      chapter: "Chapter 05 · The 5-Step Learning Framework",
      pageNum: "05",
      title: "From Hook to Autonomy",
      content: `
        <p>A proven lesson cycle that maintains high engagement from the opening bell to dismissal, adaptable for whole-group instruction and individual tutoring sessions.</p>
        <h4>The 5-Step Cycle</h4>
        <ul>
          <li><strong>1. The Curiosity Hook:</strong> A mystery question or tangible artifact that sparks wonder.</li>
          <li><strong>2. Explicit Modeling:</strong> Think-alouds showing how experts approach the problem.</li>
          <li><strong>3. Guided & Peer Collaboration:</strong> Low-stakes cooperative practice with immediate feedback.</li>
          <li><strong>4. Autonomous Application:</strong> Students apply new concepts in creative formats.</li>
          <li><strong>5. Metacognitive Reflection:</strong> What did we discover, and how did our minds grow?</li>
        </ul>
      `,
      footer: "Instructional Blueprint · John Huynh"
    },
    right: {
      chapter: "Chapter 06 · Credentials, Future & Vision",
      pageNum: "06",
      title: "The Lifelong Learning Journey",
      content: `
        <p>Education is a living craft. My academic training at <strong>The University of Texas at Arlington</strong>, combined with state-recognized certifications, prepares me for impactful teaching.</p>
        <h4>Credentials & Preparations</h4>
        <ul>
          <li><strong>TEA PPR EC–12 Certified:</strong> Rigorous pedagogical and professional standards.</li>
          <li><strong>Google Classroom Certified (Edpuzzle):</strong> Seamless blended learning workflows.</li>
          <li><strong>Bilingual & ESL Immersion:</strong> Creating classrooms where every culture and language is celebrated.</li>
        </ul>
        <div class="book-quote-callout">
          “Ready to shape the future of learning, one confident student at a time.”
        </div>
      `,
      footer: "UTA Education · Next Steps"
    }
  }
];

let currentSpreadIndex = 0;

function initInteractiveBook() {
  const container = document.getElementById('interactive-book');
  const prevBtn = document.getElementById('book-prev');
  const nextBtn = document.getElementById('book-next');
  const dotsContainer = document.getElementById('book-dots');
  const spreadLabel = document.getElementById('book-spread-label');

  if (!container || !prevBtn || !nextBtn) return;

  // Render initial spread
  renderSpread(currentSpreadIndex);

  // Setup click listeners
  prevBtn.addEventListener('click', () => {
    if (currentSpreadIndex > 0) {
      currentSpreadIndex--;
      renderSpread(currentSpreadIndex);
      playFlipEffect();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentSpreadIndex < bookSpreads.length - 1) {
      currentSpreadIndex++;
      renderSpread(currentSpreadIndex);
      playFlipEffect();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const bookRect = container.getBoundingClientRect();
    const isVisible = bookRect.top < window.innerHeight && bookRect.bottom > 0;
    if (!isVisible) return;

    if (e.key === 'ArrowRight' && currentSpreadIndex < bookSpreads.length - 1) {
      currentSpreadIndex++;
      renderSpread(currentSpreadIndex);
      playFlipEffect();
    } else if (e.key === 'ArrowLeft' && currentSpreadIndex > 0) {
      currentSpreadIndex--;
      renderSpread(currentSpreadIndex);
      playFlipEffect();
    }
  });

  function renderSpread(index) {
    const spread = bookSpreads[index];
    const leftEl = container.querySelector('.book-page-left');
    const rightEl = container.querySelector('.book-page-right');

    if (!leftEl || !rightEl) return;

    // Apply quick transition class
    leftEl.style.opacity = '0.3';
    rightEl.style.opacity = '0.3';

    setTimeout(() => {
      // Populate Left Page
      leftEl.innerHTML = `
        <div class="book-page-header">
          <span class="book-chapter">${spread.left.chapter}</span>
          <span class="book-page-num">${spread.left.pageNum}</span>
        </div>
        <div class="book-page-content">
          <h3>${spread.left.title}</h3>
          ${spread.left.content}
        </div>
        <div class="book-page-footer">
          <span>${spread.left.footer}</span>
          <span>Educator Notebook</span>
        </div>
      `;

      // Populate Right Page
      rightEl.innerHTML = `
        <div class="book-page-header">
          <span class="book-chapter">${spread.right.chapter}</span>
          <span class="book-page-num">${spread.right.pageNum}</span>
        </div>
        <div class="book-page-content">
          <h3>${spread.right.title}</h3>
          ${spread.right.content}
        </div>
        <div class="book-page-footer">
          <span>${spread.right.footer}</span>
          <span>Educator Notebook</span>
        </div>
      `;

      leftEl.style.opacity = '1';
      rightEl.style.opacity = '1';
    }, 120);

    // Update buttons
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === bookSpreads.length - 1;

    // Update label
    if (spreadLabel) {
      spreadLabel.textContent = `Pages ${spread.left.pageNum}–${spread.right.pageNum} of 06`;
    }

    // Update dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      bookSpreads.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `book-dot ${i === index ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to spread ${i + 1}`);
        dot.addEventListener('click', () => {
          currentSpreadIndex = i;
          renderSpread(currentSpreadIndex);
          playFlipEffect();
        });
        dotsContainer.appendChild(dot);
      });
    }
  }

  function playFlipEffect() {
    // Subtle tactile scale effect on container
    container.style.transform = 'scale(0.995)';
    setTimeout(() => {
      container.style.transform = 'scale(1)';
    }, 180);
  }
}

/* ==========================================================================
   4. VOCABULARY FLIP (Bilingual Practice - English / Spanish / Vietnamese)
   ========================================================================== */
const vocabList = [
  {
    targetWord: "aprender",
    targetLang: "Español",
    phonetic: "/a.pɾenˈdeɾ/",
    englishWord: "to learn",
    definition: "To gain knowledge or skill through study, experience, or being taught.",
    example: "“Nos encanta aprender juntos todos los días.”"
  },
  {
    targetWord: "học hỏi",
    targetLang: "Tiếng Việt",
    phonetic: "/hawk hwy/",
    englishWord: "to learn & inquire",
    definition: "To absorb wisdom and cultivate understanding through inquisitive exploration.",
    example: "“Học hỏi là chìa khóa mở ra tương lai.”"
  },
  {
    targetWord: "la curiosidad",
    targetLang: "Español",
    phonetic: "/ku.ɾjo.siˈðað/",
    englishWord: "curiosity",
    definition: "A strong desire to know or learn something new.",
    example: "“La curiosidad enciende las mejores preguntas en clase.”"
  },
  {
    targetWord: "thấu cảm",
    targetLang: "Tiếng Việt",
    phonetic: "/təw kam/",
    englishWord: "empathy",
    definition: "The ability to understand and share the feelings of another.",
    example: "“Lắng nghe bằng cả trái tim để thấu cảm người khác.”"
  },
  {
    targetWord: "colaborar",
    targetLang: "Español",
    phonetic: "/ko.la.βoˈɾaɾ/",
    englishWord: "to collaborate",
    definition: "To work together with one or more people to produce or create something.",
    example: "“Juntos resolvemos problemas más grandes y mejores.”"
  },
  {
    targetWord: "kiên trì",
    targetLang: "Tiếng Việt",
    phonetic: "/kjen tʃi/",
    englishWord: "perseverance",
    definition: "Persistence in doing something despite difficulty or delay in achieving success.",
    example: "“Kiên trì qua từng bước nhỏ để đạt được mục tiêu lớn.”"
  },
  {
    targetWord: "crecer",
    targetLang: "Español",
    phonetic: "/kɾeˈseɾ/",
    englishWord: "to grow",
    definition: "To develop, flourish, and mature intellectually and emotionally.",
    example: "“Cada error es una oportunidad para crecer.”"
  }
];

let currentVocabIndex = 0;
let isFlipped = false;

function initVocabFlip() {
  const card = document.getElementById('vocab-card');
  const nextBtn = document.getElementById('vocab-next-btn');
  if (!card || !nextBtn) return;

  function updateCard() {
    const item = vocabList[currentVocabIndex];
    if (isFlipped) {
      card.classList.add('flipped');
      card.setAttribute('aria-label', `Card flipped. Showing English definition for ${item.targetWord}`);
      card.innerHTML = `
        <span class="flash-card-word" style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); color: var(--teal);">${item.englishWord}</span>
        <span class="flash-card-lang">English · Meaning</span>
        <p style="font-size: 0.82rem; margin: 0.5rem 0 0; text-align: center; opacity: 0.85;">${item.definition}</p>
        <small class="flash-card-hint" style="color: var(--coral);"><em>${item.example}</em></small>
        <small class="flash-card-hint">Tap to flip back</small>
      `;
    } else {
      card.classList.remove('flipped');
      card.setAttribute('aria-label', `Flip card. Currently showing ${item.targetLang}`);
      card.innerHTML = `
        <span class="flash-card-word">${item.targetWord}</span>
        <span class="flash-card-lang">${item.targetLang}</span>
        <span class="flash-card-phonetic">${item.phonetic}</span>
        <small class="flash-card-hint">Tap to reveal meaning ↻</small>
      `;
    }
  }

  card.addEventListener('click', () => {
    isFlipped = !isFlipped;
    updateCard();
  });

  nextBtn.addEventListener('click', () => {
    currentVocabIndex = (currentVocabIndex + 1) % vocabList.length;
    isFlipped = false;
    updateCard();
  });

  // Initial draw
  updateCard();
}

/* ==========================================================================
   5. FIVE-STEP FOCUS (Interactive Study Routine)
   ========================================================================== */
function initFiveStepFocus() {
  const list = document.querySelector('.focus-list');
  const progressSpan = document.querySelector('.focus-progress span');
  const progressBar = document.querySelector('.focus-progress');
  const resetBtn = document.getElementById('focus-reset');

  if (!list || !progressSpan || !progressBar) return;

  const buttons = list.querySelectorAll('button');

  function updateProgress() {
    const completedCount = list.querySelectorAll('button.done').length;
    const total = buttons.length;
    const percentage = Math.round((completedCount / total) * 100);

    progressSpan.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', completedCount);
    progressBar.setAttribute('aria-label', `${completedCount} of ${total} study steps complete`);

    if (completedCount === total) {
      progressSpan.style.background = 'var(--coral)';
    } else {
      progressSpan.style.background = 'var(--teal)';
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('done');
      updateProgress();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('done'));
      updateProgress();
    });
  }

  // Initial
  updateProgress();
}

/* ==========================================================================
   6. CURIOSITY CARDS (Discussion Prompts)
   ========================================================================== */
const curiosityQuestions = [
  {
    topic: "Inquiry & Wonder",
    question: "“What do you notice first—and why?”"
  },
  {
    topic: "Growth Mindset",
    question: "“If mistakes are clues, what did today’s error just teach you?”"
  },
  {
    topic: "Creative Perspectives",
    question: "“If numbers had personality, which one would be your best friend?”"
  },
  {
    topic: "Community & Empathy",
    question: "“How can we make someone new feel like they belong here in five minutes?”"
  },
  {
    topic: "Critical Thinking",
    question: "“What is something everyone assumes is true, but might not be?”"
  },
  {
    topic: "Storytelling",
    question: "“If this science lesson was a superhero story, who would be the hero?”"
  },
  {
    topic: "Emotional Literacy",
    question: "“What made you feel proud of yourself, even when nobody was watching?”"
  },
  {
    topic: "Bilingual Bridges",
    question: "“What word in your home language has a feeling that English can’t quite capture?”"
  }
];

let currentPromptIndex = 0;

function initCuriosityCards() {
  const quoteEl = document.querySelector('.tool-prompt blockquote');
  const badgeEl = document.getElementById('prompt-badge');
  const nextBtn = document.getElementById('prompt-next-btn');

  if (!quoteEl || !nextBtn) return;

  function showPrompt(index) {
    const item = curiosityQuestions[index];
    quoteEl.style.opacity = '0';
    setTimeout(() => {
      quoteEl.textContent = item.question;
      if (badgeEl) badgeEl.textContent = item.topic;
      quoteEl.style.opacity = '1';
    }, 150);
  }

  nextBtn.addEventListener('click', () => {
    currentPromptIndex = (currentPromptIndex + 1) % curiosityQuestions.length;
    showPrompt(currentPromptIndex);
  });

  // Initial
  showPrompt(0);
}
