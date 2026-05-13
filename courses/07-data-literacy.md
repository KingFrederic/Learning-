# Course 7: Data Literacy and Basic Statistics

**For learners 14–19 · Self-paced · ~10 hours**

You live in a world where every news story comes with a chart, every Instagram ad uses statistics, every political claim cites a study. The kids who can read this stuff get manipulated less and make better decisions. The kids who can't get played for life.

This isn't a math course. It's a "don't get fooled" course. By the end, you'll be able to look at any chart, study, or statistic and know whether to trust it.

---

## What you'll learn

- How to actually read a chart (most people can't)
- What averages, medians, and percentages really mean
- How to spot manipulated data and bad statistics
- The basics of probability and why humans suck at it
- How studies work (and how they lie)
- How to use spreadsheets to analyze your own life
- How to make charts that don't suck

## Modules

1. Why data literacy is self-defense
2. Reading charts like a pro
3. Averages, medians, percentages
4. Probability and your terrible intuition
5. How to spot bad statistics
6. Studies, surveys, and what they really show
7. Spreadsheets and analyzing your own data
8. Capstone — the personal data project

---

## Module 1: Why Data Literacy Is Self-Defense

### Lesson 1.1 — The problem

Open any news app. You'll find headlines like:

- "New study shows coffee causes cancer"
- "Inflation hits 30% — economy in crisis"
- "Crime up 40% in three years"
- "Young people more anxious than ever, survey reveals"

Most readers see these and either believe them or dismiss them. Both reactions are wrong. The right reaction is: *let me check.*

Data literacy is the ability to question what numbers actually mean. Without it, you're at the mercy of whoever wrote the headline.

### Lesson 1.2 — Three ways numbers lie

Numbers themselves don't lie. People lie with numbers. The three main ways:

1. **Selection bias.** They picked the data that supports their point and ignored the rest.

2. **Misleading visuals.** The chart is technically accurate but designed to mislead.

3. **Wrong context.** The number is real, but missing the comparison you need to interpret it.

A "40% crime increase" sounds terrifying. But 40% increase from what? From 10 crimes to 14? Or 1,000 to 1,400? Without context, you can't tell if it's a tragedy or a rounding error.

### Lesson 1.3 — Your data literacy goal

By the end of this course, you should be able to look at any data claim and ask:

- Where does this number come from?
- What's it being compared to?
- What's missing from this picture?
- Could the data be cherry-picked?
- Is the chart designed to mislead?
- What would change my mind?

That's the whole skill. Build the habit.

### Exercise 1.1 — Headline hunt

Open any news app right now. Find 3 headlines that include numbers or statistics. For each one, write down: what context am I missing to know if this is meaningful?

### Exercise 1.2 — The 24-hour rule

For one week, every time you see a statistic that surprises you on social media, don't react. Don't share. Wait 24 hours and try to verify it. Notice how many turn out to be misleading.

---

## Module 2: Reading Charts Like a Pro

### Lesson 2.1 — The five chart types you'll see most

**Bar chart.** Compares amounts. Each bar = one thing.

**Line chart.** Shows change over time. X-axis = time, Y-axis = value.

**Pie chart.** Shows parts of a whole. Often the worst choice — humans are bad at comparing pie slices.

**Scatter plot.** Each dot = one thing measured on two dimensions. Shows correlations.

**Histogram.** Shows distribution — how many things fall into each value range. Looks like a bar chart but represents different data.

Know these five and you can read 90% of charts you'll encounter.

### Lesson 2.2 — Always check the axes

The most common chart manipulation: messing with the axes.

**Trick 1: Y-axis doesn't start at zero.** A bar chart of 95, 96, 97 will look like massive differences if the axis starts at 94. The same bars on a 0–100 axis look almost identical.

**Trick 2: Truncated time periods.** Showing only the last 6 months when a 5-year view would tell a different story.

**Trick 3: Different scales for different lines.** Two lines with different Y-axes (one on left, one on right) can be made to look connected even if they're unrelated.

**Trick 4: Logarithmic scale labeled as linear.** Logarithmic scales compress huge numbers visually. Not always wrong, but often misleading if not labeled.

Before reading any chart's message, look at the axes. What are they showing? Where do they start? What's the scale?

### Lesson 2.3 — What's NOT on the chart

Charts mislead by omission as often as by manipulation. Ask:

- What time period is shown? What time period is NOT shown?
- Which countries/groups are included? Which are excluded?
- What's the sample size? (A "study" of 12 people means almost nothing.)
- Are absolute numbers given, or just percentages?
- Is per-capita context missing? ("More accidents in Nigeria than Liechtenstein" — well, Nigeria has way more people.)

### Lesson 2.4 — Correlation vs causation

This is the most important concept in all of data literacy.

**Correlation:** Two things happen together. Ice cream sales go up when drowning deaths go up.

**Causation:** One thing causes the other. Ice cream doesn't cause drowning. The hidden variable is summer — more swimming AND more ice cream.

When you see "X is linked to Y," that's correlation. It doesn't mean X causes Y. It might. It might not. Other explanations:

- Y causes X (reverse causation)
- Z causes both X and Y (confounding variable)
- Coincidence (especially in small datasets)

Real example: A study found people who eat breakfast weigh less. Headlines said "eat breakfast to lose weight." But maybe people who weigh less are more likely to eat breakfast because they're already health-conscious. Correlation doesn't tell us which.

### Lesson 2.5 — The base rate

Always ask: "compared to what?"

"90% of crashes happen in cars with good brakes." Sounds like brakes are useless. Until you realize 99% of cars have good brakes. The 90% is actually lower than expected.

"Half of all violent crime is committed by people with X trait." Meaningless without knowing what percentage of the population has X trait.

This is called the **base rate**, and ignoring it is the most common statistical mistake humans make.

### Exercise 2.1 — Chart audit

Find 5 charts in news articles or social media. For each one, ask:
- Does the Y-axis start at zero?
- What time range is shown?
- What's the sample size?
- Is anything obviously missing?

### Exercise 2.2 — Spot the manipulation

Search Google Images for "misleading chart examples." Study at least 10. Notice the techniques. You'll start seeing them everywhere.

### Exercise 2.3 — Correlation collection

Find 3 news headlines that use words like "linked to," "associated with," "correlated with." For each, think of at least one alternative explanation that doesn't involve causation.

---

## Module 3: Averages, Medians, Percentages

### Lesson 3.1 — The three averages

When people say "average," they usually mean one of three things:

**Mean.** Add all numbers, divide by count. The classic "average."

**Median.** The middle number when all are lined up in order.

**Mode.** The most frequent number.

For most data, these three are different. Choosing which to report can completely change the story.

**Example:** A class of 10 students. Nine earn ₦5,000/month from side hustles. One earns ₦500,000/month.

- Mean income: ₦54,500
- Median income: ₦5,000
- Mode income: ₦5,000

"Average income in this class is ₦54,500" is technically true but misleading. Most students earn far less. The median tells the real story better.

### Lesson 3.2 — When mean misleads

Mean gets pulled by extreme values (called **outliers**). For data with big outliers, median is usually more honest.

- Income distributions
- House prices
- Wealth
- Social media followers
- View counts on viral videos

For these, anyone reporting "average" instead of "median" is probably trying to mislead you.

### Lesson 3.3 — Percentages without context

"Crime is up 50%" — from what to what?

- From 4 to 6? That's barely meaningful.
- From 1,000 to 1,500? That's significant.

"50% off!" — off what?

- Original price could be inflated specifically so the sale price looks like a deal
- "Up to 50% off" might mean one item is 50% off and the rest are 5%

Always ask: percentage of what?

### Lesson 3.4 — Relative vs absolute risk

This trick fools doctors, journalists, and most people.

"This medication doubles your risk of stroke!"

Sounds terrifying. But if your baseline risk was 1 in 1,000,000, doubling it means 2 in 1,000,000 — still extremely small.

**Relative risk** = the multiplier (doubled, tripled, 50% increased)
**Absolute risk** = the actual probability

Health and safety news loves relative risk because it sounds scary. Always check the absolute numbers.

### Lesson 3.5 — Percentage point vs percentage

These are different. Pay attention.

If interest rates go from 5% to 7%, that's:
- A **2 percentage point** increase
- A **40% increase** (in relative terms — 7 is 40% larger than 5)

Headlines mix these up constantly, usually to make changes sound bigger than they are.

### Exercise 3.1 — The mean vs median test

Get incomes of all your classmates or family members (or use a published dataset). Calculate the mean and median. Notice how different they are. Discuss which one better represents the group.

### Exercise 3.2 — Spot the relative risk

For one week, watch for health news headlines using words like "doubles," "triples," "increases risk by X%." Look for the absolute numbers. They're usually buried or absent. Note your findings.

### Exercise 3.3 — Percentage interrogation

Find 5 advertisements or news headlines using percentages. For each, ask: percentage of what? Compared to what? Without that context, what does the number actually mean?

---

## Module 4: Probability and Your Terrible Intuition

### Lesson 4.1 — Why probability matters

Probability isn't just a math topic. It's the math of uncertainty — how to reason when you don't know what will happen. Which is most of life.

Better probability intuition = better decisions about money, health, relationships, school, careers.

### Lesson 4.2 — The basics

**Probability** is measured 0 to 1, or 0% to 100%.
- 0 = impossible
- 1 = certain
- 0.5 = 50/50

For independent events:
- Probability of both A AND B = P(A) × P(B)
- Probability of either A OR B (not both) = P(A) + P(B) – P(A and B)

Flip a coin twice. Probability of two heads: 0.5 × 0.5 = 0.25, or 25%.

### Lesson 4.3 — Why humans are bad at probability

Your brain didn't evolve for probability. It evolved for surviving the savanna. So we make systematic mistakes:

**Gambler's fallacy.** If a coin lands heads 5 times in a row, many people think tails is "due." It's not. Each flip is independent. Still 50/50.

**Availability bias.** We overestimate things we can easily picture. Plane crashes feel common because they're memorable. They're actually extremely rare. Car crashes are far more common but feel routine.

**Base rate neglect.** Ignoring the baseline rate when given new information. Classic example: even a 99% accurate test for a rare disease will give mostly false positives if the disease affects 1 in 10,000.

**Conjunction fallacy.** People often think "Adaeze is a feminist bank teller" is more likely than "Adaeze is a bank teller." It can't be. Being a feminist bank teller requires being a bank teller AND a feminist. The conjunction is always less likely than either alone.

**Anchoring.** First number we hear shapes all subsequent estimates. If I ask "is the population of Lagos more or less than 5 million?" then ask you to estimate, you'll guess close to 5 million. If I'd anchored you at 50 million, you'd guess higher.

### Lesson 4.4 — Expected value

This concept will improve your decisions for life.

**Expected value** = sum of (each outcome × its probability)

Example: A bet costs ₦100 to play. You win ₦1,000 with 20% probability, ₦0 with 80% probability.

Expected value = (0.20 × 1,000) + (0.80 × 0) = ₦200

So on average, you make ₦200 per play, but it costs ₦100. The expected value is positive. Take the bet.

But: if you only play once and you're broke, you might lose ₦100 you needed. Expected value works over many trials, not always single decisions.

This logic applies to: insurance, investments, business decisions, even which scholarships to apply for.

### Lesson 4.5 — The lottery is bad math

Most lotteries pay back roughly 50% of what they take in. So expected value is negative — you're "expected" to lose half of what you spend on tickets.

Why do people play? Because of the **emotional value** of the chance to win big. That's fine if you treat it as entertainment. It's a problem if you treat it as investment.

Insurance is the opposite: expected value is also negative for you (insurance companies make profit) but the protection against catastrophe is worth the small loss.

### Lesson 4.6 — Probabilistic thinking for life

Stop thinking in certainties. Start thinking in probabilities.

Bad: "I'm going to be a YouTuber."
Better: "I think there's maybe a 10% chance YouTube becomes my main income in 5 years. I'm going to invest accordingly — keep my main path strong, but build YouTube as a serious side bet."

Bad: "This investment is safe."
Better: "I think there's a 70% chance it returns 10%+, a 20% chance it breaks even, and a 10% chance I lose half."

Probabilistic thinking forces you to consider what could go wrong and plan for it.

### Exercise 4.1 — Coin flips

Flip a coin 20 times and record results. Then 20 more. Notice patterns. Notice how runs of 5+ same-side flips happen, and don't mean the coin is "due" to do the opposite.

### Exercise 4.2 — Estimate before you check

For 5 random questions you don't know the answer to (population of Cameroon, distance to the moon, number of countries in Africa, etc.), give your estimate AND a range (low and high) before checking. See how often the right answer falls in your range. Most people are far too confident.

### Exercise 4.3 — Expected value decisions

For one decision you're facing this month, write out:
- Possible outcomes
- Your estimated probability of each
- The value (positive or negative) of each
- Total expected value

This might be: applying to a scholarship, taking a side hustle gig, asking someone out. The math won't decide for you, but it'll clarify your thinking.

---

## Module 5: How to Spot Bad Statistics

### Lesson 5.1 — Where bad stats come from

Bad stats usually have one of these origins:

1. **Bad data collection** — small sample, biased sample, leading questions
2. **Wrong analysis** — calculations that don't answer the right question
3. **Motivated interpretation** — same data spun to support different conclusions
4. **Pure fabrication** — numbers invented to support a narrative

### Lesson 5.2 — Sample size and how it lies

A study of 12 people tells you almost nothing. A study of 50,000 tells you a lot more (usually).

But sample size isn't everything. A poorly chosen sample of 100,000 is worse than a well-chosen sample of 1,000.

**Selection bias example:** "We surveyed our Twitter followers — 87% love our product!" Of course they do. They're already your followers. They're not representative of the general public.

**Survivorship bias:** "Most successful entrepreneurs dropped out of college!" Maybe. But you're only counting the successful ones. The thousands who dropped out and failed don't get studied.

### Lesson 5.3 — The leading question

How you ask determines what you get. Compare:

- "Should the government do more to protect children from harmful content online?" (gets near-100% yes)
- "Should the government censor what you can see online?" (gets very different answers)

These ask similar things but get opposite results because of framing.

When you see survey results, ask: what were the exact questions? They often reveal more than the answers do.

### Lesson 5.4 — Cherry-picking

Reporting only the data that supports your claim. Watch for:

- Time periods that conveniently start or end where the data looks best
- Subgroups singled out without context
- One study cited while contradicting studies ignored
- "Best ever" claims that depend on narrow definitions

### Lesson 5.5 — Statistical significance and "p-hacking"

In science, **statistical significance** usually means "less than 5% chance this result happened by random luck." It's a threshold for taking a result seriously.

But this leads to **p-hacking**: researchers run many statistical tests, find one that crosses the threshold, and report only that one. By pure chance, if you test 20 things, one of them will likely cross 5% significance.

For news reading: be skeptical of single studies. Real findings get replicated by other researchers.

### Lesson 5.6 — Replication

A single study, even a well-done one, is weak evidence. Real science requires **replication** — other researchers doing the same study and getting similar results.

Many famous studies have failed to replicate when retested. The "power pose" study, the marshmallow test, many psychology and nutrition findings. Don't change your life based on one study.

### Lesson 5.7 — Conflict of interest

Always ask: who paid for this research? Who benefits from this conclusion?

- A sugar industry-funded study showing sugar isn't that bad? Skeptical.
- A pharmaceutical-company study showing their drug works great? Skeptical.
- An oil-company-funded study minimizing climate change? Skeptical.

This doesn't mean such studies are always wrong. It means apply more scrutiny.

### Exercise 5.1 — The study breakdown

Find a recent health or social science study cited in the news. Try to find:
- Sample size
- Who funded it
- How participants were selected
- Whether it's been replicated
- What the actual findings say (vs the headline)

You'll often find a gap between headline and reality.

### Exercise 5.2 — Survey question writing

Take a question you'd want to ask people. Write 3 different ways to ask it: one neutrally, one biased toward yes, one biased toward no. Notice how much wording changes likely responses.

### Exercise 5.3 — The conflict check

For 3 news articles citing data, check who funded the research. Is the source obvious? Hidden? Does it change how you interpret the findings?

---

## Module 6: Studies, Surveys, and What They Really Show

### Lesson 6.1 — Types of studies, ranked by strength

Not all studies are equal. Roughly from weakest to strongest:

1. **Case report** — describes one person's experience. Suggests, doesn't prove.

2. **Survey** — asks people questions. Useful for opinions, weak for behavior (people lie or misremember).

3. **Observational study** — researchers watch what happens. Can find correlations, can't prove causation.

4. **Cohort study** — follows groups over time. Stronger than single-point observation.

5. **Randomized controlled trial (RCT)** — randomly assigns people to different conditions. The gold standard for causation.

6. **Meta-analysis** — combines results from many studies. The strongest evidence of all.

When you see "studies show," check what kind. A meta-analysis of 50 RCTs is very different from one survey of 200 people.

### Lesson 6.2 — How surveys really work

Most surveys you'll see have problems:

- **Self-selection** — people who choose to take surveys are different from those who don't
- **Recall bias** — people misremember the past
- **Social desirability bias** — people answer how they think they should, not how they actually feel
- **Question wording effects** (see Module 5)

Polling has gotten worse over the past 20 years partly because young people don't answer polls. So polls overrepresent older people who do.

### Lesson 6.3 — Causation tests

How do scientists figure out if X causes Y?

The strongest method: **Randomized Controlled Trial**.

1. Take a large group of people.
2. Randomly assign half to receive X, half to a control (no X, or placebo).
3. Watch both groups for the same amount of time.
4. Compare outcomes.

If the X group does differently than the control group, and the assignment was truly random, you have strong evidence X caused the difference.

Without randomization, you can't rule out other explanations.

### Lesson 6.4 — When you can't do RCTs

You can't randomly assign people to smoke for 30 years to test if smoking causes cancer. So how do we know it does?

**Bradford Hill criteria** (developed for exactly this problem):

1. Strength of association — strong link
2. Consistency — found across studies, populations
3. Specificity — specific cause to specific effect
4. Temporality — cause precedes effect
5. Dose-response — more cause = more effect
6. Plausibility — biologically/mechanically possible
7. Coherence — fits with what we know
8. Experimental evidence — supporting lab studies
9. Analogy — similar causes have similar effects

When all these line up, we can conclude causation even without RCTs. Smoking and cancer meets all of them.

### Lesson 6.5 — Reading scientific abstracts

Most scientific papers have an "abstract" — a paragraph summary. Free to read on Google Scholar.

Structure usually:
- **Background** — why this matters
- **Methods** — how they did it (look for: sample size, study type)
- **Results** — what they found (look for actual numbers)
- **Conclusion** — what they think it means (often overstated)

You don't have to read the whole paper. The abstract gives you enough to check whether a headline matches reality.

### Lesson 6.6 — The retraction problem

Some published studies turn out to be wrong, fraudulent, or undone by later research. They get **retracted** — formally withdrawn.

But the original headlines and citations don't get retracted. People still cite findings that were debunked years ago.

For important questions, search Google Scholar for recent reviews on the topic. They'll tell you what's currently supported, not just what was once published.

### Exercise 6.1 — Read an abstract

Go to Google Scholar. Search for a topic you care about. Find a recent paper. Read just the abstract. Try to summarize what the study found in 2 sentences.

### Exercise 6.2 — News vs reality

Find a news article claiming a study found something. Search Google Scholar for the original study. Compare what the study actually concluded with what the headline said.

### Exercise 6.3 — The replication check

Pick a famous psychology or nutrition study you've heard cited. Search "[study name] replication." See if it held up. Many haven't.

---

## Module 7: Spreadsheets and Analyzing Your Own Data

### Lesson 7.1 — Why spreadsheets matter

Spreadsheets are the single most useful tool for analyzing data in your own life. They're free (Google Sheets, Excel Online), powerful, and used in every workplace.

Most adults use 5% of what spreadsheets can do. Even getting to 15% puts you ahead.

### Lesson 7.2 — The basics

Open Google Sheets (sheets.google.com — free with any Google account).

**Cells** — each box. Identified by column letter + row number (A1, B5).

**Formulas** — start with `=`. Operate on cells.

Try these:

```
=2+2
=A1+B1
=SUM(A1:A10)
=AVERAGE(A1:A10)
=MAX(A1:A10)
=MIN(A1:A10)
=COUNT(A1:A10)
```

That's already enough to do real analysis.

### Lesson 7.3 — Building your first tracker

Try tracking something for 30 days. Pick anything: sleep, mood, spending, study time, water intake, screen time.

Spreadsheet structure:
- Column A: Date
- Column B: What you tracked (number)
- Column C: Optional notes

At the end of 30 days, use:
- `=AVERAGE(B2:B31)` for your average
- `=MIN(B2:B31)` for your worst day
- `=MAX(B2:B31)` for your best day

Then make a chart: select your data → Insert → Chart.

You've just done data analysis on your own life.

### Lesson 7.4 — Useful functions to know

```
=IF(B2>8, "good", "bad")    # If statement
=COUNTIF(B2:B31, ">8")       # Count how many days were above 8
=AVERAGEIF(B2:B31, ">0")     # Average ignoring zeros
=ROUND(B2, 2)                # Round to 2 decimal places
=TODAY()                     # Today's date
=B2-A2                       # Subtract dates to get days between
```

Don't memorize these. Just know they exist and Google when you need them.

### Lesson 7.5 — Making charts that don't suck

Bad chart habits to avoid:
- 3D effects (always worse than 2D)
- Pie charts with more than 5 slices
- Too many colors
- Tiny labels
- Missing axis labels
- Misleading axis scales (start at zero unless you have a strong reason)

Good chart habits:
- Pick the right chart type for your data (bar for comparisons, line for time, scatter for correlations)
- One clear message per chart
- Label everything
- Use color purposefully, not decoratively
- Test: can a stranger understand it in 5 seconds?

### Lesson 7.6 — Pivot tables (the cheat code)

Pivot tables let you summarize large datasets fast. They sound intimidating. They're actually simple.

If you have a list of expenses with categories, a pivot table can show you total spending per category, instantly. If you have a list of customers with dates, it can show new customers per month.

In Google Sheets: select your data → Insert → Pivot Table. Drag fields into rows, columns, values. Experiment.

This one skill makes you immediately more useful in any internship or job.

### Exercise 7.1 — Your 30-day tracker

Pick one thing to track for 30 days. Build a spreadsheet. Track daily. At day 30, calculate average, min, max. Make a chart. Identify one pattern.

### Exercise 7.2 — The expense analysis

Track every expense for 2 weeks in a spreadsheet. Add a category column. At the end, use a pivot table to show spending by category. Surprises will surface.

### Exercise 7.3 — Find a dataset

Go to data.gov, gapminder.org, or kaggle.com. Download any dataset that interests you. Open it in Google Sheets. Try to answer one question from the data. Make one chart.

---

## Module 8: Capstone — The Personal Data Project

### Capstone

Pick one of these projects. Complete it over 4 weeks.

**Option A: Personal life dashboard**
Track 5 things about yourself for 30 days (sleep, mood, study hours, screen time, exercise). Build a dashboard in Google Sheets showing averages, trends, and correlations. Write 1 page on what you learned.

**Option B: Topic deep-dive**
Pick a public dataset on a topic you care about (climate, education, sports, economics). Use Google Sheets to analyze it. Make 3 clear charts. Write a 500-word piece on what the data shows, including limitations.

**Option C: News audit**
For 2 weeks, every time you see a statistic in news or social media, screenshot it. Try to verify or debunk it. At the end, write a piece on how often news statistics held up under scrutiny.

**Option D: Local data project**
Survey 30 people in your school or community on something interesting. Use Google Sheets to analyze. Build a small report with charts. Share the findings.

### Deliverable

A Google Doc or Notion page including:
- What you tracked or analyzed
- Your dataset (or summary if too big)
- Your 3 best charts
- 5 findings, with caveats and limitations
- 1 thing you'd do differently next time

---

## Further Learning Resources

### YouTube channels worth subscribing to

- **3Blue1Brown** — most beautiful math explanations on YouTube. His probability series is gold.
- **StatQuest** — statistics explained clearly with songs (yes, songs)
- **Veritasium** — science and probability concepts, often counterintuitive
- **Numberphile** — number theory, statistics, math curiosities
- **Hans Rosling / Gapminder** — historical data presentations
- **Vox Explained** — data-driven explanations of complex topics

### YouTube searches

- "How to lie with statistics"
- "Misleading charts examples"
- "Probability for beginners"
- "Google Sheets tutorial"
- "Pivot tables explained"
- "Statistical significance explained"

### Free courses

- **Khan Academy: Statistics and Probability** — comprehensive, free
- **Coursera: Data Analysis with Google Sheets** — free to audit
- **edX: Introduction to Probability** (Harvard, free)
- **freeCodeCamp: Data Analysis with Python**
- **Google Analytics Academy** — free, useful even for non-marketers

### Books

1. **"How to Lie with Statistics" by Darrell Huff** — short, classic, written in 1954 but still perfect
2. **"Naked Statistics" by Charles Wheelan** — modern, readable
3. **"Factfulness" by Hans Rosling** — how to think about the world with data
4. **"The Signal and the Noise" by Nate Silver** — about prediction and uncertainty
5. **"Thinking, Fast and Slow" by Daniel Kahneman** — the foundational book on human bias

### Tools

- **Google Sheets** — free, do everything
- **Excel** — if you have Microsoft 365
- **Datawrapper** (datawrapper.de) — make great charts free
- **Flourish** (flourish.studio) — interactive data visualizations
- **Gapminder Tools** — explore global development data
- **Our World in Data** (ourworldindata.org) — incredible free dataset visualizations

### Where to find datasets

- **Kaggle** — thousands of datasets and competitions
- **Data.gov** — US government data
- **World Bank Open Data** — global development data
- **Gapminder** — historical and global indicators
- **Our World in Data** — clean, beautiful datasets
- **Statista** — broad data on many topics (some paywalled)

---

## You finished Course 7

Data literacy is one of those quiet skills that pays off forever. You'll spot manipulation in news, ads, school assignments, and your own thinking. You'll make better decisions because you're not fooled by misleading numbers. And in any job, the person who can analyze data is more valuable than the one who can only ask others to do it.

Onto Course 8.
