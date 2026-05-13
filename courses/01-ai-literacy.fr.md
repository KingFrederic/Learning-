# Cours 1 : Initiation à l'IA et ingénierie des prompts

**Pour les apprenants de 13–19 ans · En autonomie · ~10 heures**

Tu ne vas pas « apprendre l'IA » comme quelqu'un a appris à taper au clavier en 1995. Taper était une compétence. L'IA ressemble plutôt à l'électricité — elle sera à l'intérieur de tout ce que tu touches, et la question c'est : est-ce que tu l'utilises comme un utilisateur avancé, ou est-ce que c'est elle qui t'utilise ? Ce cours fait de toi le premier type.

À la fin, tu seras capable d'écrire des prompts qui obtiennent vraiment ce que tu veux, de détecter quand une IA invente des choses, de construire de petits outils alimentés par l'IA, et de rester en sécurité en ligne.

---

## Ce que tu apprendras

- Comment les grands modèles de langage fonctionnent vraiment (sans maths, promis)
- Comment écrire des prompts qui te donnent des résultats 10 fois meilleurs
- Comment repérer les hallucinations et les biais de l'IA
- Comment utiliser l'IA pour l'école, les activités secondaires et les projets personnels sans en devenir dépendant
- La sécurité numérique dans un monde saturé d'IA

## Modules

1. Ce qu'est vraiment l'IA (et ce qu'elle n'est pas)
2. L'anatomie d'un bon prompt
3. Prompting avancé : rôles, exemples, chaînes
4. Hallucinations, biais, et quand ne pas faire confiance à l'IA
5. Utiliser l'IA pour l'école sans te tromper toi-même
6. Construire de petits outils IA (sans code)
7. Sécurité numérique et confidentialité avec l'IA
8. Projet de clôture

---

## Module 1 : Ce que l'IA est vraiment (et ce qu'elle n'est pas)

### Leçon 1.1 — L'explication honnête

La plupart des gens pensent que l'IA est une sorte de cerveau numérique. Ce n'est pas le cas. ChatGPT, Claude, Gemini — on les appelle des **grands modèles de langage (LLM)**, et voilà ce qu'ils font vraiment : ils prédisent le mot suivant. C'est tout. C'est le seul tour de passe-passe.

Imagine que tu as lu tous les livres, tous les articles Wikipédia, tous les fils Reddit, tous les billets de blog jamais écrits. Puis quelqu'un te montre la phrase « La capitale de la France est... » et te demande de deviner le mot suivant. Tu dirais « Paris » sans réfléchir. C'est ce que fait un LLM, juste avec beaucoup plus de texte et une reconnaissance de patterns bien plus sophistiquée.

Donc quand ChatGPT t'écrit un poème, il ne se sent pas poète. Il calcule, mot par mot, quel serait le mot suivant le plus probable compte tenu de tout ce qui précède. Ça ressemble à de la réflexion. Ça donne l'impression de penser. Mais en dessous, c'est de la saisie automatique dopée aux stéroïdes.

**Pourquoi c'est important :** Une fois que tu comprends ça, tu comprends pourquoi l'IA se trompe parfois complètement. Elle ne « sait » rien. Elle devine juste ce qui semble juste. Parfois cette supposition est brillante. Parfois elle est fausse de façon assurée et totale.

### Leçon 1.2 — Les trois choses pour lesquelles l'IA est vraiment douée

Oublie le buzz. Voilà à quoi l'IA sert vraiment, aujourd'hui, maintenant :

**1. Restructurer des informations que tu lui donnes.** Résume cet article. Transforme ces points en dissertation. Traduis ce paragraphe. Réécris ça dans un autre ton. C'est là que l'IA est la plus proche de la magie.

**2. Le brainstorming et l'exploration.** Donne-moi 20 idées de chaîne YouTube. Quels sont les contre-arguments de cette position ? Quelles questions est-ce que je ne pose pas ? L'IA est un excellent partenaire de réflexion parce qu'elle ne se fatigue pas.

**3. La génération à partir de patterns.** Écris-moi une fonction qui fait X. Rédige un e-mail pour demander un délai à mon prof. Fais un planning de révisions. Tout ce qui suit un pattern reconnaissable, l'IA peut le faire vite.

