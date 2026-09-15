export const NAV_LINKS = [
  { name: "Home", href: "#home" }, { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" }, { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "Recommendations", href: "#recommendations" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/sachin-185",
  linkedin: "https://www.linkedin.com/in/sachin-svd",
  twitter: "https://x.com/sachin26031",
  hackerrank: "https://www.hackerrank.com/profile/svsachin2005",
  email: "mailto:svsachinsd@gmail.com",
};

export const PERSONAL_INFO = {
  name: "Sachin S",
  roles: ["Software Developer", "AI Developer"],
  about: "AI & Data Science student exploring the intersection of machine learning and modern web development. Welcome to my digital workspace!",
  aboutDetailed: "I am a B.Tech student in Artificial Intelligence & Data Science at Rajalakshmi Institute of Technology, Chennai. As an aspiring software and AI engineer, I enjoy building intelligent systems, training machine learning classifiers, and developing responsive modern applications.\n\nI have gained hands-on engineering experience through intern roles at Plugzmart (developing power division models and anomaly detectors), Google (engaging the developer community as Student Ambassador), and Edunet Foundation (building ML and computer vision systems). I focus on writing clean code, designing solid APIs, and adapting rapidly to new technology stacks.",
  location: "Chennai, Tamil Nadu, India",
  experienceYear: "2023 - 2027",
};

export const EXPERIENCE = [
  {
    company: "Plugzmart",
    role: "Software Developer (AI/ML) Intern",
    period: "Feb 2026 – May 2026",
    location: "Chennai, Tamil Nadu",
    points: [
      "Worked on building an AI-powered EV charging platform, enabling dynamic load distribution across 8 power modules and improving real-time troubleshooting capabilities.",
      "Developed an automated load-balancing engine for DC fast chargers to help increase power distribution efficiency by 32%.",
      "This was achieved by scoring hardware health and ranking optimal rectifiers using XGBoost models. Designed a real-time diagnostic copilot to help reduce troubleshooting latency by 40%. This was achieved by synthesizing live rectifier state matrices into root-cause explanations using Qwen2.5 LLM via Ollama."
    ],
    tech: ["Python", "Flask", "React", "Vite", "XGBoost", "Scikit-Learn", "REST APIs", "Hugging Face"]
  }
];

export const EDUCATION = [
  {
    institution: "Rajalakshmi Institute of Technology",
    degree: "B.Tech - Artificial Intelligence & Data Science",
    period: "2023 – 2027",
    image: "/images/rit.png",
  },
  {
    institution: "SBOA Matriculation and Higher Secondary School",
    degree: "12th Grade: 89.83%",
    period: "2011 – 2023",
    image: "/images/sboa.png",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "LeetCode",
    metric: "Solved 551+ coding problems",
    detail: "Received 13+ LeetCoding Challenge badges including with the 200-day badge.",
    category: "Code",
  },
  {
    title: "SkillRack",
    metric: "Solved 970+ Coding problems",
    detail: "Achieved Top 100 ranking on Coding Challenge leaderboard, with a record of 973+ problems solved across data structures, algorithms, and logic-based challenges.",
    category: "Code",
  },
  {
    title: "LinkedIn",
    metric: "3.8K+ Followers",
    detail: "Posted 29+ educational posts with a consistency of 2+ years.",
    category: "Growth",
  },
  {
    title: "NPTEL",
    metric: "Secured 84% (Elite + Silver)",
    detail: "Secured top grade in Research Methods in Health Promotion course offered by NPTEL, IIT Kharagpur.",
    category: "Academics",
  }
];

export const SKILLS = {
  languages: ["Python", "Java", "C", "HTML/CSS", "SQL", "JavaScript"],
  technologies: ["Scikit-Learn", "FastAPI", "PyTorch", "TensorFlow", "RAG", "OpenCV", "Matplotlib", "Power BI", "MySQL", "FastAPI"],
  tools: ["MongoDB", "Gemini API", "Netlify", "Git", "Streamlit", "ChromaDB", "Firebase", "VS Code", "PyCharm", "Amazon S3", "GitHub", "Android Studio", "Postman"],
};

export const PROJECTS = [
  {
    title: "Vortex WebAgent (Gemini MCP)",
    description: "Developed a browser agent powered by MCP using Puppeteer for automated web extraction. Implemented reasoning based on Gemini with optimized parameters for detailed and relevant responses, allowing outputs of up to 2048 tokens.",
    tech: ["Python", "Streamlit", "Gemini API", "Puppeteer", "MCP"],
    image: "/images/mcp.png",
    link: "https://github.com/sachin-185/Browser-MCP-Agent-Gemini-",
    category: "AI",
  },
  {
    title: "AI-Powered Corporate Insights Platform",
    description: "Engineered a GPU-accelerated NLP pipeline using Hugging Face Transformers for automated meeting transcript summarization and employee sentiment tracking. Built a custom predictive risk assessment engine using DecisionTreeClassifier and time-series forecasting via LinearRegression. Automated the processing and validation of 19+ datasets to monitor attrition, engagement, and project delay indices with in-memory caching for sub-second dashboard latency.",
    tech: ["Python", "PyTorch", "CUDA", "BART", "DistilBERT", "Altair", "Transformers"],
    image: "/images/ai.png",
    link: "https://github.com/sachin-185/AI-Powered-Corporate-Insights-Platform",
    category: "AI",
  },
  {
    title: "InternView AI — Interview Preparation & Technical Assistance Platform",
    description: "Developed a high-fidelity, responsive SPA and Tailwind CSS, employing Framer Motion for seamless layout transitions. Engineered a resilient generative AI integration pipeline using Qwen2.5-7B with custom regex-based sanitizers to parse LLM outputs into structured JSON. Architected a secure backend utilizing SQLite with a custom ActiveRecord-style repository to handle session persistence and transactional batch database inserts.",
    tech: ["React", "Node.js", "SQLite", "Qwen2.5-7B", "Docker", "Tailwind CSS"],
    image: "/images/InterviewAi.png",
    link: "https://github.com/sachin-185/InternView-AI.git",
    category: "Web",
  },
  {
    title: "ShopGo: Autonomous Marketplace",
    description: "A next-generation self-sustaining e-commerce ecosystem with an autonomous intelligence layer powered by local NLP for user intent classification, semantic product search, and automated support.",
    tech: ["React", "Express.js", "MongoDB", "Hugging Face"],
    image: "/images/shopgo.png",
    link: "https://github.com/sachin-185/ShopGo-Autonomous-Marketplace-Engine-",
    category: "AI",
  },
  {
    title: "OptiChargeAI",
    description: "Dynamic power allocation and predictive health intelligence engine for DC electric vehicle fast chargers.",
    tech: ["Python", "XGBoost Ranker", "Flask", "Isolation Forest", "Scikit-Learn", "React"],
    image: "/images/opticharge.png",
    link: "https://github.com/sachin-185/OptiChargeAI",
    category: "AI",
  },
  {
    title: "Healthcare Data Security",
    description: "Designed a secure healthcare web app using AES encryption with different key sizes and output formats.",
    tech: ["React", "CryptoJS", "AES"],
    image: "/images/healthcare_security.jpg",
    link: "https://github.com/sachin-185/Healthcare-Data-Security-",
    category: "Web",
  },
  {
    title: "AI Based Internship Recommendation Engine",
    description: "Developed an AI system leveraging SentenceTransformer embeddings to match profiles with internships.",
    tech: ["Python", "SentenceTransformers", "Hugging Face", "Streamlit"],
    image: "/images/Intern.png",
    link: "https://huggingface.co/spaces/hi5bro/AI_Based_Internship_Recommendation_Engine/tree/main",
    category: "AI",
  },
  {
    title: "Netflix Analytics Report",
    description: "Analyzed Netflix dataset to uncover insights on content trends, user preferences, and viewing patterns.",
    tech: ["Power BI", "Netflix Dataset"],
    image: "/images/Netflix.png",
    link: "https://github.com/sachin-185/Netflix-Analytics-Report.git",
    category: "Data",
  },
  {
    title: "Microsoft Official Website Replica",
    description: "A responsive replica of the official Microsoft website built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/microsoft_replica.jpg",
    link: "https://github.com/sachin-185/Microsoft-Clone.git",
    category: "Web",
  },
];

export const CERTIFICATES = [
  {
    title: "Research Methods in Health Promotion",
    issuer: "NPTEL | IIT Kharagpur",
    image: "/certificates/nptel_research_methods.png",
    link: "/certificates/nptel_research_methods.png",
    type: "Silver Elite",
    category: "Others",
  },
  {
    title: "Entrepreneurship Essentials",
    issuer: "NPTEL | IIT Kharagpur",
    image: "/certificates/NPTEL.png",
    link: "/certificates/NPTEL.png",
    category: "Others",
  },
  {
    title: "Prompt Engineering & Programming",
    issuer: "Columbia University",
    period: "Aug 2025",
    image: "/certificates/columbia_prompt_engineering.png",
    link: "/certificates/columbia_prompt_engineering.png",
    type: "Specialization",
    category: "AI/ML",
  },
  {
    title: "AI Enterprise Workflow: End-to-End ML",
    issuer: "IBM",
    period: "2025",
    image: "/certificates/ibm_thumb.png",
    link: "/certificates/IBM certificate.pdf",
    type: "Professional",
    category: "AI/ML",
  },
  {
    title: "From SQL to MongoDB's Document Model",
    issuer: "MongoDB",
    period: "2025",
    image: "/certificates/mongodb.png",
    link: "/certificates/mongodb.png",
    type: "Skill",
    category: ["Databases", "Backend & Tools"],
  },
  {
    title: "Java",
    issuer: "Udemy",
    period: "2025",
    image: "/certificates/udemy_thumb.png",
    link: "/certificates/udemy_java_basics.pdf",
    type: "Skill",
    category: "Backend & Tools",
  },
  {
    title: "Anthropic Certification",
    issuer: "Anthropic",
    period: "2026",
    image: "/certificates/anthropic.png",
    link: "/certificates/anthropic.png",
    type: "Certification",
    category: "AI/ML",
  },
  {
    title: "Hackathon",
    issuer: "Tech Event",
    period: "2026",
    image: "/certificates/hackathon.png",
    link: "/certificates/hackathon.png",
    type: "Participation",
    category: "Others",
  },
  {
    title: "ISRO Workshop",
    issuer: "Workshop",
    period: "2026",
    image: "/certificates/workshop.png",
    link: "/certificates/workshop.png",
    type: "Certificate of Completion",
    category: "Others",
  },
  {
    title: "Coding challenge",
    issuer: "Unknown",
    period: "2026",
    image: "/certificates/new_certificate.png",
    link: "/certificates/new_certificate.png",
    type: "Certificate",
    category: "Others",
  },
];

export interface Recommendation {
  name: string;
  role: string;
  date: string;
  platform: string;
  text: string;
  badge?: string;
  relationship?: string;
}

export const RECOMMENDATIONS: Recommendation[] = [
  {
    name: "Deepak Boopathi",
    role: "Student at M.Kumarasamy College of Engineering, Karur",
    date: "September 12, 2026",
    platform: "LinkedIn",
    text: "I had the pleasure of meeting Mr. Sachin S during a Quantum Computing workshop conducted by SRM College of Technology, Kattankulathur, Chennai. I had an incredible time interacting with him throughout the workshop, and the conversations I had with him helped me learn a lot of new things. Mr. Sachin S was a knowledgeable and friendly person who had the patience to share his knowledge and experiences with me by explaining things to me in a simple and understandable manner. I really appreciated the time he took to interact with me, and it helped me to learn a lot of new things. I had a great learning experience by meeting and interacting with him, and I am thankful for the knowledge and perspective he shared with me. I would recommend Sachin for his passion for learning, willingness to help others, and interest in technology.",
  },
  {
    name: "Rishika M",
    role: "Student at Rajalakshmi Institute of Technology",
    date: "June 20, 2025",
    platform: "LinkedIn",
    text: "I had the privilege of working with Mr. Sachin S during our college hackathon, where they mentored me and guided our team with incredible clarity, patience, and leadership. From brainstorming innovative ideas to helping us refine our solution, their presence was truly motivating. Mr. Sachin S has a deep understanding of technology and problem-solving, and their ability to simplify complex concepts made a huge difference for us as juniors. Beyond the technical skills, they consistently encouraged collaboration and brought out the best in every team member. I’m grateful for the opportunity to have worked with such a passionate and knowledgeable mentor, and I have no doubt they’ll make a great impact wherever they go.",
  },
];