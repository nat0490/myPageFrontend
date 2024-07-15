type Item = {
    id: number,
    nom: string,
    date: 
        {debut: string,
        fin: string,}
    ,    
    type: string,
//etude / diplome / travail / naissance / look
    description: string,
    skills: string[],
    lieu: string,
    image: string,
}


const monParcours: Item[] = [
    {
        id: 1,
        nom: "Naissance",
        date: 
            {debut: "03/04/1990",
            fin: "03/04/1990",}
        ,    
        type: "naissance",
    //etude / diplome / autre
        description: "Arrivée à 7h10.",
        skills:[""],
        lieu: "Villeurbanne, 69100",
        image: "string",
    },
    {
        id: 2,
        nom: "Primaire",
        date: 
            {debut: "1993",
            fin: "2000",}
        ,    
        type:"etude",
        description: "Fait marquant: a sauté le CM1.",
        skills:["curiosité"],
        lieu:"Meyzieu, 69330",
        image: "string",
    },
    {
        id: 3,
        nom: "Collège",
        date: 
            {debut: "2000",
            fin: "2004",}
        ,    
        type:"etude",
        description: "",
        skills:[""],
        lieu:"Meyzieu, 69330",
        image: "string",
    },
    {
        id: 4,
        nom: "Lycée",
        date: 
            {debut: "2004",
            fin: "2007",}
        ,    
        type:"diplome",
        description: "Passionné par les Math, la physique et les sciences de l'ingénieur. Je n'ai pas pris cette option car un prof nous avait dit \"Attention, c'est 8h par semaines cette matière\". J'obtient mon Bac S grace à mes matières de prédilection.",
        skills:["Bac S"],
        lieu:"Decines, 69150",
        image: "string",
    },
    {
        id: 5,
        nom: "Universitée",
        date: 
            {debut: "2007",
            fin: "2009",}
        ,    
        type:"etude",
        description: "La découverte de la vie en université. Partie en économie gestion, je n'ai validé que la majeure du premier semestre. J'ai voulu me réorienter par la suite sur une Licence Maths Info à l'Universitée Lyon 1.",
        skills:[""],
        lieu:"Universitée Jean Moulin Lyon 3",
        image: "string",
    },
    {
        id: 6,
        nom: "Mc Donald's",
        date: 
            {debut: "10/2009",
            fin: "09/2019",}
        ,    
        type:"travail",
        description: "Fait marquant: Comprendre d'où venait le problème pour ne pas rappeler le support quand il se représentait. J'adorais gerer plusieurs choses, apprendre, comprendre et que tout s'emboite parfaitement. A la base c'était temporaire, avant de reprendre mes études. Et puis ça a duré 10 ans. J'ai évolué progressivement jusqu'à directrice adjointe. J'ai également été directrice pendant 6 mois sur un restaurant 24/24 et ça a été une période compliqué. Faisant partie d'une franchise, j'ai fait presque une dizaine de restaurants.",
        skills:["Rigueur", "Organisation", "Autonomie", "Détermination","Consciencieuse", "Polyvalence", "travail d'équipe"],
        lieu:"Lyon Est",
        image: "string",
    },
    {
        id: 7,
        nom: "Geodis",
        date: 
            {debut: "10/2019",
            fin: "08/2023",}
        ,    
        type:"travail",
        description: "Fait marquant: On m'a souvent dit que j'étais forte techniquement, surement parce que ça m'interesse énormément. Les tâches variées, l'apprentissage, la polyvalence et le rythme étaient des choses stimulantes. J'ai évolué de chef d'équipe à responsable d'activité sur la partie préparation-expédition de commandes. ",
        skills:["Analyse", "Organisation", "Autonomie", "Consciencieuse", "Polyvalence", "travail d'équipe"],
        lieu:"Satolas et bonce, 39290",
        image: "string",
    },
    {
        id: 8,
        nom: "Immersion Professionnelle - Everial",
        date: 
            {debut: "04/2023",
            fin: "04/2023",}
        ,    
        type:"look",
        description: "Objectif: découvrir la travail d'un développeur en entreprise sur une semaine pour vérifier si la réalité correspondait à l'idée que je m'en faisait avant d'entamer une reconversion professionnelle.",
        skills:["curiosité"],
        lieu:"Technolac, 73770",
        image: "string",
    },
    {
        id: 9,
        nom: "RNCP6 Concepteur développeur d'applications Web & Mobile",
        date: 
            {debut: "10/2023",
            fin: "06/2024",}
        ,    
        type:"diplome",
    //etude / diplome / autre
        description: "Bootcamp de 10 semaines focus Javascript (React & React native). Réalisation de 10 projets pendant cette formation. Expérience enrichissante et intensive mais assez courte (J'ai adoré apprendre et pratiquer de nouvelles choses).",
        skills:["Esprit logique"],
        lieu:"Remote",
        image: "string",
    },
]


export default monParcours;