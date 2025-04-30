import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: 'Who can participate in DEVMATCH?',
      answer: 'DEVMATCH is open to developers, designers, and tech enthusiasts of all skill levels. Whether you\'re a seasoned professional or just starting your coding journey, everyone is welcome to join. Participants must be at least 18 years old or have parental consent.'
    },
    {
      question: 'Do I need to have a team to register?',
      answer: 'No, you can register as an individual and form a team during the hackathon. We\'ll have team formation activities to help solo participants find teammates. Teams can have up to 4 members, but you\'re also welcome to work alone if you prefer.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, participation in DEVMATCH is completely free. We believe in making innovation accessible to everyone. However, registration is required and spots are limited, so be sure to secure your place early.'
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'For in-person participants: Bring your laptop, charger, any hardware you plan to use, and personal items for comfort during the 48-hour event. For virtual participants: Ensure you have a stable internet connection and the necessary software installed for your project.'
    },
    {
      question: 'Will there be food and accommodation?',
      answer: 'Yes, for in-person participants, meals and snacks will be provided throughout the event. However, accommodation is not included, though we have partnered with nearby hotels to offer discounted rates for participants traveling from out of town.'
    },
    {
      question: 'Do I retain the intellectual property rights to my project?',
      answer: 'Yes, you retain all rights to your project. However, to be eligible for prizes, your project must be submitted with an open-source license allowing others to view and learn from your code.'
    },
    {
      question: 'Can I start working on my project before the hackathon?',
      answer: 'No, all coding and design work must start during the hackathon. You can brainstorm ideas and plan your approach beforehand, but implementation should begin only after the official start time. Pre-existing code is not allowed, except for freely available libraries and frameworks.'
    },
    {
      question: 'Is this hackathon only for experienced developers?',
      answer: 'Not at all! DEVMATCH welcomes participants of all skill levels. We have designated tracks and challenges suitable for beginners, and our mentors will be available throughout the event to provide guidance and support.'
    },
    {
      question: 'How are projects judged?',
      answer: 'Projects will be evaluated based on innovation, technical complexity, design, practicality, and adherence to the chosen track. Each team will have the opportunity to present their project to a panel of judges, who will score according to these criteria.'
    },
    {
      question: 'Will there be mentors available during the hackathon?',
      answer: 'Absolutely! We have a team of experienced mentors from various tech backgrounds who will be available throughout the event to provide guidance, answer questions, and help you overcome challenges.'
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="faq" className="section-container">
      <h2 className="section-title">Frequently Asked Questions</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="gem-card overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-orbitron font-bold">{faq.question}</h3>
                <span>
                  {expandedIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-crystal-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-crystal-blue" />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  expandedIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300 border-t border-space-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 gem-card p-6 text-center">
          <h3 className="text-xl font-orbitron font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Reach out to our team and we'll be happy to help with any additional questions.
          </p>
          <a href="mailto:info@devmatch.io" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;