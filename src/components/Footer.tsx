import { SOCIAL_LINKS } from "../constants"

const Footer = () => {
  return (
    <div className="bg-secondary pt-5">
          <div className="container mx-auto flex items-center justify-center px-4 sm:px-6 lsg:px-8 text-white border-t border-white/30 flex-col" >
            
         
          <div className="flex flex-row md:mt-0 mt-6 md:pt-10">
        {SOCIAL_LINKS.map((social,index) => (
          <a href={`${social.link}`} target="_blank">
            <img key={social.id} src={social.icon} alt="social_media" className={`md:w-[35px] md:h-[35px] w-[27px] h-[27px] object-contain cursor-pointer hover:opacity-70  ${index !== SOCIAL_LINKS.length ? "mr-6" : "mr-0"} `}/>
          </a>
        ))}
         </div>
         <div className="flex items-center gap-3 text-caption pt-5">
              <span>© 2026 Manos Nikitakis. All rights reserved. </span>
            </div>
      </div>
        </div>
  )
}

export default Footer