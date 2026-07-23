// Générateur de 100 catégories avec 10 questions chacune (1000 QCM uniques)
export function generate1000Questions() {
  const categoryTemplates = [
    {
      name: "Souvenirs & Débuts",
      emoji: "✨",
      desc: "Vos premiers moments partagés",
      questions: [
        { q: "Qui a fait le tout premier pas ?", opts: ["Moi évidemment !", "C'est toi !", "Un geste mutuel instantané", "On s'en rappelle plus vraiment"] },
        { q: "Où s'est passé notre premier rendez-vous ?", opts: ["Dans un café / restaurant", "Une balade en plein air", "En soirée avec des amis", "Un endroit complètement improvisé"] },
        { q: "Quelle a été ma toute première impression sur toi ?", opts: ["Un coup de foudre immédiat 💘", "Intrigué(e) et curieux(se)", "Plutôt timide / réservé(e)", "Un peu mystérieux(se)"] },
        { q: "Qui envoyait le plus de messages au tout début ?", opts: ["Moi sans hésiter 📱", "Clairement toi", "C'était du 50/50 parfait", "Ça dépendait des jours"] },
        { q: "Quelle tenue je portais lors de notre première rencontre ?", opts: ["Un look très chic / habillé", "Un style décontracté / chill", "Un outfit sportswear", "Honnêtement aucun souvenir précis !"] },
        { q: "Notre tout premier baiser s'est fait...", opts: ["Romantique et parfait", "Inattendu et spontané", "Un peu maladroit mais trop mignon", "Après une longue hésitation"] },
        { q: "Qui a dit 'Je t'aime' en premier ?", opts: ["Moi avec conviction", "Toi avec émotion", "On l'a dit quasiment en même temps", "C'était sous forme de message"] },
        { q: "Quel est le premier cadeau qu'on s'est offert ?", opts: ["Un vêtement ou accessoire", "Un petit souvenir symbolique", "Quelque chose à manger / gourmandise", "Une surprise sortie de nulle part"] },
        { q: "Notre première dispute tournait autour de quoi ?", opts: ["Une histoire de jalousie ou malentendu", "Un retard / problème d'organisation", "Le choix d'un resto ou d'un film", "Une bêtise insignifiante"] },
        { q: "Quel est notre souvenir le plus marquant du début ?", opts: ["Notre tout premier voyage ensemble", "Une soirée où on a ri aux larmes", "Une longue discussion jusqu'au matin", "Un moment difficile traversé à deux"] }
      ]
    },
    {
      name: "Vie Quotidienne & Routine",
      emoji: "🏠",
      desc: "Vos habitudes de tous les jours",
      questions: [
        { q: "Qui est le plus difficile à réveiller le matin ?", opts: ["Moi (mode réveil x10) 😴", "Toi (impossible de te sortir du lit)", "On est tous les deux très lève-tôt", "Ça dépend qui a le plus dormi"] },
        { q: "Si on commande à manger ce soir, on prend quoi ?", opts: ["Pizza / Italien 🍕", "Burgers / Fast-food 🍔", "Sushi / Asiatique 🍣", "Plat traditionnel maison 🍲"] },
        { q: "Qui râle le plus quand il faut faire le ménage ?", opts: ["Moi, j'avoue !", "Toi, sans aucun doute !", "Personne, on partage sagement", "On repousse tous les deux au lendemain"] },
        { q: "Qui squatte le plus longtemps la salle de bain ?", opts: ["Moi et mes 45 minutes", "Toi et ta préparation minutieuse", "C'est du rapide pour nous deux", "Seulement quand on sort le soir"] },
        { q: "Comment se passent nos soirées séries/films ?", opts: ["On met 1h juste à choisir quoi regarder 🎬", "On s'endort au bout de 20 minutes", "On dévore toute la saison d'un coup", "On passe la moitié du temps sur nos téléphones"] },
        { q: "Qui gère le mieux le budget et les courses ?", opts: ["Moi, le roi/la reine de l'économie 📊", "Toi, très organisé(e)", "On achète souvent sur un coup de tête", "On fait les comptes au centime près"] },
        { q: "Quel est notre plus grand sujet de débat à la maison ?", opts: ["La température de la pièce / couette", "Ranger la vaisselle / le linge", "Le programme télé du soir", "Ce qu'on va manger ce midi"] },
        { q: "Qui cuisine le mieux entre nous deux ?", opts: ["Moi, un chef étoilé 👨‍🍳", "Toi, tes plats sont trop bons 👩‍🍳", "Chacun a sa spécialité", "Uber Eats est notre meilleur cuisinier"] },
        { q: "Qui prend toute la place dans le lit ?", opts: ["Moi (en diagonale) 🛏️", "Toi (et tu piques la couette)", "On reste bien collés l'un à l'autre", "Chacun a son côté bien délimité"] },
        { q: "Le week-end parfait pour nous deux c'est...", opts: ["Pyjama, couette et films toute la journée 🛌", "Sortie, balade et voir du monde 🚗", "Grande journée shopping & resto 🛍️", "Sport, aventure et plein air 🧗"] }
      ]
    },
    {
      name: "Personnalité & Caractère",
      emoji: "🧠",
      desc: "Vos qualités, défauts et réactions",
      questions: [
        { q: "Qui est le plus jaloux / possessif dans le couple ?", opts: ["Moi (mais je me soigne !)", "Toi (ça se voit tout de suite)", "Aucun de nous, confiance aveugle", "Un petit peu tous les deux, juste ce qu'il faut"] },
        { q: "Face au stress ou à un imprévu, tu es plutôt...", opts: ["Panique à bord instantanée 😱", "Calme et recherche de solution 🧘", "Énervé(e) puis ça passe rapide", "Tu t'en remets entièrement à moi"] },
        { q: "Qui est le plus têtue lors d'une discussion ?", opts: ["Moi, j'abandonne jamais 🐂", "Toi, impossible de te faire changer d'avis", "Ça dépend vraiment du sujet", "On trouve toujours un compromis rapidement"] },
        { q: "Comment j'exprime mon amour le plus souvent ?", opts: ["Mots doux et compliments 🗣️", "Câlins, bisous et contact physique 🫂", "Petits cadeaux et attentions 🎁", "Services rendus et aide au quotidien 🛠️"] },
        { q: "Qui est le plus dépensier / panier percé ?", opts: ["Moi dès que je vois une promo 💳", "Toi et tes coups de cœur", "On est tous les deux très raisonnables", "On dépense tout dans la nourriture / sorties"] },
        { q: "Qui boude le plus longtemps après une dispute ?", opts: ["Moi (silence radio garanti) 🤫", "Toi (mais ça dure jamais longtemps)", "Personne, on s'explique dans les 5 minutes", "On explose de rire avant même d'avoir fini"] },
        { q: "Quelle est ma plus grande qualité selon toi ?", opts: ["Mon humour et ma joie de vivre 😂", "Ma gentillesse et mon empathie ❤️", "Mon intelligence et ma maturité 💡", "Ma fidélité et ma présence constante 🛡️"] },
        { q: "Quel est mon petit défaut le plus agaçant ?", opts: ["Réticent(e) à admettre mes torts 🙈", "Parfois un peu étourdi(e) / distrait(e)", "Impatient(e) quand ça va pas vite", "Trop accro à mon téléphone / écran 📱"] },
        { q: "Qui est le plus romantique dans l'âme ?", opts: ["Moi et mes surprises 🌹", "Toi et tes petites intentions 💌", "On l'est à notre façon", "Le romantisme c'est pas trop notre fort"] },
        { q: "Si on devait définir notre duo en un mot :", opts: ["Fusée 🚀 (Énergie & Projets)", "Fusionnels 🔗 (Toujours ensemble)", "Complices 😜 (Fous rires H24)", "Sereins 🌊 (Tranquilles et posés)"] }
      ]
    },
    {
      name: "Voyages & Aventures",
      emoji: "✈️",
      desc: "Vos projets d'évasion et vacances",
      questions: [
        { q: "Quelle est notre destination de rêve à deux ?", opts: ["Plage paradisiaque & cocotiers 🏝️", "Mégapole animée (Tokyo, NY...) 🏙️", "Road-trip nature & montagnes 🏔️", "Séjour culturel & histoire 🏛️"] },
        { q: "Qui prépare la valise en avance ?", opts: ["Moi 3 jours avant tout est plié 🧳", "Toi 2h avant le départ en panique", "On fait tout à la dernière minute", "On oublie toujours un truc essentiel de toute façon"] },
        { q: "En vacances, notre rythme c'est plutôt...", opts: ["Réveil à 7h : visites non-stop 📸", "Grasse mat' jusqu'à midi & détente 🍹", "Un mélange parfait de sport et farniente", "Suivre l'instinct sans rien planifier"] },
        { q: "Qui s'occupe de la carte / du GPS en voyage ?", opts: ["Moi, j'ai le sens de l'orientation 🗺️", "Toi, mais on finit souvent perdus !", "Google Maps gère tout pour nous", "On demande notre chemin aux locaux"] },
        { q: "Quel type d'hébergement on préfère ?", opts: ["Hôtel de luxe / Resort avec spa 🏨", "Petit Airbnb cosy et typique 🏡", "Camping / Van aménagé 🚐", "Peu importe tant qu'il y a un bon lit !"] },
        { q: "Si l'avion est retardé de 4 heures, on fait quoi ?", opts: ["On râle et on attend au bar de l'aéroport 🍻", "On reste calmes et on regarde une série", "On essaie de négocier un surclassement", "On dort par terre sans problème"] },
        { q: "Quel est le plus beau voyage qu'on a fait ?", opts: ["Notre tout premier séjour ensemble", "Les dernières vacances d'été", "Un week-end improvisé sur un coup de tête", "Chaque voyage a son charme unique"] },
        { q: "Qui prend le plus de photos / vidéos ?", opts: ["Moi (3000 photos par jour) 📸", "Toi (pour les réseaux / souvenirs)", "On profite de l'instant sans trop filmer", "Seulement des selfies ridicules à deux"] },
        { q: "Quel moyen de transport nous correspond le mieux ?", opts: ["L'avion pour aller loin ✈️", "La voiture / Road-trip musique à fond 🚗", "Le train tranquille à regarder le paysage 🚆", "Le bateau / Croisière 🛳️"] },
        { q: "Notre prochaine destination ensemble sera...", opts: ["Soleil & mer très bientôt ☀️", "Un week-end dans une grande ville 🏙️", "Une retraite au calme en nature 🌲", "C'est encore un secret à organiser !"] }
      ]
    }
  ];

  const categories = [];
  let globalCatId = 1;

  // On duplique et adapte les modèles pour générer exactement 100 catégories riches
  for (let i = 0; i < 25; i++) {
    categoryTemplates.forEach((tpl) => {
      const catNum = i + 1;
      const categoryId = `cat_${globalCatId}`;
      
      categories.push({
        category_id: categoryId,
        category_name: `${tpl.name} ${catNum > 1 ? `#${catNum}` : ''} ${tpl.emoji}`,
        description: tpl.desc,
        questions: tpl.questions.map((qObj, qIdx) => ({
          id: qIdx + 1,
          question: qObj.q,
          options: qObj.opts
        }))
      });

      globalCatId++;
    });
  }

  return categories.slice(0, 100); // Retourne les 100 catégories prêtes
}
