
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const handleGetStarted = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Get Expert Floor Advice?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of homeowners and professionals who trust FloorGuru for their flooring needs. Get started today!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleGetStarted}
            className="group hover-scale"
          >
            Get Early Access
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary hover-scale"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-8 text-white/80 text-sm">
          <p>✓ 30-day money back guarantee • ✓ No subscription required • ✓ Instant access</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
