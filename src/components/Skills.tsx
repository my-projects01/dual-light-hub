import { Card } from "./ui/card";
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Zap,
  Users
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="h-8 w-8" />,
      skills: ["React", "React Native", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend Development", 
      icon: <Database className="h-8 w-8" />,
      skills: ["Django", "Node.js", "Python", "MySQL", "MongoDB", "Firebase"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Design & Tools",
      icon: <Palette className="h-8 w-8" />,
      skills: ["Figma", "Adobe Photoshop", "WordPress", "n8n"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8" />,
      skills: ["React Native", "Mobile UI/UX"],
      color: "from-orange-500 to-yellow-600"
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="h-8 w-8" />,
      skills: ["Git", "GitHub", "Cursor", "ClickUp", "Jira", "Slack"],
      color: "from-gray-500 to-slate-600"
    },
    {
      title: "Other Technologies",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["OpenAI APIs", "Brevo", "DigitalOcean", "Vercel", "Octave", "Arduino"],
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const softSkills = [
    { name: "Leadership", icon: <Users className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Zap className="h-5 w-5" /> },
    { name: "Communication", icon: <Users className="h-5 w-5" /> },
    { name: "Adaptability", icon: <Zap className="h-5 w-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="p-6 bg-card-gradient shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 border-0"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-skill-gradient text-sm font-medium rounded-full text-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="p-8 bg-card-gradient shadow-card">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="p-4 rounded-full bg-skill-gradient mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;