import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, PenTool, Star, Palette, Megaphone, Layers, Globe } from "lucide-react"
import { FileSearch } from "lucide-react"

import React from "react";

export default function FAQPage() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-10">
        Find answers to common questions about our services, process, and support.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">What services do you offer?</h2>
          <p className="text-muted-foreground">
            We offer a range of services including digital marketing, web development, UI/UX design, branding, and cybersecurity solutions.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I get started?</h2>
          <p className="text-muted-foreground">
            Simply contact us through our website or schedule a free consultation. We'll guide you through every step.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">What industries do you work with?</h2>
          <p className="text-muted-foreground">
            We work with businesses across technology, finance, healthcare, retail, and many other industries.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How much do your services cost?</h2>
          <p className="text-muted-foreground">
            Pricing depends on the scope and complexity of the project. Contact us for a customized quote.
          </p>
        </div>
      </div>
    </section>
  );
}
