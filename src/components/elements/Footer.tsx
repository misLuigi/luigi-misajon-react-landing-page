import { Container } from "../shared/Container";
import logo from "../../assets/icon.svg"
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";


export const Footer = () => {
  return (
  <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
    <Container className="pb-8">
      <div className="flex justify-center mb-3">
      <ul className="flex gap-6 text-heading-1">
        {navItems.map((item, key) => (
          <NavItem key={key} href={item.href} text={item.text}/>
        ))}
      </ul>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0 transition-all duration-300 transform hover:scale-120">
          <img src={logo} className="w-7 h-7" alt="Luigi logo." />
          <span className="text-lg font-semibold text-heading-1">Luigi</span>
          <span className="text-sm font-light text-heading-1">Website & Automation</span>
        </div>
        <div className="flex flex-col items-center gap-3 mb-4 md:mb-0">
          <span className="text-md font-regular text-heading-1"> © 2025 Luigi Misajon. All rights reserved. </span>
          <span className="text-sm font-light text-heading-1"> <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a> </span>
        </div>
      
      <ul className="flex gap-6 text-heading-1">
        <li className="transition-all duration-300 transform hover:scale-120">
          <a href="https://www.facebook.com/AutomateWithLuigi/" target="_blank" aria-label="Facebook" >
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="#41C6EE" 
            stroke="#3802E9" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="lucide lucide-facebook-icon lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg> 
          </a>
        </li>
        <li className="transition-all duration-300 transform hover:scale-120">
          <a href="https://www.instagram.com/luigi_misajon?igsh=N3diOTR6aDIzd3Y=" target="_blank" aria-label="Instagram">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" 
            viewBox="0 0 24 24" 
            fill="#41C6EE" 
            stroke="#3802E9" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="lucide lucide-instagram-icon lucide-instagram"><rect 
            width="20" 
            height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          </a>
        </li>
        <li className="transition-all duration-300 transform hover:scale-120">
          <a href="https://www.linkedin.com/in/luigi-misajon-7a62042b4/" target="_blank" aria-label="LinkedIn">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="#41C6EE" 
            stroke="#3802E9" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="lucide lucide-linkedin-icon lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </li>
        <li className="transition-all duration-300 transform hover:scale-120">
          <a href="https://x.com/theMis_Lui?t=3p6fJ8k-LuJIN8EBqbREtw&s=09" target="_blank" aria-label="X(twitter)">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="#41C6EE" 
            stroke="#3802E9" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="lucide lucide-twitter-icon lucide-twitter">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
        </li>
        <li className="transition-all duration-300 transform hover:scale-120">
          <a href="https://github.com/misLuigi" target="_blank" aria-label="Github">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="#41C6EE" 
            stroke="#3802E9" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="lucide lucide-github-icon lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
        </li>
       </ul>
      </div>
    </Container>
  </footer>
  );
};