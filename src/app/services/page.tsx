import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Globe, Layout, LockKeyhole } from "lucide-react"

// Service data
const services = [
  {
    icon: <Globe className="h-10 w-10 text-brand-teal" />,
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing services including SEO, content marketing, social media management, and PPC advertising to drive traffic, boost engagement, and grow your online presence.",
    features: [
      "Search Engine Optimization (SEO)",
      "Content Marketing Strategy",
      "Social Media Management",
      "Pay-Per-Click Advertising",
      "Email Marketing Campaigns",
      "Analytics and Reporting"
    ],
    link: "/services/digital-marketing"
  },
  {
    icon: <Code className="h-10 w-10 text-brand-teal" />,
    title: "Web Development",
    description: "Custom website development that combines stunning design with powerful functionality. Our expert team creates responsive, user-friendly websites that drive conversions and enhance your brand's digital footprint.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Progressive Web Applications",
      "CMS Implementation",
      "API Development & Integration",
      "Website Maintenance & Support"
    ],
    link: "/services/web-development"
  },
  {
    icon: <Layout className="h-10 w-10 text-brand-teal" />,
    title: "UI/UX Design",
    description: "Create seamless user experiences with our expert UI/UX design services. We focus on designing interfaces that not only look great but also perform exceptionally, enhancing user engagement and satisfaction.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Interface Design",
      "User Testing & Feedback",
      "Responsive Design",
      "Design System Creation"
    ],
    link: "/services/ui-ux-design"
  },
  {
    icon: <LockKeyhole className="h-10 w-10 text-brand-teal" />,
    title: "Branding",
  description: "Elevate your brand identity with our comprehensive branding services. We help businesses build a memorable and impactful presence across all platforms.",
  features: [
    "Logo Design & Brand Identity",
    "Brand Strategy Development",
    "Visual and Verbal Brand Guidelines",
    "Rebranding Services",
    "Market Positioning",
    "Brand Storytelling & Messaging"
    ],
    link: "/services/Branding"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-600 mb-8">
              Unlock your success with our premier digital marketing services and IT solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-16">
            {services.map((service, i) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="space-y-6">
                  <div className="inline-block p-3 bg-gray-50 rounded-lg">{service.icon}</div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-brand-teal rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-4 bg-brand-teal hover:bg-brand-teal/90 text-white">
                    <Link href={service.link} className="inline-flex items-center">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Card className="border-none shadow-md h-full bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="h-full flex items-center justify-center p-12">
                    <div className="h-64 w-64 flex items-center justify-center rounded-full bg-gray-100">
                      {service.icon}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your project and find out how our services can help your business grow.
            </p>
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
