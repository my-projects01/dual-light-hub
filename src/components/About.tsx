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
                A self-motivated professional with over 2 years of experience in the tech industry. 
                I specialize in React and Django as main stack technologies, with additional proficiency 
                in MERN stack development including Node.js and MongoDB.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm experienced in both remote and onsite work environments, with a reputation as a 
                fast learner who quickly adapts to new tools and technologies. I'm dedicated to 
                delivering high-quality solutions while continuously expanding my skills and expertise.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {["Problem Solving", "Quick Learning", "Leadership", "Attention to Detail", "Teamwork", "Creativity"].map((trait) => (
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
                  <span className="font-semibold text-foreground">2+ Years</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-semibold text-foreground">BSc Electronics & IT</span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Current Role</span>
                  <span className="font-semibold text-foreground">Full Stack Developer</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="font-semibold text-foreground">English, Sinhala</span>
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