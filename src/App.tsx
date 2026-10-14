import { motion, type Variants } from "framer-motion"
import { CV_LINK } from "./constants"

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

function App() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-primary h-screen w-full items-center text-text-primary flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 pt-50 space-y-13 text-center"
    >
      <motion.h1 variants={fadeUp} className="heading-style-h1">
        MANOS NIKITAKIS
      </motion.h1>

      <motion.h3 variants={fadeUp} className="heading-6">
        A recent university graduate showcasing projects across front-end and
        back-end development, with a focus on building practical and
        well-structured digital experiences.
      </motion.h3>

      <motion.div variants={fadeUp} className="flex gap-4 mt-26">
        <motion.a
          href={CV_LINK.href}
          download
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 py-2 border border-black rounded-sm text-sm text-black hover:opacity-60 transition-opacity duration-200"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 3v13M7 11l5 5 5-5M5 21h14" />
          </svg>
          {CV_LINK.label}
        </motion.a>

        <motion.a
          href="#projects"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#222] text-white py-2 px-4 rounded-sm hover:opacity-80 transition-opacity duration-200"
        >
          View work
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default App