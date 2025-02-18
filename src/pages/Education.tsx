
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      school: "Stanford University",
      degree: "Master of Science in Computer Science",
      period: "2018 - 2020",
      gpa: "3.8",
      description:
        "Specialized in Artificial Intelligence and Machine Learning",
    },
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      period: "2014 - 2018",
      gpa: "3.9",
      description:
        "Major in Computer Science with a minor in Mathematics",
    },
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
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span>{edu.period}</span>
                    <span className="w-px h-4 bg-border" />
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
