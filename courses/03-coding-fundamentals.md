# Course 3: Coding Fundamentals — Python and JavaScript

**For learners 14–19 · Self-paced · ~20 hours**

You don't need to become a software engineer. But you do need to be able to *read* code, change small pieces, and build basic stuff. In 2026, that's a baseline skill — like knowing how to drive or use email.

We'll learn two languages: **Python** (good for AI, data, automation) and **JavaScript** (good for websites, apps, anything in a browser). You'll build real things, not just hello-world stuff that goes nowhere.

---

## What you'll learn

- How computers actually run code
- Python from zero to building real scripts
- JavaScript from zero to building interactive web pages
- How to use AI to learn coding faster (carefully)
- Version control with Git (so you don't lose your work)
- Capstone: ship something real

## Modules

1. How code works (the mental model)
2. Setting up your environment
3. Python fundamentals
4. Python projects
5. JavaScript fundamentals
6. JavaScript projects
7. Git, GitHub, and collaborating
8. Capstone build

---

## Module 1: How Code Works

### Lesson 1.1 — Code is just instructions

A computer is a machine that follows instructions perfectly literally. It has no common sense. It does exactly what you tell it, even if what you tell it is stupid.

Code is the language you use to give those instructions. Different programming languages exist because different problems need different tools. But underneath, they all do the same basic things:

1. **Store data** (numbers, words, lists)
2. **Make decisions** (if this, then that)
3. **Repeat actions** (do this 100 times)
4. **Group instructions into reusable chunks** (functions)
5. **Talk to the outside world** (read files, show stuff on screen, send messages)

Master these five things and you can code in any language.

### Lesson 1.2 — Why Python and JavaScript?

**Python** is the most beginner-friendly serious language. It reads almost like English. It's what most AI work happens in. It's what most data science uses. If you want to automate something or analyze data, Python is the answer.

**JavaScript** runs in every web browser on Earth. Want to make a website do something interactive? JavaScript. Want to build a mobile app? JavaScript (via React Native). Want to control a backend server? JavaScript (via Node.js). It's everywhere.

Learn one well, then learn the other. They're more similar than different.

### Lesson 1.3 — The honest truth about coding

You will spend more time stuck than building. You will get frustrated. You will type something that should work and it won't work and you'll have no idea why. This is normal. This is the job, even for senior engineers.

The skill you're really building isn't memorizing syntax. It's **persistence through confusion**. The kids who become great at coding aren't the smartest — they're the ones who don't quit when stuck.

### Lesson 1.4 — Using AI to learn (without becoming useless)

You're going to be tempted to ask ChatGPT to write all your code. Don't. You'll feel productive and learn nothing.

**Good use of AI when learning to code:**
- "Explain what this error means: [paste error]"
- "Why doesn't this code work? [paste code]. Don't fix it for me — just point out what to look at."
- "What's the difference between a list and a tuple in Python?"
- "I want to do X. What are 3 different approaches I could take?"

**Bad use of AI when learning to code:**
- "Write me a Python program that does X"
- (You copy paste it without understanding)

The first kind makes you a better coder. The second kind makes you a person who can't code without AI. Guess which one is in demand?

### Exercise 1.1 — Reading code

Search "Python hello world example" online. Find any 5-line snippet of Python. Without running it, write in plain English what each line does. Then run it and see if you were right.

### Exercise 1.2 — Computational thinking

Pick a task you do every morning (e.g., making tea). Write it as code-like instructions. Be ridiculously specific. Pretend you're explaining it to a robot that's never made tea. Notice how many steps you take for granted.

---

## Module 2: Setting Up Your Environment

### Lesson 2.1 — Where to write code

You need three things:

1. **A code editor** — where you type code. We'll use VS Code (free, runs on any computer).
2. **A way to run code** — Python and JavaScript engines installed on your computer.
3. **A terminal** — a text-based way to talk to your computer. Built into every OS.

### Lesson 2.2 — Install VS Code

1. Go to code.visualstudio.com
2. Download for your operating system
3. Install it
4. Open it. Look around. It's a code editor — like Word but for code.

### Lesson 2.3 — Install Python

1. Go to python.org/downloads
2. Download the latest version
3. During installation on Windows: check the box that says "Add Python to PATH"
4. Open your terminal (Terminal on Mac, Command Prompt on Windows) and type: `python --version` or `python3 --version`
5. If you see a version number (like Python 3.12.0), you're set

### Lesson 2.4 — JavaScript needs nothing (mostly)

JavaScript runs in your browser already. To write your first JavaScript:

1. Open Chrome or Firefox
2. Right-click on any web page, choose "Inspect"
3. Click the "Console" tab
4. Type: `console.log("Hello world")` and press Enter
5. You just ran JavaScript

For bigger projects you'll install Node.js (nodejs.org) but skip that for now.

### Lesson 2.5 — The "Replit" shortcut

If installing stuff feels overwhelming: use Replit (replit.com). Free, runs in your browser, no installation. Has Python and JavaScript built in. Use this if you're on a school computer where you can't install things.

### Exercise 2.1 — Your setup

Get VS Code, Python, and either Node.js or Replit working. Take a screenshot of "Hello World" running in each. Save it. You're now a person who can code.

---

## Module 3: Python Fundamentals

### Lesson 3.1 — Variables

A variable is a name that holds a value. Like a labeled box.

```python
name = "Adaeze"
age = 15
is_student = True

print(name)
print(age)
print(is_student)
```

That code creates three variables, then prints each one. The `=` sign here isn't "equals" — it's "assign this value to this name."

**Types of values:**
- **Strings** (text): `"hello"`, `"Lagos"` — always in quotes
- **Integers** (whole numbers): `15`, `2026`, `-3`
- **Floats** (decimal numbers): `3.14`, `9.99`
- **Booleans** (true/false): `True`, `False`
- **Lists** (collections): `["jollof", "egusi", "amala"]`
- **Dictionaries** (labeled collections): `{"name": "Adaeze", "age": 15}`

### Lesson 3.2 — Doing stuff to variables

```python
# Math
total = 5 + 3
product = 10 * 4
remainder = 17 % 5  # 17 divided by 5, what's left? = 2

# Strings
greeting = "Hello, " + "Adaeze"
print(greeting)  # "Hello, Adaeze"

# Lists
foods = ["jollof", "egusi", "amala"]
foods.append("suya")  # add suya
print(foods)
print(foods[0])  # first item = "jollof" (counting starts at 0)
print(len(foods))  # how many = 4
```

### Lesson 3.3 — Making decisions (if statements)

```python
age = 17

if age >= 18:
    print("You're an adult")
elif age >= 13:
    print("You're a teenager")
else:
    print("You're a child")
```

Indentation matters in Python. The code under each `if` must be indented (usually 4 spaces). This isn't optional.

### Lesson 3.4 — Looping

```python
# Loop through a list
foods = ["jollof", "egusi", "amala"]
for food in foods:
    print("I love " + food)

# Loop a specific number of times
for i in range(5):
    print("Number " + str(i))

# While loop — runs as long as condition is True
count = 0
while count < 3:
    print(count)
    count = count + 1
```

### Lesson 3.5 — Functions

A function is a reusable chunk of code. Define it once, use it many times.

```python
def greet(name):
    return "Hello, " + name + "!"

# Use it
print(greet("Adaeze"))  # "Hello, Adaeze!"
print(greet("Kouassi"))  # "Hello, Kouassi!"
```

Functions can take inputs (called **parameters**) and produce outputs (using `return`).

### Lesson 3.6 — Getting input from the user

```python
name = input("What's your name? ")
age = int(input("How old are you? "))  # int() converts to number

if age >= 18:
    print(name + ", you're an adult.")
else:
    years_left = 18 - age
    print(name + ", you have " + str(years_left) + " years until adulthood.")
```

### Lesson 3.7 — Working with files

```python
# Write to a file
with open("notes.txt", "w") as file:
    file.write("This is my first file written in Python.")

# Read from a file
with open("notes.txt", "r") as file:
    content = file.read()
    print(content)
```

### Exercise 3.1 — The personality calculator

Write a Python script that:
1. Asks the user 3 questions (like "Do you prefer mornings or nights?")
2. Stores their answers
3. Based on their answers, prints a "personality type" (you make these up)

### Exercise 3.2 — The list manager

Write a Python script that:
1. Starts with an empty shopping list
2. Asks the user what they want to add
3. After each addition, prints the current list
4. Stops when the user types "done"
5. Prints the final list with a count

### Exercise 3.3 — The grade calculator

Write a function `calculate_grade(score)` that takes a number 0–100 and returns:
- "A" if 80+
- "B" if 70+
- "C" if 60+
- "D" if 50+
- "F" otherwise

Then write a loop that asks the user for 5 test scores and prints the grade for each.

---

## Module 4: Python Projects

Time to build real things. Each project below uses what you've learned plus one small new thing.

### Project 4.1 — Number guessing game

```python
import random

secret = random.randint(1, 100)
guesses = 0

print("I'm thinking of a number between 1 and 100.")

while True:
    guess = int(input("Your guess: "))
    guesses = guesses + 1
    
    if guess == secret:
        print("Correct! It took you " + str(guesses) + " guesses.")
        break
    elif guess < secret:
        print("Too low")
    else:
        print("Too high")
```

**Your task:** Add a feature — only allow 7 guesses. If they don't get it, print the answer.

### Project 4.2 — Pomodoro timer

```python
import time

def pomodoro():
    print("Starting 25-minute work session...")
    time.sleep(25 * 60)  # 25 minutes
    print("Time's up! Take a 5-minute break.")
    time.sleep(5 * 60)
    print("Break over. Ready for another session?")

pomodoro()
```

**Your task:** Modify it so the user chooses how many work/break minutes. Add a counter that tracks total focus time.

### Project 4.3 — Expense tracker

```python
expenses = []

while True:
    action = input("Type 'add' to add expense, 'show' to see all, 'quit' to exit: ")
    
    if action == "add":
        item = input("What did you buy? ")
        amount = float(input("How much? "))
        expenses.append({"item": item, "amount": amount})
        print("Added.")
    
    elif action == "show":
        total = 0
        for expense in expenses:
            print(expense["item"] + ": ₦" + str(expense["amount"]))
            total = total + expense["amount"]
        print("Total: ₦" + str(total))
    
    elif action == "quit":
        break
```

**Your task:** Save expenses to a file so they persist between runs. (Hint: use `open()` and write each expense on a new line.)

### Project 4.4 — Weather fetcher (using an API)

This one needs the `requests` library. Install it: open terminal and type `pip install requests`.

```python
import requests

city = input("Enter a city: ")
url = "https://wttr.in/" + city + "?format=3"
response = requests.get(url)
print(response.text)
```

That's a 5-line program that fetches real weather. APIs are how programs talk to other programs over the internet.

**Your task:** Modify it to ask for 3 cities and print weather for all of them.

### Project 4.5 — AI prompt logger (Python + AI)

```python
import datetime

prompts = []

while True:
    prompt = input("Enter a prompt you used today (or 'done'): ")
    if prompt == "done":
        break
    rating = int(input("How good was the AI's response (1-10)? "))
    prompts.append({
        "prompt": prompt,
        "rating": rating,
        "date": str(datetime.date.today())
    })

# Save to file
with open("prompt_log.txt", "a") as file:
    for entry in prompts:
        file.write(str(entry) + "\n")

print("Saved " + str(len(prompts)) + " prompts.")
```

**Your task:** Add a feature to view all prompts rated 8+.

---

## Module 5: JavaScript Fundamentals

JavaScript looks similar to Python but with different syntax. The big differences: curly braces `{}` instead of indentation, semicolons at line endings (mostly optional but use them), and the variable keywords `let`, `const`, `var`.

### Lesson 5.1 — Variables in JavaScript

```javascript
let name = "Adaeze";
const age = 15;  // const = cannot be changed later
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);
```

Rules of thumb:
- Use `const` by default
- Use `let` if you need to change the value later
- Don't use `var` (it's old)

