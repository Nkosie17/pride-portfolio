
const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "React", level: 85, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", level: 80, color: "from-blue-400 to-indigo-500" },
    { name: "Node.js", level: 75, color: "from-green-400 to-emerald-500" },
    { name: "HTML/CSS", level: 95, color: "from-pink-400 to-rose-500" },
    { name: "Python", level: 70, color: "from-indigo-400 to-purple-500" },
    { name: "SQL", level: 80, color: "from-orange-400 to-red-500" },
    { name: "Git", level: 85, color: "from-red-400 to-rose-500" },
    { name: "Django", level: 75, color: "from-green-600 to-emerald-700" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-8 bg-gradient-to-br from-gray-50 to-gray-100 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="max-w-2xl mx-auto space-y-8 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="animate-slide-in backdrop-blur-sm bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} animate-progress`}
                  style={{ 
                    "--progress": `${skill.level}%`,
                  } as any}
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
