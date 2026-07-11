import { motion } from "motion/react"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"

export default function PricingSection() {
  return (
    <section data-webild-section="pricing" id="pricing" className="relative w-full py-12 bg-background">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up">
          <div className="max-w-2xl mx-auto bg-[#4a8b2c] rounded-3xl p-2 relative shadow-xl">
            <div className="border-2 border-dashed border-white/70 rounded-2xl p-8 text-center text-white relative overflow-hidden">
              
              {/* Ribbon */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-[80%]">
                <div className="bg-[#ffcc00] text-[#003300] font-bold text-xl md:text-2xl py-2 px-8 inline-block relative shadow-md">
                  SUMMER SPECIAL!
                  <div className="absolute top-0 -left-4 w-0 h-0 border-y-[22px] border-y-transparent border-r-[16px] border-r-[#ffcc00]"></div>
                  <div className="absolute top-0 -right-4 w-0 h-0 border-y-[22px] border-y-transparent border-l-[16px] border-l-[#ffcc00]"></div>
                </div>
              </div>

              <div className="mt-16 mb-4 flex items-center justify-center gap-4">
                <div className="h-[1px] bg-white/50 flex-1 max-w-[100px]"></div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-wide">STARTING AT</h3>
                <div className="h-[1px] bg-white/50 flex-1 max-w-[100px]"></div>
              </div>

              <div className="flex items-baseline justify-center gap-2 mb-6">
                <span className="text-5xl md:text-7xl font-bold">$</span>
                <span className="text-8xl md:text-9xl font-bold leading-none">45</span>
                <span className="text-3xl md:text-4xl font-bold">/MONTH</span>
              </div>

              <div className="bg-[#ffcc00] text-[#003300] font-bold text-xl md:text-2xl py-2 px-6 inline-block mb-6 shadow-md">
                INSTEAD OF <span className="relative inline-block">
                  $60
                  <span className="absolute top-1/2 left-0 w-full h-1 bg-red-600 -translate-y-1/2 -rotate-12"></span>
                </span>/MONTH
              </div>

              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-bold tracking-wide">SUBSCRIPTION BASED.</p>
                <p className="text-lg md:text-xl italic font-serif text-[#ffcc00]">Simple. Affordable. Consistent.</p>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}