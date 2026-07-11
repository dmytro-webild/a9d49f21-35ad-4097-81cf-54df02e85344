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
        imageSrc="https://storage.googleapis.com/webild/users/user_3GMdm7yk6wEN7W9hhWl6vUrowgd/uploaded-1783793401529-96xzuw2l.png"
        tag="Premium Lawn Care Subscription"
        textAnimation="slide-up"
        primaryButton={{"text":"Sign Up Today","href":"#contact"}}
      />
    </div>
  );
}
