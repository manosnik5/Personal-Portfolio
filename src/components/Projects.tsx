import CardDescription from "./CardDescription"
import {project1, project2} from "../assets/index.js"
import { motion,  } from "framer-motion"
import HoverVideo from "./HoverVideo.js"

const Projects = () => {

  return (
    <div className="bg-secondary" id="projects"> 
        <div className=' w-full items-center flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center text-[#F8F8F8] space-y-4'>
          <h1 className="heading-style-h1 pb-20 md:pb-30 text-white">PROJECTS</h1>
          <div className=" w-full h-full flex flex-col justify-between items-center sm:flex-row mb-30 overflow-hidden">
            <HoverVideo
              video={project1}
              xValue={-216}
            />
            <motion.div 
              className="w-[90%] md:w-[40%] h-[50%] text-left self-start md:self-center ml-5 pt-10 sm:pt-0" 
              initial={{ opacity: 0, y: 58 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <CardDescription title="Yugioh Cards" description="Design+Peace is a website created for an architectural non-profit organization with a primary focus on addressing environmental and societal challenges. The website features custom interactions, GSAP animations, and scroll animations." technologies={["React", "JavaScript", "PostgreSQL", "Node.js", "Express.js", "Vite"]}/>
              
            </motion.div>
          </div>
          <div className=" w-full h-full flex flex-col justify-between items-center sm:flex-row mb-30 overflow-hidden ">
            
            <div 
              className="order-1 sm:order-0 w-[90%] md:w-[40%] h-[50%] text-left self-start md:self-center ml-5 pt-10 sm:pt-0" 
              
            >
              <CardDescription title="Yugioh Cards" description="Design+Peace is a website created for an architectural non-profit organization with a primary focus on addressing environmental and societal challenges. The website features custom interactions, GSAP animations, and scroll animations." technologies={["React", "TypeScript", "PostgreSQL", "TailwindCSS", "Next.js", "Prisma"]}/>
              
            </div>
            <HoverVideo
              video={project2}
              xValue={216}
            />
          </div>
           <div className=" w-full h-full flex flex-col justify-between items-center sm:flex-row mb-30 overflow-hidden ">
            <HoverVideo
              video={project1}
              xValue={-216}
            />
            <motion.div 
              className="w-[90%] md:w-[40%] h-[50%] text-left self-start md:self-center ml-5 pt-10 sm:pt-0" 
              initial={{ opacity: 0, y: 58 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <CardDescription title="Yugioh Cards" description="Design+Peace is a website created for an architectural non-profit organization with a primary focus on addressing environmental and societal challenges. The website features custom interactions, GSAP animations, and scroll animations." technologies={["react", "JavaScript", "Postgresql", ]}/>
              
            </motion.div>
          </div>
          </div>
        
       
        </div>

  )
}

export default Projects