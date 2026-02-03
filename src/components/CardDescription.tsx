import { motion } from "framer-motion"

interface CardDescriptionProps {
  title: string
  description: string
  technologies: string[]
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
      ease: "easeOut",
    },
  },
}

const CardDescription = ({
  title,
  description,
  technologies,
}: CardDescriptionProps) => {
  return (
    <motion.div
      className="w-full h-full space-y-4 flex flex-col justify-between"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-300px" }}
    >
      <motion.h3
        variants={itemVariants}
        className="text-4xl font-semibold"
      >
        {title}
      </motion.h3>
      <motion.p
        variants={itemVariants}
        className="break-words font-light"
      >
        {description}
      </motion.p>
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap gap-2 mt-auto"
      >
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-[#272424] rounded text-xs text-white border border-white/5"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="text-sm opacity-80"
      >
        View
      </motion.div>
    </motion.div>
  )
}

export default CardDescription
