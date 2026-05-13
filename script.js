/* =========================================================
   THE CURRICULUM — Site JavaScript
   ========================================================= */

// Course metadata — single source of truth used everywhere
const COURSES = [
  {
    id: '01',
    slug: '01-ai-literacy',
    title: 'AI Literacy & Prompt Engineering',
    titleEm: 'Prompt Engineering',
    titlePlain: 'AI Literacy and',
    ages: '13–19',
    hours: '~10 hours',
    modules: 8,
    blurb: 'What AI actually is and isn\'t. How to write prompts that get real results. How to spot when AI is lying. How to use AI for school without losing your ability to think. How to build small AI tools without code. Digital safety in an AI-saturated world.',
    short: 'The course that turns AI from a thing you use into a tool you wield.'
  },
  {
    id: '02',
    slug: '02-financial-literacy',
    title: 'Financial Literacy & Personal Economics',
    titleEm: 'Personal Economics',
    titlePlain: 'Financial Literacy and',
    ages: '13–19',
    hours: '~12 hours',
    modules: 8,
    blurb: 'What money actually is. How to budget without it feeling like punishment. Why compound interest will quietly make you rich. Investing basics with African examples. How debt traps people. Earning, taxes, inflation, wealth thinking.',
    short: 'The money course nobody taught you, which is exactly the problem.'
  },
  {
    id: '03',
    slug: '03-coding-fundamentals',
    title: 'Coding Fundamentals — Python & JavaScript',
    titleEm: 'Python & JavaScript',
    titlePlain: 'Coding Fundamentals',
    ages: '14–19',
    hours: '~20 hours',
    modules: 8,
    blurb: 'How code actually works. Python from zero to building real scripts. JavaScript from zero to interactive web pages. How to use AI to learn coding without becoming dependent. Git, GitHub, and shipping real projects.',
    short: 'Two languages. Real projects. Shipped.'
  },
  {
    id: '04',
    slug: '04-persuasive-writing',
    title: 'Persuasive Writing & Clear Communication',
    titleEm: 'Clear Communication',
    titlePlain: 'Persuasive Writing and',
    ages: '13–19',
    hours: '~10 hours',
    modules: 8,
    blurb: 'Why most writing fails. How to write clear sentences and tight paragraphs. Persuasion without manipulation. Writing for essays, social media, emails, applications, pitches. Editing as the real skill. Finding your voice.',
    short: 'The skill that quietly pays for itself for the rest of your life.'
  },
  {
    id: '05',
    slug: '05-public-speaking',
    title: 'Public Speaking & Storytelling',
    titleEm: 'Storytelling',
    titlePlain: 'Public Speaking and',
    ages: '13–19',
    hours: '~8 hours',
    modules: 8,
    blurb: 'Handling fear that doesn\'t disappear. Voice, body, presence. Storytelling as the highest-leverage skill in speaking. How to structure talks that land. Presentation craft. Pitching and persuading live.',
    short: 'Stand up. Hold a room. Change something.'
  },
  {
    id: '06',
    slug: '06-digital-entrepreneurship',
    title: 'Digital Entrepreneurship Including Sales',
    titleEm: 'Including Sales',
    titlePlain: 'Digital Entrepreneurship',
    ages: '15–19',
    hours: '~15 hours',
    modules: 8,
    blurb: 'How to spot real opportunities. How to validate before building. How to actually sell — the skill most teens skip and pay for. Pricing and packaging. Marketing for the broke. Capstone: launch and make real sales.',
    short: 'Build something. Sell something. Real money. Real customers.'
  },
  {
    id: '07',
    slug: '07-data-literacy',
    title: 'Data Literacy & Basic Statistics',
    titleEm: 'Basic Statistics',
    titlePlain: 'Data Literacy and',
    ages: '14–19',
    hours: '~10 hours',
    modules: 8,
    blurb: 'How to read any chart like a pro. What averages, medians, and percentages really mean. Probability and why humans are bad at it. How to spot manipulated data. Studies and surveys, what they really show. Spreadsheets for life.',
    short: 'The course that stops you getting fooled by numbers.'
  },
  {
    id: '08',
    slug: '08-second-language',
    title: 'A Strategic Second Language',
    titleEm: 'Second Language',
    titlePlain: 'A Strategic',
    ages: '13–19',
    hours: 'ongoing',
    modules: 8,
    blurb: 'Why bilingual French-English is the highest-ROI skill for African teens. How languages are actually learned. Vocabulary, listening, speaking, reading, writing. Using AI to accelerate. Your year-one language plan.',
    short: 'Two languages. Twenty-nine African countries. Canadian work permits. Doors.'
  },
  {
    id: '09',
    slug: '09-mental-health',
    title: 'Mental Health, Sleep & Attention Hygiene',
    titleEm: 'Attention Hygiene',
    titlePlain: 'Mental Health, Sleep and',
    ages: '13–19',
    hours: '~8 hours',
    modules: 8,
    blurb: 'The most important course in this series. How your teen brain actually works. Sleep as the most underrated performance enhancer. Attention in a world built to steal it. Anxiety, mood, when to ask for help.',
    short: 'The operating system everything else runs on.'
  },
  {
    id: '10',
    slug: '10-critical-thinking',
    title: 'Critical Thinking, Media Literacy & Systems Thinking',
    titleEm: 'Systems Thinking',
    titlePlain: 'Critical Thinking, Media Literacy and',
    ages: '14–19',
    hours: '~12 hours',
    modules: 8,
    blurb: 'The course that ties everything together. Logic and reasoning. The cognitive biases that fool everyone. Media literacy in 2026. Evaluating sources, including AI. Systems thinking. How to disagree well and change your mind.',
    short: 'How to think when everyone around you is being thought-for.'
  }
];