### Leçon 1.3 — Les trois choses pour lesquelles l'IA est vraiment mauvaise

**1. Savoir ce qui est vrai.** L'IA n'a pas le sens de la vérification des faits. Elle peut te donner la population de Lagos avec une totale assurance et se tromper de 5 millions.

**2. Les maths au-delà du simple.** Les LLM sont des modèles de langage, pas des calculatrices. Ils ratent des calculs et présentent la mauvaise réponse avec une pleine assurance. Vérifie toujours avec une vraie calculatrice.

**3. Les événements récents.** La plupart des modèles d'IA ont une « date de coupure » — une date après laquelle ils ne savent pas ce qui s'est passé. Demande quelque chose de la semaine dernière et ils diront soit qu'ils ne savent pas, soit ils inventent quelque chose.

### Exercice 1.1

Ouvre ChatGPT ou Claude (les deux ont des niveaux gratuits). Pose ces trois questions et note les réponses de 1 à 10 pour leur précision :

1. « Quelle est la population de ma ville en ce moment ? »
2. « Combien font 847 × 2 394 ? »
3. « Résume l'idée principale de ce paragraphe : [colle n'importe quel paragraphe d'un livre que tu as]. »

Tu trouveras sans doute que la #3 était excellente, que la #1 était fausse ou évasive, et que la #2 pourrait être incorrecte. Cet écart te montre exactement quand faire confiance à l'IA et quand vérifier.

### Exercice 1.2 — Réflexion

Écris 3 phrases pour répondre à : « Dans ma semaine scolaire, où est-ce que je pourrais gagner 30 minutes ou plus en utilisant bien l'IA, sans qu'elle réfléchisse à ma place ? »

---

## Module 2 : L'anatomie d'un bon prompt

### Leçon 2.1 — Pourquoi les prompts de la plupart des gens sont nuls

La plupart des gens tapent une phrase dans ChatGPT et se demandent pourquoi le résultat est générique. C'est comme aller chez un tailleur et dire « fais-moi des vêtements » et être choqué d'obtenir un t-shirt gris trop grand.

Un bon prompt a quatre parties. Tu n'as pas toujours besoin des quatre, mais plus tu en inclus, meilleur sera le résultat :

1. **Rôle** — qui doit être l'IA
2. **Tâche** — ce que tu veux qu'elle fasse
3. **Contexte** — les informations dont elle a besoin
4. **Format** — comment tu veux que la réponse soit présentée

### Leçon 2.2 — Le cadre CRAFT

Utilise-le à chaque fois :

- **C**ontexte — quelle est la situation ?
- **R**ôle — qui est l'IA ?
- **A**ction — que doit-elle faire ?
- **F**ormat — à quoi doit ressembler la réponse ?
- **T**arget (public cible) — pour qui est-ce ?

**Mauvais prompt :**
> Écris-moi une dissertation sur le changement climatique.

**Prompt CRAFT :**
> Je suis un élève de 15 ans à Lagos qui écrit pour le blog du club environnemental de mon école (Contexte). Agis comme un professeur de sciences qui explique les choses avec des exemples locaux (Rôle). Écris un billet de blog de 500 mots sur la façon dont le changement climatique affecte les villes côtières du Nigeria (Action). Utilise des titres H2, des paragraphes courts, et termine par 3 choses que les élèves peuvent faire (Format). Public : des lycéens nigérians qui se préoccupent de la planète mais n'ont pas de formation en sciences (Target).

Le deuxième prompt te donnera quelque chose d'utilisable. Le premier te donnera Wikipédia.

### Leçon 2.3 — La précision, c'est tout

La seule grande amélioration que tu peux apporter à tes prompts : être plus précis.

**Vague :** « Aide-moi avec mon CV. »
**Précis :** « Révise ce CV pour une candidature à un poste à temps partiel chez McDonald's. J'ai 16 ans, je n'ai jamais eu d'emploi rémunéré, mais j'ai donné des cours particuliers à mon cousin et géré une petite activité de revente sur WhatsApp. Suggère 3 changements pour me rendre employable sans mentir. »

