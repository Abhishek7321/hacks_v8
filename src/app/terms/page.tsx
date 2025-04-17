import React from "react";

export default function TermsPage() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-muted-foreground mb-10">
        Please read these terms and conditions carefully before using our services.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-muted-foreground">
            These Terms govern your access to and use of our website and services. By using our services, you agree to these Terms.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Services</h2>
          <p className="text-muted-foreground">
            We provide marketing, development, design, and IT consulting services. Specific terms may apply to individual projects.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Payment</h2>
          <p className="text-muted-foreground">
            All services require a signed agreement. Payment terms will be outlined in individual contracts.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Liability</h2>
          <p className="text-muted-foreground">
            We are not liable for any damages arising from the use or inability to use our services beyond the fees paid to us.
          </p>
        </div>
      </div>
    </section>
  );
}
