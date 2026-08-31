export const siteConfig = {
  name: "Mehedi Afzal Farazi",
  title: "Senior Data Analyst",
  description:
    "Senior Data Analyst turning complex data into clear decisions — SQL, Snowflake, Tableau, and AI-assisted analytics.",
  tagline: "Turning complex data into clear decisions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mehedi-farazi.vercel.app",
  author: "Mehedi Afzal Farazi",
  location: "Dhaka, Bangladesh",
  email: "mehedi.farazi33@gmail.com",
  phone: "+8801613301533",
  openToWork: process.env.NEXT_PUBLIC_OPEN_TO_WORK === "true",
  newsletterUrl: process.env.NEXT_PUBLIC_NEWSLETTER_URL ?? "",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  links: {
    github: "https://github.com/maf345",
    linkedin: "https://linkedin.com/in/maf345",
    tableau: "https://public.tableau.com/app/profile/maf345/vizzes",
    hackerrank: "https://hackerrank.com/profile/maf345",
    kaggle: "https://www.kaggle.com/maf345",
  },
} as const;

export const careerHighlights = [
  {
    metric: "7.5+",
    label: "Years in analytics",
    description: "Healthcare, commercial, telecom, and BI reporting",
  },
  {
    metric: "300+",
    label: "Dashboard stakeholders",
    description: "Tableau KPI tracking across Europe",
  },
  {
    metric: "80%",
    label: "Manual effort reduced",
    description: "Automated reporting with Python and SQL",
  },
  {
    metric: "60%",
    label: "Fewer refresh failures",
    description: "Pipeline design, validation, and monitoring",
  },
] as const;

export const summaryParagraphs = [
  "Senior Data Analyst with 7.5+ years of experience across healthcare, commercial, telecom, BI reporting, and data analytics. Skilled in SQL, Python, Snowflake, Tableau, Power BI, ETL/ELT workflows, KPI design, data validation, and stakeholder-facing insight generation.",
  "Experienced in translating business requirements into reliable data models, dashboards, reporting workflows, and decision-support solutions — partnering with business and technical stakeholders to define data problems, build metrics, and deliver decision-ready insights.",
  "Currently serving as team lead on a healthcare/commercial analytics project and working on Agentic AI and LLM-assisted analytics workflows involving LangSmith, prompt engineering, and structured output evaluation.",
] as const;