**Vague :** « Explique la photosynthèse. »
**Précis :** « Explique-moi la photosynthèse comme si j'avais 13 ans, en utilisant l'analogie d'une recette de cuisine. Limite-toi à 200 mots. »

### Exercice 2.1 — Le test avant/après

Prends tes 5 derniers prompts envoyés à n'importe quelle IA (regarde dans ton historique). Réécris chacun d'eux en utilisant le cadre CRAFT. Lance les deux versions et compare les résultats. Observe la différence.

### Exercice 2.2 — Prompt golf

Le « prompt golf », c'est essayer d'obtenir le *meilleur* résultat avec le *prompt le plus clair possible*. Choisis cette tâche :

> Fais en sorte que l'IA écrive un message d'anniversaire de 100 mots pour ton meilleur ami qui semble avoir été écrit par toi.

Écris 3 versions du prompt. Chacune doit être meilleure que la précédente. Après la version 3, le message doit ressembler à quelque chose que tu enverrais vraiment.

---

## Module 3 : Prompting avancé

### Leçon 3.1 — Le prompting par rôle

C'est le code de triche. Quand tu demandes à une IA d'*être* quelqu'un, ses résultats changent radicalement.

> Agis comme un professeur d'anglais strict qui corrige des dissertations depuis 30 ans. Critique sévèrement ce paragraphe.

contre

> Agis comme un coach d'écriture bienveillant qui renforce la confiance. Donne un retour sur ce paragraphe.

Même paragraphe, retour complètement différent. Utilise les rôles pour convoquer le type d'aide dont tu as vraiment besoin.

**Rôles utiles à essayer :**
- « Agis comme un tuteur socratique qui me pose seulement des questions pour m'aider à comprendre par moi-même. »
- « Agis comme un journaliste sceptique qui interroge chaque affirmation. »
- « Agis comme un enfant de 7 ans qui demande "mais pourquoi ?" à tout ce que j'explique. »
- « Agis comme un mentor en affaires nigérian qui gère des petites entreprises à Lagos depuis 20 ans. »

### Leçon 3.2 — Le prompting à quelques exemples (montrer, pas dire)

Si tu veux un style ou un format précis, donne des exemples à l'IA. C'est ce qu'on appelle le **prompting à quelques exemples** (few-shot prompting).

> Réécris ces matières scolaires de façon drôle. Exemples :
> 
> Mathématiques → « domptage professionnel de chiffres »
> Histoire → « commérages sur des gens morts »
> 
> Maintenant fais-le pour : Biologie, Géographie, Physique, Chimie, Littérature.

Tu viens d'enseigner ton style à l'IA en 5 secondes. Elle suivra ce pattern bien mieux que n'importe quelle description que tu pourrais écrire.

### Leçon 3.3 — Le prompting par chaîne de pensée

Pour les problèmes complexes, demande à l'IA de *réfléchir étape par étape* avant de répondre. Cette seule phrase améliore souvent massivement la précision, surtout pour les maths, la logique et le raisonnement.

**Sans chaîne de pensée :**
> Si j'économise ₦500 par semaine à partir de 14 ans, et que je gagne 10 % d'intérêts par an, combien aurai-je à 18 ans ?

**Avec chaîne de pensée :**
> Si j'économise ₦500 par semaine à partir de 14 ans, et que je gagne 10 % d'intérêts par an, combien aurai-je à 18 ans ? Réfléchis étape par étape, montre ton travail, puis donne la réponse finale.

Le deuxième prompt oblige l'IA à ralentir et à raisonner. Tu repèreras ses erreurs plus facilement, et les réponses seront généralement plus précises.

### Leçon 3.4 — Le prompting itératif

N'essaie pas d'obtenir le résultat parfait en un seul essai. Traite l'IA comme un collaborateur. Premier brouillon, puis affiner.

**Tour 1 :** « Écris une bio Instagram de 200 mots pour mon compte de poésie. »
**Tour 2 :** « Bien, mais trop formel. Fais en sorte que ça ressemble à un ado qui l'a écrit. »
**Tour 3 :** « Mieux. Maintenant ajoute une citation d'un de mes poèmes : "le silence est le cri le plus fort". »
**Tour 4 :** « Parfait. Maintenant donne-moi 3 variations avec des ambiances différentes. »

