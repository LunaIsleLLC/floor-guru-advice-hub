
import { Upload, MessageSquare, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Photo",
      description: "Take a clear photo of your flooring issue or area you need advice about",
      color: "text-blue-600"
    },
    {
      icon: MessageSquare,
      title: "Ask Question",
      description: "Describe your problem, budget, and preferences in detail",
      color: "text-green-600"
    },
    {
      icon: CheckCircle,
      title: "Get Expert Advice",
      description: "Receive professional recommendations and step-by-step solutions",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How FloorGuru Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get professional flooring advice in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group hover-scale">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-gray-200 transition-colors">
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-8"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
