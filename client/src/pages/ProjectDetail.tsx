/* Project Detail Page — narrative layout with process sections */

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { getProjectBySlug } from "@/data/projects";
import { useLanguage, useBiText } from "@/contexts/LanguageContext";
import type { BiText } from "@/i18n/types";
import PdfViewer from "@/components/PdfViewer";

/** Per-project process sections for rich detail pages */
interface Section {
  label: BiText;
  description: BiText;
  images: string[];
  captions?: (string | BiText)[];
  rowCaption?: BiText;
  rowLabel?: string;
  videos?: string[];
  layout?: "full" | "side-by-side" | "hero-plus-row" | "video-hero-plus-row";
  youtube?: string;
  pdf?: string;
  extraRows?: { label: string; items: { type: "image" | "video"; src: string; caption?: (string | BiText) }[] }[];
}
const projectSections: Record<string, Section[]> = {
  "samuel-adams-previs": [
    {
      label: { en: "Final Output", zh: "最终成果" },
      description: {
        en: "The hero end-card for Samuel Adams Octoberfest — bottle, pint glass and can composed on a warm wood surface against a deep navy backdrop. Entirely generated through the ComfyUI pipeline.",
        zh: "Samuel Adams Octoberfest 的主视觉终帧 — 酒瓶、品脱杯和罐装啤酒置于温暖的木质表面上，背景为深海军蓝色。完全通过 ComfyUI 管线生成。",
      },
      images: ["/images/projects/sam-adams/hero.png"],
      layout: "full",
    },
    {
      label: { en: "Storyboard → Render", zh: "分镜 → 渲染" },
      description: {
        en: "Starting from hand-drawn storyboard frames that define camera movement (push-in, dolly, looping), the shots are translated into photorealistic renders through Unreal Engine base passes fed into ComfyUI.",
        zh: "从定义镜头运动（推进、移动、循环）的手绘分镜帧出发，通过 Unreal Engine 基础渲染通道输入 ComfyUI，将镜头转化为照片级真实感渲染。",
      },
      images: ["/images/projects/sam-adams/storyboard-dolly.png"],
      layout: "full",
    },
    {
      label: { en: "Camera Movement Explorations", zh: "镜头运动探索" },
      description: {
        en: "Four camera move variations generated for the Juicy IPA can — Dolly, Horizontal Pan, Vertical Tilt, and Zoom In — each produced as a controllable pass to give the director options during pre-vis review.",
        zh: "为 Juicy IPA 罐装生成了四种镜头运动变体 — 推轨、水平摇摄、垂直俯仰和推进 — 每种都作为可控通道输出，为导演在预演审查时提供多种选择。",
      },
      images: ["/images/projects/sam-adams/camera-moves.png"],
      layout: "full",
    },
    {
      label: { en: "ComfyUI Workflow & Relighting", zh: "ComfyUI 工作流与重新打光" },
      description: {
        en: "Left: the original storyboard sketch and the ComfyUI node graph aligning composition with framing. Right: the final composited product shot relit entirely within ComfyUI to match the target commercial look.",
        zh: "左：原始分镜草图和 ComfyUI 节点图，将构图与画面框架对齐。右：最终合成的产品镜头，完全在 ComfyUI 中重新打光以匹配目标广告效果。",
      },
      images: ["/images/projects/sam-adams/workflow-relit.png"],
      layout: "full",
    },
    {
      label: { en: "Outpainting in ComfyUI", zh: "ComfyUI 外扩绘制" },
      description: {
        en: "Extending the original 1920×1080 frame to a wider canvas (1920 + 400 × 1080 + 100) using ComfyUI's outpainting. The seamless extension preserves lighting, texture, and depth consistency across the expanded frame.",
        zh: "使用 ComfyUI 的外扩绘制功能，将原始 1920×1080 帧扩展到更宽的画布（1920 + 400 × 1080 + 100）。无缝扩展在扩大的画面中保持了光照、纹理和深度的一致性。",
      },
      images: [
        "/images/projects/sam-adams/outpaint-before.png",
        "/images/projects/sam-adams/outpaint-after.png",
      ],
      layout: "side-by-side",
    },
  ],
  ritz: [
    {
      label: { en: "First Version — Without AI", zh: "第一版——无 AI" },
      description: {
        en: "The initial pre-visualization pass created without any AI generation — establishing the base composition and camera work before introducing the AI pipeline.",
        zh: "在引入 AI 管线之前创建的初始预演版本——建立基础构图和镜头运动。",
      },
      images: [],
      videos: ["/images/projects/ritz/ritz-v1-no-ai.mp4"],
      layout: "full",
    },
    {
      label: { en: "Product References", zh: "产品参考" },
      description: {
        en: "Starting from official Ritz product photography — the iconic cracker on signature red, and a hand-held hero shot — these references define the visual language and brand identity that the AI pipeline needs to preserve.",
        zh: "从 Ritz 官方产品摄影出发 — 标志性红色背景上的经典饼干，以及手持主视觉镜头 — 这些参考图定义了 AI 管线需要保持的视觉语言和品牌形象。",
      },
      images: [
        "/images/projects/ritz/cracker-red.png",
        "/images/projects/ritz/hand-cracker.png",
      ],
      layout: "side-by-side",
    },
    {
      label: { en: "AI-driven Product Pre-visualization", zh: "AI 驱动产品预演" },
      description: {
        en: "Using the reference assets, the pipeline generates new product visuals through ComfyUI — from the Ritz logo rendered in Unreal Engine (dark depth pass → fully lit) to AI-generated lifestyle shots of a person interacting with the product.",
        zh: "利用参考素材，管线通过 ComfyUI 生成新的产品视觉 — 从在 Unreal Engine 中渲染的 Ritz 标志（暗色深度通道 → 全光照）到 AI 生成的人物与产品互动的生活场景图。",
      },
      images: [
        "/images/projects/ritz/logo-unreal-dark.png",
        "/images/projects/ritz/logo-unreal-lit.png",
      ],
      layout: "side-by-side",
    },
    {
      label: { en: "Generated Lifestyle Shots", zh: "生成式生活场景图" },
      description: {
        en: "ComfyUI generates photorealistic lifestyle imagery conditioned on the Unreal Engine passes — maintaining product accuracy while creating new compositions that didn't exist in the original photography.",
        zh: "ComfyUI 基于 Unreal Engine 渲染通道生成照片级真实感生活场景图像 — 在保持产品精确度的同时，创造出原始摄影中不存在的新构图。",
      },
      images: [
        "/images/projects/ritz/ai-hands-closeup.png",
        "/images/projects/ritz/ai-person-cracker.png",
      ],
      layout: "side-by-side",
    },
    {
      label: { en: "Video Generation Conditioning in Unreal", zh: "Unreal 中的视频生成条件控制" },
      description: {
        en: "Unreal Engine produces structured render passes — depth, mask, and lighting gradient — that serve as conditioning inputs for AI video generation. These passes give precise control over composition, subject isolation, and mood in the final output.",
        zh: "Unreal Engine 生成结构化渲染通道 — 深度、遮罩和光照渐变 — 作为 AI 视频生成的条件输入。这些通道对最终输出的构图、主体分离和氛围提供精确控制。",
      },
      images: [
        "/images/projects/ritz/pass-depth.png",
        "/images/projects/ritz/pass-mask.png",
        "/images/projects/ritz/pass-gradient.png",
      ],
      layout: "side-by-side",
    },
  ],
  "new-year-new-me": [
    {
      label: { en: "Film", zh: "影片" },
      description: { en: "", zh: "" },
      images: [],
      layout: "full",
      youtube: "TSMVzrD14NM",
    },
    {
      label: { en: "The Mountain", zh: "那座山" },
      description: {
        en: "A distant mountain where each version of herself remains frozen at a different age. Generated with Runway Frames using text prompts and reference photos for visual style and location.",
        zh: "一座遥远的山，她的每个版本都在不同的年龄定格于此。使用 Runway Frames 通过文本提示和参考照片生成视觉风格与场景。",
      },
      images: [
        "/images/projects/nynm/still-01.png",
        "/images/projects/nynm/still-05.png",
      ],
      layout: "side-by-side",
    },
    {
      label: { en: "The Girl", zh: "女孩" },
      description: {
        en: "Character imagery generated through Runway's reference photo feature, maintaining visual consistency across scenes while allowing the AI to create natural, expressive moments.",
        zh: "通过 Runway 的参考照片功能生成角色图像，在保持跨场景视觉一致性的同时，让 AI 创造自然、富有表现力的瞬间。",
      },
      images: [
        "/images/projects/nynm/still-03.png",
        "/images/projects/nynm/still-02.png",
      ],
      layout: "side-by-side",
    },
    {
      label: { en: "The Journey", zh: "旅程" },
      description: {
        en: "Animated with Gen-3 Alpha, Gen-3 Alpha Turbo, and Gen-4 — each tool bringing different qualities of motion and atmosphere to the story's progression from day to night.",
        zh: "使用 Gen-3 Alpha、Gen-3 Alpha Turbo 和 Gen-4 制作动画 — 每个工具为故事从白天到黑夜的推进带来不同的运动质感和氛围。",
      },
      images: [
        "/images/projects/nynm/still-04.png",
        "/images/projects/nynm/still-06.png",
      ],
      layout: "side-by-side",
    },
    {
      label: { en: "The Crystal Ball", zh: "水晶球" },
      description: {
        en: "The climactic moment — a glowing crystal ball and the question: \"What kind of new me is waiting to be found?\" Light, particles, and intimate close-ups convey the emotional resolution.",
        zh: "高潮时刻 — 一颗发光的水晶球和一个问题：「什么样的新我正在等待被发现？」光线、粒子和亲密的特写传达了情感的升华。",
      },
      images: [
        "/images/projects/nynm/still-07.png",
        "/images/projects/nynm/still-08.png",
      ],
      layout: "side-by-side",
    },
  ],
  "checkers-and-rallys": [
    {
      label: { en: "From Concept to Set Design", zh: "从概念到布景设计" },
      description: {
        en: "The AI-generated creative direction was translated into a detailed production deck. A practical brownstone stoop with real steps and railing was constructed as the physical anchor for the spot — with checkered vinyl wrapping transforming the stairs to match the brand identity.",
        zh: "AI 生成的创意方向被转化为详细的制作方案。一个带有真实台阶和栏杆的实体褐石门廊被搭建为拍摄的物理支撑 — 格纹乙烯贴纸包裹楼梯，使其与品牌形象相匹配。",
      },
      images: [
        "/images/projects/checkers/set-design-deck.jpg",
        "/images/projects/checkers/final-disco-wide.png",
        "/images/projects/checkers/final-disco-closeup.png",
      ],
      rowCaption: { en: "Stairs built as practical props — Production Designer: Paola Andrea", zh: "楼梯被制作为实体道具 — 制作设计师：Paola Andrea" },
      layout: "hero-plus-row",
    },
    {
      label: { en: "AI Style Frames for Unreal Engine", zh: "Unreal Engine AI 风格帧" },
      description: {
        en: "Generated AI style frames to define the lighting direction — from warm, natural daylight to a neon disco transformation with saturated magentas, cyans, and golds. These frames served as direct visual references for the Unreal Engine artist building the LED volume environments.",
        zh: "生成 AI 风格帧以定义灯光方向 — 从温暖的自然日光到饱和洋红、青色和金色的霓虹迪斯科变换。这些帧作为 Unreal Engine 艺术家构建 LED 虚拟棚环境的直接视觉参考。",
      },
      images: [
        "/images/projects/checkers/lighting-styleframe.jpg",
      ],
      layout: "hero-plus-row",
      extraRows: [
        {
          label: "DAYTIME LOOK",
          items: [
            { type: "image", src: "/images/projects/checkers/ai-brownstone-day.png", caption: "AI Generated" },
            { type: "video", src: "/images/projects/checkers/checkers-2/unreal-daytime.mp4", caption: "Unreal Engine" },
          ],
        },
        {
          label: "NIGHTTIME LOOK",
          items: [
            { type: "image", src: "/images/projects/checkers/checkers-2/ai-nighttime.png", caption: "AI Generated" },
            { type: "video", src: "/images/projects/checkers/checkers-2/unreal-nighttime.mp4", caption: "Unreal Engine" },
          ],
        },
      ],
    },
    {
      label: { en: "Tech-Vis for Client", zh: "客户技术可视化" },
      description: {
        en: "Created with supervisor Lawrence Jones to communicate our technical capabilities to the client. Virtual production is a niche field — visualizing what the LED volume can achieve helped all stakeholders understand the creative and technical possibilities before committing to the shoot.",
        zh: "与主管 Lawrence Jones 合作制作，向客户展示我们的技术能力。虚拟制片是一个小众领域 — 可视化 LED 虚拟棚所能实现的效果，帮助所有相关方在投入拍摄前了解创意和技术可能性。",
      },
      images: [
        "/images/projects/checkers/checkers-2/tech/tech-vis-daytime.png",
        "/images/projects/checkers/checkers-2/tech/tech-vis-disco.png",
      ],
      layout: "side-by-side",
      extraRows: [
        {
          label: "ONSET VP FUNCTIONALITY FORM",
          items: [
            { type: "image", src: "/images/projects/checkers/checkers-2/tech/vp-form-01.jpg" },
            { type: "image", src: "/images/projects/checkers/checkers-2/tech/vp-form-02.jpg" },
            { type: "image", src: "/images/projects/checkers/checkers-2/tech/vp-form-03.jpg" },
          ],
        },
      ],
    },
    {
      label: { en: "Behind the Scenes", zh: "幕后花絮" },
      description: { en: "", zh: "" },
      images: [],
      videos: ["/images/projects/checkers/checkers-hero.mp4"],
      layout: "video-hero-plus-row",
    },
  ],
  "panera-mix-and-match": [
    {
      label: { en: "Commercial", zh: "广告片" },
      description: { en: "", zh: "" },
      images: [],
      layout: "full",
      youtube: "SSRWmZ4nRZ0",
    },
    {
      label: { en: "Pre-vis vs. Final", zh: "预演 vs. 最终成片" },
      description: {
        en: "Side-by-side comparison of my Unreal Engine pre-visualization and the final commercial footage.",
        zh: "我的 Unreal Engine 预演与最终广告成片的并排对比。",
      },
      images: [],
      videos: ["/images/projects/panera/previs.mp4", "/images/projects/panera/final.mp4"],
      captions: ["Pre-vis (Unreal Engine)", "Final"],
      layout: "side-by-side",
    },
  ],
  "checkers-vp": [
    {
      label: { en: "Final Commercial", zh: "最终广告片" },
      description: { en: "", zh: "" },
      images: [],
      layout: "full",
      youtube: "YktwKjXiRkM",
    },
    {
      label: { en: "Unreal Engine Environment", zh: "Unreal Engine 环境" },
      description: {
        en: "Built photorealistic Checker's and Rally's restaurant environments in Unreal Engine — brick walls, checkered tile floor, warm practical lighting, and fully dressed set pieces including a bar, pool table, and seating areas. These environments were displayed on the LED volume during the live shoot.",
        zh: "在 Unreal Engine 中构建了照片级真实感的 Checker's and Rally's 餐厅环境 — 砖墙、格纹地砖、温暖的实用灯光，以及包括吧台、台球桌和座位区在内的完整布景道具。这些环境在实拍期间显示在 LED 虚拟棚上。",
      },
      images: [
        "/images/projects/checkers/unreal-interior-closeup.png",
        "/images/projects/checkers/unreal-interior-bar.png",
        "/images/projects/checkers/unreal-interior-pool.png",
      ],
      layout: "hero-plus-row",
    },
    {
      label: { en: "On Set — LED Volume", zh: "片场 — LED 虚拟棚" },
      description: {
        en: "Behind the scenes on the LED volume stage. The Unreal Engine environment is displayed on the curved LED wall behind the physical set pieces — a booth with checkered tablecloth, matching the virtual restaurant interior. The crew operates cameras, lighting, and the LED volume simultaneously.",
        zh: "LED 虚拟棚片场的幕后花絮。Unreal Engine 环境显示在实体布景后方的弧形 LED 墙上 — 一个铺有格纹桌布的卡座，与虚拟餐厅内部相匹配。摄制组同时操控摄影机、灯光和 LED 虚拟棚。",
      },
      images: [
        "/images/projects/checkers/bts-led-stage-04.jpg",
        "/images/projects/checkers/bts-led-stage-03.jpg",
      ],
      videos: [
        "/images/projects/checkers/bts-video-02.mp4",
      ],
      layout: "video-hero-plus-row",
    },
  ],
  "email-agent": [
    {
      label: { en: "Fetch Single Email", zh: "获取单封邮件" },
      description: {
        en: "Retrieve and parse a single email by ID — the agent extracts sender, subject, body, and attachments automatically.",
        zh: "通过 ID 获取并解析单封邮件——代理自动提取发件人、主题、正文和附件。",
      },
      images: [],
      videos: ["/images/projects/emailagent/fetch-single-email.mp4"],
      layout: "full",
    },
    {
      label: { en: "Fetch Group Emails", zh: "批量获取邮件" },
      description: {
        en: "Batch-fetch emails from a label or search query, with structured summaries for each message.",
        zh: "从标签或搜索条件批量获取邮件，为每封邮件生成结构化摘要。",
      },
      images: [],
      videos: ["/images/projects/emailagent/fetch-group-email.mp4"],
      layout: "full",
    },
    {
      label: { en: "Help Me Draft", zh: "辅助起草" },
      description: {
        en: "AI-assisted drafting — describe what you want to say, and the agent composes a polished email draft.",
        zh: "AI 辅助起草——描述你想表达的内容，代理即可生成一封完善的邮件草稿。",
      },
      images: [],
      videos: ["/images/projects/emailagent/help-me-draft.mp4"],
      layout: "full",
    },
    {
      label: { en: "Draft with Template", zh: "模板起草" },
      description: {
        en: "Generate drafts from reusable templates — fill in key variables and let the agent handle formatting and tone.",
        zh: "基于可复用模板生成草稿——填入关键变量，代理负责格式和语气。",
      },
      images: [],
      videos: ["/images/projects/emailagent/draft-with-template.mp4"],
      layout: "full",
    },
    {
      label: { en: "Project Manual", zh: "项目手册" },
      description: { en: "", zh: "" },
      images: [],
      layout: "full",
      pdf: "/images/projects/emailagent/email-agent-manual.pdf",
    },
  ],
  "particle-system": [
    {
      label: { en: "Demo", zh: "演示" },
      description: {
        en: "Interactive particle system created through vibe coding — designed as a real-time shooting background for video production. Shooting footage coming soon.",
        zh: "通过氛围编程创建的交互式粒子系统 — 设计为视频制作的实时拍摄背景。拍摄素材即将推出。",
      },
      images: [],
      videos: ["/images/projects/particles/demo.mp4"],
      layout: "video-hero-plus-row",
    },
  ],
  "kaleidoscope-effects": [
    {
      label: { en: "Demo", zh: "演示" },
      description: {
        en: "Real-time generative kaleidoscope patterns created through vibe coding, designed to be used as dynamic shooting backgrounds for video production.",
        zh: "通过氛围编程创建的实时生成式万花筒图案，设计用作视频制作的动态拍摄背景。",
      },
      images: [],
      videos: ["/images/projects/kaleidoscope/demo.mp4"],
      layout: "video-hero-plus-row",
    },
  ],
  "wolfe-and-the-bee": [
    {
      label: { en: "Film", zh: "影片" },
      description: { en: "", zh: "" },
      images: [],
      layout: "full",
      youtube: "NQ6kP4iBbMQ",
    },
    {
      label: { en: "The Road", zh: "公路" },
      description: {
        en: "Opening scene for the film. Environment design using Procedural Content Generation for the landscape, splines and Blueprint Decals for the road surface. Atmospheric lighting and volumetric fog set the cold, isolated tone of a Minnesota winter night.",
        zh: "影片的开场场景。使用程序化内容生成技术设计地形，使用样条线和蓝图贴花制作路面。大气光照和体积雾营造出明尼苏达冬夜的寒冷、孤寂基调。",
      },
      images: ["/images/projects/thesis/road.png"],
      layout: "full",
    },
    {
      label: { en: "The Campsite", zh: "营地" },
      description: {
        en: "Climax scene for the protagonists. The environment is dressed with Megascans foliages to create dense, frost-covered woodland. A small campfire anchors the composition, with atmospheric lighting and volumetric fog emphasizing the emotional weight of the moment.",
        zh: "主角的高潮场景。使用 Megascans 植被装饰环境，创造茂密的覆霜林地。一堆小篝火锚定构图，大气光照和体积雾强调了这一刻的情感分量。",
      },
      images: ["/images/projects/thesis/campsite.png"],
      layout: "full",
    },
    {
      label: { en: "Gas Station", zh: "加油站" },
      description: {
        en: "Major scene for the plot — a photorealistic gas station in rural Minnesota. Built from real dimensions sourced from Google Earth data. Custom-built 3D assets, atmospheric lighting, volumetric fog, and carefully tuned camera settings for a cinematic look. Team collaboration project.",
        zh: "剧情的重要场景 — 明尼苏达乡村的照片级真实感加油站。根据 Google Earth 数据的真实尺寸搭建。定制 3D 资产、大气光照、体积雾以及精心调校的摄影机设置，打造电影级画面。团队协作项目。",
      },
      images: [
        "/images/projects/thesis/gas-station-wide.png",
        "/images/projects/thesis/gas-station-open.png",
        "/images/projects/thesis/gas-station-graffiti.png",
      ],
      layout: "side-by-side",
    },
  ],
};

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/projects/:slug");
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  const bt = useBiText();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!match) return null;

  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F8F8F7" }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#000000" }}>
            {t.projectDetail.projectNotFound}
          </h1>
          <button
            onClick={() => setLocation("/")}
            className="text-sm font-medium px-6 py-3"
            style={{ color: "#2672E4" }}
          >
            {t.projectDetail.backToHome}
          </button>
        </div>
      </div>
    );
  }

  const sections = projectSections[slug];

  return (
    <div className="min-h-screen" style={{ background: "#F8F8F7" }}>
      {/* Hero Image */}
      <div className="px-6 pt-8">
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={project.coverImage}
            alt={bt(project.title)}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <main className="px-6 py-12">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-sm font-medium mb-10 hover:opacity-70 transition-opacity"
          style={{ color: "#2672E4" }}
        >
          <ArrowLeft size={16} />
          {t.projectDetail.backToProjects}
        </motion.button>

        {/* Title + Meta row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left: Title + Description */}
          <motion.div {...fade} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: "#000000" }}>
              {bt(project.title)}
            </h1>
            {bt(project.fullDescription).split("\n\n").map((para, i) => (
              <p key={i} className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "#666666" }}>
                {para}
              </p>
            ))}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1"
                  style={{ border: "1px solid #E5E5E4", color: "#666666" }}
                >
                  {bt(tag)}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Meta card */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="p-6 rounded-lg" style={{ background: "#FFFFFF", border: "1px solid #E5E5E4" }}>
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-medium tracking-wide uppercase mb-1" style={{ color: "#999999" }}>
                    {t.projectDetail.year}
                  </p>
                  <p className="text-base font-medium" style={{ color: "#000000" }}>
                    {project.year}
                  </p>
                </div>
                {project.roles && project.roles.length > 0 && (
                  <div>
                    <p className="text-[11px] font-medium tracking-wide uppercase mb-1" style={{ color: "#999999" }}>
                      {t.projectDetail.role}
                    </p>
                    <p className="text-base font-medium" style={{ color: "#000000" }}>
                      {project.roles.map(r => bt(r)).join(", ")}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-[11px] font-medium tracking-wide uppercase mb-2" style={{ color: "#999999" }}>
                    {t.projectDetail.tools}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-sm" style={{ color: "#666666" }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Process Sections (rich narrative) ── */}
        {sections ? (
          <div className="space-y-20">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <p
                  className="text-[11px] font-medium tracking-widest uppercase mb-2"
                  style={{ color: "#999999" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-2xl font-bold mb-3" style={{ color: "#000000" }}>
                  {bt(section.label)}
                </h2>
                <p className="text-base leading-relaxed mb-6 max-w-3xl" style={{ color: "#666666" }}>
                  {bt(section.description)}
                </p>

                {section.layout === "video-hero-plus-row" ? (
                  <div className="space-y-4">
                    {section.videos?.[0] && (
                      <div className="overflow-hidden rounded-lg">
                        <video
                          src={section.videos[0]}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.images.map((img, j) => (
                        <div key={j} className="overflow-hidden rounded-lg">
                          <img
                            src={img}
                            alt={`${section.label} ${j + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : section.layout === "hero-plus-row" ? (
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={section.images[0]}
                        alt={`${section.label} 1`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {section.rowLabel && (
                      <p className="text-[11px] font-medium tracking-widest uppercase mb-1" style={{ color: "#999999" }}>
                        {section.rowLabel}
                      </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.images.slice(1).map((img, j) => (
                        <div key={j}>
                          <div className="overflow-hidden rounded-lg aspect-[16/10]">
                            <img
                              src={img}
                              alt={`${section.label} ${j + 2}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {section.captions?.[j + 1] != null && (
                            <p className="text-xs font-medium tracking-wide uppercase mt-2 text-center" style={{ color: "#999999" }}>
                              {(() => { const c = section.captions![j + 1]; return typeof c === "string" ? c : bt(c); })()}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                    {section.rowCaption && (
                      <p className="text-xs font-medium tracking-wide mt-2 text-center" style={{ color: "#999999" }}>
                        {bt(section.rowCaption)}
                      </p>
                    )}
                    {section.extraRows?.map((row, ri) => (
                      <div key={ri} className="mt-8">
                        <p className="text-[11px] font-medium tracking-widest uppercase mb-1" style={{ color: "#999999" }}>
                          {row.label}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {row.items.map((item, ii) => (
                            <div key={ii}>
                              <div className="overflow-hidden rounded-lg aspect-[16/10]">
                                {item.type === "video" ? (
                                  <video
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <img
                                    src={item.src}
                                    alt={`${row.label} ${ii + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </div>
                              {item.caption && (
                                <p className="text-xs font-medium tracking-wide uppercase mt-2 text-center" style={{ color: "#999999" }}>
                                  {typeof item.caption === "string" ? item.caption : bt(item.caption)}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : section.youtube ? (
                  <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "16 / 9" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${section.youtube}`}
                      title={bt(section.label)}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      style={{ border: "none" }}
                    />
                  </div>
                ) : section.pdf ? (
                  <PdfViewer file={section.pdf} />
                ) : section.layout === "side-by-side" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.images.map((img, j) => (
                      <div key={j} className="overflow-hidden rounded-lg">
                        <img
                          src={img}
                          alt={`${section.label} ${j + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                    {section.videos?.map((vid, j) => (
                      <div key={`v${j}`}>
                        <div className="overflow-hidden rounded-lg">
                          <video
                            src={vid}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        {section.captions?.[j] && (
                          <p className="text-xs font-medium tracking-wide uppercase mt-2 text-center" style={{ color: "#999999" }}>
                            {typeof section.captions[j] === "string" ? section.captions[j] : bt(section.captions[j] as BiText)}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {section.images.map((img, j) => (
                      <div key={j} className="overflow-hidden rounded-lg">
                        <img
                          src={img}
                          alt={`${bt(section.label)} ${j + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                    {section.videos?.map((vid, j) => (
                      <div key={`v${j}`} className="overflow-hidden rounded-lg">
                        <video
                          src={vid}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </>
                )}

                {/* Extra rows — works with any layout */}
                {section.layout !== "hero-plus-row" && section.extraRows?.map((row, ri) => (
                  <div key={ri} className="mt-8">
                    <p className="text-[11px] font-medium tracking-widest uppercase mb-1" style={{ color: "#999999" }}>
                      {row.label}
                    </p>
                    <div className={`grid grid-cols-1 gap-4 ${row.items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                      {row.items.map((item, ii) => (
                        <div key={ii}>
                          <div className="overflow-hidden rounded-lg">
                            {item.type === "video" ? (
                              <video
                                src={item.src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-auto object-cover"
                              />
                            ) : (
                              <img
                                src={item.src}
                                alt={`${row.label} ${ii + 1}`}
                                className="w-full h-auto object-cover"
                              />
                            )}
                          </div>
                          {item.caption && (
                            <p className="text-xs font-medium tracking-wide uppercase mt-2 text-center" style={{ color: "#999999" }}>
                              {typeof item.caption === "string" ? item.caption : bt(item.caption)}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        ) : (
          /* Fallback: simple grid for projects without custom sections */
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#000000" }}>
              {t.projectDetail.processAndVisuals}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.processImages.map((image, i) => (
                <motion.div
                  key={i}
                  {...fade}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    alt={`Process ${i + 1}`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
