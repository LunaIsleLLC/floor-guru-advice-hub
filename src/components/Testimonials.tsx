
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      content: "FloorGuru saved me thousands! I was about to replace my entire hardwood floor, but their expert identified it just needed refinishing. The advice was spot-on.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Mike Rodriguez",
      role: "Property Manager",
      content: "I manage 50+ rental properties and FloorGuru has become my go-to for quick flooring assessments. Fast, reliable, and always accurate.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Chen",
      role: "First-time Home Buyer",
      content: "As someone with zero experience, FloorGuru's experts walked me through everything. The photo analysis was incredibly detailed and helpful.",
      rating: 5,
      avatar: "EC"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied homeowners and professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover-scale">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
