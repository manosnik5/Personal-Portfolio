import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface EducationCardsProps {
    experience: {
        title: string,
        description: string,
        icon: string,
        date: string
    },
    isLeft: boolean
}

const EducationCards = ({experience, isLeft}: EducationCardsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [isMobile, setIsMobile] = useState(() => {
      if (typeof window !== 'undefined') {
        return window.innerWidth < 768;
      }
      return false;
    });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { 
      opacity: isMobile ? 1 : 0,
      x: isLeft ? -50 : 50,
      scale: isMobile ? 0 : 1
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1 }
  }

  return (
    <div ref={ref} className={`flex w-full ${isLeft ? "justify-start" : "justify-end"} my-16 relative z-10`}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5 , delay: 0.25, type: "spring", bounce: 0.4 }}
        className="w-full md:w-5/12"
      >
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4 gap-4">
            <div className="w-[20%] ">
                <img src={experience.icon} alt="" className="w-full h-full object-fill"/>
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">{experience.title}</h3>
                <p className="text-blue-600">{experience.date}</p>
            </div>
            </div>
          <p className="text-slate-500 mb-2">{experience.date}</p>
          <p className="text-slate-700">{experience.description}</p>
        </div>
      </motion.div>
    </div>
  );

};

export default EducationCards