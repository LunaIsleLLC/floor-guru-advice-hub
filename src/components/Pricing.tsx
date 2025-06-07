
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEarlyAccess = (plan: string) => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email to get early access.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: `Thanks for your interest in the ${plan} plan! We'll notify you when we launch.`,
    });
    
    console.log(`Early access signup for ${plan} plan:`, email);
    setEmail("");
  };

  const plans = [
    {
      name: "One-Time Consultation",
      price: "$19",
      description: "Perfect for single flooring questions",
      features: [
        "Photo analysis",
        "Expert consultation",
        "Written recommendations",
        "48-hour response",
        "1 follow-up question"
      ],
      popular: false
    },
    {
      name: "Project Package",
      price: "$49",
      description: "Best for complete flooring projects",
      features: [
        "Everything in One-Time",
        "Priority 2-hour response",
        "Unlimited follow-ups",
        "Product recommendations",
        "Installation guidance",
        "30-day support"
      ],
      popular: true
    },
    {
      name: "Professional Plan",
      price: "$199/mo",
      description: "For contractors and property managers",
      features: [
        "Unlimited consultations",
        "1-hour response time",
        "Direct expert phone calls",
        "Custom reports",
        "Team access",
        "Priority support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl p-8 relative hover-scale ${plan.popular ? 'ring-2 ring-primary shadow-lg' : 'shadow-sm'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleEarlyAccess(plan.name)}
              >
                Get Early Access
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 max-w-md mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Get Early Access</h3>
          <p className="text-muted-foreground mb-6">
            Be the first to know when FloorGuru launches. Early subscribers get 50% off their first consultation!
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button onClick={() => handleEarlyAccess("Early Access")}>
              Notify Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
