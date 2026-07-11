import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBrand from "@/components/sections/hero/HeroBrand";
import PricingSimpleCards from "@/components/sections/pricing/PricingSimpleCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/signup" }}
      />
      
      <main className="flex-grow">
        <HeroBrand
          brand="Pricing"
          description="Simple, transparent pricing that grows with your business. No hidden fees, no surprises."
          primaryButton={{ text: "View Plans", href: "#plans" }}
          secondaryButton={{ text: "Contact Sales", href: "/contact" }}
          textAnimation="fade-blur"
        />

        <div id="plans">
          <PricingSimpleCards
            tag="Plans"
            title="Choose the right plan for you"
            description="Whether you're just starting out or scaling up, we have a plan that fits your needs."
            textAnimation="fade-blur"
            plans={[
              {
                tag: "Starter",
                price: "$0",
                description: "Perfect for individuals and small side projects.",
                features: [
                  "Up to 3 projects",
                  "Basic analytics",
                  "Community support",
                  "Standard integrations"
                ],
                primaryButton: { text: "Start for free", href: "/signup" }
              },
              {
                tag: "Pro",
                price: "$29",
                description: "Ideal for growing teams and professional creators.",
                features: [
                  "Unlimited projects",
                  "Advanced analytics dashboard",
                  "Priority email support",
                  "Custom domains",
                  "Team collaboration tools"
                ],
                primaryButton: { text: "Get Pro", href: "/signup" }
              },
              {
                tag: "Enterprise",
                price: "Custom",
                description: "For large organizations with complex requirements.",
                features: [
                  "Everything in Pro",
                  "Dedicated success manager",
                  "SSO & advanced security",
                  "Custom SLA",
                  "On-premise deployment options"
                ],
                primaryButton: { text: "Contact Sales", href: "/contact" }
              }
            ]}
          />
        </div>

        <FaqSimple
          tag="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about the product and billing."
          textAnimation="fade-blur"
          items={[
            {
              question: "Can I change my plan later?",
              answer: "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Prorated charges will be applied automatically."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards including Visa, Mastercard, and American Express. For Enterprise plans, we also support invoicing and wire transfers."
            },
            {
              question: "Do you offer a free trial for the Pro plan?",
              answer: "Yes, we offer a 14-day free trial on our Pro plan so you can test out all the premium features before committing."
            },
            {
              question: "What happens if I exceed my plan limits?",
              answer: "We'll notify you when you're approaching your limits. If you exceed them, your service won't be interrupted immediately, but we'll reach out to discuss upgrading to a plan that better suits your usage."
            }
          ]}
        />
      </main>

      <FooterSimple
        brand="Webild"
        copyright="© 2024 Webild Inc. All rights reserved."
        columns={[
          {
            title: "Product",
            items: [
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Changelog", href: "/changelog" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ]}
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}