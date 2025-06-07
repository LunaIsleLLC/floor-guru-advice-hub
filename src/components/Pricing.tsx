
import { Button } from "@/components/ui/button";
import { Check, X, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      name: "Free \"Explorer\"",
      price: "$0 / month",
      popular: false
    },
    {
      name: "Plus",
      price: "$12 / month",
      popular: true
    },
    {
      name: "Pro",
      price: "$39 / month",
      popular: false
    }
  ];

  const features = [
    {
      name: "AI Questions",
      values: ["3 / month", "100 / month", "Unlimited"]
    },
    {
      name: "Photo Uploads",
      values: [true, true, true]
    },
    {
      name: "Response Time",
      values: ["Standard", "Fast", "Fastest + Priority"]
    },
    {
      name: "Project History",
      values: [false, true, true]
    },
    {
      name: "PDF Report Export",
      values: [false, true, true]
    },
    {
      name: "White-Labeled Reports",
      values: [false, false, true]
    },
    {
      name: "Team Members",
      values: [false, false, "Up to 5"]
    },
    {
      name: "Early Access Features",
      values: [false, false, true]
    },
    {
      name: "Support",
      values: ["Basic email", "Priority email", "Concierge onboarding"]
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

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-900 hover:bg-gray-900">
                <TableHead className="text-white font-bold text-lg w-1/4 py-6">Plan</TableHead>
                {plans.map((plan, index) => (
                  <TableHead key={index} className="text-white text-center py-6">
                    <div className="font-bold text-lg flex items-center justify-center gap-2">
                      {plan.name}
                      {plan.popular && (
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 whitespace-nowrap">
                          <Star className="h-3 w-3" />
                          Most Popular
                        </div>
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableCell className="text-white font-bold text-lg">Price</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={index} className="text-white text-center font-bold text-xl">
                    {plan.price}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, featureIndex) => (
                <TableRow key={featureIndex} className="border-b">
                  <TableCell className="font-semibold bg-gray-50">{feature.name}</TableCell>
                  {feature.values.map((value, valueIndex) => (
                    <TableCell key={valueIndex} className="text-center">
                      {typeof value === 'boolean' ? (
                        value ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="font-medium">{value}</span>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {plans.map((plan, index) => (
            <Button 
              key={index}
              className="w-full py-6 text-lg" 
              variant={plan.popular ? "default" : "outline"}
              onClick={() => handleWaitlistSignup(plan.name)}
            >
              Join Waitlist - {plan.name}
            </Button>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 max-w-md mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Join the Waitlist</h3>
          <p className="text-muted-foreground mb-6">
            Be the first to know when FloorGuru launches. Early subscribers get 50% off their first month!
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
