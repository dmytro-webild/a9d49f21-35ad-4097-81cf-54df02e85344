// Created by add_section_from_catalog (ContactSplitForm).

import React from 'react';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';

export default function ContactSection(): React.JSX.Element {
  return (
    <div data-webild-section="contact" data-section="contact" id="contact">
      <ContactSplitForm
        imageSrc="https://storage.googleapis.com/webild/users/user_3GMdm7yk6wEN7W9hhWl6vUrowgd/uploaded-1783797580612-sfro53pi.png"
        textarea={{"required":true,"placeholder":"How can we help you?","name":"message","rows":4}}
        textAnimation="fade-blur"
        buttonText="Submit"
        tag="Start Your Service"
        inputs={[{"name":"name","placeholder":"Your Name","required":true,"type":"text"},{"name":"email","required":true,"placeholder":"Your Email","type":"email"},{"type":"tel","placeholder":"Phone Number","required":false,"name":"phone"}]}
        title="Get a Free Quote Today"
        description="Call us at 321-371-1673 or email amerigrasscfl@gmail.com for a free quote or sign up today online."
      />
    </div>
  );
}
