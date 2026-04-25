import { motion } from "framer-motion"

interface CardDescriptionProps {
  title: string;
  description: string;
  technologies: string[];
  href: string;
  repoHref: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, 
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
}


const CardDescription = ({
  title,
  description,
  technologies,
  href,
  repoHref,
}: CardDescriptionProps) => {
  return (

    <motion.div
      className="w-full h-full space-y-4 flex flex-col justify-between"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-300px" }}
    >
      <motion.h3 variants={itemVariants} className="text-4xl font-semibold">
        {title}
      </motion.h3>

      <motion.p variants={itemVariants} className="wrap-break-word font-light">
        {description}
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-[#272424] rounded text-xs text-white border border-white/5"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col gap-3 border-t border-white/10 pt-4 mt-2">
        {[
          { url: href, label: "Live site" },
          { url: repoHref, label: "Repository" },
        ].map(({ url, label }) => (
          <motion.a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial="rest"
            whileHover="hover"
            className="flex items-center justify-between group"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-widest text-white/30">
                {label}
              </span>
              <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-200">
                {new URL(url).hostname}{new URL(url).pathname.replace(/\/$/, "")}
              </span>
            </div>

            <motion.svg
              variants={{
                rest: { x: 0, y: 0, opacity: 0.4 },
                hover: {
                  x: 3,
                  y: -3,
                  opacity: 1,
                  transition: { duration: 0.2, ease: "easeOut" as const },
                },
              }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white shrink-0"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </motion.svg>
          </motion.a>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default CardDescription
