// Language Switcher Script
const languageSwitcher = document.getElementById("languageSwitcher");

// Define content for both languages
const content = {
    EN: {
        // Navigation and hero section
        about: "About",
        services: "Services",
        team: "Team",
        contact: "Contact Us",
        hero_text: "The power of automation at the service of biology",

        // Pitch section
        pitch_text: "The Genome Foundry is pioneering high-throughput services for engineering life at the next scale.",
        pitch_subtext: "As a cutting edge innovator, what will you build and test at a scale of 1,000? 100,000?",
        pitch2_text: "Build more. Test more.",
        pitch2_subtext: "Our end-to-end solutions unlock the next scale of engineering biology. When time, cost, scalability, and result quality are of utmost importance.",

        // About section
        about_flag: "About Us",
        about_heading: "We offer a consultative approach",
        about_subheading: "With expertise spanning microbial and mammalian cell engineering, and years of practical experience in automation, we’ll work with you to develop optimal approaches to your experiments.",
        advantages_1_name: "Test More",
        advantages_1_description: "Experiment at scale of 96, 384, and larger. Every day.",
        advantages_2_name: "Save time",
        advantages_2_description: "More shots on goal gets you results faster.",
        advantages_3_name: "Save Money",
        advantages_3_description: "Access equipment and experts, without having to find your own.",
        advantages_4_name: "Support for commercialization",
        advantages_4_description: "1:1 coaching with businesses and biotech experts.",

        // Services section
        services_flag: "Services",
        services_heading: "We work with researchers, startups, and corporations across the globe.",
        services_subheading: "Protocols can be automated, performed remotely, and results shipped to your door.\n" +
            "    All data belongs to you and we don’t take equity or IP. \n" +
            "    Priced to keep you cost-competitive and capital efficient.",
        assembly_heading: "High-Throughput DNA Assembly",
        microbial_heading: "Microbial Strain Engineering",
        mammalian_heading: "Mammalian Cell Line Development",
        screening_heading: "High-Throughput Screening",
        assembly_list: [
            ">1500 plasmid assemblies/day",
            "Automated DNA fragment analysis, qPCR",
            "Large scale prep of transfection-grade DNA",
            "Large scale prep of transfection-grade DNA",
        ],
        microbial_list: [
            ">300 transformations & nucleic acid extractions/day",
            "Automated colony picking",
            "Microlitre to >100L culturing capacity",
        ],
        mammalian_list: [
            "Generation and expansion of edited iPSC lines",
            "State-of-the-art cell culture, QC for pluripotency",
            "Multimode cell imaging",
        ],
        screening_list: [
            "H96 autosampler LC-MS",
            "Acoustic, bulk, & traditional liquid handling solutions",
            "FACS, autosampling flow cytometer",
        ],

        // Team members
        team_id: "Meet the Team",
        vincentm: "Director",
        audreym: "Manager, Research Operations",
        nicolasg: "Senior Advisor, Business Development and Partnerships Engagement",
        jingc: "Platform Coordinator - Microbial",
        kevinj: "Platform Coordinator - Mammalian",
        lalitk: "Supervisor - Microbial Bioprocessing",
        flaviaa: "Computer Scientist",
        angelaq: "Cell Editing Specialist",
        mindym: "Assembly and Process Development Specialist",
        support_id: "Support by",

        // Contact section
        form_fullname: "Full Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_button_send: "Send Message",
    },

    FR: {
        // Navigation and hero section
        about: "À propos",
        services: "Services",
        team: "Équipe",
        contact: "Contactez-nous",
        hero_text: "La puissance de l'automatisation au service de la biologie",

        // Pitch section
        pitch_text: "Le Genome Foundry est à la pointe des services à haut débit pour l'ingénierie de la vie à l'échelle suivante.",
        pitch_subtext: "En tant qu'innovateur de pointe, que construirez-vous et testerez-vous à une échelle de 1 000 ? 100 000 ?",
        pitch2_text: "Construisez plus. Testez plus.",
        pitch2_subtext: "Nos solutions de bout en bout débloquent la prochaine échelle de l'ingénierie biologique. Lorsque le temps, le coût, l'évolutivité et la qualité des résultats sont d'une importance capitale.",

        // About section
        about_flag: "À propos de nous",
        about_heading: "Nous offrons une approche consultative",
        about_subheading: "Avec une expertise couvrant l'ingénierie des cellules microbiennes et mammifères, et des années d'expérience pratique en automatisation, nous travaillerons avec vous pour développer des approches optimales pour vos expériences.",
        advantages_1_name: "Testez plus",
        advantages_1_description: "Expérimentez à l'échelle de 96, 384 et plus. Chaque jour.",
        advantages_2_name: "Gagnez du temps",
        advantages_2_description: "Plus de tentatives vous donne des résultats plus rapidement.",
        advantages_3_name: "Économisez de l'argent",
        advantages_3_description: "Accédez à l'équipement et aux experts, sans avoir à les trouver vous-même.",
        advantages_4_name: "Soutien à la commercialisation",
        advantages_4_description: "Coaching personnalisé avec des experts en affaires et en biotechnologie.",

        // Services section
        services_flag: "Services",
        services_heading: "Nous travaillons avec des chercheurs, des startups et des entreprises du monde entier.",
        services_subheading: "Les protocoles peuvent être automatisés, effectués à distance, et les résultats expédiés à votre porte.\n" +
            "    Toutes les données vous appartiennent et nous ne prenons pas d'équité ni de propriété intellectuelle. \n" +
            "    Tarification pour vous garder compétitif en coûts et efficace en capital.",
        assembly_heading: "Assemblage d'ADN à haut débit",
        microbial_heading: "Ingénierie de souches microbiennes",
        mammalian_heading: "Développement de lignées cellulaires mammifères",
        screening_heading: "Dépistage à haut débit",
        assembly_list: [
            ">1500 assemblages de plasmides/jour",
            "Analyse automatisée des fragments d'ADN, qPCR",
            "Préparation à grande échelle de l'ADN de transfection",
            "Préparation à grande échelle de l'ADN de transfection",
        ],
        microbial_list: [
            ">300 transformations et extractions d'acides nucléiques/jour",
            "Prise de colonies automatisée",
            "Capacité de culture de microlitres à >100L",
        ],
        mammalian_list: [
            "Génération et expansion de lignées iPSC modifiées",
            "Culture cellulaire à la pointe de la technologie, QC pour la pluripotence",
            "Imagerie cellulaire multimodale",
        ],
        screening_list: [
            "H96 auto-échantillonneur LC-MS",
            "Solutions de manipulation de liquides acoustiques, en vrac et traditionnelles",
            "FACS, cytomètre de flux à auto-échantillonnage",
        ],

        // Team members
        team_id: "Rencontrez l'équipe",
        vincentm: "Directeur",
        audreym: "Chef des activités de recherche",
        nicolasg: "Conseiller principal - Développement des affaires et engagement des partenaires",
        jingc: "Coordinateur de la plateforme - Microbial",
        kevinj: "Coordinateur de la plateforme - Mammalian",
        lalitk: "Superviseur de l'installation de biotraitement",
        flaviaa: "Informaticienne",
        angelaq: "Spécialiste de l'édition cellulaire",
        mindym: "Spécialiste de l'assemblage et du développement des processus",
        support_id: "Soutenu par",

        // Contact section
        form_fullname: "Nom complet",
        form_email: "Email",
        form_subject: "Sujet",
        form_message: "Message",
        form_button_send: "Envoyer le message",
    },
};

// Function to update content
const updateContent = (language) => {
    for (const [id, textKey] of Object.entries(content[language])) {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                // Update input and textarea values
                element.setAttribute("placeholder", textKey);
            }
            else if (Array.isArray(textKey)) {
                // Update list items
                element.innerHTML = textKey.map(item => `<li class="list-group-item">${item}</li>`).join('');
            } else {
                // Update text content
                element.textContent = textKey;
            }
        }
    }
};

// Initialize with default language
let currentLanguage = "EN";
updateContent(currentLanguage);

// Toggle language on button click
languageSwitcher.addEventListener("click", (event) => {
    event.preventDefault();
    currentLanguage = currentLanguage === "EN" ? "FR" : "EN";
    languageSwitcher.textContent = currentLanguage;
    updateContent(currentLanguage);
});