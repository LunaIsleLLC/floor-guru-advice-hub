
import { Shield, Clock, Users, Star, Zap, HeadphonesIcon } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Certified Experts",
      description: "Our team includes licensed contractors and flooring specialists with 10+ years experience"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get professional advice within 2 hours, with most responses in under 30 minutes"
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "Not satisfied with our advice? Get a full refund within 30 days, no questions asked"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "95% of our customers successfully complete their projects using our recommendations"
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Upload photos and get advice 24/7 through our easy-to-use mobile and web platform"
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "Follow-up questions included. We're here to help throughout your entire project"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose FloorGuru?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional flooring expertise at your fingertips
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