### Lesson 5.2 — Doing stuff to variables

```javascript
// Math
let total = 5 + 3;
let product = 10 * 4;

// Strings
let greeting = "Hello, " + "Adaeze";
let modernGreeting = `Hello, ${name}`;  // template literal — better

// Arrays (called lists in Python)
let foods = ["jollof", "egusi", "amala"];
foods.push("suya");  // add to end
console.log(foods[0]);  // "jollof"
console.log(foods.length);  // 4
```

### Lesson 5.3 — If statements

```javascript
let age = 17;

if (age >= 18) {
    console.log("You're an adult");
} else if (age >= 13) {
    console.log("You're a teenager");
} else {
    console.log("You're a child");
}
```

### Lesson 5.4 — Loops

```javascript
// Loop through an array
const foods = ["jollof", "egusi", "amala"];
for (const food of foods) {
    console.log("I love " + food);
}

// Loop a specific number of times
for (let i = 0; i < 5; i++) {
    console.log("Number " + i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
```

### Lesson 5.5 — Functions

```javascript
// Old way
function greet(name) {
    return "Hello, " + name + "!";
}

// Modern way (arrow function)
const greet2 = (name) => {
    return `Hello, ${name}!`;
};

// Even shorter for one-liners
const greet3 = (name) => `Hello, ${name}!`;

console.log(greet("Adaeze"));
console.log(greet3("Kouassi"));
```

