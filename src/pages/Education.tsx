
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      school: "Africa University",
      degree: "Bachelor of Science in Computer Science",
      period: "Expected in 06/2026",
      gpa: "3.62/4.0",
      description:
        "Currently pursuing a BSc in Computer Science with focus on software development and computer systems",
    }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="education-card animate-slide-in"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{edu.school}</h3>
                  <p className="text-lg text-muted-foreground mb-2">
                    {edu.degree}
                  </p>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-2">
                    <span>{edu.period}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
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
