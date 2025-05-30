"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  Code,
  Smartphone,
  Globe,
  TrendingUp,
  Palette,
  ImageIcon,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
} from "lucide-react"



export default function DigitalAgencyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleElements, setVisibleElements] = useState(new Set())

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices.",
      featured: true,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Apps",
      description: "Powerful web applications tailored to your business needs.",
      featured: true,
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns to grow your online presence.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Logo Design",
      description: "Memorable brand identities that make lasting impressions.",
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "Poster Design",
      description: "Eye-catching posters and marketing materials for your brand.",
    },
  ]

  const whyChooseUs = [
    "Expert team with 5+ years experience",
    "100% client satisfaction guarantee",
    "Modern technologies and best practices",
    "24/7 support and maintenance",
    "Fast delivery and competitive pricing",
    "Custom solutions for every business",
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Amazing work! They delivered our web app ahead of schedule and exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      text: "Professional team with incredible attention to detail. Our website looks fantastic!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "Best investment we made for our business. The mobile app they built is phenomenal.",
      rating: 5,
    },
  ]

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=400&width=600",
      description: "Modern e-commerce platform with advanced features",
    },
    {
      title: "Mobile Banking App",
      category: "mobile",
      tags: ["React Native", "Firebase", "Stripe"],
      image: "/placeholder.svg?height=400&width=600",
      description: "Secure banking application with biometric authentication",
    },
    {
      title: "SaaS Dashboard",
      category: "web",
      tags: ["Vue.js", "Python", "PostgreSQL"],
      image: "/placeholder.svg?height=400&width=600",
      description: "Analytics dashboard for business intelligence",
    },
    {
      title: "Brand Identity Package",
      category: "design",
      tags: ["Illustrator", "Photoshop", "Branding"],
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete brand identity with logo and guidelines",
    },
    {
      title: "Social Media Campaign",
      category: "marketing",
      tags: ["Facebook Ads", "Instagram", "Analytics"],
      image: "/placeholder.svg?height=400&width=600",
      description: "Viral marketing campaign that increased engagement by 300%",
    },
    {
      title: "Event Poster Series",
      category: "design",
      tags: ["Photoshop", "Typography", "Print"],
      image: "/placeholder.svg?height=400&width=600",
      description: "Eye-catching poster designs for music festival",
    },
    {
      title: "Fitness Tracking App",
      category: "mobile",
      tags: ["Flutter", "HealthKit", "AI"],
      image: "/placeholder.svg?height=400&width=600",
      description: "AI-powered fitness app with personalized workouts",
    },
    {
      title: "Restaurant Website",
      category: "web",
      tags: ["Next.js", "Sanity", "Stripe"],
      image: "/placeholder.svg?height=400&width=600",
      description: "Beautiful restaurant website with online ordering",
    },
    {
      title: "Corporate Rebrand",
      category: "design",
      tags: ["Brand Strategy", "Logo Design", "Guidelines"],
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete corporate rebranding for tech startup",
    },
  ]

  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "Design" },
    { id: "marketing", label: "Marketing" },
  ]

  const filteredPortfolio =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
