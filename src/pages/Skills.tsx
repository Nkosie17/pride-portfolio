
const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 80 },
    { name: "Git", level: 85 },
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="animate-slide-in">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--progress": `${skill.level}%` } as any}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
