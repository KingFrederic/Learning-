# Cours 3 : Les bases du code — Python et JavaScript

**Pour les apprenants de 14–19 ans · À ton rythme · ~20 heures**

Tu n'as pas besoin de devenir ingénieur logiciel. Mais tu dois être capable de *lire* du code, de modifier de petits morceaux, et de construire des choses simples. En 2026, c'est une compétence de base — comme savoir conduire ou utiliser l'e-mail.

On va apprendre deux langages : **Python** (utile pour l'IA, les données, l'automatisation) et **JavaScript** (utile pour les sites web, les applications, tout ce qui se passe dans un navigateur). Tu vas construire de vraies choses, pas juste des "hello world" qui ne mènent nulle part.

---

## Ce que tu vas apprendre

- Comment les ordinateurs exécutent vraiment le code
- Python de zéro jusqu'à la création de vrais scripts
- JavaScript de zéro jusqu'à la création de pages web interactives
- Comment utiliser l'IA pour apprendre le code plus vite (avec discernement)
- La gestion de versions avec Git (pour ne pas perdre ton travail)
- Projet final : créer quelque chose de réel

## Modules

1. Comment fonctionne le code (le modèle mental)
2. Configurer ton environnement
3. Les bases de Python
4. Projets Python
5. Les bases de JavaScript
6. Projets JavaScript
7. Git, GitHub et la collaboration
8. Projet final

---

## Module 1 : Comment fonctionne le code

### Leçon 1.1 — Le code, ce sont juste des instructions

Un ordinateur est une machine qui suit des instructions à la lettre. Il n'a pas de bon sens. Il fait exactement ce que tu lui dis, même si ce que tu lui dis est stupide.

Le code est le langage que tu utilises pour donner ces instructions. Il existe différents langages de programmation parce que les différents problèmes nécessitent des outils différents. Mais au fond, ils font tous les mêmes choses de base :

