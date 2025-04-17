import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ShieldCheck, FileSearch, Eye, Lock, BookOpen, BarChart } from "lucide-react"

// Service features data
const features = [
  {
    title: "Security Assessment & Auditing",
    description: "Comprehensive evaluation of your digital infrastructure to identify vulnerabilities and security gaps.",
    icon: <FileSearch className="h-6 w-6 text-brand-teal" />
  },
  {
    title: "Data Protection Strategies",
    description: "Customized solutions to safeguard sensitive information and ensure compliance with data protection regulations.",
    icon: <ShieldCheck className="h-6 w-6 text-brand-teal" />
  },
  {
    title: "Threat Monitoring & Intelligence",
    description: "24/7 monitoring of your systems to detect and respond to potential security threats in real-time.",
    icon: <Eye className="h-6 w-6 text-brand-teal" />
  },
  {
    title: "Security Training & Awareness",
    description: "Educational programs to train your team on security best practices and threat recognition.",
    icon: <BookOpen className="h-6 w-6 text-brand-teal" />
  },
  {
    title: "Incident Response Planning",
    description: "Development of strategic response plans to minimize damage and recovery time in case of security breaches.",
    icon: <BarChart className="h-6 w-6 text-brand-teal" />
  },
  {
    title: "Compliance Management",
    description: "Ensuring your systems and processes meet industry security standards and regulatory requirements.",
    icon: <Lock className="h-6 w-6 text-brand-teal" />
  }
]

// Common threats
const commonThreats = [
  {
    name: "Ransomware Attacks",
    description: "Malicious software that encrypts data and demands payment for decryption keys."
  },
  {
    name: "Phishing Campaigns",
    description: "Fraudulent attempts to obtain sensitive information by disguising as trustworthy entities."
  },
  {
    name: "Data Breaches",
    description: "Unauthorized access to sensitive, protected, or confidential data."
  },
  {
    name: "Insider Threats",
    description: "Security threats that originate from within the organization."
  },
  {
    name: "DDoS Attacks",
    description: "Attempts to disrupt normal traffic by overwhelming systems with a flood of requests."
  },
  {
    name: "Zero-day Exploits",
    description: "Attacks that target previously unknown vulnerabilities before they can be patched."
  }
]

// Security process steps
const securityProcess = [
  {
    step: "1",
    title: "Assessment",
    description: "Comprehensive evaluation of your current security posture, systems, and potential vulnerabilities."
  },
  {
    step: "2",
    title: "Strategy",
    description: "Development of a tailored security strategy aligned with your business needs and risk profile."
  },
  {
    step: "3",
    title: "Implementation",
    description: "Deployment of security solutions, controls, and protocols to protect your digital assets."
  },
  {
    step: "4",
    title: "Monitoring",
    description: "Continuous surveillance of systems and networks to detect and respond to potential threats."
  },
  {
    step: "5",
    title: "Optimization",
    description: "Regular review and enhancement of security measures to address evolving threats and technologies."
  }
]

// Statistics
const securityStats = [
  { value: "60%", label: "of small businesses close within 6 months of a cyber attack" },
  { value: "$4.24M", label: "average cost of a data breach in 2023" },
  { value: "94%", label: "of malware is delivered via email" },
  { value: "300%", label: "increase in reported cyber crimes since 2020" }
]

export default function CyberSecurityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm mb-6">
                <Link href="/" className="text-gray-600 hover:text-brand-teal transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <Link href="/services" className="text-gray-600 hover:text-brand-teal transition-colors">Services</Link>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-brand-teal">Cyber Security</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Cyber Security Services</h1>
              <p className="text-lg text-gray-600">
                Protect your business from evolving digital threats with our comprehensive cyber security solutions designed for the modern enterprise.
              </p>
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contact?service=cybersecurity">Secure Your Business</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://placehold.co/800x600/120a32/fff"
                alt="Cyber Security Services"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-10 bg-brand-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityStats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <p className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cyber Security Services</h2>
            <p className="text-gray-600">
              We offer end-to-end security solutions to protect your digital assets, maintain business continuity, and safeguard your reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-sm h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-gray-50 p-3 inline-block rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Threats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Cyber Threats</h2>
            <p className="text-gray-600">
              Stay informed about the prevalent cyber threats that could impact your business operations and data security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonThreats.map((threat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-teal">
                <h3 className="text-xl font-semibold mb-2">{threat.name}</h3>
                <p className="text-gray-600">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why Choose Our Security Services?</h2>
              <p className="text-gray-600">
                We deliver proactive security solutions that adapt to evolving threats and provide peace of mind for your business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-brand-teal/10 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="h-4 w-4 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Security Team</h3>
                    <p className="text-gray-600">Our certified security professionals have extensive experience across various industries.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-teal/10 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="h-4 w-4 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Customized Security Solutions</h3>
                    <p className="text-gray-600">Tailored security strategies designed to address your specific business needs and risk profile.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-teal/10 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="h-4 w-4 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Proactive Approach</h3>
                    <p className="text-gray-600">We focus on prevention and early detection rather than just responding to security incidents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-teal/10 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="h-4 w-4 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold">24/7 Monitoring & Support</h3>
                    <p className="text-gray-600">Round-the-clock surveillance and rapid response to potential security incidents.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://placehold.co/600x500/48b899/fff"
                alt="Cyber Security Experts"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Security Process</h2>
            <p className="text-gray-600">
              We follow a structured approach to implement robust security measures that protect your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {securityProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
                  <div className="h-12 w-12 flex items-center justify-center bg-brand-teal text-white rounded-full text-lg font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{step.description}</p>
                </div>
                {index < securityProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance & Standards</h2>
            <p className="text-gray-600">
              Our security solutions help you achieve and maintain compliance with industry regulations and standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {["GDPR", "HIPAA", "PCI DSS", "ISO 27001", "NIST", "SOC 2"].map((standard, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold">{standard}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Get answers to common questions about our cyber security services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How often should we conduct security assessments?</h3>
              <p className="text-gray-600">
                We recommend conducting comprehensive security assessments at least annually, with additional assessments after significant system changes, mergers/acquisitions, or new regulatory requirements. Vulnerability scanning should be performed quarterly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What industries do you specialize in?</h3>
              <p className="text-gray-600">
                We have experience across various industries including finance, healthcare, e-commerce, manufacturing, and professional services. Our team understands the unique security challenges and compliance requirements of each sector.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How do you handle security incidents?</h3>
              <p className="text-gray-600">
                We follow a structured incident response process: identification, containment, eradication, recovery, and lessons learned. Our team provides 24/7 support to address security incidents promptly and minimize potential damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Business Today</h2>
            <p className="text-gray-300 mb-8">
              Don't wait for a security breach to take action. Contact us today to discuss how our cyber security services can safeguard your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contact?service=cybersecurity">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
