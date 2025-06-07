
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "Most consultations are answered within 2 hours during business hours. Our Project Package includes priority support with responses typically within 30 minutes."
    },
    {
      question: "What types of flooring issues can you help with?",
      answer: "We help with all types of flooring including hardwood, laminate, tile, carpet, vinyl, and more. Common issues include damage assessment, installation questions, material selection, and maintenance advice."
    },
    {
      question: "Are your experts really qualified?",
      answer: "Yes! Our team includes licensed contractors, certified flooring installers, and industry professionals with 10+ years of experience. All experts are thoroughly vetted and continuously trained."
    },
    {
      question: "What if I'm not satisfied with the advice?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with our consultation, we'll refund your payment in full, no questions asked."
    },
    {
      question: "Can I get help with DIY projects?",
      answer: "Absolutely! We love helping DIY enthusiasts. We'll provide step-by-step guidance, tool recommendations, and tips to help you complete your project successfully."
    },
    {
      question: "Do you recommend specific products or brands?",
      answer: "Yes, we provide unbiased product recommendations based on your specific needs, budget, and preferences. We're not affiliated with any manufacturers, so our advice is always objective."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about FloorGuru
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