1. **Stocker des données** (des nombres, des mots, des listes)
2. **Prendre des décisions** (si ceci, alors cela)
3. **Répéter des actions** (faire ça 100 fois)
4. **Regrouper des instructions en morceaux réutilisables** (les fonctions)
5. **Communiquer avec le monde extérieur** (lire des fichiers, afficher des choses à l'écran, envoyer des messages)

Maîtrise ces cinq choses et tu pourras coder dans n'importe quel langage.

### Leçon 1.2 — Pourquoi Python et JavaScript ?

**Python** est le langage sérieux le plus accessible aux débutants. Il se lit presque comme de l'anglais. C'est le langage dans lequel se fait la majorité du travail en IA. C'est celui qu'utilise la plupart de la science des données. Si tu veux automatiser quelque chose ou analyser des données, Python est la réponse.

**JavaScript** tourne dans chaque navigateur web sur Terre. Tu veux rendre un site web interactif ? JavaScript. Tu veux créer une application mobile ? JavaScript (via React Native). Tu veux contrôler un serveur backend ? JavaScript (via Node.js). Il est partout.

Maîtrise-en un, puis apprends l'autre. Ils se ressemblent plus qu'ils ne diffèrent.

### Leçon 1.3 — La vérité honnête sur le code

Tu passeras plus de temps bloqué qu'à construire. Tu seras frustré. Tu taperas quelque chose qui devrait fonctionner et ça ne fonctionnera pas, et tu ne sauras pas pourquoi. C'est normal. C'est le travail, même pour les ingénieurs chevronnés.

La compétence que tu développes vraiment n'est pas mémoriser la syntaxe. C'est **la persévérance face à la confusion**. Les jeunes qui deviennent excellents en code ne sont pas les plus intelligents — ce sont ceux qui n'abandonnent pas quand ils sont bloqués.

### Leçon 1.4 — Utiliser l'IA pour apprendre (sans devenir inutile)

Tu vas être tenté de demander à ChatGPT d'écrire tout ton code. Ne le fais pas. Tu te sentiras productif mais tu n'apprendras rien.

**Bon usage de l'IA quand on apprend à coder :**
- "Explique-moi ce que signifie cette erreur : [colle l'erreur]"
- "Pourquoi ce code ne fonctionne-t-il pas ? [colle le code]. Ne le corrige pas pour moi — montre-moi juste où regarder."
- "Quelle est la différence entre une liste et un tuple en Python ?"
- "Je veux faire X. Quelles sont 3 approches différentes que je pourrais adopter ?"

**Mauvais usage de l'IA quand on apprend à coder :**
- "Écris-moi un programme Python qui fait X"
- (Tu le copies-colles sans comprendre)

Le premier type te rend meilleur en code. Le deuxième type fait de toi une personne qui ne sait pas coder sans l'IA. Devine lequel est recherché ?

### Exercice 1.1 — Lire du code

Cherche "Python hello world example" en ligne. Trouve n'importe quel extrait Python de 5 lignes. Sans l'exécuter, écris en français ce que chaque ligne fait. Ensuite exécute-le et vérifie si tu avais raison.

### Exercice 1.2 — La pensée computationnelle (algorithmique)

Choisis une tâche que tu fais chaque matin (par exemple, préparer du thé). Écris-la comme des instructions de type code. Sois ridiculement précis. Imagine que tu l'expliques à un robot qui n'a jamais préparé de thé. Remarque combien d'étapes tu tiens pour acquises.

---

## Module 2 : Configurer ton environnement

### Leçon 2.1 — Où écrire du code

Tu as besoin de trois choses :

1. **Un éditeur de code** — là où tu tapes le code. On utilisera VS Code (gratuit, fonctionne sur n'importe quel ordinateur).
2. **Un moyen d'exécuter le code** — les moteurs Python et JavaScript installés sur ton ordinateur.
3. **Un terminal** — une façon textuelle de parler à ton ordinateur. Intégré à tous les systèmes d'exploitation.

### Leçon 2.2 — Installer VS Code

1. Va sur code.visualstudio.com
2. Télécharge pour ton système d'exploitation
3. Installe-le
4. Ouvre-le. Regarde autour. C'est un éditeur de code — comme Word mais pour le code.

### Leçon 2.3 — Installer Python

1. Va sur python.org/downloads
2. Télécharge la dernière version
3. Pendant l'installation sur Windows : coche la case qui dit "Add Python to PATH"
4. Ouvre ton terminal (Terminal sur Mac, Invite de commandes sur Windows) et tape : `python --version` ou `python3 --version`
5. Si tu vois un numéro de version (comme Python 3.12.0), tu es prêt

### Leçon 2.4 — JavaScript n'a besoin de presque rien

JavaScript tourne déjà dans ton navigateur. Pour écrire ton premier JavaScript :

1. Ouvre Chrome ou Firefox
2. Fais un clic droit sur n'importe quelle page web, choisis "Inspecter"
3. Clique sur l'onglet "Console"
4. Tape : `console.log("Hello world")` et appuie sur Entrée
5. Tu viens d'exécuter du JavaScript

Pour les projets plus grands tu installeras Node.js (nodejs.org) mais passe cette étape pour l'instant.

### Leçon 2.5 — Le raccourci "Replit"

Si installer des logiciels te semble trop compliqué : utilise Replit (replit.com). Gratuit, fonctionne dans ton navigateur, pas d'installation. Dispose de Python et JavaScript intégrés. Utilise-le si tu es sur un ordinateur scolaire où tu ne peux pas installer des programmes.

### Exercice 2.1 — Ta configuration

Fais fonctionner VS Code, Python, et soit Node.js soit Replit. Fais une capture d'écran de "Hello World" qui s'exécute dans chacun. Sauvegarde-la. Tu es maintenant une personne qui peut coder.

---

## Module 3 : Les bases de Python

### Leçon 3.1 — Les variables

Une variable (variable) est un nom qui contient une valeur. Comme une boîte avec une étiquette.

```python
name = "Adaeze"
age = 15
is_student = True

print(name)
print(age)
print(is_student)
```

Ce code crée trois variables, puis affiche chacune. Le signe `=` ici ne veut pas dire "égal" — il veut dire "assigne cette valeur à ce nom."

**Types de valeurs :**
- **Strings** (chaînes de caractères — texte) : `"hello"`, `"Lagos"` — toujours entre guillemets
- **Integers** (entiers — nombres entiers) : `15`, `2026`, `-3`
- **Floats** (flottants — nombres décimaux) : `3.14`, `9.99`
- **Booleans** (booléens — vrai/faux) : `True`, `False`
- **Lists** (listes — collections) : `["jollof", "egusi", "amala"]`
- **Dictionaries** (dictionnaires — collections étiquetées) : `{"name": "Adaeze", "age": 15}`

### Leçon 3.2 — Effectuer des opérations sur les variables

```python
# Math
total = 5 + 3
product = 10 * 4
remainder = 17 % 5  # 17 divisé par 5, qu'est-ce qu'il reste ? = 2

# Strings
greeting = "Hello, " + "Adaeze"
print(greeting)  # "Hello, Adaeze"

# Lists
foods = ["jollof", "egusi", "amala"]
foods.append("suya")  # add suya
print(foods)
print(foods[0])  # premier élément = "jollof" (le comptage commence à 0)
print(len(foods))  # combien = 4
```

### Leçon 3.3 — Prendre des décisions (les instructions if)

```python
age = 17

if age >= 18:
    print("You're an adult")
elif age >= 13:
    print("You're a teenager")
else:
    print("You're a child")
```

L'indentation est importante en Python. Le code sous chaque `if` doit être indenté (généralement 4 espaces). Ce n'est pas facultatif.

### Leçon 3.4 — Les boucles (loops)

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

### Leçon 3.5 — Les fonctions (functions)

Une fonction (function) est un morceau de code réutilisable. Définis-la une fois, utilise-la plusieurs fois.

```python
def greet(name):
    return "Hello, " + name + "!"

# Use it
print(greet("Adaeze"))  # "Hello, Adaeze!"
print(greet("Kouassi"))  # "Hello, Kouassi!"
```

Les fonctions peuvent prendre des entrées (appelées **paramètres** — parameters) et produire des sorties (avec `return`).

### Leçon 3.6 — Obtenir des données de l'utilisateur

```python
name = input("What's your name? ")
age = int(input("How old are you? "))  # int() converts to number

if age >= 18:
    print(name + ", you're an adult.")
else:
    years_left = 18 - age
    print(name + ", you have " + str(years_left) + " years until adulthood.")
```

### Leçon 3.7 — Travailler avec des fichiers

```python
# Write to a file
with open("notes.txt", "w") as file:
    file.write("This is my first file written in Python.")

# Read from a file
with open("notes.txt", "r") as file:
    content = file.read()
    print(content)
```

### Exercice 3.1 — Le calculateur de personnalité

Écris un script Python qui :
1. Pose 3 questions à l'utilisateur (par exemple "Tu préfères le matin ou le soir ?")
2. Mémorise ses réponses
3. En fonction de ses réponses, affiche un "type de personnalité" (que tu inventes toi-même)

### Exercice 3.2 — Le gestionnaire de liste

Écris un script Python qui :
1. Commence avec une liste de courses vide
2. Demande à l'utilisateur ce qu'il veut ajouter
3. Après chaque ajout, affiche la liste actuelle
4. S'arrête quand l'utilisateur tape "done"
5. Affiche la liste finale avec un décompte

### Exercice 3.3 — Le calculateur de notes

Écris une fonction `calculate_grade(score)` qui prend un nombre de 0 à 100 et renvoie :
- "A" si 80 ou plus
- "B" si 70 ou plus
- "C" si 60 ou plus
- "D" si 50 ou plus
- "F" sinon

Ensuite écris une boucle qui demande à l'utilisateur 5 notes de test et affiche la lettre correspondante pour chacune.

---

## Module 4 : Projets Python

Il est temps de construire de vraies choses. Chaque projet ci-dessous utilise ce que tu as appris plus une petite nouveauté.

### Projet 4.1 — Jeu de devinette de nombre

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

**Ta mission :** Ajoute une fonctionnalité — n'autorise que 7 tentatives. S'ils ne trouvent pas, affiche la réponse.

### Projet 4.2 — Minuteur Pomodoro

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

**Ta mission :** Modifie-le pour que l'utilisateur choisisse le nombre de minutes de travail et de pause. Ajoute un compteur qui suit le temps total de concentration.

### Projet 4.3 — Gestionnaire de dépenses

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

**Ta mission :** Sauvegarde les dépenses dans un fichier pour qu'elles persistent entre les exécutions. (Indice : utilise `open()` et écris chaque dépense sur une nouvelle ligne.)

### Projet 4.4 — Récupérateur de météo (avec une API)

Celui-là nécessite la bibliothèque `requests`. Installe-la : ouvre le terminal et tape `pip install requests`.

```python
import requests

city = input("Enter a city: ")
url = "https://wttr.in/" + city + "?format=3"
response = requests.get(url)
print(response.text)
```

C'est un programme de 5 lignes qui récupère la vraie météo. Les API (interfaces de programmation d'application) sont la façon dont les programmes communiquent avec d'autres programmes sur internet.

**Ta mission :** Modifie-le pour demander 3 villes et afficher la météo de chacune.

### Projet 4.5 — Journal de prompts IA (Python + IA)

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

**Ta mission :** Ajoute une fonctionnalité pour voir tous les prompts notés 8 ou plus.

---

## Module 5 : Les bases de JavaScript

JavaScript ressemble à Python mais avec une syntaxe différente. Les grandes différences : des accolades `{}` au lieu de l'indentation, des points-virgules en fin de ligne (surtout facultatifs mais utilise-les), et les mots-clés de variable `let`, `const`, `var`.

### Leçon 5.1 — Les variables en JavaScript

```javascript
let name = "Adaeze";
const age = 15;  // const = cannot be changed later
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);
```

Règles à suivre :
- Utilise `const` par défaut
- Utilise `let` si tu as besoin de changer la valeur plus tard
- N'utilise pas `var` (c'est vieux)