// Make courses accessible globally for the inline scripts on each page
window.COURSES = COURSES;

// =========================================================
// Mobile nav toggle
// =========================================================
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });
}

// =========================================================
// Scroll reveal — elements with .reveal become .visible
// =========================================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -10% 0px'
  });
  
  reveals.forEach((el) => observer.observe(el));
}

// =========================================================
// Build the course list (used on home & courses pages)
// =========================================================
function renderCourseList(targetSelector, opts = {}) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  
  const { skipFirst = 0, limit = COURSES.length } = opts;
  
  const html = COURSES.slice(skipFirst, skipFirst + limit).map((c, i) => `
    <a href="course.html?id=${c.id}" class="course-row reveal reveal-delay-${(i % 4) + 1}">
      <div class="course-row-num">${c.id}</div>
      <div class="course-row-body">
        <h3>${c.title}</h3>
        <p>${c.blurb}</p>
      </div>
      <div class="course-row-meta">
        <span class="course-row-meta-line">Ages ${c.ages}</span>
        <span class="course-row-meta-line">${c.hours}</span>
        <span class="course-row-meta-line">${c.modules} modules</span>
      </div>
    </a>
  `).join('');
  
  target.innerHTML = html;
  initScrollReveal();
}

// =========================================================
// Course page — load and render the markdown
// =========================================================
async function loadCourse() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || '01';
  const course = COURSES.find((c) => c.id === id);
  
  if (!course) {
    document.body.innerHTML = '<div class="container"><h1 style="padding: 4rem 0;">Course not found</h1></div>';
    return;
  }
  
  // Update page title
  document.title = `Course ${course.id}: ${course.title} — The Curriculum`;
  
  // Render the hero
  const heroEl = document.querySelector('.course-hero');
  if (heroEl) {
    heroEl.innerHTML = `
      <div class="course-hero-num">${course.id[0]}<em>${course.id[1]}</em></div>
      <div class="course-hero-content">
        <div class="course-hero-meta">Ages ${course.ages} · ${course.hours} · ${course.modules} modules</div>
        <h1>${course.titlePlain} <em>${course.titleEm}</em></h1>
      </div>
    `;
  }
  
  // Build the breadcrumb
  const crumb = document.querySelector('.course-breadcrumb');
  if (crumb) {
    crumb.innerHTML = `
      <a href="index.html">Home</a>
      <span class="course-breadcrumb-sep">/</span>
      <a href="courses.html">Courses</a>
      <span class="course-breadcrumb-sep">/</span>
      <span>Course ${course.id}</span>
    `;
  }
  
  // Load the MD
  try {
    const response = await fetch(`courses/${course.slug}.md`);
    if (!response.ok) throw new Error('Failed to load course');
    const md = await response.text();
    
    // Render
    const contentEl = document.querySelector('.course-content');
    if (contentEl) {
      contentEl.innerHTML = marked.parse(md);
      
      // Build the TOC from the rendered h2s
      buildTOC(contentEl);
    }
    
    // Render the prev/next nav
    renderCourseNav(course);
    
    // Initialize scroll reveal on any newly added content
    initScrollReveal();
    
  } catch (err) {
    console.error(err);
    document.querySelector('.course-content').innerHTML = `
      <p>Sorry, this course couldn't be loaded. Please try again.</p>
      <p style="margin-top: 1rem; font-family: var(--mono); font-size: 0.85rem; color: var(--muted);">
        Note: If you're viewing this locally by double-clicking the HTML file, your browser may block the markdown fetch. Use a local server (or deploy to Vercel) and it'll work.
      </p>
    `;
  }
}

