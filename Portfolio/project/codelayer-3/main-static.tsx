import { useEffect } from "react";
import NavigationStatic from "./components/NavigationStatic";
import HeroStatic from "./components/HeroStatic";
import MarqueeStatic from "./components/MarqueeStatic";
import WorkStatic from "./components/WorkStatic";
import ClientsStatic from "./components/ClientsStatic";
import AboutStatic from "./components/AboutStatic";
import ContactStatic from "./components/ContactStatic";
import FooterStatic from "./components/FooterStatic";

export default function PortfolioStatic() {
  useEffect(() => {
    // Enable smooth scroll
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Load Google Fonts
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);
    
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);
    
    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@1&family=DM+Sans:wght@300;400;500&display=swap';
    link3.rel = 'stylesheet';
    document.head.appendChild(link3);
    
    // Add global styles
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'DM Sans', sans-serif;
        color: #0E0E0E;
        background: #FAFAF7;
        overflow-x: hidden;
      }
      
      ::selection {
        background: #E8622A;
        color: #FAFAF7;
      }
      
      ::-webkit-scrollbar {
        width: 3px;
      }
      
      ::-webkit-scrollbar-track {
        background: #FAFAF7;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #E8622A;
      }
      
      .font-display {
        font-family: 'Bebas Neue', sans-serif;
      }
      
      .font-serif {
        font-family: 'DM Serif Display', serif;
      }
      
      .font-sans {
        font-family: 'DM Sans', sans-serif;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative">
      <NavigationStatic />
      <HeroStatic />
      <MarqueeStatic />
      <WorkStatic />
      <ClientsStatic />
      <AboutStatic />
      <ContactStatic />
      <FooterStatic />
    </div>
  );
}