À chaque tour, tu affines le résultat. C'est comme ça que les pros utilisent l'IA.

### Exercice 3.1 — Construis ta bibliothèque de prompts

Ouvre une application de notes ou un Google Doc. Crée un fichier appelé « Ma bibliothèque de prompts ». Ajoute ces catégories, puis remplis 2 prompts pour chacune :

- Études / Aide aux devoirs
- Écrire mieux
- Brainstorming
- Codage (on le verra dans le Cours 3)
- Projets personnels

À la fin de ce cours, tu devrais avoir 20 prompts ou plus enregistrés que tu peux réutiliser.

### Exercice 3.2 — L'astuce du professeur

Choisis un sujet de cours que tu ne maîtrises pas tout à fait. Utilise exactement ce prompt :

> Agis comme un tuteur. Je vais essayer de t'expliquer [sujet]. Écoute, puis signale tout ce que j'ai mal dit ou omis. Ne sois pas gentil — sois précis.

Puis explique le sujet. Les corrections de l'IA te montreront exactement où ton compréhension a des lacunes. C'est l'une des meilleures façons de réviser avec l'IA.

---

## Module 4 : Hallucinations, biais et quand ne pas faire confiance à l'IA

### Leçon 4.1 — À quoi ressemble une hallucination

Une **hallucination**, c'est quand l'IA génère des informations qui semblent tout à fait réelles mais sont totalement inventées. Pas une petite erreur. Une fabrication complète, livrée avec assurance.

Des exemples réels qui se sont produits :

- Un avocat a utilisé ChatGPT pour trouver des affaires judiciaires pour un mémoire légal. L'IA a inventé 6 affaires qui n'existent pas. L'avocat a été sanctionné.
- Un étudiant a demandé des recommandations de livres sur l'histoire du Nigeria. L'IA a suggéré 3 livres avec de faux auteurs, de faux titres et de faux éditeurs.
- Un utilisateur a demandé les paroles d'une chanson obscure. L'IA a inventé des couplets entiers qui n'ont jamais existé.

La partie terrifiante : les hallucinations ressemblent exactement à des réponses correctes. L'IA ne dit jamais « je ne suis pas sûr ». Elle ment juste avec assurance.

### Leçon 4.2 — Comment repérer les hallucinations

**Signaux d'alarme :**

1. **Les noms précis, les dates, les statistiques ou les URLs.** C'est là que l'IA triche le plus. Si elle cite une étude, cherche-la. La moitié du temps, elle n'existe pas.

2. **Tout ce qui est obscur ou de niche.** L'IA est la plus susceptible d'halluciner quand il n'y a pas beaucoup de données d'entraînement sur un sujet. Pose-lui des questions sur Beyoncé et elle a probablement raison. Pose-lui des questions sur une petite ville du Cameroun et elle peut tout inventer.

3. **Les événements récents.** Si ça s'est passé après la date de coupure du modèle, l'IA devine ou invente.

4. **Les citations de vraies personnes.** L'IA invente des citations en permanence. Vérifie toujours avant de les utiliser.

### Leçon 4.3 — Le prompting défensif

Tu peux réduire les hallucinations en ajoutant ces phrases à tes prompts :

- « Si tu ne sais pas, dis "je ne sais pas". N'invente rien. »
- « Ne cite que des sources dont tu es sûr à 100 % qu'elles existent. »
- « Note ta confiance dans cette réponse de 1 à 10. »
- « Dis-moi quelles hypothèses tu fais. »

Ça n'élimine pas les hallucinations, mais ça aide beaucoup.

### Leçon 4.4 — Les biais de l'IA

L'IA est entraînée sur des textes d'internet. Internet a des biais. Donc l'IA a des biais. En voici quelques-uns que tu verras :

- **Les valeurs par défaut occidentales/américaines.** Demande « bonne nourriture » et tu obtiendras pizza et burgers, pas du jollof ou du thiéboudienne.
- **Le biais anglophone.** L'IA performe généralement moins bien en français, en yoruba, en wolof, etc., même quand elle les « parle ».
- **Les stéréotypes intégrés.** Demande « une image d'un médecin » et les outils d'images IA représentaient historiquement des hommes blancs.
- **Le biais historique.** Demande à l'IA d'écrire sur l'histoire africaine et elle peut adopter par défaut un cadrage de l'ère coloniale.

