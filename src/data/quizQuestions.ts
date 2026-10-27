export interface QuizOption {
  label: string;
  points: number;
}

export interface QuizQuestion {
  id: number;
  title: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Périmètre exposé",
    question: "Avez-vous des applications web ou APIs accessibles depuis internet ?",
    options: [
      { label: "Oui, plusieurs applications critiques", points: 0 },
      { label: "Oui, une ou deux applications", points: 1 },
      { label: "Non, tout est en interne", points: 2 },
      { label: "Je ne sais pas", points: 0 },
    ],
  },
  {
    id: 2,
    title: "Dernier test de sécurité",
    question: "Quand avez-vous réalisé votre dernier test d'intrusion ?",
    options: [
      { label: "Jamais", points: 0 },
      { label: "Il y a plus de 2 ans", points: 1 },
      { label: "Dans l'année", points: 2 },
      { label: "Nous en faisons régulièrement", points: 3 },
    ],
  },
  {
    id: 3,
    title: "Gestion des accès",
    question: "Utilisez-vous l'authentification multi-facteurs (MFA) ?",
    options: [
      { label: "Non", points: 0 },
      { label: "Seulement pour certains comptes", points: 1 },
      { label: "Pour tous les comptes critiques", points: 2 },
      { label: "Pour l'ensemble des collaborateurs", points: 3 },
    ],
  },
  {
    id: 4,
    title: "Sensibilisation des équipes",
    question: "Vos collaborateurs ont-ils reçu une formation cybersécurité dans l'année ?",
    options: [
      { label: "Non, aucune formation", points: 0 },
      { label: "Une session ponctuelle", points: 1 },
      { label: "Des formations régulières", points: 2 },
      { label: "Programme de sensibilisation structuré", points: 3 },
    ],
  },
  {
    id: 5,
    title: "Gestion des mises a jour",
    question: "Vos systèmes et applications sont-ils mis a jour régulièrement ?",
    options: [
      { label: "Non, nous avons du retard", points: 0 },
      { label: "Partiellement", points: 1 },
      { label: "Oui, avec un processus défini", points: 2 },
      { label: "Oui, avec patch management automatisé", points: 3 },
    ],
  },
  {
    id: 6,
    title: "Conformité réglementaire",
    question: "Êtes-vous soumis a des obligations réglementaires de sécurité ?",
    options: [
      { label: "Oui mais nous ne sommes pas conformes", points: 0 },
      { label: "Oui, en cours de mise en conformité", points: 1 },
      { label: "Oui et nous sommes conformes", points: 2 },
      { label: "Non, pas d'obligation réglementaire", points: 2 },
    ],
  },
  {
    id: 7,
    title: "Sauvegarde et continuité",
    question: "Avez-vous un plan de sauvegarde et de reprise d'activité testé ?",
    options: [
      { label: "Non", points: 0 },
      { label: "Sauvegardes non testées", points: 1 },
      { label: "Sauvegardes testées régulièrement", points: 2 },
      { label: "PRA/PCA complet et testé", points: 3 },
    ],
  },
  {
    id: 8,
    title: "Gestion des incidents",
    question: "Avez-vous une procédure définie en cas de cyberattaque ?",
    options: [
      { label: "Non, nous improviserions", points: 0 },
      { label: "Une procédure informelle", points: 1 },
      { label: "Une procédure documentée", points: 2 },
      { label: "Un SOC ou CSIRT opérationnel", points: 3 },
    ],
  },
  {
    id: 9,
    title: "Sécurité du code",
    question: "Intégrez-vous la sécurité dans votre cycle de développement ?",
    options: [
      { label: "Non", points: 0 },
      { label: "Des revues de code ponctuelles", points: 1 },
      { label: "Des tests de sécurité réguliers", points: 2 },
      { label: "DevSecOps intégré au pipeline", points: 3 },
    ],
  },
  {
    id: 10,
    title: "Visibilité externe",
    question: "Savez-vous ce qu'un attaquant peut voir de votre organisation ?",
    options: [
      { label: "Non, aucune idée", points: 0 },
      { label: "Partiellement", points: 1 },
      { label: "Nous avons fait un audit OSINT", points: 2 },
      { label: "Surveillance continue en place", points: 3 },
    ],
  },
];

export const MAX_SCORE = 28;

export interface QuizLevel {
  key: string;
  label: string;
  title: string;
  description: string;
  color: string;
}

export function getQuizLevel(score: number): QuizLevel {
  if (score <= 7) {
    return {
      key: "CRITIQUE",
      label: "Niveau Critique",
      title: "Votre exposition est significative",
      description: "Plusieurs angles d'attaque critiques ont été identifiés. Une intervention rapide est recommandée.",
      color: "#DC2626",
    };
  }
  if (score <= 14) {
    return {
      key: "FAIBLE",
      label: "Niveau Faible",
      title: "Des vulnérabilités importantes sont présentes",
      description: "Votre sécurité repose sur des bases insuffisantes face aux menaces actuelles.",
      color: "#EA580C",
    };
  }
  if (score <= 21) {
    return {
      key: "MODERE",
      label: "Niveau Modéré",
      title: "Bonne base, des lacunes a combler",
      description: "Vous avez engagé des efforts de sécurité mais des axes critiques restent a renforcer.",
      color: "#EAB308",
    };
  }
  return {
    key: "AVANCE",
    label: "Niveau Avancé",
    title: "Posture de sécurité solide",
    description: "Vous avez une approche mature. Un pentest permettrait de valider vos défenses en conditions réelles.",
    color: "#16A34A",
  };
}
