export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  coverVideo?: string;
  processImages: string[];
  tags: string[];
  tools: string[];
  year: string;
  slug: string;
  category: string;
  featured?: boolean;
  status?: "live" | "wip";
  externalUrl?: string;
}

export interface Category {
  id: string;
  label: string;
}

export const categories: Category[] = [
  { id: "ai-previs", label: "AI + Unreal Pre-vis" },
  { id: "film-vp", label: "Film Virtual Production" },
  { id: "automation", label: "Automation Workflows" },
  { id: "google-ai", label: "Google AI Studio" },
  { id: "playground", label: "Playground" },
];

export const projects: Project[] = [
  // ── AI + Unreal Pre-vis ──────────────────────────────────
  {
    id: "sam-adams",
    title: "Samuel Adam's Commercial Pre-vis",
    description:
      "Client-facing pre-visualization combining Unreal Engine depth & outline passes with ComfyUI generative workflows.",
    fullDescription: `This project delivers production-ready pre-visualization for Samuel Adam's commercial campaigns (Octoberfest & Juicy IPA). By leveraging Unreal Engine's depth and outline render passes as structural guides, the footage is processed through ComfyUI generative pipelines to produce polished, client-facing visual concepts.

The workflow starts with storyboard sketches defining camera movement and composition, then uses Unreal Engine to generate base renders with depth and outline passes. These passes feed into ComfyUI where relighting, outpainting, and style transfer produce the final photorealistic product shots — all while maintaining precise compositional control that clients can confidently approve.`,
    coverImage: "/images/projects/sam-adams/hero.png",
    processImages: [
      "/images/projects/sam-adams/hero.png",
      "/images/projects/sam-adams/storyboard-dolly.png",
      "/images/projects/sam-adams/camera-moves.png",
      "/images/projects/sam-adams/workflow-relit.png",
      "/images/projects/sam-adams/outpaint-before.png",
      "/images/projects/sam-adams/outpaint-after.png",
    ],
    tags: ["Unreal Engine", "ComfyUI", "Pre-vis"],
    tools: ["Unreal Engine", "ComfyUI", "Depth Pass", "Outline Pass", "Outpainting", "Relighting"],
    year: "2024",
    slug: "samuel-adams-previs",
    category: "ai-previs",
    featured: true,
  },
  {
    id: "ritz",
    title: "Ritz Commercial Pre-vis",
    description:
      "AI-driven product pre-visualization using Unreal Engine conditioning passes and ComfyUI generation for Ritz.",
    fullDescription: `AI-driven pre-visualization for Ritz, combining Unreal Engine render passes with ComfyUI generative pipelines. Starting from product photography references, the workflow uses Unreal Engine to produce depth, mask, and lighting passes that condition the AI generation — ensuring precise compositional control over the final output.

The project explores both static product shots and video generation conditioning, producing client-facing visuals that bridge the gap between storyboard concepts and final commercial production.`,
    coverImage: "/images/projects/ritz/cracker-red.png",
    processImages: [
      "/images/projects/ritz/cracker-red.png",
      "/images/projects/ritz/hand-cracker.png",
      "/images/projects/ritz/logo-unreal-dark.png",
      "/images/projects/ritz/logo-unreal-lit.png",
      "/images/projects/ritz/ai-hands-closeup.png",
      "/images/projects/ritz/ai-person-cracker.png",
      "/images/projects/ritz/pass-depth.png",
      "/images/projects/ritz/pass-mask.png",
      "/images/projects/ritz/pass-gradient.png",
    ],
    tags: ["Unreal Engine", "ComfyUI", "Pre-vis", "Video Conditioning"],
    tools: ["Unreal Engine", "ComfyUI", "Depth Pass", "Mask Pass"],
    year: "2024",
    slug: "ritz",
    category: "ai-previs",
  },

  // ── Film Virtual Production ──────────────────────────────
  {
    id: "thesis-film",
    title: "Wolfe and The Bee",
    description:
      "NYU MFA thesis film — cinematic virtual environments built in Unreal Engine with PCG, Megascans, and atmospheric lighting.",
    fullDescription: `"Wolfe and The Bee" is my NYU MFA thesis film, set in rural Minnesota during a cold winter night. I designed and built multiple photorealistic virtual environments in Unreal Engine to serve as the film's visual backbone — from a moody snow-covered road to a climactic campsite scene.

Each environment was crafted with a focus on cinematic atmosphere: Procedural Content Generation for natural landscapes, Megascans foliages for organic detail, volumetric fog and atmospheric lighting for mood, and precise camera settings to achieve a filmic look.`,
    coverImage: "/images/projects/thesis/road.png",
    processImages: [
      "/images/projects/thesis/road.png",
      "/images/projects/thesis/campsite.png",
      "/images/projects/thesis/gas-station-wide.png",
      "/images/projects/thesis/gas-station-graffiti.png",
      "/images/projects/thesis/gas-station-open.png",
    ],
    tags: ["Virtual Production", "Unreal Engine", "Film", "Environment Design"],
    tools: ["Unreal Engine", "PCG", "Megascans", "Blueprint", "Volumetric Fog"],
    year: "2025",
    slug: "wolfe-and-the-bee",
    category: "film-vp",
  },
  {
    id: "checkers",
    title: "Checker's and Rally's Commercial",
    description:
      "Unreal Engine operator for a Checker's & Rally's commercial — built and operated virtual environments on an LED volume stage.",
    fullDescription: `Worked as Unreal Engine operator on the Checker's and Rally's commercial production. Responsible for building photorealistic virtual restaurant environments in Unreal Engine and operating them live on an LED volume stage during the shoot.

The project involved creating both daytime and nighttime versions of the Checker's restaurant exterior, complete with detailed menu boards and signage. During the live shoot, the Unreal Engine environments were displayed on a curved LED volume, allowing actors to perform within the virtual setting while the camera captured everything in-camera — no green screen compositing required.`,
    coverImage: "/images/projects/checkers/unreal-interior-closeup.png",
    processImages: [
      "/images/projects/checkers/unreal-exterior-day.png",
      "/images/projects/checkers/unreal-menu-board.png",
      "/images/projects/checkers/unreal-night-lighting.png",
      "/images/projects/checkers/bts-led-stage-01.jpg",
      "/images/projects/checkers/bts-led-stage-02.jpg",
      "/images/projects/checkers/bts-led-stage-03.jpg",
      "/images/projects/checkers/bts-led-stage-04.jpg",
      "/images/projects/checkers/monitor-couple.jpg",
      "/images/projects/checkers/monitor-burger.jpg",
    ],
    tags: ["Virtual Production", "Unreal Engine", "LED Volume", "Commercial"],
    tools: ["Unreal Engine", "nDisplay", "LED Volume"],
    year: "2024",
    slug: "checkers-and-rallys",
    category: "film-vp",
  },
  {
    id: "new-year",
    title: "New Year, New Me",
    description:
      "Runway Gen:48 Finalist — AI-generated short film using image-to-video generation and prompt engineering.",
    fullDescription: `"New Year, New Me" is an AI-generated short film and Runway Gen:48 Finalist. On a distant mountain where each version of herself remains frozen at a different age, a girl prepares to meet her 21-year-old self. Desperate to shape her future, she clings to a crystal ball — until it accidentally slips away.

Collaborated with Xinyu (Cindy) Li, we created this film using Runway's AI tools. We used Runway Frames to generate images from text prompts, incorporating the new feature that allows adding reference photos as visual style, location, or character. Then, we used Gen-3 Alpha, Gen-3 Alpha Turbo, and Gen-4 to animate these images into moving video clips, bringing the story to life. Music & sound effects from Epidemic Sound.`,
    coverImage: "/images/projects/nynm/cover.png",
    processImages: [
      "/images/projects/nynm/still-01.png",
      "/images/projects/nynm/still-02.png",
      "/images/projects/nynm/still-03.png",
      "/images/projects/nynm/still-04.png",
      "/images/projects/nynm/still-05.png",
      "/images/projects/nynm/still-06.png",
      "/images/projects/nynm/still-07.png",
      "/images/projects/nynm/still-08.png",
    ],
    tags: ["Runway Gen:48 Finalist", "AI Film", "Image-to-Video", "Prompt Engineering"],
    tools: ["Runway Frames", "Gen-3 Alpha", "Gen-3 Alpha Turbo", "Gen-4", "Epidemic Sound"],
    year: "2025",
    slug: "new-year-new-me",
    category: "film-vp",
  },

  // ── Automation Workflows ─────────────────────────────────
  {
    id: "parallax-ai",
    title: "Parallax.ai",
    description:
      "AI-powered automation platform — currently in development.",
    fullDescription: `An AI-powered automation platform currently under active development.`,
    coverImage: "/images/projects/parallax-placeholder.jpg",
    processImages: [],
    tags: ["AI", "Automation", "Platform"],
    tools: ["React", "Python", "OpenAI API"],
    year: "2025",
    slug: "parallax-ai",
    category: "automation",
    status: "wip",
  },
  {
    id: "email-agent",
    title: "Email Agent",
    description:
      "A Slack-based email automation agent — fetches Gmail history, builds relationship context with AI, and drafts personalized outreach paragraph by paragraph.",
    fullDescription: `An intelligent email agent built as a Slack bot ("Mail BOT") that automates the full email outreach workflow. The system has two core pipelines: Fetch + Build Context and Draft with AI & Template.

The Fetch pipeline connects to Gmail, pulls email history for individual contacts or entire groups (e.g. all @pepsi.co addresses), and uses AI to analyze relationships — generating structured summaries including background info, collaboration history, last contact details, and studio visit evidence. All data is stored in a Google Sheet that serves as a permanent relationship database.

The Draft pipeline offers two modes: template-based quick drafts and AI-assisted contextual drafting. The contextual drafter pulls the relationship summary, generates three personalized opening options, then builds the email paragraph by paragraph — each step reviewable and customizable before sending to the Gmail draft box. The architecture is designed to scale into a full Client Intelligence System with HubSpot CRM integration and ChatGPT-powered querying.`,
    coverImage: "/images/projects/emailagent/page-01.png",
    processImages: [
      "/images/projects/emailagent/page-01.png",
      "/images/projects/emailagent/page-02.png",
      "/images/projects/emailagent/page-05.png",
      "/images/projects/emailagent/page-07.png",
      "/images/projects/emailagent/page-10.png",
      "/images/projects/emailagent/page-17.png",
      "/images/projects/emailagent/page-20.png",
      "/images/projects/emailagent/page-23.png",
      "/images/projects/emailagent/page-27.png",
    ],
    tags: ["AI Agent", "Automation", "Email", "Slack Bot", "n8n"],
    tools: ["n8n", "OpenAI API", "Slack API", "Gmail API", "Google Sheets"],
    year: "2025",
    slug: "email-agent",
    category: "automation",
  },

  // ── Google AI Studio ─────────────────────────────────────
  {
    id: "kaleidoscope",
    title: "Kaleidoscope Effects",
    description:
      "Vibe-coded generative visual effects used as real-time shooting backgrounds.",
    fullDescription: `Experimental generative visual effects created through vibe coding — using AI-assisted code generation to rapidly prototype kaleidoscope patterns and dynamic backgrounds. These real-time visuals were designed to serve as shooting backgrounds for video production, combining creative coding with practical filmmaking needs.`,
    coverImage: "/images/projects/kaleidoscope/cover.png",
    processImages: [],
    tags: ["Vibe Coding", "Generative", "Real-time", "Shooting Background"],
    tools: ["Google AI Studio", "JavaScript", "Canvas"],
    year: "2025",
    slug: "kaleidoscope-effects",
    category: "google-ai",
  },
  {
    id: "particle-system",
    title: "Interactive Particle System",
    description:
      "Vibe-coded interactive particle system used as a real-time shooting background. Footage coming soon.",
    fullDescription: `An interactive particle system created through vibe coding, designed as a dynamic real-time background for video shoots. The system generates responsive particle animations that react to input, creating organic, flowing visuals suitable for on-set projection or LED volume backgrounds. Shooting footage coming soon.`,
    coverImage: "/images/projects/particles/demo.mov",
    processImages: [],
    tags: ["Vibe Coding", "Interactive", "Particles", "Shooting Background"],
    tools: ["Google AI Studio", "JavaScript", "WebGL"],
    year: "2025",
    slug: "particle-system",
    category: "google-ai",
  },

  // ── Playground ───────────────────────────────────────────
  {
    id: "dance-videographer",
    title: "Dance Videographer",
    description:
      "Dance videography and motion capture explorations.",
    fullDescription: `A collection of dance videography work spanning multiple styles and productions.`,
    coverImage: "/images/projects/dance-placeholder.jpg",
    coverVideo: "/video/dance-placeholder.mp4",
    processImages: [],
    tags: ["Videography", "Dance", "Motion"],
    tools: ["DaVinci Resolve", "Premiere Pro"],
    year: "2024",
    slug: "dance-videographer",
    category: "playground",
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description:
      "Brand identity and logo design work.",
    fullDescription: `A collection of logo and brand identity design projects.`,
    coverImage: "/images/projects/logo-placeholder.jpg",
    processImages: [],
    tags: ["Graphic Design", "Branding", "Logo"],
    tools: ["Illustrator", "Figma"],
    year: "2024",
    slug: "logo-design",
    category: "playground",
  },
];

export function getProjectsByCategory(categoryId: string): Project[] {
  return projects.filter((p) => p.category === categoryId);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
