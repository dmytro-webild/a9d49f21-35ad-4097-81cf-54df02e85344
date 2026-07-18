import React from 'react';
import ImageOrVideo from '@/components/ui/ImageOrVideo';

export default function ContactSection() {
  return (
    <section data-webild-section="contact" id="contact" className="py-24 bg-background">
      <div className="w-content-width mx-auto flex justify-center">
        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl">
          <ImageOrVideo 
            imageSrc="https://storage.googleapis.com/webild/users/user_3GMdm7yk6wEN7W9hhWl6vUrowgd/uploaded-1784343928035-3vdk2n1b.png"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}