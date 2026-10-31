// All homepage copy and links live here so they can be edited without touching layout code.

export const site = {
  name: "Sajin Philip",
  location: "Bengaluru, India",
  email: "sajinphilip91@gmail.com",
  resume: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/sajin-philip-65350534/",
    dribbble: "https://dribbble.com/sajinpappan",
    instagram: "https://www.instagram.com/bleed_the_blue",
    adplist: "https://adplist.org/mentors/sajin-philip",
  },
};

export const hero = {
  kicker: "Bengaluru, India",
  title: ["Designing for the", "Present and Future"],
  sub: ["Fifteen years of product design.", "Now building for humans and agents."],
  stats: [
    { label: "Experience", value: "15+ yrs" },
    { label: "Users reached", value: "120M+" },
    { label: "Teams built", value: "3" },
  ],
};

export const buildsIntro = {
  kicker: "Built with AI",
  title: "I design, build and ship live products with AI.",
  sub: "On iOS, Android, the web and wearables. From the first idea to the app store, end to end, with agents as my team.",
};

export type Build = {
  name: string;
  meta: string;
  question: string;
  headline: string;
  body: string;
  image?: string;
  tone: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  caseHref: string;
};

export const builds: Build[] = [
  {
    name: "MatchBrain",
    meta: "iOS & Android",
    question: "What is MatchBrain?",
    headline: "Idea to App Store in ten days",
    body: "A football prediction app. Strategy, UX/UI, brand, frontend, backend, marketing and growth, built solo with AI.",
    image: "/media/matchbrain.jpg",
    tone: "#08080A",
    primary: { label: "App Store", href: "https://apps.apple.com/in/app/matchbrain-predict-football/id6777493741" },
    secondary: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.matchbrain.matchbrain" },
    caseHref: "/builds/matchbrain",
  },
  {
    name: "GlassScore",
    meta: "Meta Ray-Ban Display",
    question: "What is GlassScore?",
    headline: "Live scores, right before your eyes",
    body: "Football and cricket scores for Meta Ray-Ban Display glasses, with voice control and real-time updates.",
    image: "/media/glassscore.jpg",
    tone: "#0C0D10",
    primary: { label: "Open the app", href: "https://meta-glass-scores.vercel.app" },
    caseHref: "/builds/glassscore",
  },
  {
    name: "Breathe Easy",
    meta: "Web app",
    question: "What is Breathe Easy?",
    headline: "A working web app in twelve hours",
    body: "Built end to end with AI tools, to help people improve their lives one breath at a time.",
    tone: "#16303A",
    primary: { label: "Read the story", href: "/writing/i-just-built-a-fully-working-web-app-using-only-ai-tools-in-under-12-hours" },
    caseHref: "/builds/breathe-easy",
  },
  {
    name: "The New Designer",
    meta: "In progress",
    question: "What is The New Designer?",
    headline: "Learning for designers in the AI era",
    body: "An interactive learning platform with AI-powered career and learning features.",
    tone: "#221D30",
    primary: { label: "Visit thenewdesigner.com", href: "https://www.thenewdesigner.com/" },
    caseHref: "/builds/the-new-designer",
  },
];

