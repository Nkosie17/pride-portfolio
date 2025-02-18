
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "2023",
      description:
        "Professional certification for designing distributed applications and systems on AWS",
      link: "https://aws.amazon.com/certification/",
    },
    {
      title: "Google Cloud Professional Developer",
      organization: "Google",
      date: "2022",
      description:
        "Advanced certification for building scalable applications on Google Cloud Platform",
      link: "https://cloud.google.com/certification/cloud-developer",
    },
    {
      title: "Meta Frontend Developer",
      organization: "Meta",
      date: "2022",
      description:
        "Professional certification in modern frontend development practices",
      link: "https://developers.facebook.com/certification/",
    },
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="certificate-card animate-slide-in"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.organization} • {cert.date}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-foreground hover:text-foreground/80 transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