### Leçon 5.2 — Effectuer des opérations sur les variables

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

### Leçon 5.3 — Les instructions if

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

### Leçon 5.4 — Les boucles (loops)

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

### Leçon 5.5 — Les fonctions (functions)

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

### Leçon 5.6 — JavaScript dans le navigateur

C'est là que JavaScript brille. Il peut modifier les pages web.

Crée un fichier appelé `test.html` :

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

Ouvre ce fichier dans n'importe quel navigateur. Clique sur le bouton. Regarde le texte changer. Tu viens de créer une page web interactive.

### Exercice 5.1 — Traduire Python en JavaScript

Prends le calculateur de personnalité de l'Exercice 3.1. Récris-le en JavaScript. Exécute-le dans la console du navigateur.

### Exercice 5.2 — Changeur de couleur

Crée une page HTML avec 3 boutons. Chaque bouton change la couleur de fond de la page. (Indice : `document.body.style.backgroundColor = "red";`)

### Exercice 5.3 — Compteur

Crée une page HTML avec un nombre (commençant à 0), un bouton "+1", et un bouton "-1". Cliquer sur les boutons change le nombre.

---

## Module 6 : Projets JavaScript

### Projet 6.1 — Liste de tâches

Crée `todo.html` :

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

Ouvre-le dans un navigateur. Ajoute des tâches. Clique dessus pour les marquer comme terminées.

