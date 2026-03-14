/* Project Detail Page — narrative layout with process sections */

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { getProjectBySlug } from "@/data/projects";

/** Per-project process sections for rich detail pages */
interface Section {
  label: string;
  description: string;
  images: string[];
  captions?: string[];
  rowCaption?: string;
  rowLabel?: string;
  videos?: string[];
  layout?: "full" | "side-by-side" | "hero-plus-row" | "video-hero-plus-row";
  youtube?: string;
  extraRows?: { label: string; items: { type: "image" | "video"; src: string; caption?: string }[] }[];
}
const projectSections: Record<string, Section[]> = {
  "samuel-adams-previs": [
    {
      label: "Final Output",
      description:
        "The hero end-card for Samuel Adams Octoberfest — bottle, pint glass and can composed on a warm wood surface against a deep navy backdrop. Entirely generated through the ComfyUI pipeline.",
      images: ["/images/projects/sam-adams/hero.png"],
      layout: "full",
    },
    {
      label: "Storyboard → Render",
      description:
        "Starting from hand-drawn storyboard frames that define camera movement (push-in, dolly, looping), the shots are translated into photorealistic renders through Unreal Engine base passes fed into ComfyUI.",
      images: ["/images/projects/sam-adams/storyboard-dolly.png"],
      layout: "full",
    },
    {
      label: "Camera Movement Explorations",
      description:
        "Four camera move variations generated for the Juicy IPA can — Dolly, Horizontal Pan, Vertical Tilt, and Zoom In — each produced as a controllable pass to give the director options during pre-vis review.",
      images: ["/images/projects/sam-adams/camera-moves.png"],
      layout: "full",
    },
    {
      label: "ComfyUI Workflow & Relighting",
      description:
        "Left: the original storyboard sketch and the ComfyUI node graph aligning composition with framing. Right: the final composited product shot relit entirely within ComfyUI to match the target commercial look.",
      images: ["/images/projects/sam-adams/workflow-relit.png"],
      layout: "full",
    },
    {
      label: "Outpainting in ComfyUI",
      description:
        "Extending the original 1920×1080 frame to a wider canvas (1920 + 400 × 1080 + 100) using ComfyUI's outpainting. The seamless extension preserves lighting, texture, and depth consistency across the expanded frame.",
      images: [
        "/images/projects/sam-adams/outpaint-before.png",
        "/images/projects/sam-adams/outpaint-after.png",
      ],
      layout: "side-by-side",
    },
  ],
  ritz: [
    {
      label: "Product References",
      description:
        "Starting from official Ritz product photography — the iconic cracker on signature red, and a hand-held hero shot — these references define the visual language and brand identity that the AI pipeline needs to preserve.",
      images: [
        "/images/projects/ritz/cracker-red.png",
        "/images/projects/ritz/hand-cracker.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "AI-driven Product Pre-visualization",
      description:
        "Using the reference assets, the pipeline generates new product visuals through ComfyUI — from the Ritz logo rendered in Unreal Engine (dark depth pass → fully lit) to AI-generated lifestyle shots of a person interacting with the product.",
      images: [
        "/images/projects/ritz/logo-unreal-dark.png",
        "/images/projects/ritz/logo-unreal-lit.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "Generated Lifestyle Shots",
      description:
        "ComfyUI generates photorealistic lifestyle imagery conditioned on the Unreal Engine passes — maintaining product accuracy while creating new compositions that didn't exist in the original photography.",
      images: [
        "/images/projects/ritz/ai-hands-closeup.png",
        "/images/projects/ritz/ai-person-cracker.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "Video Generation Conditioning in Unreal",
      description:
        "Unreal Engine produces structured render passes — depth, mask, and lighting gradient — that serve as conditioning inputs for AI video generation. These passes give precise control over composition, subject isolation, and mood in the final output.",
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
      label: "Film",
      description: "",
      images: [],
      layout: "full",
      youtube: "TSMVzrD14NM",
    },
    {
      label: "The Mountain",
      description:
        "A distant mountain where each version of herself remains frozen at a different age. Generated with Runway Frames using text prompts and reference photos for visual style and location.",
      images: [
        "/images/projects/nynm/still-01.png",
        "/images/projects/nynm/still-05.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "The Girl",
      description:
        "Character imagery generated through Runway's reference photo feature, maintaining visual consistency across scenes while allowing the AI to create natural, expressive moments.",
      images: [
        "/images/projects/nynm/still-03.png",
        "/images/projects/nynm/still-02.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "The Journey",
      description:
        "Animated with Gen-3 Alpha, Gen-3 Alpha Turbo, and Gen-4 — each tool bringing different qualities of motion and atmosphere to the story's progression from day to night.",
      images: [
        "/images/projects/nynm/still-04.png",
        "/images/projects/nynm/still-06.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "The Crystal Ball",
      description:
        "The climactic moment — a glowing crystal ball and the question: \"What kind of new me is waiting to be found?\" Light, particles, and intimate close-ups convey the emotional resolution.",
      images: [
        "/images/projects/nynm/still-07.png",
        "/images/projects/nynm/still-08.png",
      ],
      layout: "side-by-side",
    },
  ],
  "checkers-and-rallys": [
    {
      label: "From Concept to Set Design",
      description:
        "The AI-generated creative direction was translated into a detailed production deck. A practical brownstone stoop with real steps and railing was constructed as the physical anchor for the spot — with checkered vinyl wrapping transforming the stairs to match the brand identity.",
      images: [
        "/images/projects/checkers/set-design-deck.jpg",
        "/images/projects/checkers/final-disco-wide.png",
        "/images/projects/checkers/final-disco-closeup.png",
      ],
      rowCaption: "Stairs built as practical props — Production Designer: Paola Andrea",
      layout: "hero-plus-row",
    },
    {
      label: "AI Style Frames for Unreal Engine",
      description:
        "Generated AI style frames to define the lighting direction — from warm, natural daylight to a neon disco transformation with saturated magentas, cyans, and golds. These frames served as direct visual references for the Unreal Engine artist building the LED volume environments.",
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
      label: "Tech-Vis for Client",
      description:
        "Created with supervisor Lawrence Jones to communicate our technical capabilities to the client. Virtual production is a niche field — visualizing what the LED volume can achieve helped all stakeholders understand the creative and technical possibilities before committing to the shoot.",
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
      label: "Behind the Scenes",
      description: "",
      images: [],
      videos: ["/images/projects/checkers/checkers-hero.mp4"],
      layout: "video-hero-plus-row",
    },
  ],
  "checkers-vp": [
    {
      label: "Final Commercial",
      description: "",
      images: [],
      layout: "full",
      youtube: "YktwKjXiRkM",
    },
    {
      label: "Unreal Engine Environment",
      description:
        "Built photorealistic Checker's and Rally's restaurant environments in Unreal Engine — brick walls, checkered tile floor, warm practical lighting, and fully dressed set pieces including a bar, pool table, and seating areas. These environments were displayed on the LED volume during the live shoot.",
      images: [
        "/images/projects/checkers/unreal-interior-closeup.png",
        "/images/projects/checkers/unreal-interior-bar.png",
        "/images/projects/checkers/unreal-interior-pool.png",
      ],
      layout: "hero-plus-row",
    },
    {
      label: "On Set — LED Volume",
      description:
        "Behind the scenes on the LED volume stage. The Unreal Engine environment is displayed on the curved LED wall behind the physical set pieces — a booth with checkered tablecloth, matching the virtual restaurant interior. The crew operates cameras, lighting, and the LED volume simultaneously.",
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
      label: "Meet Mail BOT",
      description:
        "A Slack-based email agent with two core workflows: Fetch + Build Context (Gmail → AI analysis → Google Sheets) and Draft with AI & Template (relationship context → paragraph-by-paragraph email generation → Gmail draft box).",
      images: [
        "/images/projects/emailagent/page-01.png",
        "/images/projects/emailagent/page-02.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "Fetch — Single Email",
      description:
        "Use /fetch-email in Slack to pull the full email history for any contact. The agent fetches Gmail threads, runs AI analysis, and produces a structured Relationship Report — background info, collaboration history, last contact date, and studio visit evidence — all stored permanently in Google Sheets.",
      images: [
        "/images/projects/emailagent/page-05.png",
        "/images/projects/emailagent/page-07.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "Fetch — Group Emails",
      description:
        "Use /fetch-group-emails-v2 to process an entire group (e.g. all contacts at PepsiCo). List emails in a Google Sheet, define a group keyword, and the agent batch-fetches and analyzes every contact — building a complete relationship database for the group.",
      images: [
        "/images/projects/emailagent/page-10.png",
      ],
      layout: "full",
    },
    {
      label: "Draft — Template Mode",
      description:
        "Use /draft-with-template for quick outreach. Select from preset templates, preview the draft in Slack, then send it to your Gmail draft box — automatically personalized with each recipient's name from the Google Sheet.",
      images: [
        "/images/projects/emailagent/page-14.png",
        "/images/projects/emailagent/page-17.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "Draft — AI Contextual Mode",
      description:
        "Use /help-me-draft for AI-assisted drafting. The agent pulls the relationship summary, generates three contextual opening options, then builds the email paragraph by paragraph — each step reviewable and customizable. Approve or rewrite each paragraph until the final email is ready for your draft box.",
      images: [
        "/images/projects/emailagent/page-20.png",
        "/images/projects/emailagent/page-23.png",
      ],
      layout: "side-by-side",
    },
    {
      label: "System Architecture",
      description:
        "The Email Agent is the first layer of a larger Client Intelligence System. Data flows from Gmail through n8n automation workflows with AI analysis, stored in Google Sheets (with HubSpot CRM integration planned), and queryable through ChatGPT for flexible insights.",
      images: [
        "/images/projects/emailagent/page-27.png",
      ],
      layout: "full",
    },
  ],
  "particle-system": [
    {
      label: "Demo",
      description:
        "Interactive particle system created through vibe coding — designed as a real-time shooting background for video production. Shooting footage coming soon.",
      images: [],
      videos: ["/images/projects/particles/demo.mp4"],
      layout: "video-hero-plus-row",
    },
  ],
  "kaleidoscope-effects": [
    {
      label: "Demo",
      description:
        "Real-time generative kaleidoscope patterns created through vibe coding, designed to be used as dynamic shooting backgrounds for video production.",
      images: [],
      videos: ["/images/projects/kaleidoscope/demo.mp4"],
      layout: "video-hero-plus-row",
    },
  ],
  "wolfe-and-the-bee": [
    {
      label: "Film",
      description: "",
      images: [],
      layout: "full",
      youtube: "NQ6kP4iBbMQ",
    },
    {
      label: "The Road",
      description:
        "Opening scene for the film. Environment design using Procedural Content Generation for the landscape, splines and Blueprint Decals for the road surface. Atmospheric lighting and volumetric fog set the cold, isolated tone of a Minnesota winter night.",
      images: ["/images/projects/thesis/road.png"],
      layout: "full",
    },
    {
      label: "The Campsite",
      description:
        "Climax scene for the protagonists. The environment is dressed with Megascans foliages to create dense, frost-covered woodland. A small campfire anchors the composition, with atmospheric lighting and volumetric fog emphasizing the emotional weight of the moment.",
      images: ["/images/projects/thesis/campsite.png"],
      layout: "full",
    },
    {
      label: "Gas Station",
      description:
        "Major scene for the plot — a photorealistic gas station in rural Minnesota. Built from real dimensions sourced from Google Earth data. Custom-built 3D assets, atmospheric lighting, volumetric fog, and carefully tuned camera settings for a cinematic look. Team collaboration project.",
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
            Project not found
          </h1>
          <button
            onClick={() => setLocation("/")}
            className="text-sm font-medium px-6 py-3"
            style={{ color: "#2672E4" }}
          >
            &larr; Back to Home
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
            alt={project.title}
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
          Back to Projects
        </motion.button>

        {/* Title + Meta row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left: Title + Description */}
          <motion.div {...fade} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: "#000000" }}>
              {project.title}
            </h1>
            {project.fullDescription.split("\n\n").map((para, i) => (
              <p key={i} className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "#666666" }}>
                {para}
              </p>
            ))}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1"
                  style={{ border: "1px solid #E5E5E4", color: "#666666" }}
                >
                  {tag}
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
                    Year
                  </p>
                  <p className="text-base font-medium" style={{ color: "#000000" }}>
                    {project.year}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-wide uppercase mb-2" style={{ color: "#999999" }}>
                    Tools
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
                  {section.label}
                </h2>
                <p className="text-base leading-relaxed mb-6 max-w-3xl" style={{ color: "#666666" }}>
                  {section.description}
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
                          {section.captions?.[j + 1] && (
                            <p className="text-xs font-medium tracking-wide uppercase mt-2 text-center" style={{ color: "#999999" }}>
                              {section.captions[j + 1]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                    {section.rowCaption && (
                      <p className="text-xs font-medium tracking-wide mt-2 text-center" style={{ color: "#999999" }}>
                        {section.rowCaption}
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
                                  {item.caption}
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
                      title={section.label}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      style={{ border: "none" }}
                    />
                  </div>
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
                      <div key={`v${j}`} className="overflow-hidden rounded-lg">
                        <video
                          src={vid}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  section.images.map((img, j) => (
                    <div key={j} className="overflow-hidden rounded-lg">
                      <img
                        src={img}
                        alt={`${section.label} ${j + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))
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
                              {item.caption}
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
              Process & Visuals
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