export type CaseStudy = {
  title: string;
  industry: string;
  tone: string;
  badge?: string;
  cover?: string;
  problem: string;
  facts: { label: string; value: string }[];
  cta: string;
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Depression Decision Aid",
    industry: "Healthcare · Mental health",
    tone: "#2B3A55",
    problem:
      "Choosing an antidepressant is slow, and the paper card aid only works when physician and patient sit together. We turned it into an app they can use apart.",
    facts: [
      { label: "Role", value: "Team lead, research, UX/UI" },
      { label: "Timeframe", value: "3 weeks" },
      { label: "Research", value: "7 physicians, 7 patients; 20+ users tested" },
      { label: "Result", value: "[One result]" },
    ],
    cta: "Read case study",
    href: "/work/depression-aid",
  },
  {
    title: "YOYO Test",
    industry: "Sports · Fitness",
    tone: "#3A4A3A",
    problem:
      "Coaches recorded endurance tests on paper and retyped them later. The app lets them log results live while 15 athletes run at once.",
    facts: [
      { label: "Role", value: "Team lead, research, UX & visual" },
      { label: "Timeframe", value: "4 weeks" },
      { label: "Research", value: "8 coaches, 12 athletes" },
      { label: "Adoption", value: "2 international teams, 30+ academy users" },
    ],
    cta: "Read case study",
    href: "/work/yoyo-test",
  },
  {
    title: "Home Automation",
    industry: "Smart home",
    tone: "#4A3F33",
    badge: "In progress",
    problem:
      "Smart-home setup is fragmented and hard to trust. One personalised app connects devices simply and suggests what to automate.",
    facts: [
      { label: "Role", value: "Research, UX & visual design" },
      { label: "Timeframe", value: "4 weeks" },
      { label: "Research", value: "Product review analysis, 2 personas" },
      { label: "Result", value: "[One result]" },
    ],
    cta: "Read case study",
    href: "/work/home-automation",
  },
  {
    title: "WhatsApp Poll",
    industry: "Messaging · 2021",
    tone: "#24463A",
    badge: "Concept",
    problem: "[One-line problem: why groups needed polls inside WhatsApp]",
    facts: [
      { label: "Role", value: "Research, UX & visual design" },
      { label: "Timeframe", value: "2 weeks" },
      { label: "Type", value: "Experimental project" },
      { label: "Result", value: "[One result or learning]" },
    ],
    cta: "Read case study",
    href: "/work/whatsapp-poll",
  },
  {
    title: "Dropshipping",
    industry: "Commerce",
    tone: "#3B2F45",
    badge: "Private",
    problem: "Aligning the user experience with company goals. [One-line problem]",
    facts: [
      { label: "Role", value: "[Role]" },
      { label: "Timeframe", value: "[Timeframe]" },
      { label: "Scope", value: "[Scope]" },
      { label: "Result", value: "[One result]" },
    ],
    cta: "Request access",
    href: "mailto:sajinphilip91@gmail.com?subject=Dropshipping%20case%20study",
  },
];

type LinkItem = { title: string; body?: string; href: string };

export const approach = {
  title: "How I am building digital products and services with AI and agents",
  sub: "Practical insights on AI, UX leadership, accessibility and emerging technology, helping designers and product teams prepare for what’s next.",
  columns: [
    {
      label: "AI building",
      title: "Agents as the team",
      body: "Ideas reach real users in days, not quarters.",
      links: [
        { title: "Built 5+ AI-assisted products", body: "From wellness to wearables, launched independently with AI.", href: "/writing" },
        { title: "How I Design With AI", body: "AI across discovery, ideation, prototyping and validation.", href: "/writing" },
        {
          title: "Meta Glasses Experiment",
          body: "Glanceable live experiences for wearable interfaces.",
          href: "https://www.linkedin.com/posts/sajin-philip-65350534_metaglasses-wearables-ar-share-7462024103307251712-0oj5",
        },
        { title: "Agentic AI Development Setup", body: "Architecture of how I build with agents.", href: "/writing/agentic-development-setup-architecture" },
        {
          title: "Design systems that live, learn and build for you",
          body: "Design systems built for agents.",
          href: "/writing/for-the-past-decade-design-systems-were-built-for-humans-now-agents-build-for-agents",
        },
      ] as LinkItem[],
    },
    {
      label: "Product thinking",
      title: "Problem first, always",
      body: "Research the people and the business. Speed only matters when it points the right way.",
      links: [
        { title: "AI × Product Thinking", body: "How AI transforms workflows, experimentation and human-centred experiences.", href: "/writing" },
        { title: "AI-Powered Product Thinking", body: "AI in product strategy, experimentation and design workflows.", href: "/writing" },
        { title: "The New Designer", body: "Helping designers learn, grow and stay ahead of AI.", href: "https://www.thenewdesigner.com/" },
        { title: "The Future of Accessibility With AI", href: "/writing/the-future-of-accessibility-with-ai" },
        { title: "The Glasses on Your Face Are the Next Computer", href: "/writing/the-glasses-on-your-face-are-the-next-computer" },
      ] as LinkItem[],
    },
  ],
  leadership: {
    label: "Leadership",
    title: "How my day works",
    split: [
      { value: "70%", label: "Leadership" },
      { value: "30%", label: "Designer" },
    ],
    body: "Most of my time goes to leadership: guiding teams, shaping strategy and building design cultures. The rest keeps me hands-on as a designer, close to the craft and connected to the people we design for.",
    links: [
      { title: "Leadership profile", href: "/about" },
      { title: "Mentoring on ADPList", href: "https://adplist.org/mentors/sajin-philip" },
      { title: "Invite me to speak", href: "https://www.linkedin.com/in/sajin-philip-65350534/" },
    ] as LinkItem[],
  },
};