**Ta mission :** Ajoute un bouton "Supprimer" à côté de chaque tâche.

### Projet 6.2 — Chronomètre

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

**Ta mission :** Ajoute un bouton "tour" qui enregistre le temps actuel sans remettre à zéro.

### Projet 6.3 — Convertisseur de devises

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

**Ta mission :** Ajoute la conversion dans les deux sens et prends en charge 3 devises (NGN, USD, EUR).

### Projet 6.4 — Jeu de quiz

Crée un quiz de 5 questions sur n'importe quel sujet. Après chaque réponse, montre si c'était correct. À la fin, affiche le score.

### Projet 6.5 — Minuteur Pomodoro (version web)

Crée un minuteur Pomodoro comme dans le Projet 4.2, mais sous forme de page web. Ajoute des boutons pour démarrer, mettre en pause, réinitialiser. Affiche le temps visuellement avec de grands chiffres.

---

## Module 7 : Git, GitHub et la collaboration

### Leçon 7.1 — Pourquoi le contrôle de versions est important

Tu travailles sur un projet. Tu fais un changement. Quelque chose se casse. Tu ne te souviens pas de ce que tu as changé. Tu recommences depuis le début. Tu pleures.

**Git** empêche ça. Il sauvegarde des instantanés de ton code à chaque moment important. Tu peux toujours revenir à n'importe quelle version précédente.

