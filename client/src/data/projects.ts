import type { BiText } from "@/i18n/types";

export interface Project {
  id: string;
  title: BiText;
  description: BiText;
  fullDescription: BiText;
  coverImage: string;
  coverVideo?: string;
  heroImage?: string;
  processImages: string[];
  tags: BiText[];
  tools: string[];
  year: string;
  slug: string;
  category: string;
  featured?: boolean;
  hidden?: boolean;
  status?: "live" | "wip";
  externalUrl?: string;
  coverPosition?: string;
  noDetail?: boolean;
  coverVideoAutoplay?: string;
  roles?: BiText[];
  highlights?: { metric: BiText; label: BiText }[];
}

export interface Category {
  id: string;
  label: BiText;
}

export const categories: Category[] = [
  { id: "gen-production", label: { en: "Generative Production", zh: "生成式制作" } },
  { id: "automation", label: { en: "Automation Workflows", zh: "自动化工作流" } },
  { id: "interactive-design", label: { en: "Interactive Design", zh: "交互设计" } },
  { id: "google-ai", label: { en: "Playground", zh: "Playground" } },
];

export const projects: Project[] = [
  // ── Generative Production ───────────────────────────────
  {
    id: "checkers",
    title: {
      en: "Checker's & Rally's 26'",
      zh: "Checker's & Rally's 26'",
    },
    description: {
      en: "AI-generated creative direction brought to life through virtual production — from concept art to set design to LED volume shoot.",
      zh: "通过虚拟制作将 AI 生成的创意方向变为现实——从概念艺术到布景设计再到 LED 虚拟棚拍摄。",
    },
    fullDescription: {
      en: `Led the creative direction pipeline for Checker's & Rally's commercial, starting with AI-generated concept art that defined the visual language — a brownstone street scene with signature checkered stairs and party-lit windows. This AI vision guided every downstream decision, from physical set construction to Unreal Engine environment builds.

The production team constructed a practical brownstone stoop wrapped in checkered vinyl to match the AI-generated direction, while I built photorealistic virtual restaurant environments in Unreal Engine. During the live shoot, these environments were displayed on a curved LED volume, allowing actors to perform within the virtual setting — capturing everything in-camera with no green screen compositing required.`,
      zh: `主导了 Checker's & Rally's 广告的创意方向流程，从 AI 生成的概念艺术开始，确定了整体视觉语言——一个标志性的棕石街景，配有经典棋盘格楼梯和派对灯光点缀的窗户。这一 AI 视觉方案指导了后续每一步决策，从实体布景搭建到 Unreal Engine 环境构建。

制作团队搭建了一个覆盖棋盘格贴纸的实体棕石门廊，以匹配 AI 生成的创意方向；同时我在 Unreal Engine 中构建了逼真的虚拟餐厅环境。在实拍过程中，这些虚拟环境被投射在弧形 LED 屏幕上，让演员在虚拟场景中进行表演——所有画面均为机内实拍合成，无需绿幕后期合成。`,
    },
    coverImage: "/images/projects/checkers/cover.png",
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
    tags: [
      { en: "AI Creative Direction", zh: "AI 创意方向" },
      { en: "Virtual Production", zh: "虚拟制作" },
      { en: "Unreal Engine", zh: "Unreal Engine" },
      { en: "LED Volume", zh: "LED 虚拟棚" },
      { en: "Commercial", zh: "商业广告" },
    ],
    tools: ["Unreal Engine", "ComfyUI", "Nano Banana", "BFL Flux"],
    year: "2026",
    slug: "checkers-and-rallys",
    category: "gen-production",
    roles: [
      { en: "AI Artist", zh: "AI 美术师" },
      { en: "Tech-vis Assist", zh: "技术可视化助理" },
    ],
  },
  {
    id: "new-year",
    title: {
      en: "New Year, New Me",
      zh: "新年，新的我",
    },
    description: {
      en: "Runway Gen:48 Finalist — AI-generated short film using image-to-video generation and prompt engineering.",
      zh: "Runway Gen:48 入围作品——使用图生视频和提示词工程创作的 AI 短片。",
    },
    fullDescription: {
      en: `Runway Gen:48 Finalist. On a distant mountain where each version of herself remains frozen at a different age, a girl prepares to meet her 21-year-old self. Desperate to shape her future, she clings to a crystal ball — until it accidentally slips away.

Created with Xinyu (Cindy) Li using Runway's AI tools. We used Runway Frames to generate images from text prompts, incorporating the new feature that allows adding photos as visual style, location, or character references. Then, we used Gen-3 Alpha, Gen-3 Alpha Turbo, and Gen-4 to animate these images into moving video clips, bringing the story to life. Music & sound effects from Epidemic Sound.`,
      zh: `Runway Gen:48 入围作品。在一座遥远的山上，每一个不同年龄的自己都被定格于此，一个女孩准备去见 21 岁的自己。她拼命想要掌控自己的未来，紧紧抱着一颗水晶球——直到它意外滑落。

与李昕谕 (Cindy) 合作，使用 Runway 的 AI 工具创作。我们使用 Runway Frames 通过文字提示生成图像，并运用了可添加照片作为视觉风格、场景或角色参考的新功能。随后使用 Gen-3 Alpha、Gen-3 Alpha Turbo 和 Gen-4 将这些图像转化为动态视频片段，将故事赋予生命。音乐与音效来自 Epidemic Sound。`,
    },
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
    tags: [
      { en: "Runway Gen:48 Finalist", zh: "Runway Gen:48 入围" },
      { en: "AI Film", zh: "AI 影片" },
      { en: "Image-to-Video", zh: "图生视频" },
      { en: "Prompt Engineering", zh: "提示词工程" },
    ],
    tools: ["Runway Frames", "Gen-3 Alpha", "Gen-3 Alpha Turbo", "Gen-4", "Epidemic Sound"],
    year: "2025",
    slug: "new-year-new-me",
    category: "gen-production",
    roles: [
      { en: "Image to Video Prompt Engineer", zh: "图生视频提示词工程师" },
      { en: "Sound Designer", zh: "音效设计师" },
    ],
    highlights: [
      {
        metric: { en: "Runway Gen:48 Finalist", zh: "Runway Gen:48 入围" },
        label: { en: "Result", zh: "成果" },
      },
    ],
  },
  {
    id: "panera",
    title: {
      en: "Panera Mix & Match",
      zh: "Panera Mix & Match",
    },
    description: {
      en: "Compressed pre-vis from 3+ days to half a day — building an AI-integrated pipeline with 3D asset generation and reusable motion control for food & beverage commercials.",
      zh: "将预演周期从 3 天以上压缩至半天——构建集 AI 3D 资产生成与可复用运动控制于一体的流程，服务于食品饮料广告。",
    },
    fullDescription: {
      en: `The Garage specializes in high-impact food and beverage content — dramatic camera moves, high-speed shots catching dripping sauces and crispy textures. But traditional pre-visualization for a 15-second spot (food animation + camera animation + matched lighting) took 3+ days to render — too slow for commercial timelines.

The goal: speed up the client-facing pre-vis workflow without sacrificing the visual fidelity needed to align creative directors and clients before a shoot.

I built a two-part AI-integrated pipeline — AI-driven 3D asset generation from product photography, paired with Flair Motion Control and Unreal Engine for reusable camera movements across different objects, lighting setups, and scenarios. This eliminated redundant animation work per project and compressed the pre-vis timeline from 3+ days to half a day.`,
      zh: `The Garage 专注于高冲击力的食品饮料内容——戏剧性的镜头运动、高速摄影捕捉酱汁滴落和酥脆质感。但传统的 15 秒广告预演（食品动画 + 镜头动画 + 匹配灯光）需要 3 天以上的渲染时间——对于商业项目时间线来说太慢了。

目标：在不牺牲视觉保真度的前提下加速面向客户的预演工作流——确保创意总监和客户在拍摄前能够充分对齐。

我构建了一套两部分的 AI 集成流程——从产品摄影出发的 AI 驱动 3D 资产生成，配合 Flair 运动控制与 Unreal Engine 实现跨不同物体、灯光设置和场景的可复用镜头运动。这消除了每个项目中重复的动画工作，将预演周期从 3 天以上压缩至半天。`,
    },
    coverImage: "/images/projects/panera/panera.png",
    processImages: [],
    tags: [
      { en: "AI Pre-vis", zh: "AI 预演" },
      { en: "Virtual Production", zh: "虚拟制作" },
      { en: "Unreal Engine", zh: "Unreal Engine" },
      { en: "Motion Control", zh: "运动控制" },
      { en: "Commercial", zh: "商业广告" },
    ],
    tools: ["Unreal Engine", "ComfyUI", "Flair Motion Control", "nDisplay", "LED Volume"],
    year: "2026",
    slug: "panera-mix-and-match",
    category: "gen-production",
    roles: [
      { en: "Pre-visualization Artist", zh: "预演美术师" },
    ],
    highlights: [
      {
        metric: { en: "3+ days → ½ day", zh: "3+ 天 → 半天" },
        label: { en: "Pre-vis Timeline", zh: "预演周期" },
      },
      {
        metric: { en: "Major differentiator", zh: "核心差异化优势" },
        label: { en: "Client Feedback", zh: "客户反馈" },
      },
      {
        metric: { en: "Repeat business", zh: "持续合作" },
        label: { en: "Business Impact", zh: "商业影响" },
      },
    ],
  },
  {
    id: "checkers-vp",
    title: {
      en: "Checker's & Rally's 25'",
      zh: "Checker's & Rally's 25'",
    },
    description: {
      en: "Unreal Engine operator for a Checker's & Rally's commercial — built and operated virtual environments on an LED volume stage.",
      zh: "担任 Checker's & Rally's 广告的 Unreal Engine 操作员——在 LED 虚拟棚中搭建并操控虚拟环境。",
    },
    fullDescription: {
      en: `Worked as Unreal Engine operator on the Checker's and Rally's commercial production. Responsible for building photorealistic virtual restaurant environments in Unreal Engine and operating them live on an LED volume stage during the shoot.

The project involved creating both daytime and nighttime versions of the Checker's restaurant interior, complete with brick walls, checkered tile floor, warm practical lighting, and fully dressed set pieces. During the live shoot, the Unreal Engine environments were displayed on a curved LED volume, allowing actors to perform within the virtual setting — capturing everything in-camera with no green screen compositing required.`,
      zh: `在 Checker's & Rally's 广告拍摄中担任 Unreal Engine 操作员。负责在 Unreal Engine 中构建逼真的虚拟餐厅环境，并在拍摄期间于 LED 虚拟棚中进行实时操控。

该项目包括制作 Checker's 餐厅内部的日间和夜间两个版本，涵盖砖墙、棋盘格地砖、温暖的实景灯光以及完整的布景陈设。在实拍过程中，Unreal Engine 环境被投射在弧形 LED 屏幕上，让演员在虚拟场景中进行表演——所有画面均为机内实拍合成，无需绿幕后期合成。`,
    },
    coverImage: "/images/projects/checkers/chercker-25-thumbnail.png",
    processImages: [],
    tags: [
      { en: "Virtual Production", zh: "虚拟制作" },
      { en: "Unreal Engine", zh: "Unreal Engine" },
      { en: "LED Volume", zh: "LED 虚拟棚" },
      { en: "Commercial", zh: "商业广告" },
    ],
    tools: ["Unreal Engine", "Maya", "LiveFX Assimilate"],
    year: "2025",
    slug: "checkers-vp",
    category: "gen-production",
    roles: [
      { en: "Unreal Engine Environment Artist", zh: "Unreal Engine 环境美术师" },
      { en: "On-set Engine Operation", zh: "现场引擎操控" },
    ],
  },

  // ── Generative Production (continued) ───────────────────
  {
    id: "ritz",
    title: {
      en: "Ritz Commercial Pre-vis",
      zh: "Ritz 广告预演",
    },
    description: {
      en: "AI-driven product pre-visualization using Unreal Engine conditioning passes and ComfyUI generation for Ritz.",
      zh: "使用 Unreal Engine 条件渲染通道与 ComfyUI 生成技术，为 Ritz 打造的 AI 驱动产品预演。",
    },
    fullDescription: {
      en: `AI-driven pre-visualization for Ritz, combining Unreal Engine render passes with ComfyUI generative pipelines. Starting from product photography references, the workflow uses Unreal Engine to produce depth, mask, and lighting passes that condition the AI generation — ensuring precise compositional control over the final output.

The project explores both static product shots and video generation conditioning, producing client-facing visuals that bridge the gap between storyboard concepts and final commercial production.`,
      zh: `为 Ritz 打造的 AI 驱动预演方案，将 Unreal Engine 渲染通道与 ComfyUI 生成式流程相结合。从产品摄影参考出发，工作流使用 Unreal Engine 生成深度、遮罩和灯光通道来引导 AI 生成——确保对最终输出的精确构图控制。

该项目同时探索了静态产品画面和视频生成条件控制，产出面向客户的视觉效果，弥合了分镜概念与最终广告成品之间的差距。`,
    },
    coverImage: "/images/projects/ritz/cover-static.png",
    coverVideo: "/images/projects/ritz/cover.gif",
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
    tags: [
      { en: "Unreal Engine", zh: "Unreal Engine" },
      { en: "ComfyUI", zh: "ComfyUI" },
      { en: "Pre-vis", zh: "预演" },
      { en: "Video Conditioning", zh: "视频条件控制" },
    ],
    tools: ["Unreal Engine", "ComfyUI", "Depth Pass", "Mask Pass"],
    year: "2024",
    slug: "ritz",
    category: "gen-production",
  },
  {
    id: "sam-adams",
    title: {
      en: "Samuel Adam's Pre-visualization",
      zh: "Samuel Adams 预演",
    },
    description: {
      en: "Client-facing pre-visualization combining Unreal Engine depth & outline passes with ComfyUI generative workflows.",
      zh: "面向客户的预演方案，将 Unreal Engine 深度与轮廓渲染通道与 ComfyUI 生成式工作流相结合。",
    },
    fullDescription: {
      en: `This project delivers production-ready pre-visualization for Samuel Adam's commercial campaigns (Octoberfest & Juicy IPA). By leveraging Unreal Engine's depth and outline render passes as structural guides, the footage is processed through ComfyUI generative pipelines to produce polished, client-facing visual concepts.

The workflow starts with storyboard sketches defining camera movement and composition, then uses Unreal Engine to generate base renders with depth and outline passes. These passes feed into ComfyUI where relighting, outpainting, and style transfer produce the final photorealistic product shots — all while maintaining precise compositional control that clients can confidently approve.`,
      zh: `本项目为 Samuel Adams 广告系列（Octoberfest 和 Juicy IPA）提供制作级预演方案。利用 Unreal Engine 的深度与轮廓渲染通道作为结构引导，通过 ComfyUI 生成式流程对画面进行处理，产出精美的面向客户的视觉概念。

工作流程从分镜草图开始，确定镜头运动与构图，随后使用 Unreal Engine 生成带有深度和轮廓通道的基础渲染。这些通道输入 ComfyUI，通过重新打光、外扩绘制和风格迁移生成最终的逼真产品画面——同时保持精确的构图控制，使客户可以放心审批。`,
    },
    coverImage: "/images/projects/sam-adams/cover-static.png",
    coverVideo: "/images/projects/sam-adams/cover.gif",
    heroImage: "/images/projects/sam-adams/detail-hero.png",
    processImages: [
      "/images/projects/sam-adams/hero.png",
      "/images/projects/sam-adams/storyboard-dolly.png",
      "/images/projects/sam-adams/camera-moves.png",
      "/images/projects/sam-adams/workflow-relit.png",
      "/images/projects/sam-adams/outpaint-before.png",
      "/images/projects/sam-adams/outpaint-after.png",
    ],
    tags: [
      { en: "Unreal Engine", zh: "Unreal Engine" },
      { en: "ComfyUI", zh: "ComfyUI" },
      { en: "Pre-vis", zh: "预演" },
    ],
    tools: ["Unreal Engine", "ComfyUI"],
    year: "2025",
    slug: "samuel-adams-previs",
    category: "gen-production",
    featured: true,
  },

  // ── Automation Workflows ─────────────────────────────────
  {
    id: "parallax-ai",
    title: {
      en: "Parallax.ai",
      zh: "Parallax.ai",
    },
    description: {
      en: "AI-powered automation platform — currently in development.",
      zh: "AI 驱动的自动化平台——目前正在开发中。",
    },
    fullDescription: {
      en: `An AI-powered automation platform currently under active development.`,
      zh: `一个 AI 驱动的自动化平台，目前正在积极开发中。`,
    },
    coverImage: "/images/projects/parallax-cover.png",
    processImages: [],
    tags: [
      { en: "AI", zh: "AI" },
      { en: "Automation", zh: "自动化" },
      { en: "Platform", zh: "平台" },
    ],
    tools: ["React", "Python", "OpenAI API"],
    year: "2025",
    slug: "parallax-ai",
    category: "automation",
    status: "wip",
  },
  {
    id: "email-agent",
    title: {
      en: "Email Agent",
      zh: "邮件智能代理",
    },
    description: {
      en: "A Slack-based email automation agent — fetches Gmail history, builds relationship context with AI, and drafts personalized outreach paragraph by paragraph.",
      zh: "基于 Slack 的邮件自动化智能代理——获取 Gmail 历史记录，利用 AI 构建关系上下文，并逐段生成个性化外联邮件。",
    },
    fullDescription: {
      en: `An intelligent email agent built as a Slack bot ("Mail BOT") that automates the full email outreach workflow. The system has two core pipelines: Fetch + Build Context and Draft with AI & Template.

The Fetch pipeline connects to Gmail, pulls email history for individual contacts or entire groups (e.g. all @pepsi.co addresses), and uses AI to analyze relationships — generating structured summaries including background info, collaboration history, last contact details, and studio visit evidence. All data is stored in a Google Sheet that serves as a permanent relationship database.

The Draft pipeline offers two modes: template-based quick drafts and AI-assisted contextual drafting. The contextual drafter pulls the relationship summary, generates three personalized opening options, then builds the email paragraph by paragraph — each step reviewable and customizable before sending to the Gmail draft box. The architecture is designed to scale into a full Client Intelligence System with HubSpot CRM integration and ChatGPT-powered querying.`,
      zh: `一个以 Slack 机器人（"Mail BOT"）形式构建的智能邮件代理，自动化完整的邮件外联工作流。系统包含两个核心流程：获取 + 构建上下文，以及 AI 与模板辅助起草。

获取流程连接 Gmail，拉取单个联系人或整个群组（例如所有 @pepsi.co 地址）的邮件历史，并使用 AI 分析关系——生成结构化摘要，包括背景信息、合作历史、最近联系详情和工作室拜访记录。所有数据存储在 Google Sheet 中，作为永久的关系数据库。

起草流程提供两种模式：基于模板的快速起草和 AI 辅助的上下文起草。上下文起草器会提取关系摘要，生成三个个性化的开头选项，然后逐段构建邮件——每一步都可在发送至 Gmail 草稿箱前进行审阅和自定义。该架构旨在扩展为完整的客户情报系统，集成 HubSpot CRM 和 ChatGPT 驱动的查询功能。`,
    },
    coverImage: "/images/projects/emailagent/Thumbnail.png",
    coverPosition: "left",
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
    tags: [
      { en: "AI Agent", zh: "AI 代理" },
      { en: "Automation", zh: "自动化" },
      { en: "Email", zh: "邮件" },
      { en: "Slack Bot", zh: "Slack 机器人" },
      { en: "n8n", zh: "n8n" },
    ],
    tools: ["n8n", "OpenAI API", "Slack API", "Gmail API", "Google Sheets"],
    year: "2025",
    slug: "email-agent",
    category: "automation",
    highlights: [
      {
        metric: { en: "1 hour → 5 min", zh: "1 小时 → 5 分钟" },
        label: { en: "Client Research Time", zh: "客户调研时间" },
      },
      {
        metric: { en: "Improved team efficiency", zh: "提升团队效率" },
        label: { en: "Impact", zh: "影响" },
      },
    ],
  },

  // ── Interactive Design (SFU) ────────────────────────────
  {
    id: "pears",
    title: {
      en: "Pærs — Maternity Assistant App",
      zh: "Pærs — 孕期助手 App",
    },
    description: {
      en: "An online journalized maternity assistant app designed to help pregnant families learn scientific maternity knowledge, care about their emotions and accompany their journey to being parents.",
      zh: "一款在线日志式孕期助手 App，帮助准爸妈学习科学孕产知识、关注情绪健康，陪伴他们走过成为父母的旅程。",
    },
    fullDescription: {
      en: `Pærs is a full-featured maternity assistant app designed end-to-end as a solo project — from user research and problem framing through information architecture, content strategy, visual design system, and high-fidelity UI.

The app provides audio-based scientific parenting content and digitalizes Doula and Marital Therapy services, making professional support accessible through a warm, approachable interface. The design process included competitive analysis, user persona development, user flow mapping, wireframing, and iterative high-fidelity prototyping in Figma.`,
      zh: `Pærs 是一款功能完整的孕期助手 App，作为个人项目从头到尾独立完成——从用户调研和问题定义，到信息架构、内容策略、视觉设计系统和高保真 UI 设计。

该 App 提供基于音频的科学育儿内容，并将 Doula（导乐）和婚姻治疗服务数字化，通过温暖、易于接近的界面让专业支持触手可及。设计过程包括竞品分析、用户画像建立、用户流程图、线框图和 Figma 中的迭代高保真原型设计。`,
    },
    coverImage: "/images/projects/pears/pears-cover.png",
    heroImage: "/images/projects/pears/pears-2.png",
    processImages: [
      "/images/projects/pears/pears-2.png",
      "/images/projects/pears/pears-3.png",
      "/images/projects/pears/pears-4.png",
      "/images/projects/pears/pears-5.png",
      "/images/projects/pears/pears-6.png",
      "/images/projects/pears/pears-7.png",
      "/images/projects/pears/pears-8.png",
      "/images/projects/pears/pears-9.png",
      "/images/projects/pears/pears-10.png",
      "/images/projects/pears/pears-11.png",
      "/images/projects/pears/pears-12.png",
      "/images/projects/pears/pears-13.png",
      "/images/projects/pears/pears-14.png",
      "/images/projects/pears/pears-15.png",
      "/images/projects/pears/pears-16.png",
      "/images/projects/pears/pears-17.png",
    ],
    tags: [
      { en: "UI/UX Design", zh: "UI/UX 设计" },
      { en: "Product Design", zh: "产品设计" },
      { en: "User Research", zh: "用户调研" },
      { en: "Prototyping", zh: "原型设计" },
      { en: "Design System", zh: "设计系统" },
    ],
    tools: ["Figma"],
    year: "2022",
    slug: "paers-maternity-app",
    category: "interactive-design",
    roles: [
      { en: "Solo Designer", zh: "独立设计师" },
      { en: "UX Researcher", zh: "用户体验研究员" },
    ],
  },
  {
    id: "google-map-senior",
    title: {
      en: "Google Map Senior Mode",
      zh: "Google Map 长者模式",
    },
    description: {
      en: "A redesigned Google Maps interface with senior-friendly navigation, accessibility-first design, and real user testing with elderly participants.",
      zh: "重新设计的 Google Maps 界面，提供长者友好的导航体验、无障碍优先设计，并与老年参与者进行了真实用户测试。",
    },
    fullDescription: {
      en: `Google Map Senior Mode reimagines the Google Maps navigation experience for elderly users who struggle with complex digital interfaces. The project addresses the digital divide facing seniors through a simplified, accessible interface design.

The design process included user research to understand barriers isolating seniors from digital interfaces, persona development, user flow mapping, and high-fidelity prototyping in Figma with interactive demos in ProtoPie. Key design decisions included larger touch targets, simplified navigation flows, step-by-step tutorial onboarding, and high-contrast visual elements. The prototype was tested with real senior users, producing insights that informed further design iterations.`,
      zh: `Google Map 长者模式为在复杂数字界面中感到困难的老年用户重新构想了 Google Maps 导航体验。该项目通过简化、无障碍的界面设计来应对老年人面临的数字鸿沟。

设计过程包括用户调研以了解将老年人隔离在数字界面之外的障碍、用户画像建立、用户流程图，以及在 Figma 中的高保真原型设计和 ProtoPie 中的交互演示。关键设计决策包括更大的触控区域、简化的导航流程、分步引导教程和高对比度视觉元素。原型经过真实老年用户测试，产出的洞察进一步推动了设计迭代。`,
    },
    coverImage: "/images/projects/google-map-senior/cover.png",
    processImages: [
      "/images/projects/google-map-senior/methodology.png",
      "/images/projects/google-map-senior/research.png",
      "/images/projects/google-map-senior/reasons-isolate.png",
      "/images/projects/google-map-senior/helpful-solutions.png",
      "/images/projects/google-map-senior/define-the-goal.png",
      "/images/projects/google-map-senior/user-flow.png",
      "/images/projects/google-map-senior/mock-ups.png",
      "/images/projects/google-map-senior/aesthetic-guideline.png",
      "/images/projects/google-map-senior/persona.png",
      "/images/projects/google-map-senior/prototype-1.png",
      "/images/projects/google-map-senior/prototype-2.png",
      "/images/projects/google-map-senior/prototype-3.png",
      "/images/projects/google-map-senior/test-out.png",
    ],
    tags: [
      { en: "UI/UX Design", zh: "UI/UX 设计" },
      { en: "Accessibility", zh: "无障碍设计" },
      { en: "User Research", zh: "用户调研" },
      { en: "User Testing", zh: "用户测试" },
      { en: "Prototyping", zh: "原型设计" },
    ],
    tools: ["Figma", "ProtoPie"],
    year: "2022",
    slug: "google-map-senior-mode",
    category: "interactive-design",
    roles: [
      { en: "UX/UI Designer (Navigation)", zh: "UX/UI 设计师（导航功能）" },
      { en: "Researcher", zh: "调研员" },
    ],
  },
  {
    id: "alltrails",
    title: {
      en: "AllTrails Add-on Features",
      zh: "AllTrails 附加功能设计",
    },
    description: {
      en: "Designed two new features for AllTrails — a 'Handbook' knowledge platform and 'Distance Rewards' gamification system — balancing user needs with business objectives.",
      zh: "为 AllTrails 设计了两个新功能——\"手册\" 知识平台和 \"距离奖励\" 游戏化系统——平衡用户需求与商业目标。",
    },
    fullDescription: {
      en: `Designed two add-on features for AllTrails as a solo UX design project: the "Handbook" and "Distance Rewards" systems.

The Handbook feature integrates outdoor knowledge and hiking essentials into the app — safety tips, seasonal hotspots, packing guides, and first aid guidelines. It's designed to be beginner-friendly while also inviting experienced hikers to share their expertise, building community and eliminating knowledge barriers.

Distance Rewards gamifies the hiking experience by encouraging users to reach distance milestones in exchange for AllTrails Premium trials, creating a win-win that drives engagement and reduces the paywall friction between users and premium features.

The design process included competitive analysis, user persona development, user scenario mapping, user flow design, wireframing, and high-fidelity interactive prototyping in Figma and ProtoPie.`,
      zh: `作为个人 UX 设计项目，为 AllTrails 设计了两个附加功能："手册"和"距离奖励"系统。

手册功能将户外知识和徒步必备信息整合到 App 中——安全贴士、季节性热门路线、打包指南和急救指南。设计上对新手友好，同时也欢迎经验丰富的徒步者分享经验，建立社区并消除知识壁垒。

距离奖励通过鼓励用户达到距离里程碑来换取 AllTrails Premium 试用，将徒步体验游戏化，创造一个双赢局面——既提高用户参与度，又减少用户与高级功能之间的付费墙阻力。

设计过程包括竞品分析、用户画像建立、用户场景图、用户流程设计、线框图，以及在 Figma 和 ProtoPie 中的高保真交互原型设计。`,
    },
    coverImage: "/images/projects/alltrails/cover.png",
    processImages: [
      "/images/projects/alltrails/alltrails-1.png",
      "/images/projects/alltrails/persona.png",
      "/images/projects/alltrails/user-flow.png",
      "/images/projects/alltrails/hi-fidel1.png",
      "/images/projects/alltrails/hi-fidel2.png",
      "/images/projects/alltrails/user-sce1.png",
      "/images/projects/alltrails/user-sce2.png",
      "/images/projects/alltrails/prototype.png",
    ],
    tags: [
      { en: "UX Design", zh: "用户体验设计" },
      { en: "Feature Design", zh: "功能设计" },
      { en: "Gamification", zh: "游戏化" },
      { en: "User Research", zh: "用户调研" },
      { en: "Prototyping", zh: "原型设计" },
    ],
    tools: ["Figma", "ProtoPie"],
    year: "2022",
    slug: "alltrails-add-on-features",
    category: "interactive-design",
    roles: [
      { en: "Solo UX Designer", zh: "独立 UX 设计师" },
    ],
  },

  // ── Google AI Studio ─────────────────────────────────────
  {
    id: "kaleidoscope",
    title: {
      en: "Interactive Kaleidoscope Visualizer",
      zh: "交互式万花筒可视化",
    },
    description: {
      en: "Vibe-coded generative visual effects used as real-time shooting backgrounds.",
      zh: "通过氛围编程创作的生成式视觉特效，用作实时拍摄背景。",
    },
    fullDescription: {
      en: `Experimental generative visual effects created through vibe coding — using AI-assisted code generation to rapidly prototype kaleidoscope patterns and dynamic backgrounds. These real-time visuals were designed to serve as shooting backgrounds for video production, combining creative coding with practical filmmaking needs.`,
      zh: `通过氛围编程创作的实验性生成式视觉特效——利用 AI 辅助代码生成快速原型化万花筒图案和动态背景。这些实时视觉效果旨在用作视频拍摄的背景，将创意编程与实际影视制作需求相结合。`,
    },
    coverImage: "/images/projects/kaleidoscope/cover.png",
    coverVideo: "/images/projects/kaleidoscope/kaleidoscope-demo.mp4",
    noDetail: true,
    processImages: [],
    tags: [
      { en: "Vibe Coding", zh: "氛围编程" },
      { en: "Generative", zh: "生成式" },
      { en: "Real-time", zh: "实时" },
      { en: "Shooting Background", zh: "拍摄背景" },
    ],
    tools: ["Google AI Studio", "JavaScript", "Canvas"],
    year: "2025",
    slug: "kaleidoscope-effects",
    category: "google-ai",
  },
  {
    id: "google-flow-avatars",
    title: {
      en: "Google FLOW Avatar Variations",
      zh: "Google FLOW 头像变体",
    },
    description: {
      en: "Character avatar variations designed for Google FLOW.",
      zh: "为 Google FLOW 设计的角色头像变体。",
    },
    fullDescription: {
      en: `Designed original character avatars in Procreate, then used Google AI Studio to generate style-consistent pose and outfit variations — turning a handful of hand-drawn figures into a full avatar system.`,
      zh: `在 Procreate 中设计原创角色形象，再通过 Google AI Studio 生成风格一致的姿势和服装变体——将少量手绘角色扩展为完整的头像系统。`,
    },
    coverImage: "/images/projects/GAIS/avatar.png",
    processImages: [],
    tags: [
      { en: "Character Design", zh: "角色设计" },
      { en: "Avatar", zh: "头像" },
      { en: "Google FLOW", zh: "Google FLOW" },
    ],
    tools: ["Google AI Studio", "Procreate"],
    year: "2026",
    slug: "google-flow-avatars",
    category: "google-ai",
  },

  {
    id: "ocean",
    title: {
      en: "Ocean",
      zh: "Ocean",
    },
    description: {
      en: "Jewelry shoot for designer Kylie Lu — LED wall environments and Flair motion control.",
      zh: "珠宝设计师 Kylie Lu 的珠宝拍摄——LED 墙环境与 Flair 运动控制。",
    },
    fullDescription: {
      en: `A jewelry shoot for designer Kylie Lu, combining LED wall virtual environments with Flair motion control to capture cinematic product shots. LED Wall Tech & Flair motion control by Chris Jost.`,
      zh: `为珠宝设计师 Kylie Lu 拍摄的珠宝广告，将 LED 墙虚拟环境与 Flair 运动控制相结合，拍摄电影级产品镜头。LED 墙技术与 Flair 运动控制由 Chris Jost 负责。`,
    },
    coverImage: "/images/projects/ocean/ocean.png",
    coverVideo: "/images/projects/ocean/kylie00004881.mp4",
    processImages: [],
    tags: [
      { en: "Jewelry Shoot", zh: "珠宝拍摄" },
      { en: "LED Wall", zh: "LED 墙" },
      { en: "Motion Control", zh: "运动控制" },
    ],
    tools: ["LED Volume", "Flair Motion Control"],
    year: "2025",
    slug: "ocean",
    category: "google-ai",
    roles: [
      { en: "Director", zh: "导演" },
      { en: "DoP", zh: "摄影指导" },
      { en: "Producer", zh: "制片人" },
    ],
  },
  {
    id: "batch-bg-remover",
    title: {
      en: "Batch BG Remover",
      zh: "批量背景移除工具",
    },
    description: {
      en: "A batch background removal tool built with Google AI Studio.",
      zh: "使用 Google AI Studio 构建的批量背景移除工具。",
    },
    fullDescription: {
      en: `A batch background removal tool built with Google AI Studio, enabling efficient bulk processing of images to remove backgrounds automatically.`,
      zh: `使用 Google AI Studio 构建的批量背景移除工具，支持高效批量处理图片以自动移除背景。`,
    },
    coverImage: "/images/projects/GAIS/cover.png",
    coverVideo: "/images/projects/GAIS/cover.mp4",
    noDetail: true,
    hidden: true,
    processImages: [],
    tags: [
      { en: "Google AI Studio", zh: "Google AI Studio" },
      { en: "Background Removal", zh: "背景移除" },
      { en: "Batch Processing", zh: "批量处理" },
    ],
    tools: ["Google AI Studio"],
    year: "2025",
    slug: "batch-bg-remover",
    category: "google-ai",
  },

];

export function getProjectsByCategory(categoryId: string, includeHidden = false): Project[] {
  return projects.filter((p) => p.category === categoryId && (includeHidden || !p.hidden));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

const featuredHomeSlugs = [
  "checkers-and-rallys",
  "new-year-new-me",
  "panera-mix-and-match",
  "email-agent",
];

export function getFeaturedHomeProjects(): Project[] {
  return featuredHomeSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => p !== undefined);
}