### Lesson 5.6 — JavaScript in the browser

This is where JavaScript shines. It can change web pages.

Create a file called `test.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First JS Page</title>
</head>
<body>
    <h1 id="greeting">Hello!</h1>
    <button onclick="changeGreeting()">Click me</button>
    
    <script>
        function changeGreeting() {
            const heading = document.getElementById("greeting");
            heading.textContent = "You clicked the button!";
        }
    </script>
</body>
</html>
```

Open this file in any browser. Click the button. Watch the text change. You just built an interactive web page.

### Exercise 5.1 — Translate Python to JavaScript

Take the personality calculator from Exercise 3.1. Rewrite it in JavaScript. Run it in the browser console.

### Exercise 5.2 — Color changer

Build an HTML page with 3 buttons. Each button changes the background color of the page. (Hint: `document.body.style.backgroundColor = "red";`)

### Exercise 5.3 — Counter

Build an HTML page with a number (starting at 0), a "+1" button, and a "-1" button. Clicking the buttons changes the number.

---

## Module 6: JavaScript Projects

### Project 6.1 — To-do list

Create `todo.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My To-do List</title>
    <style>
        body { font-family: Arial; max-width: 500px; margin: 50px auto; }
        li { padding: 8px; cursor: pointer; }
        li.done { text-decoration: line-through; color: gray; }
    </style>
</head>
<body>
    <h1>My To-do List</h1>
    <input id="taskInput" placeholder="New task..." />
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>
    
    <script>
        function addTask() {
            const input = document.getElementById("taskInput");
            const list = document.getElementById("taskList");
            
            if (input.value === "") return;
            
            const li = document.createElement("li");
            li.textContent = input.value;
            li.onclick = () => li.classList.toggle("done");
            
            list.appendChild(li);
            input.value = "";
        }
    </script>
</body>
</html>
```