**GitHub** est un site web qui stocke ton historique Git en ligne, pour que tu puisses partager ton code avec d'autres (ou simplement le sauvegarder).

### Leçon 7.2 — Installer Git

1. Va sur git-scm.com/downloads
2. Installe pour ton système d'exploitation
3. Ouvre le terminal, tape `git --version`. Une version devrait s'afficher.

### Leçon 7.3 — Configurer Git (une seule fois)

Dans ton terminal :

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Leçon 7.4 — Le flux de travail Git de base

Dans n'importe quel dossier de projet :

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

### Leçon 7.5 — Envoyer vers GitHub

1. Inscris-toi sur github.com
2. Crée un nouveau dépôt (repository) (ne l'initialise pas avec un README — garde-le vide)
3. Copie les commandes que GitHub te montre. Elles ressembleront à :

```bash
git remote add origin https://github.com/yourusername/yourproject.git
git branch -M main
git push -u origin main
```

Ton code se trouve maintenant sur internet. Tu peux y accéder depuis n'importe quel ordinateur. Tu peux partager le lien avec d'autres.

### Leçon 7.6 — Pourquoi c'est important pour toi

Chaque développeur professionnel utilise Git quotidiennement. Chaque emploi de codage s'attendra à ce que tu le maîtrises. Même pour les projets personnels, GitHub sert de :

- Sauvegarde de tout ton travail
- Portfolio public (les recruteurs regardent les profils GitHub)
- Moyen de collaborer avec d'autres
- Endroit où trouver des exemples de code des meilleurs programmeurs du monde

### Exercice 7.1 — Ton premier commit

Prends l'un des projets que tu as créés dans le Module 4 ou 6. Initialise un dépôt Git. Fais ton premier commit. Envoie-le sur GitHub.

### Exercice 7.2 — Construire un profil GitHub

Crée un README de profil GitHub (c'est un dépôt spécial avec ton nom d'utilisateur comme nom). Inclus :
- Une brève introduction
- Les langages que tu apprends
- 1 à 3 projets dont tu es fier
- Comment te contacter

C'est ton portfolio de développeur. Commence-le maintenant, développe-le au fur et à mesure.

---

## Module 8 : Projet final

Choisis UNE de ces options et construis-la complètement sur 2 semaines. Envoie-la sur GitHub. Partage le lien avec quelqu'un.

### Option A : Site web personnel
Un site web d'une seule page sur toi. Inclus : introduction, photo, ce que tu apprends, projets que tu as réalisés, coordonnées. Stylise-le comme tu veux. Héberge-le gratuitement sur GitHub Pages.

### Option B : Suivi d'études
Une application web où tu enregistres tes sessions d'étude (matière, durée, notes). Elle sauvegarde dans le stockage local (local storage) pour que les données persistent. Montre le temps total étudié par matière.

### Option C : Suivi d'habitudes
Une application web où tu listes tes habitudes, les coches chaque jour, vois les séquences (streaks). Calendrier visuel montrant ta progression.

### Option D : Outil assisté par l'IA
Utilise une API d'IA (OpenAI, Anthropic ou des alternatives gratuites) pour créer quelque chose. Exemple : un améliorateur d'écriture qui prend ton texte et suggère des modifications. Nécessite un JS plus avancé.

### Option E : Automatisation Python
Choisis quelque chose de fastidieux dans ta vie (organiser des fichiers, envoyer le même e-mail chaque semaine, résumer les notes de ta semaine). Écris un script Python pour l'automatiser. Utilise-le quotidiennement pendant une semaine.

### Livrable
- Code fonctionnel sur GitHub
- Un fichier README expliquant ce que ça fait et comment l'utiliser
- Une réflexion : ce qui était difficile, ce que tu as appris, ce que tu ferais différemment la prochaine fois

---

## Ressources pour aller plus loin

### Chaînes YouTube qui valent l'abonnement

- **freeCodeCamp** — cours complets gratuits sur YouTube (oui, des cours Python de 4 heures en entier)
- **The Net Ninja** — tutoriels clairs, axés sur les projets
- **Web Dev Simplified** — concepts de développement web concis
- **Traversy Media** — tutoriels de projets pratiques
- **Fireship** — présentations rapides de technologies et d'outils
- **Bro Code** — Python et JS accessibles aux débutants
- **Tech With Tim** — projets Python et IA
- **Coding Train** (Daniel Shiffman) — code créatif, enseignement brillant
- **Programming with Mosh** — explications propres et professionnelles

### Recherches YouTube spécifiques

- "Python for beginners full course"
- "JavaScript crash course"
- "Git and GitHub tutorial"
- "Build [X] with Python" (remplace X par ce que tu veux)
- "Build a [Y] with JavaScript"
- "VS Code setup for Python"

### Cours gratuits à suivre ensuite

- **Harvard CS50** (gratuit sur YouTube et edX) — la meilleure introduction à l'informatique, tout simplement
- **freeCodeCamp.org** — programme de code interactif, certificats gratuits
- **The Odin Project** — développement web complet (full-stack), gratuit
- **Automate the Boring Stuff with Python** (livre gratuit d'Al Sweigart) — Python pratique
- **MDN Web Docs** — la référence officielle pour HTML/CSS/JavaScript

### Outils que tu utiliseras vraiment

- **VS Code** — éditeur de code
- **GitHub Copilot** (gratuit pour les étudiants) — assistant de code IA
- **Replit** — code dans le navigateur sans rien installer
- **Stack Overflow** — où tout codeur va quand il est bloqué
- **CodePen** — partage des démos web rapides
- **ChatGPT / Claude** — pour expliquer les erreurs et les concepts (pas pour écrire ton code)

### Communautés

- **Forum freeCodeCamp** — aide bienveillante pour les débutants
- **r/learnprogramming** — la plus grande communauté Reddit pour les débutants en programmation
- **dev.to** — communauté de blogging pour développeurs
- **Twitter/X #100DaysOfCode** — défi de responsabilité publique

---

## Tu as terminé le Cours 3

Tu peux maintenant lire du code, écrire du code, créer de petites applications, et utiliser Git comme un professionnel. C'est plus que la plupart des adultes ne sauront jamais. La prochaine étape, c'est de continuer à construire des choses — même imparfaitement. Construis 50 petits projets bancals et tu seras en avance sur des gens qui ont des diplômes en informatique mais n'ont jamais rien livré.

Passons au Cours 4.
