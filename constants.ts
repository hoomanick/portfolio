
import { Education, Experience, Publication, SkillCategory, Honor } from './types';

export const PERSONAL_INFO = {
  name: "Hooman Nick",
  role: "M.Sc. Structural Engineer & Researcher",
  email: "hooman.nick@gmail.com",
  location: "Tehran, Iran",
  // Using a generated avatar as a placeholder since the previous image link was broken.
  image: "https://ui-avatars.com/api/?name=Hooman+Nick&background=0f172a&color=fff&size=512&font-size=0.35",
  summary: "M.Sc. structural engineer specializing in Structural Health Monitoring (SHM) of bridges and frames. Proficient in finite element (FE) modelling with ABAQUS and in Python/MATLAB machine learning (ML) pipelines using modal data to quantify damage and estimate severity with artificial neural networks (ANNs).",
  socials: {
    linkedin: "https://www.linkedin.com/in/hooman-nick/", 
    scholar: "https://scholar.google.com/citations?user=YOUR_ID", // Placeholder, update if you have the specific ID
    researchgate: "https://www.researchgate.net/profile/Hooman-Nick"
  }
};

export const EDUCATION: Education[] = [
  {
    degree: "Master of Science (M.Sc.) in Structural Engineering",
    institution: "Islamic Azad University of Science and Research Branch",
    location: "Tehran, Iran",
    period: "01/2016 – 09/2019",
    details: [
      "Thesis: Damage identification in steel girder bridges using modal strain energy-based damage index",
      "Supervisors: Dr. Armin Aziminejad, Dr. Mirhamid Hosseini"
    ]
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Civil Engineering",
    institution: "Islamic Azad University of Parand",
    location: "Iran",
    period: "09/2010 – 09/2015",
    details: []
  }
];

export const RESEARCH_EXPERIENCE: Experience[] = [
  {
    title: "Senior Researcher",
    company: "Iran’s National Elites Foundation",
    location: "Tehran",
    period: "01/2021 – 12/2023",
    type: "Research",
    points: [
      "Developed a dual-criteria, two-stage damage identification framework for steel frames, integrating modified Modal Flexibility Damage Index (MFDI) and Modal Strain Energy-based Damage Index (MSEDI) to significantly improve detection reliability.",
      "Developed and trained two distinct Artificial Neural Networks, each specialized for an individual damage index, to precisely quantify the severity of both single and multiple damage scenarios.",
      "Introduced a computationally efficient data-gathering strategy for ANN training by collecting data exclusively from the detected damage location and its immediate neighbors, reducing computational costs.",
      "Published the methodology and results in Structures (2023)."
    ]
  },
  {
    title: "Research Assistant (M.Sc.)",
    company: "Islamic Azad University of Science and Research Branch",
    location: "Tehran",
    period: "01/2016 – 09/2019",
    type: "Research",
    points: [
      "Developed a method for steel girder bridges that couples a modal strain energy-based (for localization) with an ANN (for severity quantification).",
      "Advanced the methodology to address real-world limitations by investigating its performance under noisy conditions, identifying Modal Flexibility (MFDI) as the most robust damage indicator.",
      "Engineered a novel noise-cancellation and quantification approach by training an ANN to map noisy vibration data to a noise-free output.",
      "Constructed and validated a 3D Finite Element (FE) model of the I-40 Bridge in ABAQUS as an analytical testbed.",
      "Published findings in Engineering Failure Analysis and Journal of Nondestructive Evaluation."
    ]
  }
];

