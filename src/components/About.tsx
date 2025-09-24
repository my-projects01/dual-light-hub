import { Card } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. My journey began with 
                a computer science degree, but my true education came from countless hours 
                of building, breaking, and rebuilding applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in React, Node.js, and modern web technologies, with a keen 
                eye for design and user experience. When I'm not coding, you'll find me 
                exploring new technologies, contributing to open source, or mentoring 
                upcoming developers.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {["Problem Solver", "Team Player", "Innovation Driven", "Detail Oriented"].map((trait) => (
                  <span 
                    key={trait}
                    className="px-4 py-2 bg-skill-gradient border border-border rounded-full text-sm font-medium text-foreground"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <Card className="p-8 bg-card-gradient shadow-card hover:shadow-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-semibold text-foreground">5+ Years</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold text-foreground">50+</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Happy Clients</span>
                  <span className="font-semibold text-foreground">30+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Coffee Consumed</span>
                  <span className="font-semibold text-foreground">∞</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;