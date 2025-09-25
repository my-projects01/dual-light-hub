import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hyvv",
      description: "Developed a user-friendly interface for the Research Checker using React and Bootstrap, with a secure Django back-end and OpenAI assistant integration.",
      image: "/placeholder.svg",
      technologies: ["React", "Bootstrap", "Django", "n8n", "OpenAI", "Brevo"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Negombo Cabs",
      description: "Developed a website for booking vehicles aimed at tourists. Built with Django backend and MySQL database for efficient data management.",
      image: "/placeholder.svg", 
      technologies: ["Vite", "Lovable", "Django", "WordPress REST API", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Dubsea.com",
      description: "Rebuilt a web application using Next.js to optimize the frontend, integrated with Django backend and WordPress REST API for blogs.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Django", "WordPress"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Blubizlanka",
      description: "Contributed to the development of a comprehensive web platform, focusing on creating reusable UI components and debugging to enhance user experience.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Featured Projects
          </h2>
          
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden bg-card-gradient shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 border-0"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-thin text-primary/30">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-skill-gradient text-sm font-medium rounded-full text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button asChild size="sm" className="flex-1">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Other Projects */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Other Projects
            </h3>
            <p className="text-muted-foreground">
              A selection of other projects I've worked on
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card 
                key={project.title}
                className="p-6 bg-card-gradient shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-skill-gradient text-xs font-medium rounded-full text-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1 text-xs">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                  
                  <Button asChild size="sm" variant="outline" className="flex-1 text-xs">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
