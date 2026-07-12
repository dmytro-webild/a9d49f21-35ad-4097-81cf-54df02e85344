// Created by add_section_from_catalog (HeroOverlay).

import React from 'react';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroOverlay
        secondaryButton={{"text":"Call 407-498-6541","href":"tel:407-498-6541"}}
        description="Unlimited Mowing | Professional Edging | Weed Control | Reliable Scheduling. Starting Rates from just $45/month for standard lawns. Regular Rate: $60/month."
        title="WHY CHOOSE AMERIGRASS?"
        imageSrc="https://storage.googleapis.com/webild/users/user_3GMdm7yk6wEN7W9hhWl6vUrowgd/uploaded-1783798086871-wv8aa2nd.png"
        tag="Premium Lawn Care Subscription"
        textAnimation="slide-up"
        primaryButton={{"text":"Sign Up Today","href":"https://square.link/u/igNAU7iJ"}}
      />
    </div>
  );
}
