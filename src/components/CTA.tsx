
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const handleJoinWaitlist = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready for Instant AI Floor Advice?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join our waitlist to be among the first to experience AI-powered flooring expertise. Get notified when we launch!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleJoinWaitlist}
            className="group hover-scale"
          >
            Join Waitlist
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
          <p>✓ AI-powered expert knowledge • ✓ Instant responses • ✓ Early bird discount</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
