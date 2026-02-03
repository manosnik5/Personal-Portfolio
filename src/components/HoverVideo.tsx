import { useRef } from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react";

interface HoverVideoProps {
  video: string;
  xValue: number;
}

const HoverVideo = ({ video, xValue }: HoverVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
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

  return (
    <motion.div
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }}
      className="w-full md:w-[55%]"
      initial={{ opacity: 0, x: isMobile ? 0 : xValue, scale: isMobile ? 0 : 1 }}
      whileInView={{ opacity: 1, x: 0, scale: isMobile ? 0.95 : 1 }}
       viewport={{
        once: true,
        margin: window.innerWidth < 1000 ? "-50px" : "-250px",
      }}
      transition={{ duration: 1.5, ease: "easeOut",type: "spring", bounce: 0.3}}
    >
      <div className="relative aspect-3/2 rounded-2xl p-0.5 
                      bg-linear-to-br from-white/30 via-white/10 to-white/30
                      ">

        <div className="w-full h-full rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            src={video}
            muted
            playsInline
            loop
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </motion.div>
  )
}

export default HoverVideo
