// Created by add_section_from_catalog (AboutMediaOverlay).

import React from 'react';
import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <AboutMediaOverlay
        tag="About Us"
        imageSrc="https://storage.googleapis.com/webild/users/user_3GMdm7yk6wEN7W9hhWl6vUrowgd/uploaded-1784354061887-i4otaucg.png"
        description="We take the stress out of lawn care. Our subscription model ensures your lawn is always in top condition without you lifting a finger. Our team of professionals uses the best tools and techniques to guarantee reliable, consistent results for residential and commercial clients."
        title="Why Choose Amerigrass?"
        textAnimation="fade-blur"
      />
    </div>
  );
}