**Comment lutter contre ça :** Sois explicite. « Donne-moi des exemples spécifiquement issus de la culture des affaires ouest-africaine. » « Évite les valeurs par défaut occidentales. » « Utilise des prénoms africains. » La précision remplace les valeurs par défaut.

### Exercice 4.1 — Chasse aux hallucinations

Demande à n'importe quelle IA : « Liste 5 poètes nigérians célèbres et leur livre le plus connu. » Puis va sur Google et vérifie chaque nom, titre de livre et détail. Documente ce qui était réel et ce qui était inventé.

Cet exercice va changer définitivement le niveau de confiance que tu accordes aux résultats de l'IA.

### Exercice 4.2 — Test de biais

Demande à un générateur d'images IA (options gratuites : Bing Image Creator, Leonardo.ai) de générer :

- « Un entrepreneur à succès »
- « Une infirmière »
- « Un criminel »
- « Un mariage »

Regarde quelles valeurs par défaut il choisit. Qu'est-ce qui manque ? Qui n'est pas représenté ? Maintenant recommence avec des prompts précis comme « Un entrepreneur yoruba à succès dans la trentaine. » Compare les résultats.

---

## Module 5 : Utiliser l'IA pour l'école sans te tromper toi-même

### Leçon 5.1 — La ligne entre l'aide et le tort

Voilà la vérité brutale : si l'IA fait tes devoirs à ta place, tu n'apprends pas. Tu te sentiras intelligent sur le moment et stupide le jour du contrôle. Les élèves qui domineront en 2026 ne sont pas ceux qui utilisent le plus l'IA — ce sont ceux qui l'utilisent le *mieux*.

Le test est simple : **Est-ce que l'IA a remplacé ta réflexion, ou l'a-t-elle affinée ?**

**Te tromper toi-même :** « Écris-moi une dissertation de 500 mots sur *Things Fall Apart*. »

**Affiner ta réflexion :**
- « Je veux écrire une dissertation sur *Things Fall Apart*. Pose-moi 10 questions qui m'aideront à définir mon argument. »
- « Voilà mon brouillon de dissertation. Ne le réécris pas. Dis-moi où mon argument est le plus faible. »
- « Je pense que la chute d'Okonkwo est causée par sa peur de ressembler à son père. Conteste cette idée. Quel est le contre-argument ? »

La deuxième approche te rend meilleur. La première te rend dépendant.

### Leçon 5.2 — Les cinq utilisations légitimes de l'IA pour l'école

1. **L'explication à la demande.** « Explique ce concept de chimie comme si j'avais 12 ans. » Recommence jusqu'à ce que tu comprennes vraiment.

2. **Le partenaire de révision.** « Interroge-moi sur la Révolution française. Pose-moi des questions, puis dis-moi ce que j'ai mal dit. »

3. **Le générateur de plan.** « Aide-moi à faire le plan d'une dissertation de 3 pages sur X. Ne l'écris pas, propose juste une structure. »

4. **La machine à retours.** « Voilà mon brouillon. Trouve 3 points faibles. Ne les corrige pas — indique-les juste. »

5. **Le créateur d'exercices.** « Génère 10 exercices pratiques sur les équations du second degré, avec les réponses séparées pour que je puisse vérifier après. »

### Leçon 5.3 — Comment ne pas se faire attraper (et pourquoi c'est la mauvaise question)

Les écoles achètent des outils de détection de l'IA. Certains fonctionnent. La plupart non. Dans tous les cas, ce n'est pas le bon truc à optimiser.

Soyons francs : quand tu auras 25 ans et que tu postuleras à des emplois, personne ne vérifiera si ton CV a été écrit par l'IA. Ils vérifieront si tu peux vraiment faire le travail. Tricher à l'école nuit à la version de toi qui devra performer plus tard.

Utilise l'IA pour **comprendre plus, plus vite.** Pas pour **produire plus, en étant plus bête.**

### Exercice 5.1 — Le tuteur socratique

