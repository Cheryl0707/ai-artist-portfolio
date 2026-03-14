/* Light Theme Process Section — Simple numbered steps */

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Conceptual Ideation",
    description:
      "Every work begins with a question — philosophical, emotional, or scientific. I develop a conceptual framework that will guide every technical decision.",
  },
  {
    number: "02",
    title: "Model Engineering",
    description:
      "I train custom LoRA weights, craft precise prompt architectures, and configure sampling parameters to coax specific visual languages from the neural network.",
  },
  {
    number: "03",
    title: "Iterative Refinement",
    description:
      "Hundreds of generations are produced and curated. I use ControlNet, inpainting, and img2img techniques to guide the model toward the intended aesthetic.",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Selected outputs undergo upscaling, color grading, and compositing. Final pieces are prepared at print resolution with embedded metadata.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32" style={{ background: "#F8F8F7", borderTop: "1px solid #E5E5E4" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-sm font-medium tracking-wide mb-4" style={{ color: "#2672E4" }}>
            PROCESS
          </p>
          <h2 className="text-5xl font-bold mb-6" style={{ color: "#000000" }}>
            How I Create
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#666666" }}>
            A rigorous four-stage methodology that transforms abstract concepts into gallery-quality generative art.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12"
              style={{ borderBottom: "1px solid #E5E5E4" }}
            >
              <div>
                <p className="text-4xl font-bold" style={{ color: "#E5E5E4" }}>
                  {step.number}
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#000000" }}>
                  {step.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: "#666666" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
