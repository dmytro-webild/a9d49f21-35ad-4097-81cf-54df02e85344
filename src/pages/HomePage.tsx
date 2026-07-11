import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import PricingHighlightedCards from '@/components/sections/pricing/PricingHighlightedCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Subscription Lawn Care"
      title="Lawn Care That Fits Your Life"
      description="Subscribe to professional lawn maintenance delivered monthly. No contracts, no surprises—just a healthier lawn."
      primaryButton={{
        text: "Start Your Free Consultation",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Plans",
        href: "#pricing",
      }}
      items={[
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3GMdm7yk6wEN7W9hhWl6vUrowgd/uploaded-1783785580227-3m2sd2nr.jpg?_wi=1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/black-electric-car-driving-rural-road-bellingen-countryside_1308-191075.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Why Choose Amerigrass?"
      descriptions={[
        "We take the stress out of lawn care. Our subscription model ensures your lawn is always in top condition without you lifting a finger.",
        "Our team of professionals uses the best tools and techniques to guarantee reliable, consistent results for residential and commercial clients.",
        "No contracts and transparent pricing means you only pay for what you need. It is professional maintenance designed to fit your busy schedule.",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesMediaCards
      tag="Our Services"
      title="Everything Your Lawn Needs"
      description="Comprehensive monthly maintenance plans designed for a perfect lawn year-round."
      items={[
        {
          title: "Unlimited Mowing",
          description: "Professional weekly or bi-weekly mowing service.",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-gardening-composition_23-2148128654.jpg",
        },
        {
          title: "Weed Control",
          description: "Strategic treatments to keep your lawn pristine.",
          imageSrc: "http://img.b2bpic.net/free-photo/gardening-beautiful-spring-flowers-with-garden-supplies_169016-1828.jpg",
        },
        {
          title: "Easy Scheduling",
          description: "Manage your service dates through our simple dashboard.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-male-using-tablet-outdoors_23-2148640385.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services-bento" data-section="services-bento">
    <SectionErrorBoundary name="services-bento">
          <FeaturesImageBento
      tag="Our Work"
      title="Precision and Care"
      description="See the results of our professional lawn maintenance services in action. We service all of Central Florida and Tampa."
      items={[
        {
          title: "Healthy Growth",
          description: "Lush vibrant green grass.",
          imageSrc: "http://img.b2bpic.net/free-photo/sunlight-sunny-land-scenic-weather_1127-2333.jpg",
        },
        {
          title: "Expert Team",
          description: "Professional care guaranteed.",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-gardener-trimming-hedge-yard_342744-537.jpg",
        },
        {
          title: "Curb Appeal",
          description: "Better looking homes.",
          imageSrc: "http://img.b2bpic.net/free-photo/hotel-building-ho-chi-minh-vietnam_1262-3238.jpg",
        },
        {
          title: "Precision Edging",
          description: "Crisp borders every time.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-gardener-cutting-pine-branches_23-2148396752.jpg",
        },
        {
          title: "Top Equipment",
          description: "Maintained and reliable.",
          imageSrc: "http://img.b2bpic.net/free-photo/arranged-boots-with-instruments-garden_23-2148028901.jpg",
        },
        {
          title: "Lawn Aeration",
          description: "Deep soil nourishment.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-gardener-cutting-plants-with-pruner-greenhouse-woman-working-garden-cropped-shot-gardening-job-concept_74855-12777.jpg",
        },
        {
          title: "Garden Beauty",
          description: "Flowers and foliage care.",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-beautiful-colorful-flowers-field_181624-7045.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>


  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Happy Homeowners"
      title="What Our Clients Say"
      description="Join our community of satisfied homeowners."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Homeowner",
          quote: "Amerigrass saved me hours every week. My lawn looks incredible!",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-finding-out-she-s-expecting-going-be-mother_23-2150167530.jpg",
        },
        {
          name: "Mike D.",
          role: "Homeowner",
          quote: "Reliable and professional. Worth every penny for the subscription.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-clapping-hands-isolated-studio_1303-30130.jpg",
        },
        {
          name: "Elena R.",
          role: "Homeowner",
          quote: "Great service, transparent pricing. Very happy with the team.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-expressive-woman-with-blurred-background_1154-222.jpg",
        },
        {
          name: "David W.",
          role: "Homeowner",
          quote: "My lawn has never looked better. Amazing attention to detail.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-correcting-grammar-mistakes_23-2150171372.jpg",
        },
        {
          name: "Linda P.",
          role: "Homeowner",
          quote: "Hassle-free lawn care is exactly what I needed for my busy schedule.",
          imageSrc: "http://img.b2bpic.net/free-photo/love-concept-with-happy-couple-spending-time-together_23-2149068853.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Common Questions"
      title="Need Help?"
      description="Answers to common questions about our subscription service."
      items={[
        {
          question: "Are there any hidden costs?",
          answer: "No. Our pricing is transparent and clearly outlined in our subscription tiers.",
        },
        {
          question: "Can I cancel anytime?",
          answer: "Yes, we offer a no-contract policy. You are free to cancel at any time.",
        },
        {
          question: "How do I schedule my service?",
          answer: "We provide a simple digital dashboard to manage all your scheduling needs.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Start Your Service"
      text="Call us at 321-371-1673 or email amerigrasscfl@gmail.com for a free quote or sign up today online."
      primaryButton={{
        text: "Call Now",
        href: "tel:3213711673",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:amerigrasscfl@gmail.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
