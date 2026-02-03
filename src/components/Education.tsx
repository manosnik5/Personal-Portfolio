import { useEffect, useRef } from "react"
import EducationCards from "./EducationCards.js";
import { EXPERIENCES } from "../constants.js"

const Education = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ball1FillRef = useRef<HTMLDivElement>(null);
  const ball2FillRef = useRef<HTMLDivElement>(null);
  const ball3FillRef = useRef<HTMLDivElement>(null);
  const ball1Ref = useRef<HTMLDivElement>(null);
  const ball2Ref = useRef<HTMLDivElement>(null);
  const ball3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerTop = containerRect.top + window.scrollY;
        const containerHeight = containerRect.height;
      
        const viewportTrigger = window.innerHeight * 0.7; 
        const scrollPosition = window.scrollY + viewportTrigger;
        const scrollInContainer = scrollPosition - containerTop;
        
        const scrollPercentage = Math.min(Math.max((scrollInContainer / containerHeight) * 100, 0), 100);
        
        lineRef.current.style.height = `${scrollPercentage}%`;

   
        const fillBall = (ballRef: React.RefObject<HTMLDivElement>, fillRef: React.RefObject<HTMLDivElement>) => {
          if (ballRef.current && fillRef.current && containerRef.current) {
            const ballRect = ballRef.current.getBoundingClientRect();
            const ballTop = ballRef.current.offsetTop;
            const ballHeight = ballRect.height;
            const ballPositionPercent = (ballTop / containerHeight) * 100;
            const ballHeightPercent = (ballHeight / containerHeight) * 100;
  
            const fillPercent = Math.min(Math.max(((scrollPercentage - ballPositionPercent) / ballHeightPercent) * 100, 0), 100);
            fillRef.current.style.height = `${fillPercent}%`;
          }
        };

        fillBall(ball1Ref, ball1FillRef);
        fillBall(ball2Ref, ball2FillRef);
        fillBall(ball3Ref, ball3FillRef);
      }
    };

    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary py-16 pb-50 px-4">
      <div className="max-w-6xl mx-auto ">
        <h1 className="heading-style-h1 pb-20 md:pb-30 text-text-primary text-center">Education</h1>
        <div ref={containerRef} className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 z-8 bg-gray-300" style={{ height: '100%', top: 0, bottom: 0 }} />
          
          <div ref={ball1Ref} className="hidden md:block absolute w-12 h-12 rounded-full bg-white border-4 border-gray-300 left-1/2 transform -translate-x-1/2 z-10 overflow-hidden shadow-lg" style={{ top: '12%' }}>
            <div ref={ball1FillRef} className="absolute top-0 w-full bg-black transition-all duration-100" style={{ height: '0%' }}></div>
          </div>
          

          <div ref={ball2Ref} className="hidden md:block absolute w-12 h-12 rounded-full bg-white border-4 border-gray-300 left-1/2 transform -translate-x-1/2 z-10 overflow-hidden" style={{ top: '46%' }}>
            <div ref={ball2FillRef} className="absolute top-0 w-full bg-black transition-all duration-100" style={{ height: '0%' }}></div>
          </div>
          
          <div ref={ball3Ref} className="hidden md:block absolute w-12 h-12 rounded-full bg-white border-4 border-gray-300 left-1/2 transform -translate-x-1/2 z-10 overflow-hidden" style={{ top: '83.33%' }}>
            <div ref={ball3FillRef} className="absolute top-0 w-full bg-black transition-all duration-100" style={{ height: '0%' }}></div>
          </div>
          
          <div 
            ref={lineRef} 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-700 transition-all duration-100 z-9 top-0 shadow-sm"
            style={{ height: '0%' }}
          />
          
          <div className="overflow-x-hidden">
            {EXPERIENCES.map((experience, index) => (
              <EducationCards 
                key={index}
                experience={experience}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education