Choisis une matière dans laquelle tu as du mal ce trimestre. Utilise ce prompt :

> Agis comme un tuteur socratique. J'étudie [sujet]. Ne m'explique rien directement. À la place, pose-moi des questions qui me conduisent à comprendre par moi-même. Commence par la question la plus fondamentale et monte en difficulté.

Passe 20 minutes avec ça. Remarque à quel point c'est différent d'un cours magistral.

### Exercice 5.2 — Construis ton système de révision

Conçois une routine de révision assistée par l'IA pour une matière. Inclus :

1. Comment tu vas utiliser l'IA pour apprendre de nouvelles notions
2. Comment tu vas utiliser l'IA pour pratiquer
3. Comment tu vas utiliser l'IA pour vérifier ta compréhension
4. Ce que tu feras délibérément SANS IA pour t'assurer que tu apprends vraiment

Écris ça et tiens-t'y pendant une semaine.

---

## Module 6 : Construire de petits outils IA (sans code)

### Leçon 6.1 — Les Custom GPTs et les Projets Claude

Tu n'as pas besoin d'être programmeur pour construire des outils IA. ChatGPT et Claude te permettent tous les deux de créer des assistants IA personnalisés avec des instructions spécifiques. On les appelle des **Custom GPTs** (ChatGPT) ou des **Projets** (Claude).

Imagine : au lieu d'écrire le même long prompt à chaque fois, tu construis un assistant personnalisé une fois. Ensuite tu discutes avec lui comme dans une conversation normale, et il sait déjà quoi faire.

### Leçon 6.2 — Construis ton premier assistant personnalisé

Construisons un **Coach Devoirs** qui t'aide à réfléchir aux problèmes plutôt que de te donner les réponses.

Si tu utilises ChatGPT (le niveau gratuit peut ne pas inclure les Custom GPTs — essaie les Projets Claude sur Claude.ai gratuit) :

1. Va sur claude.ai et crée un nouveau Projet
2. Dans les instructions, colle ceci :

```
Tu es mon Coach Devoirs. Ton rôle est de m'aider à apprendre, pas de me donner des réponses.

Règles :
- Ne me donne jamais de réponses directes aux questions de devoirs
- Demande-moi toujours ce que j'ai déjà essayé
- Décompose les problèmes en petites questions auxquelles je peux répondre moi-même
- Quand je suis bloqué, donne-moi un indice, pas la réponse
- Félicite-moi quand je trouve par moi-même
- Si je te demande de me donner la réponse directement, refuse poliment et demande-moi ce qui me bloque

Ton ton : amical, patient, légèrement espiègle. Comme un cousin plus âgé et intelligent.
```

3. Enregistre. Maintenant, chaque fois que tu ouvres ce Projet, l'IA connaît déjà son rôle.

### Leçon 6.3 — Cinq petits outils à construire cette semaine

1. **Constructeur de vocabulaire** — donne-lui 5 nouveaux mots par jour, demande-lui de te tester chaque semaine
2. **Générateur d'idées** — pour une chaîne YouTube, un blog, une entreprise ou un projet artistique
3. **Explicateur de code** — colle n'importe quel code, obtiens une explication adaptée aux ados
4. **Aide au CV** — connaît ton parcours, t'aide à le personnaliser pour chaque candidature
5. **Partenaire de pratique bilingue** — pour pratiquer la conversation en français ou en anglais

### Leçon 6.4 — Connecter l'IA à des vraies applis

Au-delà du chat, l'IA peut se connecter à Gmail, Calendar, Google Docs, WhatsApp Business, même ton téléphone. Des outils comme Zapier et Make te permettent de construire des automatisations comme :

- « Chaque lundi, résume ma semaine à venir depuis mon Calendar et envoie-le-moi par e-mail »
- « Quand je reçois un message WhatsApp en français, traduis-le et renvoie-le-moi en anglais »
- « Prends n'importe quelle vidéo YouTube que je mets en favori, résume-la et ajoute-la dans ma Notion »

On ne s'attend pas à ce que tu construises ça demain. Sache juste que ça existe, et que tu seras le genre de personne qui le construit quand tu en auras besoin.

### Exercice 6.1 — Construire et utiliser

