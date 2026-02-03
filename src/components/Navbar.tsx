import { useState, useEffect } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarTheme, setNavbarTheme] = useState<"primary" | "secondary">("primary");


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }   
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.querySelector('#projects');
            
            if (projectsSection) {
                const rect = projectsSection.getBoundingClientRect();
          
                const isProjectsInView = rect.top <= 65 && rect.bottom > 65;
                
                setNavbarTheme(isProjectsInView ? "secondary" : "primary");
            }
        };

        window.addEventListener('scroll', handleScroll);
 
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

  return (
    <header className={`fixed z-50 w-full border-b border-white/20 ${navbarTheme === "primary" ? "bg-primary text-text-primary" : "bg-secondary text-text-secondary"}`}>
        <div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lsg:px-8 h-16'>
            <div className="font-semibold">ManosNikitakis</div>

            <nav className="hidden md:flex gap-8">
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </nav>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative w-7 h-7 flex items-center justify-center hover:cursor-pointer"
                aria-label="Toggle menu"
            >
                <div className="w-7 h-2 flex flex-col justify-between">
                    <span className={`w-full h-0.5 ${isOpen ? 'transition-all duration-300 rotate-45 translate-y-[5px]' : ''} ${navbarTheme === "primary" ? "bg-secondary" : "bg-primary"}`}></span>
                    <span className={`w-full h-0.5 ${isOpen ? '-rotate-45 translate-y-[-1.5px] transition-all duration-300' : ''} ${navbarTheme === "primary" ? " bg-secondary" : "bg-primary"}`}></span>
                </div>
            </button>
        </div>

        {isOpen && (
            <nav
          className="md:hidden overflow-hidden transition-all duration-300 bg-secondary absolute z-5 h-screen w-full "
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 text-[28px] border-b border-white/14 text-text-secondary">
            <a
              href="#projects"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#education"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-4 text-text-secondary">
            <span className="text-[18px]">Social</span>
            <span className="text-[12px]">GITHUB</span>
            <span className="text-[12px]">LINKEDIN</span>
          </div>
        </nav>
        )}
        
    </header>
  )
}

export default Navbar