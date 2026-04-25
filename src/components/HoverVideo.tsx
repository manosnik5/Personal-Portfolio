import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

interface HoverVideoProps {
  video: string;
  xValue: number;
}

const HoverVideo = ({ video, xValue }: HoverVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [aspectRatio, setAspectRatio] = useState<string>("3/2")
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  )

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleLoadedMetadata = () => {
    const vid = videoRef.current
    if (vid && vid.videoWidth && vid.videoHeight) {
      setAspectRatio(`${vid.videoWidth}/${vid.videoHeight}`)
    }
  }

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
      transition={{ duration: 1.5, ease: "easeOut", type: "spring", bounce: 0.3 }}
      style={{ willChange: "transform" }}
    >
      <div
        className="relative rounded-lg p-0.5 bg-linear-to-br from-white/30 via-white/10 to-white/30"
        style={{ aspectRatio }}
      >
        <div
          className="w-full h-full rounded-lg overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <video
            ref={videoRef}
            src={video}
            muted
            playsInline
            loop
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover"
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default HoverVideo