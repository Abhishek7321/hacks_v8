import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, PenTool, Star, Palette, Megaphone, Layers, Globe } from "lucide-react"
import { FileSearch } from "lucide-react"

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground mb-10">
        Your privacy is important to us. Learn how we collect, use, and protect your personal information.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-muted-foreground">
            We collect personal information you provide to us when contacting or working with us, including your name, email, and project details.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
          <p className="text-muted-foreground">
            We use your information to deliver our services, communicate with you, and improve our offerings.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
          <p className="text-muted-foreground">
            We do not sell or rent your information. We only share it with trusted partners involved in delivering your services.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
          <p className="text-muted-foreground">
            You have the right to access, correct, or delete your personal information. Contact us to make a request.
          </p>
        </div>
      </div>
    </section>
  );
}