Open it in a browser. Add tasks. Click them to mark done.

**Your task:** Add a "Delete" button next to each task.

### Project 6.2 — Stopwatch

```html
<!DOCTYPE html>
<html>
<body style="font-family: Arial; text-align: center; margin-top: 100px;">
    <h1 id="time">00:00</h1>
    <button onclick="start()">Start</button>
    <button onclick="stop()">Stop</button>
    <button onclick="reset()">Reset</button>
    
    <script>
        let seconds = 0;
        let timer = null;
        
        function start() {
            if (timer !== null) return;
            timer = setInterval(() => {
                seconds++;
                const min = Math.floor(seconds / 60);
                const sec = seconds % 60;
                document.getElementById("time").textContent = 
                    String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
            }, 1000);
        }
        
        function stop() {
            clearInterval(timer);
            timer = null;
        }
        
        function reset() {
            stop();
            seconds = 0;
            document.getElementById("time").textContent = "00:00";
        }
    </script>
</body>
</html>
```

**Your task:** Add a "lap" button that records the current time without resetting.

### Project 6.3 — Currency converter

```html
<!DOCTYPE html>
<html>
<body style="font-family: Arial; max-width: 400px; margin: 50px auto;">
    <h1>NGN to USD Converter</h1>
    <input id="ngnInput" type="number" placeholder="Naira amount" />
    <button onclick="convert()">Convert</button>
    <h2 id="result"></h2>
    
    <script>
        function convert() {
            const ngn = parseFloat(document.getElementById("ngnInput").value);
            const rate = 1500;  // Update with current rate
            const usd = ngn / rate;
            document.getElementById("result").textContent = 
                "$" + usd.toFixed(2);
        }
    </script>
</body>
</html>
```

**Your task:** Add conversion in both directions and support 3 currencies (NGN, USD, EUR).

### Project 6.4 — Quiz game

Build a 5-question quiz on any topic. After each answer, show whether it was correct. At the end, show the score.

### Project 6.5 — Pomodoro timer (web version)

Build a Pomodoro timer like in Project 4.2, but as a web page. Add buttons for start, pause, reset. Show the time visually with big numbers.

---

## Module 7: Git, GitHub, and Collaborating

### Lesson 7.1 — Why version control matters

You're working on a project. You make a change. Something breaks. You can't remember what you changed. You start over. You cry.

**Git** prevents this. It saves snapshots of your code at every important moment. You can always go back to any previous version.

**GitHub** is a website that stores your Git history online, so you can share code with others (or just back it up).

### Lesson 7.2 — Install Git

1. Go to git-scm.com/downloads
2. Install for your operating system
3. Open terminal, type `git --version`. Should show a version.

### Lesson 7.3 — Set up Git (one-time)

In your terminal:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Lesson 7.4 — Basic Git workflow

