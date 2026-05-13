/* =========================================================
   THE CURRICULUM — Site JavaScript
   ========================================================= */

// =========================================================
// Internationalisation
// =========================================================
const TRANSLATIONS = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.about': 'About',

    // Footer
    'footer.tagline': 'Ten courses for the decade ahead. Written peer-to-peer for teen learners. Free, always.',
    'footer.navigate': 'Navigate',
    'footer.home': 'Home',
    'footer.all-courses': 'All courses',
    'footer.about': 'About',
    'footer.begin': 'Begin',
    'footer.ai': '01 · AI Literacy',
    'footer.money': '02 · Money',
    'footer.mental': '09 · Mental Health',
    'footer.copy': '© 2026 · Built for the next generation',
    'footer.close': 'Knowledge compounds.',

    // index.html
    'home.eyebrow': 'A curriculum for the next decade',
    'home.title': 'Ten courses<br>nobody taught<br>you in <em>school.</em>',
    'home.lede': 'AI literacy. Money. Code. Writing. Speaking. Business. Data. Languages. Mental health. Clear thinking. The skills that matter most between now and 2030 — written peer-to-peer, built for teenagers who actually plan to do something with their lives.',
    'home.meta.courses': 'Deep courses',
    'home.meta.modules': 'Modules',
    'home.meta.exercises': 'Exercises',
    'home.meta.free': 'Free, always',
    'home.band.mark': 'What you\'re holding',
    'home.band.text': 'Not a textbook. Not a YouTube playlist. A <em>real curriculum</em> — built the way someone would teach their own niece, if they actually cared whether she learned.',
    'home.featured.label': 'Start here',
    'home.featured.p1': 'You\'re not going to "learn AI" the way someone learned to type in 1995. Typing was a skill. AI is more like electricity — it\'ll be inside everything you touch, and the question is whether you use it like a power user or get used by it.',
    'home.featured.p2': 'This course makes you the first kind.',
    'home.featured.cta': 'Begin Course 01',
    'home.rest.title': 'The <em>rest</em> of the curriculum',
    'home.rest.meta': 'Courses 02 — 10',

    // courses.html
    'courses.hero.title': 'All ten <em>courses.</em>',
    'courses.hero.lede': 'Take them in order if you\'re starting from scratch. Cherry-pick if you have specific goals. The point is to finish what you start.',
    'courses.paths.title': 'How to <em>read</em> this',
    'courses.paths.meta': 'Four paths through the material',
    'courses.p1.num': 'PATH 01',
    'courses.p1.title': 'The full run',
    'courses.p1.desc': 'Start at Course 01, work through to Course 10. One month per course at a sustainable pace. The intended path.',
    'courses.p2.num': 'PATH 02',
    'courses.p2.title': 'The builder',
    'courses.p2.desc': 'For starting a business or shipping side projects. Code, writing, speaking, sales, mental resilience.',
    'courses.p3.num': 'PATH 03',
    'courses.p3.title': 'The Canadian path',
    'courses.p3.desc': 'For teens eyeing Canadian Francophone Mobility immigration. Writing, speaking, language, mental health.',
    'courses.p4.num': 'PATH 04',
    'courses.p4.title': 'The thinker',
    'courses.p4.desc': 'For sharpening reasoning, sense-making, and the ability to not get fooled in a noisy world.',
    'courses.all.title': 'Every <em>course</em>',
    'courses.all.meta': 'Ten in total',

    // course.html
    'course.toc.label': 'In this course',
    'course.loading': 'Loading course',
    'course.breadcrumb.courses': 'Courses',
    'course.breadcrumb.course': 'Course',
    'course.nav.prev': '← Previous',
    'course.nav.next': 'Next →',
    'course.nav.all': 'All courses',
    'course.nav.back': 'Back to the index',
    'course.meta.ages': 'Ages',
    'course.meta.modules': 'modules',

    // about.html
    'about.eyebrow': 'About',
    'about.title': 'A <em>quiet</em> kind of education.',
    'about.p1': 'Most online learning treats teenagers as an afterthought — a younger version of adults to be condescended toward, drilled with grammar exercises, or sold to with bright cartoon mascots. This curriculum was written differently. Peer-to-peer, in the voice an older sibling might use, with the honesty real learning requires.',
    'about.p2': 'The ten courses cover what\'s most poorly served by traditional school and most needed for the decade between now and 2030. AI literacy. Money. Code. Writing. Speaking. Business. Data. Languages. Mental health. Clear thinking. Each one runs deep enough to actually move the needle — not a glossy overview, but a real curriculum with exercises, capstone projects, and resources for going further.',
    'about.h2.for': 'Who this is <em>for</em>',
    'about.p3': 'African teenagers in particular. The examples come from Lagos, Abidjan, Dakar, Cameroon — not San Francisco. The money examples use naira and CFA. The business examples reference WhatsApp Business and mobile money. The language course argues that bilingual French-English is the highest-leverage skill an African teen can build before twenty.',
    'about.p4': 'That said, anyone can use it. The principles transfer. The exercises work anywhere. If you\'re between thirteen and nineteen and you\'ve ever wondered why no one teaches the things you actually need to know — this is for you.',
    'about.h2.use': 'How to <em>use</em> it',
    'about.p5': 'Pick a course. Block out time for it. Tell someone you trust what you\'re doing so they can ask how it\'s going. Then start. The exercises are not optional — most of the value lives in the doing, not the reading. Skip them and you\'ve watched, not learned.',
    'about.p6': 'You can read them in order or jump around. The full curriculum takes about a year at one course a month. Less if you\'re focused, more if life gets in the way. Either is fine.',
    'about.h2.free': 'Why it\'s <em>free</em>',
    'about.p7': 'Because charging for it would defeat the point. The kids who most need this stuff are usually the ones with the least access to it. If you find it useful, the price is just one thing: actually do the work. The world doesn\'t reward people who know how to learn things. It rewards people who actually learn them.',
    'about.closing': 'Welcome. Now go build something.',
  },

  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.courses': 'Cours',
    'nav.about': 'À propos',

    // Footer
    'footer.tagline': 'Dix cours pour la prochaine décennie. Écrits de pair à pair pour les ados. Gratuit, toujours.',
    'footer.navigate': 'Navigation',
    'footer.home': 'Accueil',
    'footer.all-courses': 'Tous les cours',
    'footer.about': 'À propos',
    'footer.begin': 'Commencer',
    'footer.ai': '01 · Initiation à l\'IA',
    'footer.money': '02 · Argent',
    'footer.mental': '09 · Santé mentale',
    'footer.copy': '© 2026 · Construit pour la prochaine génération',
    'footer.close': 'Le savoir se cumule.',

    // index.html
    'home.eyebrow': 'Un programme pour la prochaine décennie',
    'home.title': 'Dix cours que<br>personne ne vous<br>a enseignés à <em>l\'école.</em>',
    'home.lede': 'Intelligence artificielle. Argent. Code. Écriture. Expression orale. Entrepreneuriat. Données. Langues. Santé mentale. Pensée claire. Les compétences les plus importantes d\'ici 2030 — écrits de pair à pair, pour les ados qui ont vraiment l\'intention de faire quelque chose de leur vie.',
    'home.meta.courses': 'Cours approfondis',
    'home.meta.modules': 'Modules',
    'home.meta.exercises': 'Exercices',
    'home.meta.free': 'Gratuit, toujours',
    'home.band.mark': 'Ce que vous avez entre les mains',
    'home.band.text': 'Pas un manuel scolaire. Pas une playlist YouTube. Un <em>vrai programme</em> — conçu comme quelqu\'un l\'enseignerait à sa propre nièce, si cela lui importait vraiment qu\'elle apprenne.',
    'home.featured.label': 'Commencer ici',
    'home.featured.p1': 'Vous n\'allez pas « apprendre l\'IA » comme on a appris à taper en 1995. Taper était une compétence. L\'IA, c\'est plutôt comme l\'électricité — elle sera dans tout ce que vous touchez, et la question est de savoir si vous l\'utilisez comme un expert ou si c\'est elle qui vous utilise.',
    'home.featured.p2': 'Ce cours fait de vous le premier type.',
    'home.featured.cta': 'Commencer le cours 01',
    'home.rest.title': 'Le <em>reste</em> du programme',
    'home.rest.meta': 'Cours 02 — 10',

    // courses.html
    'courses.hero.title': 'Les dix <em>cours.</em>',
    'courses.hero.lede': 'Suivez-les dans l\'ordre si vous débutez. Choisissez ceux qui correspondent à vos objectifs. L\'essentiel est de finir ce que vous commencez.',
    'courses.paths.title': 'Comment <em>aborder</em> ceci',
    'courses.paths.meta': 'Quatre parcours à travers le contenu',
    'courses.p1.num': 'PARCOURS 01',
    'courses.p1.title': 'La série complète',
    'courses.p1.desc': 'Commencez par le cours 01, suivez jusqu\'au cours 10. Un mois par cours à un rythme soutenable. Le parcours prévu.',
    'courses.p2.num': 'PARCOURS 02',
    'courses.p2.title': 'Le créateur',
    'courses.p2.desc': 'Pour lancer une entreprise ou des projets parallèles. Code, écriture, expression orale, vente, résilience mentale.',
    'courses.p3.num': 'PARCOURS 03',
    'courses.p3.title': 'Le parcours canadien',
    'courses.p3.desc': 'Pour les ados qui visent l\'immigration par la mobilité francophone canadienne. Écriture, expression orale, langue, santé mentale.',
    'courses.p4.num': 'PARCOURS 04',
    'courses.p4.title': 'Le penseur',
    'courses.p4.desc': 'Pour affûter le raisonnement, donner du sens, et ne pas se laisser tromper dans un monde bruyant.',
    'courses.all.title': 'Chaque <em>cours</em>',
    'courses.all.meta': 'Dix au total',

    // course.html
    'course.toc.label': 'Dans ce cours',
    'course.loading': 'Chargement du cours',
    'course.breadcrumb.courses': 'Cours',
    'course.breadcrumb.course': 'Cours',
    'course.nav.prev': '← Précédent',
    'course.nav.next': 'Suivant →',
    'course.nav.all': 'Tous les cours',
    'course.nav.back': 'Retour à l\'index',
    'course.meta.ages': 'Âges',
    'course.meta.modules': 'modules',

    // about.html
    'about.eyebrow': 'À propos',
    'about.title': 'Une éducation <em>discrète</em>.',
    'about.p1': 'La plupart des formations en ligne traitent les adolescents comme une réflexion après coup — une version plus jeune des adultes à qui l\'on parle avec condescendance, que l\'on fait s\'exercer avec des exercices de grammaire, ou à qui l\'on vend des mascottes de dessins animés colorés. Ce programme a été écrit différemment. De pair à pair, avec la voix qu\'un grand frère ou une grande sœur utiliserait, avec l\'honnêteté qu\'exige le vrai apprentissage.',
    'about.p2': 'Les dix cours couvrent ce qui est le plus mal servi par l\'école traditionnelle et le plus nécessaire pour la décennie entre maintenant et 2030. Intelligence artificielle. Argent. Code. Écriture. Expression orale. Entrepreneuriat. Données. Langues. Santé mentale. Pensée claire. Chacun va assez loin pour vraiment faire bouger les choses — pas un aperçu superficiel, mais un vrai programme avec des exercices, des projets de synthèse et des ressources pour aller plus loin.',
    'about.h2.for': 'À qui cela <em>s\'adresse</em>',
    'about.p3': 'Aux adolescents africains en particulier. Les exemples viennent de Lagos, Abidjan, Dakar, du Cameroun — pas de San Francisco. Les exemples financiers utilisent le naira et le franc CFA. Les exemples commerciaux font référence à WhatsApp Business et à l\'argent mobile. Le cours de langue soutient que le bilinguisme français-anglais est la compétence la plus rentable qu\'un adolescent africain puisse développer avant vingt ans.',
    'about.p4': 'Cela dit, tout le monde peut l\'utiliser. Les principes s\'appliquent partout. Les exercices fonctionnent n\'importe où. Si vous avez entre treize et dix-neuf ans et que vous vous êtes déjà demandé pourquoi personne n\'enseigne les choses dont vous avez vraiment besoin — c\'est pour vous.',
    'about.h2.use': 'Comment <em>l\'utiliser</em>',
    'about.p5': 'Choisissez un cours. Réservez du temps pour lui. Dites à quelqu\'un en qui vous avez confiance ce que vous faites, afin qu\'il puisse vous demander comment ça se passe. Puis commencez. Les exercices ne sont pas facultatifs — la plupart de la valeur réside dans le faire, pas dans la lecture. Sautez-les et vous aurez regardé, pas appris.',
    'about.p6': 'Vous pouvez les lire dans l\'ordre ou sauter d\'un cours à l\'autre. Le programme complet prend environ un an à raison d\'un cours par mois. Moins si vous êtes concentré, plus si la vie s\'en mêle. Les deux conviennent.',
    'about.h2.free': 'Pourquoi c\'est <em>gratuit</em>',
    'about.p7': 'Parce que le faire payer irait à l\'encontre du but. Les jeunes qui en ont le plus besoin sont généralement ceux qui y ont le moins accès. Si vous le trouvez utile, le prix est une seule chose : faire vraiment le travail. Le monde ne récompense pas les gens qui savent comment apprendre des choses. Il récompense les gens qui les apprennent vraiment.',
    'about.closing': 'Bienvenue. Maintenant allez construire quelque chose.',
  }
};

