import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Plans",
    "href": "#pricing"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Services Bento",
    "href": "#services-bento"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="AMERIGRASS"
      ctaButton={{
        text: "Get Quote",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="AMERIGRASS"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Service",
          items: [
            {
              label: "Plans",
              href: "#pricing",
            },
            {
              label: "Support",
              href: "#contact",
            },
          ],
        },
      ]}
      copyright="© 2024 Amerigrass. Licensed & Insured."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
      imageSrc="https://storage.googleapis.com/webild/users/user_3GMdm7yk6wEN7W9hhWl6vUrowgd/uploaded-1783785580227-3m2sd2nr.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
