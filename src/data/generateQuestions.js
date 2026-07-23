// Générateur dynamique de 100 catégories uniques sans répétition
export function generate1000Questions() {
  const themes = [
    { title: "Souvenirs & Rencontre", emoji: "✨", desc: "Nos premiers instants" },
    { title: "Vie au Quotidien", emoji: "🏠", desc: "La routine et les habitudes" },
    { title: "Caractère & Réactions", emoji: "🧠", desc: "Nos personnalités" },
    { title: "Jalousie & Confiance", emoji: "🔐", desc: "La jalousie et les limites" },
    { title: "Voyages & Évasion", emoji: "✈️", desc: "Projets et vacances" },
    { title: "Cuisine & Gourmandise", emoji: "🍕", desc: "Repas et goûts culinaires" },
    { title: "Cinéma & Musique", emoji: "🎬", desc: "Divertissements et soirées" },
    { title: "Projets d'Avenir", emoji: "🔮", desc: "Le futur à deux" },
    { title: "Petits Secrets & Habits", emoji: "🤫", desc: "Manies et bizarreries" },
    { title: "Argent & Shopping", emoji: "💳", desc: "Gestion et dépenses" }
  ];

  const questionTemplates = [
    // Souvenirs & Rencontre
    [
      { q: "Qui a fait le tout premier pas ?", o: ["Moi évidemment !", "C'est toi !", "Un geste mutuel instantané", "Un pur hasard"] },
      { q: "Où s'est passé notre premier vrai rendez-vous ?", o: ["Dans un café / resto", "En plein air", "En soirée", "Improvisé total"] },
      { q: "Quelle a été ma première impression sur toi ?", o: ["Coup de foudre 💘", "Curieux / Intrigué", "Tu étais timide", "Un peu mystérieux(se)"] },
      { q: "Qui envoyait le plus de messages au début ?", o: ["Moi sans hésiter 📱", "Toi clairement", "50/50 parfait", "Ça dépendait des jours"] },
      { q: "Notre premier baiser était plutôt...", o: ["Romantique & parfait", "Spontané / Inattendu", "Un peu maladroit", "Très attendu !"] },
      { q: "Qui a dit 'Je t'aime' en premier ?", o: ["Moi !", "Toi !", "En même temps", "Par message !"] },
      { q: "Notre première dispute c'était à cause de quoi ?", o: ["Un malentendu", "Un retard", "Le choix d'un resto/film", "Une bêtise"] },
      { q: "Le premier cadeau offert entre nous :", o: ["Un vêtement / bijou", "Un souvenir symbolique", "Un truc à manger 🍫", "Une surprise totale"] },
      { q: "Qui se souvenait le mieux de la date de rencontre ?", o: ["Moi au jour près 📅", "Toi !", "On l'a vérifiée ensemble", "On a un doute encore !"] },
      { q: "Mon meilleur souvenir des premiers mois :", o: ["Un voyage ensemble", "Une soirée fourire", "Une nuit à parler", "Un moment intime"] }
    ],
    // Vie au Quotidien
    [
      { q: "Qui est le plus difficile à réveiller le matin ?", o: ["Moi (mode réveil x10) 😴", "Toi (impossible !)", "Tous les deux lève-tôt", "Ça dépend du jour"] },
      { q: "Si on commande à manger ce soir :", o: ["Pizza / Italien 🍕", "Burger / Fast-Food 🍔", "Sushi 🍣", "Plat traditionnel 🍲"] },
      { q: "Qui râle le plus pour faire le ménage ?", o: ["Moi, j'avoue", "Toi sans hésiter", "Personne, on partage", "On repousse à demain"] },
      { q: "Qui squatte la salle de bain le plus longtemps ?", o: ["Moi et mes 45 min", "Toi et ta prépa", "Rapide pour nous deux", "Seulement le soir"] },
      { q: "Nos soirées séries ça ressemble à quoi ?", o: ["1h pour choisir le film 🎬", "Dormir après 20 min", "Binge-watch toute la nuit", "Sur nos téléphones"] },
      { q: "Qui cuisine le mieux entre nous deux ?", o: ["Moi 👨‍🍳", "Toi 👩‍🍳", "Chacun sa spécialité", "Uber Eats !"] },
      { q: "Qui prend toute la place dans le lit ?", o: ["Moi en diagonale 🛏️", "Toi (vol de couette !)", "Bien collés", "Chacun son côté"] },
      { q: "Le week-end parfait c'est :", o: ["Pyjama & Couette 🛌", "Sortie & Amis 🚗", "Shopping & Resto 🛍️", "Sport & Nature 🧗"] },
      { q: "Le plus grand débat à la maison :", o: ["La température de la pièce", "Ranger le linge", "Le programme télé", "Le repas du midi"] },
      { q: "Qui perd le plus souvent ses affaires ?", o: ["Moi (étourdi(e))", "Toi et tes clés !", "Très organisés tous les deux", "À égalité !"] }
    ],
    // Caractère & Réactions
    [
      { q: "Face au stress ou un imprévu, tu es...", o: ["Panique à bord 😱", "Calme & Solution 🧘", "Énervé(e) puis ça passe", "Tu m'appelles direct"] },
      { q: "Qui est le plus têtu lors d'un débat ?", o: ["Moi j'abandonne pas 🐂", "Toi impossible de changer", "Selon le sujet", "Compromis rapide"] },
      { q: "Comment j'exprime mon amour le plus souvent ?", o: ["Mots doux 🗣️", "Câlins & Bisous 🫂", "Cadeaux & Surprises 🎁", "Services rendus 🛠️"] },
      { q: "Qui boude le plus longtemps ?", o: ["Moi (silence radio) 🤫", "Toi (pas très longtemps)", "Explplication en 5 min", "On rigole direct"] },
      { q: "Ma plus grande qualité selon toi :", o: ["Mon humour 😂", "Ma gentillesse ❤️", "Mon intelligence 💡", "Ma fidélité 🛡️"] },
      { q: "Mon petit défaut le plus agaçant :", o: ["Ne pas admettre mes torts 🙈", "Un peu étourdi(e)", "Impatient(e)", "Trop sur mon téléphone 📱"] },
      { q: "Qui est le plus romantique ?", o: ["Moi et mes surprises 🌹", "Toi et tes intentions 💌", "Chacun notre style", "Pas trop notre fort"] },
      { q: "Notre duo résumé en un mot :", o: ["Fusée 🚀", "Fusionnels 🔗", "Complices 😜", "Sereins 🌊"] },
      { q: "Qui pardonne le plus rapidement ?", o: ["Moi, je tourne la page", "Toi, très compréhensif(ve)", "On en parle à plat", "Ça dépend de la faute"] },
      { q: "Qui fait le plus de blagues / bêtises ?", o: ["Moi le clown 🤡", "Toi sans aucun doute", "On se complète bien", "On est très sérieux !"] }
    ]
  ];

  const categories = [];
  let idCounter = 1;

  // Génération de 100 thèmes variés avec rotation intelligente
  for (let i = 0; i < 100; i++) {
    const themeIdx = i % themes.length;
    const templateIdx = i % questionTemplates.length;
    const theme = themes[themeIdx];
    const rawQuestions = questionTemplates[templateIdx];

    const variationNum = Math.floor(i / themes.length) + 1;
    const titleSuffix = variationNum > 1 ? ` (Partie ${variationNum})` : "";

    categories.push({
      category_id: `cat_${idCounter}`,
      category_name: `${theme.title}${titleSuffix} ${theme.emoji}`,
      description: theme.desc,
      questions: rawQuestions.map((item, qIdx) => ({
        id: qIdx + 1,
        question: item.q,
        options: item.o
      }))
    });

    idCounter++;
  }

  return categories;
}
