export const languages = {
  en: "English",
  fr: "Français",
  ar: "العربية",
} as const

export type Language = keyof typeof languages

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Meski Mohammed",
      subtitle: "Full-Stack Web Developer",
      description: "Passionate full-stack developer crafting performant web solutions with modern technologies.",
      cta: "View My Work",
    },
    about: {
      title: "About Me",
      description:
        "I'm a passionate full-stack web developer with expertise in front-end and back-end technologies. With hands-on experience in modern frameworks and cloud technologies, I'm rigorous, curious, and motivated to join a dynamic team where I can apply my skills and contribute to innovative projects.",
      interests: "Interests",
      interestsList: ["Video Games", "Self-learning", "Problem Solving", "Team Collaboration"],
    },
    experience: {
      title: "Experience",
      internship1: {
        title: "PFE Internship",
        company: "RYD Mediatech",
        period: "Apr 2024 - May 2024",
        description:
          "Developed an HR management website involving sensitive data manipulation and document flow management.",
      },
      internship2: {
        title: "Internship",
        company: "RYD Mediatech",
        period: "Aug 2024 - Present",
        description:
          "Complete development of Madani Quran Award website, an international Quranic competition platform with online registration, candidate management, and real-time tracking.",
      },
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Platforms",
      frontendSkills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "GSAP"],
      backendSkills: ["Node.js", "Express", "NestJS", "Laravel", "Livewire", "Python"],
      toolsSkills: ["MySQL", "MongoDB", "Google Cloud", "Git", "HTML", "CSS", "Java", "C/C++"],
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
    },
    contact: {
      title: "Get In Touch",
      description: "Feel free to reach out for collaborations or just a friendly hello.",
      email: "Email",
      phone: "Phone",
      social: "Social Links",
      downloadResume: "Download Resume",
    },
    footer: {
      copyright: "All rights reserved.",
      madeWith: "Made with React, Tailwind & GSAP",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      title: "Meski Mohammed",
      subtitle: "Développeur Web Full-Stack",
      description:
        "Développeur full-stack passionné créant des solutions web performantes avec les technologies modernes.",
      cta: "Voir Mon Travail",
    },
    about: {
      title: "À Propos de Moi",
      description:
        "Je suis un développeur web full-stack passionné avec une expertise en technologies front-end et back-end. Avec une expérience pratique des frameworks modernes et des technologies cloud, je suis rigoureux, curieux et motivé à rejoindre une équipe dynamique où je peux appliquer mes compétences et contribuer à des projets innovants.",
      interests: "Centres d'intérêt",
      interestsList: ["Jeux vidéo", "Apprentissage autodidacte", "Résolution de problèmes", "Collaboration d'équipe"],
    },
    experience: {
      title: "Expérience",
      internship1: {
        title: "Stage PFE",
        company: "RYD Mediatech",
        period: "Avr 2024 - Mai 2024",
        description:
          "Développement d'un site web de gestion RH impliquant la manipulation de données sensibles et la gestion de flux documentaires.",
      },
      internship2: {
        title: "Stage de Perfectionnement",
        company: "RYD Mediatech",
        period: "Août 2024 - Actuellement",
        description:
          "Développement complet du site web Madani Quran Award, une plateforme internationale de concours quranique intégrant l'inscription en ligne, la gestion des candidats et le suivi en temps réel.",
      },
    },
    skills: {
      title: "Compétences",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Outils & Plateformes",
      frontendSkills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "GSAP"],
      backendSkills: ["Node.js", "Express", "NestJS", "Laravel", "Livewire", "Python"],
      toolsSkills: ["MySQL", "MongoDB", "Google Cloud", "Git", "HTML", "CSS", "Java", "C/C++"],
    },
    projects: {
      title: "Projets",
      viewProject: "Voir le Projet",
    },
    contact: {
      title: "Me Contacter",
      description: "N'hésitez pas à me contacter pour des collaborations ou simplement pour dire bonjour.",
      email: "Email",
      phone: "Téléphone",
      social: "Liens Sociaux",
      downloadResume: "Télécharger le CV",
    },
    footer: {
      copyright: "Tous droits réservés.",
      madeWith: "Créé avec React, Tailwind & GSAP",
    },
  },
  ar: {
    nav: {
      about: "عني",
      experience: "الخبرة",
      projects: "المشاريع",
      contact: "اتصل",
    },
    hero: {
      title: "مسكي محمد",
      subtitle: "مطور ويب Full-Stack",
      description: "مطور ويب full-stack شغوف بإنشاء حلول ويب عالية الأداء باستخدام التقنيات الحديثة.",
      cta: "عرض أعمالي",
    },
    about: {
      title: "عني",
      description:
        "أنا مطور ويب full-stack شغوف بخبرة في تقنيات front-end و back-end. مع خبرة عملية في الأطر الحديثة وتقنيات السحابة، أنا دقيق وفضولي وحريص على الانضمام إلى فريق ديناميكي حيث يمكنني تطبيق مهاراتي والمساهمة في مشاريع مبتكرة.",
      interests: "الاهتمامات",
      interestsList: ["ألعاب الفيديو", "التعلم الذاتي", "حل المشاكل", "التعاون الجماعي"],
    },
    experience: {
      title: "الخبرة",
      internship1: {
        title: "تدريب PFE",
        company: "RYD Mediatech",
        period: "أبريل 2024 - مايو 2024",
        description: "تطوير موقع ويب لإدارة الموارد البشرية يتضمن التعامل مع البيانات الحساسة وإدارة تدفق المستندات.",
      },
      internship2: {
        title: "تدريب التطوير",
        company: "RYD Mediatech",
        period: "أغسطس 2024 - الحالي",
        description:
          "التطوير الكامل لموقع جائزة المداني للقرآن، منصة مسابقة قرآنية دولية مع التسجيل عبر الإنترنت وإدارة المتسابقين والتتبع في الوقت الفعلي.",
      },
    },
    skills: {
      title: "المهارات",
      frontend: "Frontend",
      backend: "Backend",
      tools: "الأدوات والمنصات",
      frontendSkills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "GSAP"],
      backendSkills: ["Node.js", "Express", "NestJS", "Laravel", "Livewire", "Python"],
      toolsSkills: ["MySQL", "MongoDB", "Google Cloud", "Git", "HTML", "CSS", "Java", "C/C++"],
    },
    projects: {
      title: "المشاريع",
      viewProject: "عرض المشروع",
    },
    contact: {
      title: "تواصل معي",
      description: "لا تتردد في التواصل معي للتعاون أو مجرد قول مرحبا.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      social: "الروابط الاجتماعية",
      downloadResume: "تحميل السيرة الذاتية",
    },
    footer: {
      copyright: "جميع الحقوق محفوظة.",
      madeWith: "تم إنشاؤه باستخدام React و Tailwind و GSAP",
    },
  },
} as const
