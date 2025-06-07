
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
      answer: "Our AI provides instant responses! Depending on your plan, you'll get standard instant responses with the free plan, fast responses with Plus, or fastest priority responses with Pro - all delivered in seconds, not hours."
    },
    {
      question: "What types of flooring issues can the AI help with?",
      answer: "Our AI is trained on expert knowledge for all types of flooring including hardwood, laminate, tile, carpet, vinyl, and more. It can help with damage assessment, installation questions, material selection, maintenance advice, and cost estimates."
    },
    {
      question: "How does the AI have expert knowledge?",
      answer: "Our AI is trained on decades of professional flooring expertise, industry best practices, product specifications, and real-world solutions from certified contractors and flooring specialists. It combines this knowledge to provide instant, professional-grade advice."
    },
    {
      question: "What if I'm not satisfied with the AI advice?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with our AI-powered consultations, we'll refund your payment in full, no questions asked."
    },
    {
      question: "Can the AI help with DIY projects?",
      answer: "Absolutely! Our AI excels at helping DIY enthusiasts. It provides step-by-step guidance, tool recommendations, safety tips, and troubleshooting advice to help you complete your flooring project successfully."
    },
    {
      question: "Does the AI recommend specific products or brands?",
      answer: "Yes, our AI provides unbiased product recommendations based on your specific needs, budget, and preferences. The AI analyzes thousands of products and reviews to give you the best options for your situation."
    },
    {
      question: "How accurate is the AI photo analysis?",
      answer: "Our AI uses advanced computer vision trained specifically on flooring images. It can accurately identify flooring types, damage patterns, installation issues, and material characteristics from your photos to provide precise recommendations."
    },
    {
      question: "What's the difference between response times?",
      answer: "All plans get instant AI responses, but Plus and Pro plans get priority processing for faster analysis of complex images and questions, plus access to more advanced AI features and detailed reports."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about FloorGuru's AI-powered advice
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