export const PROFESSIONAL_EXPERIENCE: Experience[] = [
  {
    title: "Bridge Designer",
    company: "ASAN TARH PARS Engineering Consultant Co.",
    location: "Tehran",
    period: "01/2018 – Present",
    type: "Professional",
    points: [
      "Designed urban/rural steel-girder bridges with earthquake-resistant details and code compliance.",
      "Built and validated analysis models with SAP2000, ETABS, SAFE, CSiBridge."
    ]
  },
  {
    title: "Bridge & Structural Designer",
    company: "KIATARH Engineering Consultant Co.",
    location: "Tehran",
    period: "01/2017 – 12/2018",
    type: "Professional",
    points: [
      "Contributed to superstructure/substructure designs and performed seismic checks for buildings."
    ]
  },
  {
    title: "Intern (Structural & Bridge Design)",
    company: "PASAR Engineering Consultant Co.",
    location: "Tehran",
    period: "01/2016 – 12/2017",
    type: "Internship",
    points: [
      "Supported project execution via AutoCAD drafting, 3D modeling, preliminary concepts, and material/cost studies."
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    authors: "Nick, H., Ashrafpoor, A., & Aziminejad, A.",
    year: "2023",
    title: "Damage identification in steel frames using dual-criteria vibration-based damage detection method and artificial neural network",
    journal: "Structures, 51, 1833-1851",
    link: "https://doi.org/10.1016/j.istruc.2023.03.152",
    type: "Journal"
  },
  {
    authors: "Nick, H., & Aziminejad, A.",
    year: "2021",
    title: "Vibration-based damage identification in steel girder bridges using artificial neural network under noisy conditions",
    journal: "Journal of Nondestructive Evaluation, 40(2)",
    link: "https://doi.org/10.1007/s10921-020-00744-8",
    type: "Journal"
  },
  {
    authors: "Nick, H., Aziminejad, A., Hosseini, M. H., & Laknejadi, K.",
    year: "2021",
    title: "Damage identification in steel girder bridges using modal strain energy-based damage index method and artificial neural network",
    journal: "Engineering Failure Analysis, 119",
    link: "https://doi.org/10.1016/j.engfailanal.2020.105010",
    type: "Journal"
  },
  {
    authors: "Nick, H.",
    year: "2020",
    title: "Damage Identification in steel girder bridges via modal flexibility damage index and artificial neural network under the influence of noise",
    journal: "4th International Conference on Civil, Structural and Earthquake Engineering, Tehran, Iran",
    type: "Conference"
  },
  {
    authors: "Nick, H., Aziminejad, A., Hosseini, M. H., & Laknejadi, K.",
    year: "2019",
    title: "Damage assessment of steel girder bridges using modal strain energy and artificial neural network",
    journal: "3rd International Conference on Applied Researches in Structural, Tehran, Iran",
    type: "Conference"
  },
  {
    authors: "Nick, H., Aziminejad, A., Hosseini, M. H., & Laknejadi, K.",
    year: "2019",
    title: "Damage identification in steel girder bridges using improved damage index method by modal combination and artificial neural network",
    journal: "8th International Conference on Seismology & Earthquake Engineering, Tehran, Iran",
    type: "Conference"
  },
  {
    authors: "Nick, H., Aziminejad, A., Hosseini, M. H., & Laknejadi, K.",
    year: "2019",
    title: "Damage identification in girders of steel bridges using damage index method and artificial neural network",
    journal: "5th International Conference on Bridge, Tehran, Iran",
    type: "Conference"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Analysis & Simulation",
    skills: ["ABAQUS", "SAP2000", "ETABS", "SAFE", "CSiBridge", "AutoCAD", "Finite Element Modeling (FEM)"]
  },
  {
    name: "Programming & Data",
    skills: ["Python (Data Processing, Plotting)", "MATLAB (Time-series, ANN)", "C (Basic)", "Machine Learning (ANN)"]
  },
  {
    name: "SHM Methods",
    skills: ["Vibration-Based Detection", "Modal Strain Energy", "Modal Flexibility", "Model Updating", "Anomaly Detection"]
  }
];

export const HONORS: Honor[] = [
  {
    year: "2017",
    title: "Ranked Top 1%",
    description: "Among M.Sc. structural engineering cohort (IAU - Science & Research Branch)"
  },
  {
    year: "2017",
    title: "1st Place",
    description: "Matrix Analysis project (IAU - Science & Research Branch)"
  },
  {
    year: "2016",
    title: "Top 1% National Rank",
    description: "National graduate entrance exam (~570,000 participants)"
  },
  {
    year: "2015",
    title: "1st Place",
    description: "Steel Structures project (Azad University of Parand)"
  }
];