Construis l'un des cinq outils ci-dessus. Utilise-le chaque jour pendant une semaine. À la fin de la semaine, affine ses instructions en fonction de ce qui a fonctionné et ce qui n'a pas fonctionné.

### Exercice 6.2 — L'outil de rêve

Écris un paragraphe décrivant l'outil IA que tu souhaiterais avoir dans ta vie. Ne t'inquiète pas de savoir si c'est possible. Puis demande à ChatGPT ou Claude : « Puis-je construire quelque chose comme ça avec les outils actuels ? Si oui, explique-moi comment. »

---

## Module 7 : Sécurité numérique et confidentialité avec l'IA

### Leçon 7.1 — Ce qu'il ne faut jamais mettre dans une IA

Traite chaque conversation IA comme une carte postale, pas une lettre scellée. Pars du principe que quelqu'un pourrait la lire.

**Ne colle jamais dans une IA :**

- Ton nom complet + adresse domicile + nom d'école dans un seul prompt
- Des mots de passe (jamais, nulle part, pour aucune raison)
- Des coordonnées bancaires ou de carte de crédit
- Des photos sensibles de toi ou d'autres personnes
- De vrais dossiers médicaux avec ton nom attaché
- Tout ce que tu serais dévasté de voir en capture d'écran

Les entreprises disent qu'elles n'entraînent pas leurs modèles sur tes conversations. Parfois c'est vrai, parfois non, parfois ça change. Pars du pire cas et tu seras tranquille.

### Leçon 7.2 — Les deepfakes et la vérification

L'IA peut maintenant générer de fausses voix qui ressemblent à de vraies personnes. De fausses vidéos de vraies personnes faisant des choses qu'elles n'ont jamais faites. De fausses captures d'écran de conversations qui n'ont jamais eu lieu.

Cela signifie :

- Si tu reçois un appel WhatsApp d'un « membre de ta famille » demandant de l'argent en urgence, raccroche et rappelle-le sur un numéro que tu connais.
- Ne fais pas confiance aux messages vocaux seuls — ils peuvent être falsifiés. Idem pour la vidéo.
- Établis un mot de code familial — un mot que seule ta vraie famille connaît. Si quelqu'un appelle en urgence, il doit le connaître.

### Leçon 7.3 — Le phishing à l'ère de l'IA

Les e-mails d'arnaque étaient faciles à repérer — mauvaise grammaire, faux évidents. L'IA a tué ça. Maintenant les e-mails d'arnaque se lisent parfaitement. Certains usurpent l'identité de profs, de banques, voire d'amis.

**Nouvelles règles :**

1. Ne clique jamais sur des liens dans des e-mails. Va directement sur le site en tapant l'URL toi-même.
2. Vérifie les demandes inhabituelles par un autre canal. Si « ton prof » envoie un e-mail demandant des informations personnelles, demande-lui en personne.
3. Utilise un gestionnaire de mots de passe. Bitwarden est gratuit, Proton Pass est gratuit. Arrête de réutiliser les mots de passe.
4. Active l'authentification à deux facteurs (2FA) sur chaque compte important.

### Leçon 7.4 — Ton empreinte numérique

Tout ce que tu postes en ligne — chaque commentaire, photo, like — est potentiellement une donnée d'entraînement pour une future IA. Une future IA peut aussi générer du faux contenu avec ton visage et ta voix s'il y a assez de toi en ligne.

Ça ne veut pas dire de te déconnecter. Ça signifie :

- Mets ton Instagram et TikTok en privé quand tu peux
- Sois prudent avec les posts de ton visage dans des vidéos publiques
- Googler ton nom tous les 3 mois — vois ce qui existe
- Pars du principe que tout ce que tu postes reste pour toujours

### Exercice 7.1 — Audit de sécurité

Passe 30 minutes aujourd'hui :

1. Installe un gestionnaire de mots de passe (Bitwarden ou Proton Pass — tous les deux gratuits)
2. Active la 2FA sur Gmail, Instagram, WhatsApp et TikTok
3. Google ton nom et fais une capture d'écran de ce qui apparaît
4. Établis un mot de passe familial de sécurité avec tes parents/frères et sœurs

### Exercice 7.2 — Détection de deepfakes

