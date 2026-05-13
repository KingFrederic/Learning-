# Course 1: AI Literacy & Prompt Engineering

**For learners 13–19 · Self-paced · ~10 hours**

You're not going to "learn AI" the way someone learned to type in 1995. Typing was a skill. AI is more like electricity — it'll be inside everything you touch, and the question is whether you use it like a power user or get used by it. This course makes you the first kind.

By the end you'll be able to write prompts that actually get what you want, spot when an AI is making things up, build small AI-powered tools, and keep yourself safe online.

---

## What you'll learn

- How large language models actually work (no math, promise)
- How to write prompts that get you 10x better results
- How to spot AI hallucinations and bias
- How to use AI for school, side hustles, and personal projects without becoming dependent
- Digital safety in an AI-saturated world

## Modules

1. What AI actually is (and isn't)
2. The anatomy of a great prompt
3. Advanced prompting: roles, examples, chains
4. Hallucinations, bias, and when not to trust AI
5. Using AI for school without cheating yourself
6. Building tiny AI tools (no code required)
7. Digital safety and AI privacy
8. Capstone project

---

## Module 1: What AI Actually Is (And Isn't)

### Lesson 1.1 — The honest explanation

Most people think AI is some kind of digital brain. It's not. ChatGPT, Claude, Gemini — these are called **Large Language Models (LLMs)**, and here's what they actually do: they predict the next word. That's it. That's the whole trick.

Imagine you read every book, every Wikipedia article, every Reddit thread, every blog post ever written. Then someone shows you the sentence "The capital of France is..." and asks you to guess the next word. You'd say "Paris" without thinking. That's what an LLM does, just with way more text and way more sophisticated pattern-matching.

So when ChatGPT writes you a poem, it's not feeling poetic. It's calculating, word by word, what the most likely next word would be given everything that came before. It looks like thinking. It feels like thinking. But underneath, it's autocomplete on steroids.

**Why this matters:** Once you understand this, you understand why AI sometimes gets things wildly wrong. It doesn't "know" anything. It just guesses what sounds right. Sometimes that guess is brilliant. Sometimes it's confidently, completely fake.

### Lesson 1.2 — The three things AI is genuinely great at

Forget the hype. Here's what AI is actually good for, today, right now:

**1. Restructuring information you give it.** Summarize this article. Turn these bullet points into an essay. Translate this paragraph. Rewrite this in a different tone. This is where AI is closest to magic.

**2. Brainstorming and exploration.** Give me 20 ideas for a YouTube channel. What are the counterarguments to this position? What questions am I not asking? AI is a great thinking partner because it doesn't get tired.

**3. Pattern-based generation.** Write me a function that does X. Draft an email asking my teacher for an extension. Make a study schedule. Anything that follows a recognizable pattern, AI can do fast.

### Lesson 1.3 — The three things AI is genuinely bad at

**1. Knowing what's true.** AI has no fact-checking sense. It can tell you the population of Lagos with total confidence and be off by 5 million.

**2. Math beyond simple stuff.** LLMs are language models, not calculators. They'll mess up calculations and present the wrong answer with full confidence. Always verify with an actual calculator.

**3. Recent events.** Most AI models have a "knowledge cutoff" — a date after which they don't know what happened. Ask about something from last week and they'll either say they don't know or make something up.

### Exercise 1.1

Open ChatGPT or Claude (both have free tiers). Ask these three questions and rate the answers 1–10 for accuracy:

1. "What's the population of my city right now?"
2. "What's 847 × 2,394?"
3. "Summarize the main idea of this paragraph: [paste any paragraph from a book you have]."

You'll likely find #3 was excellent, #1 was wrong or evasive, and #2 might be wrong. That gap tells you exactly when to trust AI and when to verify.

### Exercise 1.2 — Reflection

Write 3 sentences answering: "Where in my school week could I save 30+ minutes by using AI well, without it doing my thinking for me?"

---

## Module 2: The Anatomy of a Great Prompt

### Lesson 2.1 — Why most people's prompts suck

Most people type one sentence into ChatGPT and wonder why the output is generic. That's like walking into a tailor and saying "make me clothes" and being shocked when you get an oversized grey t-shirt.

A great prompt has four parts. You don't always need all four, but the more you include, the better the output:

1. **Role** — who the AI should be
2. **Task** — what you want done
3. **Context** — background it needs to know
4. **Format** — how you want the answer shaped

### Lesson 2.2 — The CRAFT framework

Use this every time:

- **C**ontext — what's the situation?
- **R**ole — who is the AI?
- **A**ction — what should it do?
- **F**ormat — how should the answer look?
- **T**arget audience — who is this for?

**Bad prompt:**
> Write me an essay about climate change.

**CRAFT prompt:**
> I'm a 15-year-old in Lagos writing for my school's environmental club blog (Context). Act as a science teacher who explains things using local examples (Role). Write a 500-word blog post on how climate change is affecting Nigerian coastal cities (Action). Use H2 headings, short paragraphs, and end with 3 things students can do (Format). Audience: Nigerian secondary school students who care about the planet but don't have a science background (Target).

The second prompt will get you something usable. The first will get you Wikipedia.

### Lesson 2.3 — Specificity is everything

The single biggest upgrade you can make to your prompts: get more specific.

**Vague:** "Help me with my CV."
**Specific:** "Review this CV for a McDonald's part-time job application. I'm 16, never had a paid job, but I've tutored my cousin and run a small WhatsApp resale business. Suggest 3 changes to make me look hireable without lying."

**Vague:** "Explain photosynthesis."
**Specific:** "Explain photosynthesis to me like I'm 13, using the analogy of a kitchen recipe. Limit to 200 words."

### Exercise 2.1 — The before/after test

Take your last 5 prompts to any AI (look in your history). Rewrite each one using the CRAFT framework. Run both versions and compare outputs. Notice the difference.

### Exercise 2.2 — Prompt golf

"Prompt golf" is where you try to get the *best* output with the *clearest* prompt. Pick this task:

> Get the AI to write a 100-word birthday message for your best friend that sounds like you wrote it.

Write 3 versions of the prompt. Each one should be better than the last. After version 3, the message should sound like something you'd actually send.

---

## Module 3: Advanced Prompting

### Lesson 3.1 — Role prompting

This is the cheat code. When you tell an AI to *be* someone, its outputs change dramatically.

> Act as a strict English teacher who has been grading essays for 30 years. Critique this paragraph harshly.

versus

> Act as a supportive writing coach who builds confidence. Give feedback on this paragraph.

Same paragraph, completely different feedback. Use roles to summon the kind of help you actually need.

**Useful roles to try:**
- "Act as a Socratic tutor who only asks me questions to help me figure it out."
- "Act as a skeptical journalist who interrogates every claim."
- "Act as a 7-year-old asking 'but why?' to everything I explain."
- "Act as a Nigerian business mentor who's run small businesses in Lagos for 20 years."

### Lesson 3.2 — Few-shot prompting (show, don't tell)

If you want a specific style or format, give the AI examples. This is called **few-shot prompting**.

> Rewrite these school subjects in a funny way. Examples:
> 
> Mathematics → "professional number wrangling"
> History → "gossip about dead people"
> 
> Now do these: Biology, Geography, Physics, Chemistry, Literature.

You just taught the AI your style in 5 seconds. It will follow that pattern way better than any description you could write.

### Lesson 3.3 — Chain-of-thought prompting

For complex problems, ask the AI to *think step by step* before answering. This single phrase often improves accuracy massively, especially for math, logic, and reasoning.

**Without chain-of-thought:**
> If I save ₦500 per week from age 14, and earn 10% interest yearly, how much will I have at 18?

**With chain-of-thought:**
> If I save ₦500 per week from age 14, and earn 10% interest yearly, how much will I have at 18? Think step by step, show your work, then give the final answer.

The second prompt forces the AI to slow down and reason. You'll catch its mistakes more easily, and the answers will usually be more accurate.

### Lesson 3.4 — Iterative prompting

Don't try to get the perfect output in one shot. Treat AI like a collaborator. First draft, then refine.

**Round 1:** "Write a 200-word Instagram bio for my poetry account."
**Round 2:** "Good, but too formal. Make it sound like a teenager wrote it."
**Round 3:** "Better. Now add a quote from one of my poems: 'silence is the loudest scream.'"
**Round 4:** "Perfect. Now give me 3 variations with different vibes."

Each round, you sharpen the output. That's how pros use AI.

### Exercise 3.1 — Build your prompt library

Open a Notes app or Google Doc. Create a file called "My Prompt Library." Add these categories, then fill in 2 prompts under each:

- Studying / Homework Help
- Writing Better
- Brainstorming
- Coding (we'll cover this in Course 3)
- Personal Projects

By the end of this course you should have 20+ saved prompts you can reuse.

### Exercise 3.2 — The teacher trick

Pick a topic from school you don't fully understand. Use this exact prompt:

> Act as a tutor. I'm going to try to explain [topic] to you. Listen, then point out everything I got wrong or missed. Don't be nice — be accurate.

Then explain the topic. The AI's corrections will show you exactly where your understanding has holes. This is one of the best ways to study using AI.

---

## Module 4: Hallucinations, Bias, and When Not to Trust AI

### Lesson 4.1 — What a hallucination looks like

A **hallucination** is when AI generates information that sounds completely real but is totally made up. Not a small mistake. A full fabrication, delivered with confidence.

Real examples that have happened:

- A lawyer used ChatGPT to find court cases for a legal brief. The AI invented 6 cases that don't exist. The lawyer got sanctioned.
- A student asked for a book recommendation on Nigerian history. The AI suggested 3 books with fake authors, fake titles, and fake publishers.
- A user asked for the lyrics to an obscure song. The AI invented entire verses that never existed.

The terrifying part: hallucinations look exactly like correct answers. The AI never says "I'm not sure." It just confidently lies.

### Lesson 4.2 — How to spot hallucinations

**Red flags:**

1. **Specific names, dates, statistics, or URLs.** These are where AI fakes hardest. If it cites a study, search for that study. Half the time it doesn't exist.

2. **Anything obscure or niche.** AI is most likely to hallucinate when there isn't much training data on a topic. Ask about Beyoncé and it's probably right. Ask about a small town in Cameroon and it might invent everything.

3. **Recent events.** If it happened after the model's cutoff date, the AI is guessing or making it up.

4. **Quotes from real people.** AI invents quotes constantly. Always verify before using them.

### Lesson 4.3 — Defensive prompting

You can reduce hallucinations by adding these phrases to your prompts:

- "If you don't know, say 'I don't know.' Don't make anything up."
- "Only cite sources you're 100% certain exist."
- "Rate your confidence in this answer from 1–10."
- "Tell me what assumptions you're making."

These don't eliminate hallucinations, but they help a lot.

### Lesson 4.4 — AI bias

AI is trained on internet text. The internet has biases. Therefore AI has biases. Some you'll see:

- **Western/American defaults.** Ask about "good food" and you'll get pizza and burgers, not jollof or thieboudienne.
- **English-language bias.** AI usually performs worse in French, Yoruba, Wolof, etc., even when it "speaks" them.
- **Stereotypes baked in.** Ask for "a picture of a doctor" and AI image tools historically default to white men.
- **Historical bias.** Ask AI to write about African history and it may default to colonial-era framing.

**How to fight this:** Be explicit. "Give me examples specifically from West African business culture." "Avoid Western defaults." "Use African names." Specificity overrides defaults.

### Exercise 4.1 — Hallucination hunt

Ask any AI: "List 5 famous Nigerian poets and their most well-known book." Then go to Google and verify every single name, book title, and detail. Document what was real and what was invented.

This exercise will permanently change how much you trust AI outputs.

### Exercise 4.2 — Bias test

Ask an AI image generator (free options: Bing Image Creator, Leonardo.ai) to generate:

- "A successful entrepreneur"
- "A nurse"
- "A criminal"
- "A wedding"

Look at what defaults it picks. What's missing? Who's not represented? Now try again with specific prompts like "A successful Yoruba entrepreneur in their 30s." Compare the results.

---

## Module 5: Using AI for School Without Cheating Yourself

### Lesson 5.1 — The line between help and harm

Here's the brutal truth: if AI does your homework for you, you don't learn. You'll feel smart in the moment and stupid on test day. The students who'll dominate in 2026 aren't the ones using AI most — they're the ones using AI *best*.

The test is simple: **Did the AI replace your thinking, or sharpen it?**

**Cheating yourself:** "Write me a 500-word essay on Things Fall Apart."

**Sharpening your thinking:**
- "I want to write an essay on Things Fall Apart. Ask me 10 questions that'll help me figure out my argument."
- "Here's my essay draft. Don't rewrite it. Tell me where my argument is weakest."
- "I think Okonkwo's downfall was caused by his fear of being like his father. Push back on this. What's the counter-argument?"

The second approach makes you better. The first makes you dependent.

### Lesson 5.2 — The five legit uses of AI for school

1. **Explanation on demand.** "Explain this chemistry concept like I'm 12." Repeat until you actually get it.

2. **Study partner.** "Quiz me on the French Revolution. Ask me questions, then tell me what I got wrong."

3. **Outline generator.** "Help me outline a 3-page essay on X. Don't write it, just suggest a structure."

4. **Feedback machine.** "Here's my draft. Find 3 weaknesses. Don't fix them — just point them out."

5. **Practice problem creator.** "Generate 10 practice problems on quadratic equations, with answers separate so I can check after."

### Lesson 5.3 — How to not get caught (and why this is the wrong question)

Schools are buying AI-detection tools. Some work. Most don't. Either way, this is the wrong thing to optimize for.

Real talk: when you're 25 and applying for jobs, nobody's checking if your CV was AI-written. They'll check if you can actually do the work. Cheating in school hurts the version of you who needs to perform later.

Use AI to **understand more, faster.** Not to **produce more, dumber.**

### Exercise 5.1 — The Socratic tutor

Pick a subject you're struggling with this term. Use this prompt:

> Act as a Socratic tutor. I'm studying [topic]. Don't explain anything to me directly. Instead, ask me questions that lead me to understand it myself. Start with the most basic question and work up.

Spend 20 minutes with this. Notice how different it feels from being lectured at.

### Exercise 5.2 — Build your study system

Design an AI-assisted study routine for one subject. Include:

1. How you'll use AI to learn new material
2. How you'll use AI to practice
3. How you'll use AI to check your understanding
4. What you'll deliberately do WITHOUT AI to make sure you're actually learning

Write this out and stick to it for one week.

---

## Module 6: Building Tiny AI Tools (No Code Required)

### Lesson 6.1 — Custom GPTs and Claude Projects

You don't need to be a programmer to build AI tools. Both ChatGPT and Claude let you create custom AI assistants with specific instructions. These are called **Custom GPTs** (ChatGPT) or **Projects** (Claude).

Imagine: instead of writing the same long prompt every time, you build a custom assistant once. Then you just chat with it like a regular conversation, and it already knows what to do.

### Lesson 6.2 — Build your first custom assistant

Let's build a **Homework Coach** that helps you think through problems instead of giving answers.

If you're using ChatGPT (free tier may not include custom GPTs — try Claude Projects on free Claude.ai):

1. Go to claude.ai and create a new Project
2. In the instructions, paste this:

```
You are my Homework Coach. Your job is to help me learn, not give me answers.

Rules:
- Never give me direct answers to homework questions
- Always ask me what I've already tried
- Break problems into smaller questions I can answer myself
- When I get stuck, give me a hint, not the answer
- Celebrate when I figure things out on my own
- If I ask you to just give me the answer, refuse politely and ask me what's blocking me

Tone: friendly, patient, slightly playful. Like a smart older cousin.
```

3. Save it. Now whenever you open this Project, the AI already knows its role.

### Lesson 6.3 — Five tiny tools to build this week

1. **Vocabulary Builder** — give it 5 new words a day, ask it to quiz you weekly
2. **Idea Generator** — for a YouTube channel, blog, business, or art project
3. **Code Explainer** — paste any code, get a teen-friendly explanation
4. **CV Helper** — knows your background, helps you tailor for each application
5. **Bilingual Practice Partner** — for practicing French or English conversation

### Lesson 6.4 — Connecting AI to real apps

Beyond chat, AI can plug into Gmail, Calendar, Google Docs, WhatsApp Business, even your phone. Tools like Zapier and Make let you build automations like:

- "Every Monday, summarize my upcoming week from my Calendar and email it to me"
- "When I receive a WhatsApp message in French, translate it and send back to me in English"
- "Take any YouTube video I bookmark, summarize it, and add it to my Notion"

You're not expected to build these tomorrow. Just know they exist, and that you'll be the kind of person who builds them when you need them.

### Exercise 6.1 — Build and use

Build one of the five tools above. Use it every day for a week. At the end of the week, refine its instructions based on what worked and what didn't.

### Exercise 6.2 — The dream tool

Write a paragraph describing the AI tool you wish existed for your life. Don't worry about whether it's possible. Then ask ChatGPT or Claude: "Can I build something like this with current tools? If yes, walk me through how."

---

## Module 7: Digital Safety and AI Privacy

### Lesson 7.1 — What never to put into an AI

Treat every AI chat like a postcard, not a sealed letter. Assume someone might read it.

**Never paste into AI:**

- Your full name + home address + school name in one prompt
- Passwords (ever, anywhere, for any reason)
- Credit card or banking details
- Sensitive photos of yourself or others
- Real medical records with your name attached
- Anything you'd be devastated to see screenshotted

Companies say they don't train on your chats. Sometimes that's true, sometimes it isn't, sometimes it changes. Assume the worst-case and you'll be fine.

### Lesson 7.2 — Deepfakes and verification

AI can now generate fake voices that sound like real people. Fake videos of real people doing things they never did. Fake screenshots of conversations that never happened.

This means:

- If you get a WhatsApp call from a "family member" asking for money urgently, hang up and call them back on a number you know.
- Don't trust voice notes alone — they can be faked. Same for video.
- Set up a family password — a word only your real family knows. If someone calls in an emergency, they should know it.

### Lesson 7.3 — Phishing in the AI age

Scam emails used to be easy to spot — bad grammar, obvious fakes. AI killed that. Now scam emails read perfectly. Some impersonate teachers, banks, even friends.

**New rules:**

1. Never click links in emails. Go directly to the site by typing the URL yourself.
2. Verify weird requests through a different channel. If "your teacher" emails asking for personal info, ask them in person.
3. Use a password manager. Bitwarden is free, Proton Pass is free. Stop reusing passwords.
4. Turn on two-factor authentication (2FA) on every important account.

### Lesson 7.4 — Your digital footprint

Everything you post online — every comment, photo, like — is potentially training data for some future AI. Future AI can also generate fake content with your face and voice if there's enough of you online.

This doesn't mean go offline. It means:

- Lock down your Instagram and TikTok to private when you can
- Be cautious about posting your face in public videos
- Google yourself every 3 months — see what's out there
- Assume anything you post lives forever

### Exercise 7.1 — Security audit

Spend 30 minutes today:

1. Install a password manager (Bitwarden or Proton Pass — both free)
2. Turn on 2FA on Gmail, Instagram, WhatsApp, and TikTok
3. Google yourself and screenshot what comes up
4. Set up a family safe word with your parents/siblings

### Exercise 7.2 — Deepfake detection

Watch this kind of content: search "deepfake examples 2024 2025" on YouTube. Get familiar with what's possible. Knowing what fakes look like is your best defense.

---

## Module 8: Capstone Project

### Your final project: The AI-Powered Side Project

Pick one of these and complete it over 2 weeks. Document your process.

**Option A: The AI Newsletter**
Start a weekly newsletter on a topic you care about. Use AI to research, draft, and edit. Publish at least 4 issues. Track who reads it.

**Option B: The Custom Tutor**
Build a Claude Project or Custom GPT that helps you (or a sibling) study a specific subject. Use it daily for 2 weeks. Refine it based on what works.

**Option C: The AI-Assisted YouTube Short**
Make a 60-second video explaining a topic you care about. Use AI for the script, titles, and thumbnails. Post it. Don't worry about views — the goal is to ship.

**Option D: The Family Helper**
Build an AI assistant that helps an older relative with something they struggle with (translating documents, writing emails, understanding a contract). Set them up to use it.

### Capstone reflection

After your project, answer these in writing:

1. What surprised you about working with AI for 2 weeks straight?
2. Where did you have to fight the urge to let AI do too much?
3. What would you build next if you had time?
4. How will you use AI differently after this course?

---

## Further Learning Resources

### YouTube channels worth subscribing to

- **3Blue1Brown** — search his series "But what is a Neural Network?" for the best visual explanation of how AI works
- **Two Minute Papers** — short, hype-free updates on AI research
- **Computerphile** — UK academics explaining computing and AI concepts clearly
- **AI Explained** — sober coverage of new AI developments
- **Matt Wolfe** — practical AI tools and how to use them
- **AI Foundations** — beginner-friendly AI tutorials

### Specific videos and searches

Search YouTube for these exact phrases:

- "How ChatGPT actually works"
- "Prompt engineering tutorial for beginners"
- "Claude vs ChatGPT comparison"
- "AI hallucinations explained"
- "Build a custom GPT tutorial"
- "Zapier AI automation for beginners"

### Free courses to take next

- Anthropic's "Prompt Engineering Interactive Tutorial" (free, on GitHub)
- Google's "Prompting Essentials" (free, on Google Skillshop)
- DeepLearning.AI "ChatGPT Prompt Engineering for Developers" (free)
- ALX Africa AI programs (specifically built for African learners)

### Tools to actually use

- **Claude.ai** — free tier, great for writing and reasoning
- **ChatGPT** — free tier, the most popular general AI
- **Perplexity.ai** — AI search engine that cites sources
- **NotebookLM** — Google tool that turns documents into study guides and podcasts
- **Bitwarden** — free password manager
- **Bing Image Creator** — free AI image generation

---

## You finished Course 1

You now know more about AI than 95% of adults. Don't let that go to your head — knowing isn't doing. The kids who'll win in 2026 are the ones who use this stuff every single day, build small things, and stay curious when everyone else gets overwhelmed.

Onto Course 2.