<>



    
     

    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex gap-[10px] flex-row-reverse items-center justify-center">
              <h1 className="text-2xl font-bold h-[60px] hardware-accelerated  mt-[25px] "> MARKITFY</h1>
              <img src='logo.jpg' className="w-[50px]" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection("home")} className="nav-link hardware-accelerated">
                  Home
                </button>
                <button onClick={() => scrollToSection("services")} className="nav-link hardware-accelerated">
                  Services
                </button>
                <button onClick={() => scrollToSection("portfolio")} className="nav-link hardware-accelerated">
                  Portfolio
                </button>
                <button onClick={() => scrollToSection("testimonials")} className="nav-link hardware-accelerated">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection("contact")} className="nav-link hardware-accelerated">
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md animate-slide-down hardware-accelerated">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-base font-medium hover:text-cyan-400 transition-colors hardware-accelerated"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-base font-medium hover:text-cyan-400 transition-colors hardware-accelerated"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block px-3 py-2 text-base font-medium hover:text-cyan-400 transition-colors hardware-accelerated"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block px-3 py-2 text-base font-medium hover:text-cyan-400 transition-colors hardware-accelerated"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium hover:text-cyan-400 transition-colors hardware-accelerated"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>

        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up hardware-accelerated">
            We Build Stunning{" "}
            <span className="gradient-text animate-gradient-x hardware-accelerated">Websites & Web Apps</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200 hardware-accelerated">
            Transform your digital presence with cutting-edge web development, mobile apps, and creative design
            solutions.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="btn-gradient text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400 hardware-accelerated hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full animate-float hardware-accelerated"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float animation-delay-1000 hardware-accelerated"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full animate-float animation-delay-2000 hardware-accelerated"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has("services-header")
                ? "animate-fade-in-up hardware-accelerated"
                : "opacity-0 translate-y-10"
            }`}
            data-animate
            id="services-header"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`service-card bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  service.featured ? "ring-2 ring-cyan-500/30" : ""
                } ${visibleElements.has(`service-${index}`) ? "animate-slide-in-bottom hardware-accelerated" : "opacity-0 translate-y-10"}`}
                data-animate
                id={`service-${index}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`inline-flex p-3 rounded-lg mb-4 transition-all duration-300 ${
                      service.featured ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20" : "bg-gray-800"
                    }`}
                  >
                    <div
                      className={`${service.featured ? "text-cyan-400" : "text-gray-400"} animate-bounce-gentle hardware-accelerated`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                  {service.featured && (
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 animate-pulse hardware-accelerated">
                        Featured Service
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has("why-header") ? "animate-fade-in-up hardware-accelerated" : "opacity-0 translate-y-10"
            }`}
            data-animate
            id="why-header"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  visibleElements.has(`reason-${index}`)
                    ? "animate-slide-in-left hardware-accelerated"
                    : "opacity-0 -translate-x-10"
                }`}
                data-animate
                id={`reason-${index}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 animate-pulse hardware-accelerated" />
                <span className="text-gray-300">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has("portfolio-header")
                ? "animate-fade-in-up hardware-accelerated"
                : "opacity-0 translate-y-10"
            }`}
            data-animate
            id="portfolio-header"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our latest projects and see the magic we create for our clients.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hardware-accelerated ${
                    activeFilter === category.id
                      ? "btn-gradient text-white shadow-lg shadow-cyan-500/25"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className={`portfolio-item group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  visibleElements.has(`portfolio-${index}`)
                    ? "animate-zoom-in hardware-accelerated"
                    : "opacity-0 scale-95"
                }`}
                data-animate
                id={`portfolio-${index}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center space-x-4">
                      <button className="p-3 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 transform hover:scale-110 hardware-accelerated">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-3 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-400 hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-110 hardware-accelerated">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-cyan-400 border border-cyan-500/30">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hardware-accelerated"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-gradient-x opacity-20 hardware-accelerated"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="btn-gradient text-white px-8 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 hardware-accelerated">
              View More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has("testimonials-header")
                ? "animate-fade-in-up hardware-accelerated"
                : "opacity-0 translate-y-10"
            }`}
            data-animate
            id="testimonials-header"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300">Don't just take our word for it - hear from our satisfied clients.</p>
          </div>

          <div className="relative">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current animate-twinkle hardware-accelerated"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6 italic animate-fade-in hardware-accelerated">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="animate-slide-in-bottom hardware-accelerated">
                  <h4 className="text-xl font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-cyan-400">{testimonials[currentTestimonial].company}</p>
                </div>
              </CardContent>
            </Card>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300  hover:shadow-lg hardware-accelerated"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300  hover:shadow-lg hardware-accelerated"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-cyan-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has("contact-header")
                ? "animate-fade-in-up hardware-accelerated"
                : "opacity-0 translate-y-10"
            }`}
            data-animate
            id="contact-header"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Contact us today and let's bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-1000 ${
                visibleElements.has("contact-form")
                  ? "animate-slide-in-left hardware-accelerated"
                  : "opacity-0 -translate-x-10"
              }`}
              data-animate
              id="contact-form"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/30 transition-all duration-500">
                <CardContent className="p-8">
                  <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="46f52146-9254-4092-b088-d67ce2f8f356"></input>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <Input
                        name="Name"
                        required
                          type="text"
                          className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <Input
                        required
                        name="Email"
                          type="email"
                          className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <Input
                      required
                      name="Phone Number"
                        type="tel"
                        className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                      <select name="service" required className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-cyan-500 focus:outline-none transition-all duration-300">
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="web-apps">Web Apps</option>
                        <option value="mobile-apps">Mobile App Development</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="logo-design">Logo Design</option>
                        <option value="poster-design">Poster Design</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <Textarea
                      required
                      name="Message"
                        className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 min-h-[120px] transition-all duration-300"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button type="submit" className="w-full btn-gradient text-white py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 hardware-accelerated">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div
              className={`space-y-8 transition-all duration-1000 ${
                visibleElements.has("contact-info")
                  ? "animate-slide-in-right hardware-accelerated"
                  : "opacity-0 translate-x-10"
              }`}
              data-animate
              id="contact-info"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-all duration-300 hardware-accelerated">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white font-semibold">markitfy.india@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-all duration-300 hardware-accelerated">
                      <Phone className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-300">Phone</p>
                      <p className="text-white font-semibold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-all duration-300 hardware-accelerated">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-300">Address</p>
                      <p className="text-white font-semibold">123 Digital Street, Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-cyan-500/20 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hardware-accelerated"
                  >
                    <Facebook className="h-6 w-6 text-gray-400 hover:text-cyan-400" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-cyan-500/20 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hardware-accelerated"
                  >
                    <Twitter className="h-6 w-6 text-gray-400 hover:text-cyan-400" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-cyan-500/20 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hardware-accelerated"
                  >
                    <Instagram className="h-6 w-6 text-gray-400 hover:text-cyan-400" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-cyan-500/20 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hardware-accelerated"
                  >
                    <Linkedin className="h-6 w-6 text-gray-400 hover:text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">MARKITFY</h3>
              <p className="text-gray-300 mb-4 max-w-md">
                We're a digital agency specializing in web development, mobile apps, and creative design solutions. Let
                us help you build your digital future.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hardware-accelerated"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hardware-accelerated"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hardware-accelerated"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hardware-accelerated"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hardware-accelerated"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hardware-accelerated"
                  >
                    Web Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hardware-accelerated"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hardware-accelerated"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hardware-accelerated"
                  >
                    Design Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">markitfy.india@gmail.com</li>
                <li className="text-gray-300">+91 97180-39346</li>
                <li className="text-gray-300">
                  123 Digital Street
                  <br />
                  Tech City, TC 12345
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} MARKITFY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>

    </>
  )
}