// Current language — persisted across pages
let currentLang = 'en';
try { currentLang = localStorage.getItem('lang') || 'en'; } catch (e) { /* storage blocked */ }

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
    || (TRANSLATIONS.en && TRANSLATIONS.en[key])
    || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang === 'en' ? 'FR' : 'EN';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();

  // Re-render JS-generated content
  if (document.body.classList.contains('page-course')) {
    loadCourse();
  }
  if (document.querySelector('[data-courses="all"]')) {
    renderCourseList('[data-courses="all"]');
  }
  if (document.querySelector('[data-courses="rest"]')) {
    renderCourseList('[data-courses="rest"]', { skipFirst: 1 });
  }
}

// =========================================================
// Course metadata — single source of truth used everywhere
// =========================================================
const COURSES = [
  {
    id: '01',
    slug: '01-ai-literacy',
    title: 'AI Literacy & Prompt Engineering',
    titleEm: 'Prompt Engineering',
    titlePlain: 'AI Literacy and',
    titleFr: 'Initiation à l\'IA et ingénierie des prompts',
    titleEmFr: 'ingénierie des prompts',
    titlePlainFr: 'Initiation à l\'IA et',
    ages: '13–19',
    hours: '~10 hours',
    hoursFr: '~10 heures',
    modules: 8,
    blurb: 'What AI actually is and isn\'t. How to write prompts that get real results. How to spot when AI is lying. How to use AI for school without losing your ability to think. How to build small AI tools without code. Digital safety in an AI-saturated world.',
    blurbFr: 'Ce que l\'IA est vraiment et ce qu\'elle n\'est pas. Comment rédiger des prompts qui donnent de vrais résultats. Comment détecter quand l\'IA ment. Comment utiliser l\'IA pour l\'école sans perdre sa capacité à réfléchir. Comment créer de petits outils IA sans code. La sécurité numérique dans un monde saturé d\'IA.',
    short: 'The course that turns AI from a thing you use into a tool you wield.',
    shortFr: 'Le cours qui fait de l\'IA un outil que vous maîtrisez, et non une chose qui vous utilise.'
  },
  {
    id: '02',
    slug: '02-financial-literacy',
    title: 'Financial Literacy & Personal Economics',
    titleEm: 'Personal Economics',
    titlePlain: 'Financial Literacy and',
    titleFr: 'Éducation financière et économie personnelle',
    titleEmFr: 'économie personnelle',
    titlePlainFr: 'Éducation financière et',
    ages: '13–19',
    hours: '~12 hours',
    hoursFr: '~12 heures',
    modules: 8,
    blurb: 'What money actually is. How to budget without it feeling like punishment. Why compound interest will quietly make you rich. Investing basics with African examples. How debt traps people. Earning, taxes, inflation, wealth thinking.',
    blurbFr: 'Ce qu\'est réellement l\'argent. Comment faire un budget sans que ça ressemble à une punition. Pourquoi les intérêts composés vous enrichiront discrètement. Les bases de l\'investissement avec des exemples africains. Comment la dette piège les gens. Revenus, impôts, inflation, mentalité de richesse.',
    short: 'The money course nobody taught you, which is exactly the problem.',
    shortFr: 'Le cours sur l\'argent que personne ne vous a enseigné, ce qui est exactement le problème.'
  },
  {
    id: '03',
    slug: '03-coding-fundamentals',
    title: 'Coding Fundamentals — Python & JavaScript',
    titleEm: 'Python & JavaScript',
    titlePlain: 'Coding Fundamentals',
    titleFr: 'Fondamentaux du code — Python et JavaScript',
    titleEmFr: 'Python et JavaScript',
    titlePlainFr: 'Fondamentaux du code —',
    ages: '14–19',
    hours: '~20 hours',
    hoursFr: '~20 heures',
    modules: 8,
    blurb: 'How code actually works. Python from zero to building real scripts. JavaScript from zero to interactive web pages. How to use AI to learn coding without becoming dependent. Git, GitHub, and shipping real projects.',
    blurbFr: 'Comment le code fonctionne vraiment. Python de zéro à la création de vrais scripts. JavaScript de zéro à des pages web interactives. Comment utiliser l\'IA pour apprendre à coder sans en devenir dépendant. Git, GitHub et la livraison de vrais projets.',
    short: 'Two languages. Real projects. Shipped.',
    shortFr: 'Deux langages. De vrais projets. Livrés.'
  },
  {
    id: '04',
    slug: '04-persuasive-writing',
    title: 'Persuasive Writing & Clear Communication',
    titleEm: 'Clear Communication',
    titlePlain: 'Persuasive Writing and',
    titleFr: 'Écriture persuasive et communication claire',
    titleEmFr: 'communication claire',
    titlePlainFr: 'Écriture persuasive et',
    ages: '13–19',
    hours: '~10 hours',
    hoursFr: '~10 heures',
    modules: 8,
    blurb: 'Why most writing fails. How to write clear sentences and tight paragraphs. Persuasion without manipulation. Writing for essays, social media, emails, applications, pitches. Editing as the real skill. Finding your voice.',
    blurbFr: 'Pourquoi la plupart des textes échouent. Comment rédiger des phrases claires et des paragraphes percutants. Persuasion sans manipulation. Écrire pour des dissertations, les réseaux sociaux, des e-mails, des candidatures, des pitchs. La révision comme vraie compétence. Trouver sa voix.',
    short: 'The skill that quietly pays for itself for the rest of your life.',
    shortFr: 'La compétence qui se rentabilise discrètement pour le reste de votre vie.'
  },
  {
    id: '05',
    slug: '05-public-speaking',
    title: 'Public Speaking & Storytelling',
    titleEm: 'Storytelling',
    titlePlain: 'Public Speaking and',
    titleFr: 'Prise de parole en public et narration',
    titleEmFr: 'narration',
    titlePlainFr: 'Prise de parole en public et',
    ages: '13–19',
    hours: '~8 hours',
    hoursFr: '~8 heures',
    modules: 8,
    blurb: 'Handling fear that doesn\'t disappear. Voice, body, presence. Storytelling as the highest-leverage skill in speaking. How to structure talks that land. Presentation craft. Pitching and persuading live.',
    blurbFr: 'Gérer la peur qui ne disparaît pas. Voix, corps, présence. La narration comme compétence à plus fort levier dans la prise de parole. Comment structurer des discours qui marquent. L\'art de la présentation. Pitcher et convaincre en direct.',
    short: 'Stand up. Hold a room. Change something.',
    shortFr: 'Se lever. Tenir une salle. Changer quelque chose.'
  },
  {
    id: '06',
    slug: '06-digital-entrepreneurship',
    title: 'Digital Entrepreneurship Including Sales',
    titleEm: 'Including Sales',
    titlePlain: 'Digital Entrepreneurship',
    titleFr: 'Entrepreneuriat numérique et techniques de vente',
    titleEmFr: 'techniques de vente',
    titlePlainFr: 'Entrepreneuriat numérique et',
    ages: '15–19',
    hours: '~15 hours',
    hoursFr: '~15 heures',
    modules: 8,
    blurb: 'How to spot real opportunities. How to validate before building. How to actually sell — the skill most teens skip and pay for. Pricing and packaging. Marketing for the broke. Capstone: launch and make real sales.',
    blurbFr: 'Comment repérer de vraies opportunités. Comment valider avant de construire. Comment vraiment vendre — la compétence que la plupart des ados esquivent et dont ils paient le prix. Tarification et packaging. Marketing sans budget. Projet final : lancer et réaliser de vraies ventes.',
    short: 'Build something. Sell something. Real money. Real customers.',
    shortFr: 'Construire quelque chose. Vendre quelque chose. Vrai argent. Vrais clients.'
  },
  {
    id: '07',
    slug: '07-data-literacy',
    title: 'Data Literacy & Basic Statistics',
    titleEm: 'Basic Statistics',
    titlePlain: 'Data Literacy and',
    titleFr: 'Maîtrise des données et statistiques de base',
    titleEmFr: 'statistiques de base',
    titlePlainFr: 'Maîtrise des données et',
    ages: '14–19',
    hours: '~10 hours',
    hoursFr: '~10 heures',
    modules: 8,
    blurb: 'How to read any chart like a pro. What averages, medians, and percentages really mean. Probability and why humans are bad at it. How to spot manipulated data. Studies and surveys, what they really show. Spreadsheets for life.',
    blurbFr: 'Comment lire n\'importe quel graphique comme un pro. Ce que signifient vraiment les moyennes, médianes et pourcentages. Les probabilités et pourquoi les humains y sont mauvais. Comment repérer les données manipulées. Les études et sondages, ce qu\'ils montrent vraiment. Les tableurs pour la vie.',
    short: 'The course that stops you getting fooled by numbers.',
    shortFr: 'Le cours qui vous empêche de vous faire avoir par les chiffres.'
  },
  {
    id: '08',
    slug: '08-second-language',
    title: 'A Strategic Second Language',
    titleEm: 'Second Language',
    titlePlain: 'A Strategic',
    titleFr: 'Une deuxième langue stratégique',
    titleEmFr: 'langue stratégique',
    titlePlainFr: 'Une deuxième',
    ages: '13–19',
    hours: 'ongoing',
    hoursFr: 'continu',
    modules: 8,
    blurb: 'Why bilingual French-English is the highest-ROI skill for African teens. How languages are actually learned. Vocabulary, listening, speaking, reading, writing. Using AI to accelerate. Your year-one language plan.',
    blurbFr: 'Pourquoi le bilinguisme français-anglais est la compétence au meilleur ROI pour les ados africains. Comment les langues s\'apprennent vraiment. Vocabulaire, écoute, expression orale, lecture, écriture. Utiliser l\'IA pour accélérer. Votre plan linguistique de première année.',
    short: 'Two languages. Twenty-nine African countries. Canadian work permits. Doors.',
    shortFr: 'Deux langues. Vingt-neuf pays africains. Permis de travail canadiens. Des portes qui s\'ouvrent.'
  },
  {
    id: '09',
    slug: '09-mental-health',
    title: 'Mental Health, Sleep & Attention Hygiene',
    titleEm: 'Attention Hygiene',
    titlePlain: 'Mental Health, Sleep and',
    titleFr: 'Santé mentale, sommeil et hygiène de l\'attention',
    titleEmFr: 'hygiène de l\'attention',
    titlePlainFr: 'Santé mentale, sommeil et',
    ages: '13–19',
    hours: '~8 hours',
    hoursFr: '~8 heures',
    modules: 8,
    blurb: 'The most important course in this series. How your teen brain actually works. Sleep as the most underrated performance enhancer. Attention in a world built to steal it. Anxiety, mood, when to ask for help.',
    blurbFr: 'Le cours le plus important de cette série. Comment fonctionne vraiment le cerveau adolescent. Le sommeil comme amplificateur de performance le plus sous-estimé. L\'attention dans un monde conçu pour la voler. L\'anxiété, l\'humeur, quand demander de l\'aide.',
    short: 'The operating system everything else runs on.',
    shortFr: 'Le système d\'exploitation sur lequel tout le reste fonctionne.'
  },
  {
    id: '10',
    slug: '10-critical-thinking',
    title: 'Critical Thinking, Media Literacy & Systems Thinking',
    titleEm: 'Systems Thinking',
    titlePlain: 'Critical Thinking, Media Literacy and',
    titleFr: 'Pensée critique, éducation aux médias et pensée systémique',
    titleEmFr: 'pensée systémique',
    titlePlainFr: 'Pensée critique, éducation aux médias et',
    ages: '14–19',
    hours: '~12 hours',
    hoursFr: '~12 heures',
    modules: 8,
    blurb: 'The course that ties everything together. Logic and reasoning. The cognitive biases that fool everyone. Media literacy in 2026. Evaluating sources, including AI. Systems thinking. How to disagree well and change your mind.',
    blurbFr: 'Le cours qui lie tout ensemble. Logique et raisonnement. Les biais cognitifs qui trompent tout le monde. L\'éducation aux médias en 2026. Évaluer les sources, y compris l\'IA. La pensée systémique. Comment être en désaccord correctement et changer d\'avis.',
    short: 'How to think when everyone around you is being thought-for.',
    shortFr: 'Comment penser quand tout le monde autour de vous est pensé à sa place.'
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

function initLangToggle() {
  const langBtn = document.getElementById('lang-toggle');
  if (!langBtn) return;
  langBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'fr' : 'en');
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
  const isFr = currentLang === 'fr';

  const html = COURSES.slice(skipFirst, skipFirst + limit).map((c, i) => {
    const title = isFr ? (c.titleFr || c.title) : c.title;
    const blurb = isFr ? (c.blurbFr || c.blurb) : c.blurb;
    const agesLabel = t('course.meta.ages');
    const modulesLabel = t('course.meta.modules');
    const hours = isFr ? (c.hoursFr || c.hours) : c.hours;

    return `
    <a href="course.html?id=${c.id}" class="course-row reveal reveal-delay-${(i % 4) + 1}">
      <div class="course-row-num">${c.id}</div>
      <div class="course-row-body">
        <h3>${title}</h3>
        <p>${blurb}</p>
      </div>
      <div class="course-row-meta">
        <span class="course-row-meta-line">${agesLabel} ${c.ages}</span>
        <span class="course-row-meta-line">${hours}</span>
        <span class="course-row-meta-line">${c.modules} ${modulesLabel}</span>
      </div>
    </a>
  `;
  }).join('');

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
  const isFr = currentLang === 'fr';

  if (!course) {
    document.body.innerHTML = '<div class="container"><h1 style="padding: 4rem 0;">Course not found</h1></div>';
    return;
  }

  // Update page title
  const title = isFr ? (course.titleFr || course.title) : course.title;
  document.title = `${isFr ? 'Cours' : 'Course'} ${course.id}: ${title} — The Curriculum`;

  // Render the hero
  const heroEl = document.querySelector('.course-hero');
  if (heroEl) {
    const titlePlain = isFr ? (course.titlePlainFr || course.titlePlain) : course.titlePlain;
    const titleEm = isFr ? (course.titleEmFr || course.titleEm) : course.titleEm;
    const agesLabel = t('course.meta.ages');
    const modulesLabel = t('course.meta.modules');
    const hours = isFr ? (course.hoursFr || course.hours) : course.hours;

    heroEl.innerHTML = `
      <div class="course-hero-num">${course.id[0]}<em>${course.id[1]}</em></div>
      <div class="course-hero-content">
        <div class="course-hero-meta">${agesLabel} ${course.ages} · ${hours} · ${course.modules} ${modulesLabel}</div>
        <h1>${titlePlain} <em>${titleEm}</em></h1>
      </div>
    `;
  }

  // Build the breadcrumb
  const crumb = document.querySelector('.course-breadcrumb');
  if (crumb) {
    crumb.innerHTML = `
      <a href="index.html">${t('nav.home')}</a>
      <span class="course-breadcrumb-sep">/</span>
      <a href="courses.html">${t('course.breadcrumb.courses')}</a>
      <span class="course-breadcrumb-sep">/</span>
      <span>${t('course.breadcrumb.course')} ${course.id}</span>
    `;
  }

  // Load the MD — try the language-specific file, fall back to English
  try {
    let md;
    if (currentLang === 'fr') {
      const frRes = await fetch(`courses/${course.slug}.fr.md`);
      if (frRes.ok) {
        md = await frRes.text();
      } else {
        const enRes = await fetch(`courses/${course.slug}.md`);
        if (!enRes.ok) throw new Error('Failed to load course');
        md = await enRes.text();
      }
    } else {
      const enRes = await fetch(`courses/${course.slug}.md`);
      if (!enRes.ok) throw new Error('Failed to load course');
      md = await enRes.text();
    }

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
  const isFr = currentLang === 'fr';

  const prevTitle = (c) => isFr ? (c.titleFr || c.title) : c.title;
  const courseLabel = isFr ? 'Cours' : 'Course';

  const prevHTML = prev
    ? `<a href="course.html?id=${prev.id}" class="course-nav-link prev">
         <div class="course-nav-label">${t('course.nav.prev')}</div>
         <div class="course-nav-title">${courseLabel} ${prev.id}: ${prevTitle(prev)}</div>
       </a>`
    : `<div></div>`;

  const nextHTML = next
    ? `<a href="course.html?id=${next.id}" class="course-nav-link next">
         <div class="course-nav-label">${t('course.nav.next')}</div>
         <div class="course-nav-title">${courseLabel} ${next.id}: ${prevTitle(next)}</div>
       </a>`
    : `<a href="courses.html" class="course-nav-link next">
         <div class="course-nav-label">${t('course.nav.all')}</div>
         <div class="course-nav-title">${t('course.nav.back')}</div>
       </a>`;

  navEl.innerHTML = prevHTML + nextHTML;
}

// =========================================================
// Init
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLangToggle();
  applyTranslations();
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
