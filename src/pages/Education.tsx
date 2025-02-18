
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      institution: "University of Johannesburg",
      degree: "Bachelor of Science in Computer Science",
      duration: "2020 - 2023",
      description: "Focused on software development, algorithms, and artificial intelligence. Completed courses in web development, database management, and machine learning.",
      achievements: [
        "Dean's List 2021-2022",
        "First Class Honours",
        "Best Student Project Award"
      ]
    },
    {
      id: 2,
      institution: "CodeSpace Academy",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2019",
      description: "Intensive program covering modern web development technologies and practices. Gained hands-on experience with React, Node.js, and database management.",
      achievements: [
        "Top Performer Award",
        "Built 5 full-stack applications",
        "Perfect attendance record"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {educationHistory.map((education) => (
            <div 
              key={education.id}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {education.institution}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground mb-1">
                    {education.degree}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {education.duration}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {education.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {education.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
