// Created by add_section_from_catalog (HeroOverlay).

import React from 'react';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroOverlay
        secondaryButton={{"text":"Call 321-371-1673","href":"tel:321-371-1673"}}
        description="Unlimited Mowing | Professional Edging | Weed Control | Reliable Scheduling. Starting Rates from just $45/month for standard lawns. Regular Rate: $60/month."
        title="WHY CHOOSE AMERIGRASS?"
        imageSrc="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=2070"
        tag="Premium Lawn Care Subscription"
        textAnimation="slide-up"
        primaryButton={{"text":"Sign Up Today","href":"#contact"}}
      />
    </div>
  );
}
