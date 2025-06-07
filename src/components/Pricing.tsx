
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleWaitlistSignup = (plan: string) => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email to join the waitlist.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Welcome to the Waitlist!",
      description: `Thanks for your interest in the ${plan} plan! We'll notify you when FloorGuru launches.`,
    });
    
    console.log(`Waitlist signup for ${plan} plan:`, email);
    setEmail("");
  };

  const plans = [
    {
      name: "Single Question",
      price: "$9",
      description: "Perfect for one-off flooring questions",
      features: [
        "AI photo analysis",
        "Instant expert advice", 
        "Detailed recommendations",
        "Product suggestions",
        "1 follow-up question"
      ],
      popular: false
    },
    {
      name: "Project Package",
      price: "$29",
      description: "Best for complete flooring projects",
      features: [
        "Everything in Single Question",
        "Unlimited questions for 30 days",
        "Installation guidance",
        "Cost estimates",
        "Priority support",
        "Email summaries"
      ],
      popular: true
    },
    {
      name: "Pro Plan",
      price: "$99/mo",
      description: "For contractors and professionals",
      features: [
        "Unlimited AI consultations",
        "Advanced analytics",
        "Custom reports",
        "Team access",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Coming Soon - Planned Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our waitlist to be the first to try FloorGuru when we launch
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
                onClick={() => handleWaitlistSignup(plan.name)}
              >
                Join Waitlist
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 max-w-md mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Join the Waitlist</h3>
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
            <Button onClick={() => handleWaitlistSignup("Early Access")}>
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