export const skills = [
  {
    category: "SQL & Data Platforms",
    items: ["CTEs & window functions", "Snowflake", "SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    category: "BI & Visualization",
    items: ["Tableau", "Tableau Server", "Power BI", "Executive dashboards"],
  },
  {
    category: "ETL & Automation",
    items: ["Python", "Pandas", "SQLAlchemy", "Automated reporting workflows"],
  },
  {
    category: "Analytics & AI",
    items: [
      "KPI design",
      "Trend analysis",
      "LangSmith",
      "Prompt engineering",
      "Structured output evaluation",
    ],
  },
  {
    category: "Delivery & Leadership",
    items: [
      "Team leadership",
      "Agile delivery",
      "UAT support",
      "Cross-functional collaboration",
    ],
  },
  {
    category: "Tools & Collaboration",
    items: ["Git", "Jira", "Excel", "Stakeholder reporting"],
  },
] as const;

export const experience = [
  {
    company: "Streams Tech Ltd.",
    location: "Dhaka, Bangladesh",
    roles: [
      {
        title: "Senior Data Analyst",
        period: "Jan 2025 – Present",
        highlights: [
          "Lead delivery for a healthcare and commercial analytics assistant project across dev, QA, BA, and product stakeholders.",
          "Design and evaluate Agentic AI and LLM-assisted analytics workflows with prompt quality and structured output validation.",
          "Own complex analytical tickets — root cause analysis, dependency resolution, and release validation.",
          "Improve KPI accuracy through anomaly checks, reconciliation, and business logic review.",
        ],
      },
      {
        title: "Software Engineer / Data Analyst",
        period: "Mar 2022 – Dec 2024",
        highlights: [
          "Designed Snowflake data models, KPI frameworks, and dashboard-ready analytical layers.",
          "Built Tableau dashboards used by 300+ stakeholders across Europe for KPI tracking and operational insights.",
          "Maintained ETL/ELT pipelines with Python, Pandas, SQLAlchemy, and SQL.",
          "Reduced dashboard refresh failures by 60% through pipeline design and data quality controls.",
        ],
      },
    ],
  },
  {
    company: "MILVIK Bangladesh Ltd.",
    location: "Dhaka, Bangladesh",
    roles: [
      {
        title: "Commercial Analyst",
        period: "Dec 2020 – Feb 2022",
        highlights: [
          "Analyzed customer, campaign, revenue, and operational datasets with SQL Server, Tableau, and Python.",
          "Automated recurring commercial reports, reducing manual effort by 80%.",
          "Delivered insights on revenue trends, segmentation, and campaign performance.",
        ],
      },
    ],
  },
  {
    company: "Summit Communications Ltd.",
    location: "Dhaka, Bangladesh",
    roles: [
      {
        title: "System Engineer",
        period: "Oct 2019 – Dec 2020",
        highlights: [
          "Built internal web-based operational tools with Python, Django, SQL, and MySQL.",
          "Developed a data maintenance tool used daily by ~50 users — nominated Best Project in Innovation.",
        ],
      },
    ],
  },
  {
    company: "Bangla Trac Communications Ltd.",
    location: "Dhaka, Bangladesh",
    roles: [
      {
        title: "Network Engineer",
        period: "Oct 2018 – Sep 2019",
        highlights: [
          "Performed SQL-based telecom traffic and network performance analysis.",
          "Supported operational visibility through traffic pattern and carrier performance reporting.",
        ],
      },
    ],
  },
] as const;

export const education = [
  {
    institution: "Military Institute of Science and Technology (MIST)",
    credential: "B.Sc. in Computer Science and Engineering",
    period: "2014 – 2018",
    location: "Dhaka, Bangladesh",
  },
  {
    institution: "Barisal Cadet College",
    credential: "Higher Secondary Certificate, Science",
    period: "2013",
    location: "Barisal, Bangladesh",
  },
] as const;

export const certifications = [
  {
    name: "Snowflake SnowPro Core Certified",
    year: "2023",
    href: "https://www.credly.com/badges/314cd26d-e40f-490a-a1a5-1d6d4bc1fcf5",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I've supervised Mehedi at Streams Tech for over four years. He consistently demonstrates strong analytical depth and a practical approach to complex data problems — combining SQL, Python, Snowflake, and Tableau with a clear understanding of business requirements. He handles complex tasks with minimal supervision, investigates root causes thoroughly, and prioritizes delivery quality. His versatility and ownership mindset make him an excellent fit for senior data analyst, BI, or AI-assisted analytics roles.",
    name: "Md. Shahnewaz Rasel",
    role: "Supervisor",
    company: "Streams Tech Ltd.",
  },
  {
    quote:
      "I consider myself very lucky that I got the opportunity to work with Mehedi. He is phenomenal, he is kind. Most importantly, he is very honest and one of the most talented people in the workplace. I can see he will fly so high in the future, and I really want him to shine like a crazy diamond.",
    name: "Mohammad Faisul Alam",
    role: "Commercial Analyst",
    company: "MILVIK Bangladesh Ltd.",
  },
  {
    quote:
      "It was a pleasure to work with a colleague who was committed to their success and to supporting the team. Wishing you all the best in your future endeavors.",
    name: "Swaroop Bhattacharya",
    role: "Sales Manager",
    company: "MILVIK Bangladesh Ltd.",
  },
  {
    quote:
      "In my time working with Mehedi, I found him very humble — a quality that builds long-term success and positive relationships with stakeholders. I wish him all the best.",
    name: "Zubayer Ibna Zahir",
    role: "Finance HoD",
    company: "MILVIK Bangladesh Ltd.",
  },
] as const;

export const languages = [
  { name: "Bangla / Bengali", level: "Native" },
  { name: "English", level: "Fluent" },
] as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/dashboards", label: "Dashboards" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const tableauVizzes = [
  {
    title: "HR Analytics & Employee Attrition",
    description: "Workforce demographics, satisfaction, and attrition drivers.",
    workbook: "HRAnalyticsandEmployeeAttritionFactors",
    view: "Story",
  },
  {
    title: "Pet Items Ecommerce",
    description: "Sales, product mix, and ecommerce performance trends.",
    workbook: "PetItemsEcommerceBusiness",
    view: "PetItemSupplyDashboard",
  },
  {
    title: "Customer Churn Analysis",
    description: "Churn patterns and retention risk segmentation.",
    workbook: "CustomerChurnAnalysis_16771582196760",
    view: "ChurnAnalysis",
  },
] as const;

export function tableauVizUrl(workbook: string, view: string) {
  return `https://public.tableau.com/app/profile/maf345/viz/${workbook}/${view}`;
}

export const socialLinks = [
  { href: siteConfig.links.github, label: "GitHub", icon: "github" as const },
  { href: siteConfig.links.linkedin, label: "LinkedIn", icon: "linkedin" as const },
  { href: siteConfig.links.tableau, label: "Tableau Public", icon: "tableau" as const },
  { href: siteConfig.links.hackerrank, label: "HackerRank", icon: "hackerrank" as const },
  { href: siteConfig.links.kaggle, label: "Kaggle", icon: "kaggle" as const },
] as const;
