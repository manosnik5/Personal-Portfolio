import CardDescription from "./CardDescription"
import { project1, project2, project3, project4 } from "../assets/index.ts"
import { motion } from "framer-motion"
import HoverVideo from "./HoverVideo.js"

const Projects = () => {

  return (
    <div className="bg-secondary scroll-mt-6" id="projects"> 
        <div className='w-full items-center flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center text-[#F8F8F8] space-y-4'>
          <h1 className="heading-style-h1 pb-20 md:pb-30 text-white">PROJECTS</h1>
          <div className=" w-full h-full flex flex-col justify-between items-center md:flex-row mb-30 overflow-hidden">
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
              <CardDescription title="Card Simulator" description="A full-stack collectible card game where users can open card packs, build their collection, and manage their inventory. Features include user authentication, pack opening mechanics, and a comprehensive collection management system." technologies={["React", "JavaScript", "Vite", "PostgreSQL (Neon)", "Node.js", "Express"]} href="https://cards-react.onrender.com/" repoHref="https://github.com/manosnik5/cards_react"/>
              
            </motion.div>
          </div>
          <div className=" w-full h-full flex flex-col justify-between items-center md:flex-row mb-30 overflow-hidden ">
            
            <div 
              className="order-1 sm:order-0 w-[90%] md:w-[40%] h-[50%] text-left self-start md:self-center ml-5 pt-10 sm:pt-0" 
              
            >
              <CardDescription title="CourtStyle" description="A full-stack e-commerce platform for basketball jersey enthusiasts. Browse, filter, and purchase authentic basketball shirts with a seamless shopping experience. Features include product filtering, shopping cart management, user authentication, and secure checkout." technologies={["React", "TypeScript", "TailwindCSS", "Framer Motion", "PostgreSQL (Neon)", "Prisma", "Next.js", "Better Auth", "Nodemailer"]} href="https://basketball-shirts-shop.onrender.com/" repoHref="https://github.com/manosnik5/Basketball_shirts_shop"/>
              
            </div>
            <HoverVideo
              video={project2}
              xValue={216}
            />
          </div>
           <div className=" w-full h-full flex flex-col justify-between items-center md:flex-row mb-30 overflow-hidden ">
            <HoverVideo
              video={project3}
              xValue={-216}
            />
            <motion.div 
              className="w-[90%] md:w-[40%] h-[50%] text-left self-start md:self-center ml-5 pt-10 sm:pt-0" 
              initial={{ opacity: 0, y: 58 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <CardDescription title="SoundCircle" description="A full-stack music streaming and social platform where users can discover music, chat with friends in real-time, and share what they're listening to." technologies={["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO", "Clerk", "Cloudinary"]} href="https://soundcircle-x8k2.onrender.com/" repoHref="https://github.com/manosnik5/SoundCircle"/>
              
            </motion.div>
          </div>
          <div className=" w-full h-full flex flex-col justify-between items-center md:flex-row mb-30 overflow-hidden ">
            
            <div 
              className="order-1 sm:order-0 w-[90%] md:w-[40%] h-[50%] text-left self-start md:self-center ml-5 pt-10 sm:pt-0" 
              
            >
              <CardDescription title="Draw Battles" description="A real-time multiplayer drawing and voting game where players compete by drawing a chosen theme and voting on each other's artwork." 
              technologies={[
                "React",
                "TypeScript",
                "TailwindCSS",
                "Spring Boot",
                "Java",
                "PostgreSQL (Neon)",
                "Spring WebSocket (STOMP)",
                "Spring Security",
                "Auth0",
                "Docker"
              ]} 
              href="https://drawbattles.onrender.com/" 
              repoHref="https://github.com/manosnik5/DrawRoyale"/>
              
            </div>
            <HoverVideo
              video={project4}
              xValue={216}
            />
          </div>
          </div>
        
       
        </div>

  )
}

export default Projects