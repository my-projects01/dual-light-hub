import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-background/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 ring-4 ring-white/20 shadow-elegant">
              <img 
                src={profilePhoto} 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional digital experiences that solve real problems 
            and delight users. Passionate about clean code and pixel-perfect design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;