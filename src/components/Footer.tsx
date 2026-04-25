import { SOCIAL_LINKS } from "../constants"

const Footer = () => {
  return (
    <div className="bg-secondary pb-3" id="contact">
      <div className="container mx-auto flex items-center justify-center px-4 sm:px-6 lsg:px-8 text-white flex-col" >
        <div className="flex flex-row md:mt-0 mt-6 md:pt-10 justify-between items-center gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a key={social.title} href={`${social.link}`} target="_blank">
              <img src={social.icon} alt="social_media" className="md:w-8.75 md:h-8.75 w-6.75 h-6.75 object-contain cursor-pointer hover:opacity-70" />
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