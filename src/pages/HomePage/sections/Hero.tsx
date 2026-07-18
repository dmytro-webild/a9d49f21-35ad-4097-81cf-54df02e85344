// Created by add_section_from_catalog (HeroBrand).

import React from 'react';
import HeroBrand from '@/components/sections/hero/HeroBrand';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBrand
        primaryButton={{"href":"https://square.link/u/igNAU7iJ","text":"Sign Up Today"}}
        description="Unlimited Mowing | Professional Edging | Weed Control | Reliable Scheduling. Starting Rates from just $45/month for standard lawns. Regular Rate: $60/month."
        textAnimation="slide-up"
        brand="AMERIGRASS"
        imageSrc="https://storage.googleapis.com/webild/users/user_3GMdm7yk6wEN7W9hhWl6vUrowgd/uploaded-1783798086871-wv8aa2nd.png"
        secondaryButton={{"text":"Call 407-498-6541","href":"tel:407-498-6541"}}
      />
    </div>
  );
}