In any project folder:

```bash
git init           # Start tracking this folder
git add .          # Stage all current files
git commit -m "First version"   # Save a snapshot with a message

# Later, after changes:
git add .
git commit -m "Added the delete button"

# To see history:
git log
```

### Lesson 7.5 — Push to GitHub

1. Sign up at github.com
2. Create a new repository (don't initialize with README — keep it empty)
3. Copy the commands GitHub shows you. They'll look like:

```bash
git remote add origin https://github.com/yourusername/yourproject.git
git branch -M main
git push -u origin main
```

Now your code lives on the internet. You can access it from any computer. You can share the link with others.

### Lesson 7.6 — Why this matters for you

Every professional developer uses Git daily. Every coding job will expect you to know it. Even for personal projects, GitHub serves as:

- Backup for all your work
- Public portfolio (recruiters look at GitHub profiles)
- Way to collaborate with others
- Place to find example code from the world's best programmers

### Exercise 7.1 — Your first commit

Take one of the projects you built in Module 4 or 6. Initialize a Git repository. Make your first commit. Push it to GitHub.

### Exercise 7.2 — Build a GitHub profile

Create a GitHub profile README (this is a special repo with your username as its name). Include:
- A brief intro
- Languages you're learning
- 1–3 projects you're proud of
- How to contact you

This is your developer portfolio. Start it now, expand as you go.

---

## Module 8: Capstone Build

Pick ONE of these and build it fully over 2 weeks. Push it to GitHub. Share the link with someone.

### Capstone Option A: Personal website
A single-page website about you. Include: intro, photo, what you're learning, projects you've built, contact info. Style it however you want. Host it free on GitHub Pages.

### Capstone Option B: Study tracker
A web app where you log study sessions (subject, duration, notes). It saves to local storage so data persists. Shows total time studied per subject.

### Capstone Option C: Habit tracker
A web app where you list habits, check them off each day, see streaks. Visual calendar showing your progress.

### Capstone Option D: AI-powered tool
Use an AI API (OpenAI, Anthropic, or free alternatives) to build something. Example: a writing improver that takes your text and suggests changes. Requires more advanced JS.

### Capstone Option E: Python automation
Pick something tedious in your life (organizing files, sending the same email weekly, summarizing your week's notes). Write a Python script to automate it. Use it daily for a week.

### Deliverable
- Working code on GitHub
- A README file explaining what it does and how to use it
- A reflection: what was hard, what you learned, what you'd do next time

---

## Further Learning Resources

### YouTube channels worth subscribing to

- **freeCodeCamp** — full-length free courses on YouTube (yes, full 4-hour Python courses)
- **The Net Ninja** — clear, project-based tutorials
- **Web Dev Simplified** — concise web development concepts
- **Traversy Media** — practical project tutorials
- **Fireship** — fast-paced overviews of tech and tools
- **Bro Code** — beginner-friendly Python and JS
- **Tech With Tim** — Python projects and AI
- **Coding Train** (Daniel Shiffman) — creative coding, brilliant teaching
- **Programming with Mosh** — clean, professional explanations

### Specific YouTube searches

- "Python for beginners full course"
- "JavaScript crash course"
- "Git and GitHub tutorial"
- "Build [X] with Python" (replace X with anything you want)
- "Build a [Y] with JavaScript"
- "VS Code setup for Python"

### Free courses to take next

- **Harvard CS50** (free on YouTube and edX) — the best intro to computer science, full stop
- **freeCodeCamp.org** — interactive coding curriculum, free certificates
- **The Odin Project** — full-stack web development, free
- **Automate the Boring Stuff with Python** (free book by Al Sweigart) — practical Python
- **MDN Web Docs** — the official reference for HTML/CSS/JavaScript

### Tools you'll actually use

- **VS Code** — code editor
- **GitHub Copilot** (free for students) — AI coding assistant
- **Replit** — code in browser without installing anything
- **Stack Overflow** — where every coder goes when stuck
- **CodePen** — share quick web demos
- **ChatGPT / Claude** — for explaining errors and concepts (not writing your code)

### Communities

- **freeCodeCamp forum** — beginner-friendly help
- **r/learnprogramming** — Reddit's biggest beginner programming community
- **dev.to** — developer blogging community
- **Twitter/X #100DaysOfCode** — public accountability challenge

---

## You finished Course 3

You can now read code, write code, build small applications, and use Git like a professional. That's more than most adults will ever know. The next step is to keep building things — even badly. Build 50 small ugly projects and you'll be ahead of people with computer science degrees who never shipped anything.

Onto Course 4.
