import { CV_LINK } from "./constants"

function App() {

  return (
    <div className='bg-primary h-screen w-full items-center text-text-primary flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 pt-50 space-y-13 text-center'>
     <h1 className="heading-style-h1">MANOS NIKITAKIS</h1>
     <h3 className="heading-6">A recent university graduate showcasing projects across front-end and back-end development, with a focus on building practical and well-structured digital experiences.</h3>
     <div className="flex gap-4 mt-26">
        <a 
          href={CV_LINK.href}
          download
          className="flex items-center gap-2 px-4 py-2 border border-black rounded-sm text-sm text-black hover:opacity-60 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3v13M7 11l5 5 5-5M5 21h14" />
          </svg>
          {CV_LINK.label}
        </a>

        <a
          href="#projects"
          className="bg-[#222] text-white py-2 px-4 rounded-sm hover:opacity-80 transition-all duration-200"
        >
          View work
        </a> 
      </div>  
    </div>
  )
}

export default App