Regarde ce type de contenu : cherche « deepfake examples 2024 2025 » sur YouTube. Familiarise-toi avec ce qui est possible. Savoir à quoi ressemblent les faux est ta meilleure défense.

---

## Module 8 : Projet de clôture

### Ton projet final : Le projet secondaire alimenté par l'IA

Choisis l'une de ces options et réalise-la en 2 semaines. Documente ton processus.

**Option A : La newsletter IA**
Lance une newsletter hebdomadaire sur un sujet qui te tient à cœur. Utilise l'IA pour faire des recherches, rédiger et corriger. Publie au moins 4 numéros. Suis qui la lit.

**Option B : Le tuteur personnalisé**
Construis un Projet Claude ou un Custom GPT qui t'aide (ou aide un frère/une sœur) à réviser une matière spécifique. Utilise-le chaque jour pendant 2 semaines. Affine-le en fonction de ce qui fonctionne.

**Option C : La vidéo courte YouTube assistée par l'IA**
Fais une vidéo de 60 secondes expliquant un sujet qui te tient à cœur. Utilise l'IA pour le script, les titres et les vignettes. Publie-la. Ne t'inquiète pas des vues — l'objectif c'est de publier.

**Option D : L'aide familiale**
Construis un assistant IA qui aide un proche plus âgé avec quelque chose qui lui pose problème (traduire des documents, écrire des e-mails, comprendre un contrat). Mets-le en place pour qu'il puisse l'utiliser.

### Réflexion sur le projet de clôture

Après ton projet, réponds à ces questions par écrit :

1. Qu'est-ce qui t'a surpris dans le fait de travailler avec l'IA pendant 2 semaines d'affilée ?
2. À quel moment as-tu dû résister à l'envie de laisser l'IA faire trop ?
3. Que construirais-tu ensuite si tu avais le temps ?
4. Comment vas-tu utiliser l'IA différemment après ce cours ?

---

## Ressources pour aller plus loin

### Chaînes YouTube qui valent l'abonnement

- **3Blue1Brown** — cherche sa série « But what is a Neural Network? » pour la meilleure explication visuelle du fonctionnement de l'IA
- **Two Minute Papers** — mises à jour courtes et sans buzz sur la recherche en IA
- **Computerphile** — des universitaires britanniques qui expliquent clairement l'informatique et les concepts d'IA
- **AI Explained** — une couverture sobre des nouveaux développements en IA
- **Matt Wolfe** — des outils IA pratiques et comment les utiliser
- **AI Foundations** — des tutoriels IA accessibles aux débutants

### Vidéos et recherches spécifiques

Cherche ces phrases exactes sur YouTube :

- "How ChatGPT actually works"
- "Prompt engineering tutorial for beginners"
- "Claude vs ChatGPT comparison"
- "AI hallucinations explained"
- "Build a custom GPT tutorial"
- "Zapier AI automation for beginners"

### Cours gratuits à suivre ensuite

- Le « Prompt Engineering Interactive Tutorial » d'Anthropic (gratuit, sur GitHub)
- « Prompting Essentials » de Google (gratuit, sur Google Skillshop)
- « ChatGPT Prompt Engineering for Developers » de DeepLearning.AI (gratuit)
- Les programmes IA d'ALX Africa (spécialement conçus pour les apprenants africains)

### Outils à vraiment utiliser

- **Claude.ai** — niveau gratuit, excellent pour l'écriture et le raisonnement
- **ChatGPT** — niveau gratuit, l'IA générale la plus populaire
- **Perplexity.ai** — moteur de recherche IA qui cite ses sources
- **NotebookLM** — outil Google qui transforme des documents en guides d'étude et podcasts
- **Bitwarden** — gestionnaire de mots de passe gratuit
- **Bing Image Creator** — génération d'images IA gratuite

---

## Tu as terminé le Cours 1

Tu en sais maintenant plus sur l'IA que 95 % des adultes. Ne laisse pas ça te monter à la tête — savoir n'est pas faire. Les jeunes qui gagneront en 2026 sont ceux qui utilisent ces outils chaque jour, construisent de petites choses, et restent curieux quand tout le monde se sent dépassé.

Direction le Cours 2.
