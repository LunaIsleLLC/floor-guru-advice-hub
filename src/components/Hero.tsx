
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, MessageSquare, CheckCircle } from "lucide-react";

const Hero = () => {
  const handleGetStarted = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                AI-Powered Floor Advice
                <span className="text-primary"> Instantly</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Upload a photo of your flooring issue, ask your question, and get instant professional advice powered by AI with expert knowledge.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="group hover-scale"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                See How It Works
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>AI Expert Knowledge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Instant Responses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Coming Soon</span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <Upload className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Upload Your Photo</h3>
                    <p className="text-sm text-muted-foreground">Take a picture of your floor issue</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Ask Your Question</h3>
                    <p className="text-sm text-muted-foreground">Describe what you need help with</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-yellow-600" />
                  <div>
                    <h3 className="font-semibold">Get Instant AI Advice</h3>
                    <p className="text-sm text-muted-foreground">Receive expert recommendations instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
