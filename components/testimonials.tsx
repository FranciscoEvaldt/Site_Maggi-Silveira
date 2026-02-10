"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Morrison & Associates handled our corporate restructuring with exceptional skill and attention to detail. Their expertise saved our company millions and positioned us for future growth.",
    author: "Sarah Chen",
    title: "CEO, TechCorp Industries",
  },
  {
    quote:
      "When I faced a complex estate dispute, the team at Morrison & Associates provided not just legal expertise, but genuine care and support. They exceeded every expectation.",
    author: "Robert Williams",
    title: "Private Client",
  },
  {
    quote:
      "Their litigation team is second to none. They took on our case when others wouldn't and secured a landmark verdict that set industry precedent.",
    author: "Michael Torres",
    title: "General Counsel, Apex Manufacturing",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">What Our Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Quote className="h-16 w-16 text-accent/30 absolute -top-4 -left-4" />
            <blockquote className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed text-center mb-8 relative z-10">
              {testimonials[currentIndex].quote}
            </blockquote>
          </div>

          <div className="text-center mb-12">
            <p className="font-semibold text-primary-foreground">{testimonials[currentIndex].author}</p>
            <p className="text-sm text-primary-foreground/70">{testimonials[currentIndex].title}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
