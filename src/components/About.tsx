import { Card } from "./ui/card";
import { descriptionPart1, descriptionPart2, quickFacts } from "@/content";

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
                {descriptionPart1}
              </p>
              
              {descriptionPart2 && <p className="text-lg text-muted-foreground leading-relaxed">
                {descriptionPart2}
              </p>}
              
              {/* <div className="flex flex-wrap gap-3 pt-4">
                {["Problem Solving", "Quick Learning", "Leadership", "Attention to Detail", "Teamwork", "Creativity"].map((trait) => (
                  <span 
                    key={trait}
                    className="px-4 py-2 bg-skill-gradient border border-border rounded-full text-sm font-medium text-foreground"
                  >
                    {trait}
                  </span>
                ))}
              </div> */}
            </div>
            
            <Card className="p-8 bg-card-gradient shadow-card hover:shadow-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Facts</h3>
              
              <div className="space-y-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className={`flex justify-between items-center ${index < quickFacts.length - 1 ? 'pb-3 border-b border-border' : ''}`}>
                    <span className="text-muted-foreground">{fact.title}</span>
                    <span className="font-semibold text-foreground">{fact.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;