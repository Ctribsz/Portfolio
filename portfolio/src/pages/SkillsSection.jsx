// src/components/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const skillGroups = {
  "Frontend": [
    "React", "Next.js", "Tailwind CSS", "TypeScript"
  ],
  "Backend": [
    "Node.js", "Laravel", "Neo4j", "MongoDB"
  ],
  "Tooling": [
    "Git", "Docker", "Jest", "Figma"
  ]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-primaryBg">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {Object.entries(skillGroups).map(([category, skills], catIdx) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="relative inline-block opacity-0"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + catIdx * 0.2, duration: 0.4 }}
                >
                  <span
                    className={`
                      block
                      px-4 py-2
                      rounded-lg
                      font-mono
                      uppercase
                      text-sm
                      text-primaryText
                      bg-white/5
                      transition-transform duration-300
                      hover:scale-105 hover:bg-accent/20
                    `}
                  >
                    {skill}
                  </span>
                  <span
                    className={`
                      absolute inset-0
                      rounded-lg
                      border-2 border-accent
                      opacity-0
                      transition-opacity duration-300
                      hover:opacity-100
                      pointer-events-none
                    `}
                  />
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}