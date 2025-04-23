import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowUpRight, CheckCircle2, Code, Globe, Layout, LockKeyhole, MessageSquareHeart } from "lucide-react"
import { link } from "fs"

// Service data
const services = [
  {
    icon: <Globe className="h-8 w-8 text-brand-teal" />,
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing services.",
    link: "/services/digital-marketing"
  },
  {
    icon: <Code className="h-8 w-8 text-brand-teal" />,
    title: "Web Development",
    description: "Custom website development that combines stunning design with powerful functionality.",
    link: "/services/web-development"
  },
  {
    icon: <Layout className="h-8 w-8 text-brand-teal" />,
    title: "UI/UX Design",
    description: "Create seamless user experiences with our expert UI/UX design services.",
    link: "/services/ui-ux-design"
  },
  {
    icon: <LockKeyhole className="h-8 w-8 text-brand-teal" />,
    title: "Branding",
    description: "Build a strong brand identity that resonates with your audience and sets you apart.",
    link: "/services/Branding"
  }
]

// Benefits data
const benefits = [
  "Customized digital solutions for your business needs",
  "Expert team with 5+ years of experience",
  "Proven results and client success stories",
  "Affordable pricing with high-quality deliverables",
  "Ongoing support and maintenance",
  "Quick turnaround time"
]

// Testimonials data
const testimonials = [
  {
    content: "Working with this team was a game-changer for our business. Their digital marketing services boosted our online presence and helped us connect with our target audience more effectively.",
    author: "Rahul Sharma",
    position: "Marketing Director"
  },
  {
    content: "The front-end development services provided were exceptional. Our website now looks stunning and operates flawlessly across all devices. Highly recommended!",
    author: "Simran Kaur",
    position: "CEO, TechStart"
  },
  {
    content: "Our new website's UI/UX has exceeded all expectations. The team transformed our vision into a sleek, user-friendly platform that our customers love.",
    author: "Aditi Negi",
    position: "Product Owner"
  }
]

// Projects/Portfolio data
const projects = [
  {
    title: "3D Portfolio Website",
    client: "Richa Goyal",
    image: "/hacks_v5_images/3D_Portfolio.png",
    category: "Web Design",
    link: "https://bruno-simon.com",
  },
  {
    title: "Car Booking App",
    client: "Kunal Bansal",
    image: "/hacks_v5_images/Car_booking.png",
    category: "App Design"

  },
  {
    title: "E-commerce Solution",
    client: "Devon Lane",
    image: "/hacks_v5_images/E-Comm.jpg.avif",
    category: "Web Development"
  }
]

// Stats data
const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "80+", label: "Happy Clients" },
  { value: "35+", label: "Team Members" },
  { value: "18+", label: "Awards Won" }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Take Your <span className="gradient-text">Brand</span> to New Heights
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                At Hacks4U, we combine tech expertise with creativity to deliver premium digital marketing services and IT solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <CheckCircle2 className="text-brand-teal h-5 w-5" />
                <span className="text-sm">Over 1k+ projects completed successfully</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="hacks_v5_images/hero_section.png"
                  alt="Hacks4U Digital Solutions"
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg max-w-[200px] hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Here Innovations</p>
                    <p className="text-xs text-gray-500">Meets Execution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Premium Services
            </h2>
            <p className="text-gray-600">
              Unlock your success with our premier digital marketing services and IT solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-none shadow-sm">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={service.link}
                    className="group inline-flex items-center text-brand-teal hover:text-brand-teal/80 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden">
                <video
                  src="hacks_v5_images/video-2.mp4"
                  width={600}
                  height={400}
                  className="object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/30 to-transparent"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-brand-dark">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                Dedicated to Providing High-quality Solutions
              </h2>
              <p className="text-gray-600">
                Welcome to Hacks4U! We are a leading digital marketing company dedicated to providing comprehensive services that drive success and growth for your business.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand-teal h-5 w-5 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white mt-4">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Recent Projects
            </h2>
            <p className="text-gray-600">
              Explore our best recently completed projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm uppercase tracking-wider mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-80">Client: {project.client}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-5 w-5 text-brand-dark" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Started With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-xl mx-auto">
              <TabsTrigger value="0">Rahul Sharma</TabsTrigger>
              <TabsTrigger value="1">Simran</TabsTrigger>
              <TabsTrigger value="2">Aditi Negi</TabsTrigger>
            </TabsList>
            {testimonials.map((testimonial, index) => (
              <TabsContent key={index} value={index.toString()} className="mt-6">
                <Card className="border-none shadow-sm max-w-4xl mx-auto">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <MessageSquareHeart className="h-12 w-12 text-brand-teal mb-4" />
                      <p className="text-xl font-medium leading-8 mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="mt-2">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-gray-300 max-w-xl">
                Let's work together to take your brand to new heights. Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-brand-teal">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