// Build a table of contents from the rendered h2 elements
function buildTOC(contentEl) {
  const tocEl = document.querySelector('.course-toc-list');
  if (!tocEl) return;
  
  const h2s = contentEl.querySelectorAll('h2');
  const items = [];
  
  h2s.forEach((h2, i) => {
    const text = h2.textContent.trim();
    // Only include actual module sections — must start with "Module N:" or "Module N "
    // Filters out the standalone "Modules" preamble header.
    if (!/^module\s+\d+/i.test(text)) return;
    
    const slug = `module-${i}`;
    h2.id = slug;
    
    // Shorten the display text: "Module 1: What AI Actually Is" → "What AI Actually Is"
    const display = text.replace(/^module\s+\d+\s*[:\-—]\s*/i, '');
    
    items.push(`<li><a href="#${slug}">${display}</a></li>`);
  });
  
  if (items.length > 0) {
    tocEl.innerHTML = items.join('');
    
    // Highlight active section on scroll
    initTOCHighlight();
  } else {
    document.querySelector('.course-toc').style.display = 'none';
  }
}

// Update active TOC item based on scroll position
function initTOCHighlight() {
  const sections = document.querySelectorAll('.course-content h2[id]');
  const tocLinks = document.querySelectorAll('.course-toc-list a');
  
  if (!sections.length || !tocLinks.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tocLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });
  
  sections.forEach((s) => observer.observe(s));
}

// Render the prev/next course navigation at the bottom of each course
function renderCourseNav(currentCourse) {
  const navEl = document.querySelector('.course-nav');
  if (!navEl) return;
  
  const idx = COURSES.findIndex((c) => c.id === currentCourse.id);
  const prev = idx > 0 ? COURSES[idx - 1] : null;
  const next = idx < COURSES.length - 1 ? COURSES[idx + 1] : null;
  
  const prevHTML = prev
    ? `<a href="course.html?id=${prev.id}" class="course-nav-link prev">
         <div class="course-nav-label">← Previous</div>
         <div class="course-nav-title">Course ${prev.id}: ${prev.title}</div>
       </a>`
    : `<div></div>`;
  
  const nextHTML = next
    ? `<a href="course.html?id=${next.id}" class="course-nav-link next">
         <div class="course-nav-label">Next →</div>
         <div class="course-nav-title">Course ${next.id}: ${next.title}</div>
       </a>`
    : `<a href="courses.html" class="course-nav-link next">
         <div class="course-nav-label">All courses</div>
         <div class="course-nav-title">Back to the index</div>
       </a>`;
  
  navEl.innerHTML = prevHTML + nextHTML;
}

// =========================================================
// Init
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  
  // If we're on a course page, load the course
  if (document.body.classList.contains('page-course')) {
    loadCourse();
  }
  
  // If a page has a course-list slot, fill it
  if (document.querySelector('[data-courses="all"]')) {
    renderCourseList('[data-courses="all"]');
  }
  
  if (document.querySelector('[data-courses="rest"]')) {
    // Skip first one (it's featured separately)
    renderCourseList('[data-courses="rest"]', { skipFirst: 1 });
  }
});
