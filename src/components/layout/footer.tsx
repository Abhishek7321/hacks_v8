'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { supabase, TABLES } from "@/lib/supabase"
import { useState } from "react"
import { toast } from "react-hot-toast"

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Branding", href: "/services/Branding" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/FAQ" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
]



export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState("") // Added state for email

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!email.trim() || !email.includes('@')) {
      toast.error("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    try {
      // Check if Supabase is properly configured
      if (!supabase) {
        throw new Error("Database not configured")
      }

      // Check if the email already exists in Supabase
      const { data: existingSubscribers, error: checkError } = await supabase
        .from(TABLES.SUBSCRIBERS)
        .select('email')
        .eq('email', email.trim())

      if (checkError) {
        throw checkError
      }

      if (existingSubscribers && existingSubscribers.length > 0) {
        toast.error("This email is already subscribed")
        setIsSubmitting(false)
        return
      }

      // Create a new subscriber
      const currentDate = new Date()
      const subscriber = {
        email: email.trim(),
        date: currentDate.toISOString(),
        created_at: currentDate.toISOString()
      }

      // Insert the subscriber into Supabase
      const { error } = await supabase
        .from(TABLES.SUBSCRIBERS)
        .insert(subscriber)

      if (error) {
        throw error
      }

      // Reset email field
      setEmail("")

      // Show success message
      toast.success("Thank you for subscribing to our newsletter!")
    } catch (error) {
      console.error("Error saving subscriber to Supabase:", error)
      if (error instanceof Error) {
        toast.error("Failed to subscribe. " + (error.message || "Please try again."))
      } else {
        toast.error("Failed to subscribe. Please try again.")
      }

      // Fallback to localStorage
      try {
        // Create a new subscriber for localStorage
        const newSubscriber = {
          id: Date.now().toString(),
          email: email.trim(),
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        }

        // Get existing subscribers from localStorage
        const existingSubscribersJSON = localStorage.getItem("subscribers")
        const existingSubscribers = existingSubscribersJSON
          ? JSON.parse(existingSubscribersJSON)
          : []

        // Check if email already exists in localStorage
        if (existingSubscribers.some((sub: { email: string }) => sub.email === email)) {
          toast.error("This email is already subscribed")
          return
        }

        // Add new subscriber to localStorage
        const updatedSubscribers = [...existingSubscribers, newSubscriber]
        localStorage.setItem("subscribers", JSON.stringify(updatedSubscribers))

        // Reset email field
        setEmail("")

        // Show success message
        toast.success("Thank you for subscribing to our newsletter! (Saved locally)")
      } catch (localError) {
        console.error("Error saving to localStorage:", localError)
        toast.error("Failed to subscribe to newsletter.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-teal">
                Hacks4U
              </span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              We combine tech expertise with creativity to deliver premium digital marketing services and IT solutions for your business.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/1AAjrkiQ1M/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-teal transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-teal transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/hacks4u._?igsh=MTh0aXN3NTY3a3N5aQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-teal transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/hacks4u-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-teal transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="font-medium text-lg">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-brand-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Subscribe to our newsletter</h3>
              <p className="text-sm text-gray-600">Stay updated with our latest news and offers.</p>
            </div>
            <form onSubmit={handleSubscribe} >
            <div className="flex w-full max-w-md gap-2">
              <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
              <Button
                  type="submit"
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
            </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Hacks4U. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-brand-teal transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-brand-teal transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
