// src/data/generateQuestions.js

const thématiques = [
  { prefix: "Souvenirs & Débuts", icon: "✨", id: "souvenirs" },
  { prefix: "Vie Quotidienne & Routine", icon: "🏠", id: "quotidien" },
  { prefix: "Personnalité & Défauts", icon: "🧠", id: "personnalite" },
  { prefix: "Amour & Langages affectifs", icon: "❤️", id: "amour" },
  { prefix: "Voyages & Évasion", icon: "✈️", id: "voyages" },
  { prefix: "Gourmandise & Cuisine", icon: "🍕", id: "cuisine" },
  { prefix: "Projets & Futur", icon: "🔮", id: "futur" },
  { prefix: "Culture Pop & Films", icon: "🎬", id: "pop" },
  { prefix: "Situations Absurdes & Imprévus", icon: "🤪", id: "situations" },
  { prefix: "Valeurs & Secrets", icon: "🔒", id: "valeurs" }
];

const questionTemplates = [
  {
    q: "Quelle est ma réaction quand {sujet} ?",
    opts: ["Je garde mon calme", "Je m'agace tout de suite", "J'en ris", "Je te demande de l'aide"]
  },
  {
    q: "Si on devait faire un choix concernant {sujet}, je choisirais :",
    opts: ["L'option la plus sûre", "L'option la plus aventureuse", "Ce que tu préfères toi", "Je prendrais du temps à décider"]
  },
  {
    q: "À quel point {sujet} est important pour moi au quotidien ?",
    opts: ["Priorité numéro 1", "Assez important", "Secondaire", "Pas du tout important"]
  },
  {
    q: "Quel est mon meilleur souvenir en rapport avec {sujet} ?",
    opts: ["Un moment drôle à deux", "Une surprise inattendue", "Un moment calme et intime", "Une petite victoire partagée"]
  },
  {
    q: "Si je pouvais changer quelque chose par rapport à {sujet} :",
    opts: ["Rien du tout, c'est parfait", "Y consacrer plus de temps", "Changer totalement d'approche", "Faire en sorte qu'on le partage davantage"]
  },
  {
    q: "Comment gères-tu mes manies quand il s'agit de {sujet} ?",
    opts: ["Tu les trouves mignonnes", "Tu en rigoles", "Ça t'agace gentiment", "Tu les ignores"]
  },
  {
    q: "Quel mot décrit le mieux mon attitude face à {sujet} ?",
    opts: ["Passionné(e)", "Détendu(e)", "Perfectionniste", "Imprévisible"]
  },
  {
    q: "Si on devait organiser une journée autour de {sujet} :",
    opts: ["Je planifie tout à la minute", "On improvise totalement", "Tu gères l'organisation", "On demande des idées autour de nous"]
  },
  {
    q: "Qu'est-ce qui me ferait le plus plaisir en lien avec {sujet} ?",
    opts: ["Une attention inattendue", "Un compliment sincère", "Qu'on en discute longuement", "Qu'on le fasse ensemble ce soir"]
  },
  {
    q: "Sur une échelle de complicité concernant {sujet}, on est :",
    opts: ["100% synchronisés", "Complémentaires (opposés mais équilibrés)", "En constante amélioration", "Deux mondes différents !"]
  }
];

const sujetsParTheme = [
  // 10 variations par thématique -> 10 x 10 = 100 catégories au total
  ["notre premier rendez-vous", "nos débuts", "notre premier baiser", "nos premiers messages", "la première rencontre avec les proches", "notre premier voyage", "nos vieux souvenirs", "notre première dispute", "nos anniversaires", "nos photos ensemble"],
  ["le réveil le matin", "le rangement à la maison", "les tâches ménagères", "les courses du week-end", "les soirées télé", "les repas du soir", "la gestion du temps", "les habitudes de sommeil", "la déco", "le budget du quotidien"],
  ["la gestion du stress", "mes petits défauts", "mon humeur du matin", "ma patience", "ma jalousie", "mon côté têtu", "mes choix de vie", "ma générosité", "ma franchise", "mon sens de l'humour"],
  ["les câlins et l'affection", "les mots doux", "les petites surprises", "les moments à deux", "les preuves d'amour", "les cadeaux", "les attentions du quotidien", "notre complicité", "la tendresse en public", "les déclarations"],
  ["les vacances de rêve", "les week-ends improvisés", "les road-trips", "la plage vs la montagne", "les valises", "les vols et transports", "les découvertes culinaires en voyage", "les activités extrêmes", "les hôtels chics", "les balades en nature"],
  ["le choix du resto", "les desserts", "mes talents en cuisine", "grignoter devant un film", "la nourriture piquante", "les commandes à emporter", "le petit-déjeuner", "partager mon assiette", "les snacks de minuit", "tester de nouvelles recettes"],
  ["notre future maison", "les animaux de compagnie", "les grands voyages à venir", "nos carrières", "nos rêves communs", "notre retraite", "les projets de cette année", "les investissements", "notre style de vie futur", "nos objectifs personnels"],
  ["les séries à binge-watcher", "les choix de films", "la musique en voiture", "les jeux de société", "les réseaux sociaux", "les concerts", "les jeux vidéo", "les goûts cinématographiques", "les playlists de soirée", "les tendances du moment"],
  ["une panne de voiture", "se perdre en ville", "un plat totalement brûlé", "une araignée dans la pièce", "perdre ses clés", "oublier un prénom", "une batterie à 1%", "une soirée déguisée", "rater un train", "un imprévu météo"],
  ["la loyauté", "la confiance", "nos secrets partagés", "nos valeurs morales", "notre soutien mutuel", "nos ambitions", "l'honnêteté", "notre vision de la famille", "l'indépendance", "notre philosophie de vie"]
];

export function generate1000Questions() {
  const categories = [];

  thématiques.forEach((theme, indexTheme) => {
    const sujets = sujetsParTheme[indexTheme];

    sujets.forEach((sujet, indexSujet) => {
      const catId = `${theme.id}_${indexSujet + 1}`;
      const catName = `${theme.icon} ${theme.prefix} : ${sujet.charAt(0).toUpperCase() + sujet.slice(1)}`;
      
      const questions = questionTemplates.map((template, qIndex) => ({
        id: qIndex + 1,
        question: template.q.replace("{sujet}", sujet),
        options: template.opts
      }));

      categories.push({
        category_id: catId,
        category_name: catName,
        description: `10 questions QCM autour de : ${sujet}`,
        questions: questions
      });
    });
  });

  return categories;
}