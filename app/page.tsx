'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronRight, Pencil, Code, Megaphone, GraduationCap, ArrowRight, Sun, Moon, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    content: "The course structure and content quality exceeded my expectations. I went from beginner to confident developer in months.",
    avatar: "https://ui.shadcn.com/placeholder.svg?height=40&width=40"
  },
  {
    name: "Michael Chen",
    role: "UI/UX Designer",
    content: "The practical projects and real-world applications helped me build a strong portfolio. Highly recommended!",
    avatar: "https://ui.shadcn.com/placeholder.svg?height=40&width=40"
  },
  {
    name: "Emily Rodriguez",
    role: "Cloud Architect",
    content: "The instructors are industry experts who provide invaluable insights. Best investment in my career growth.",
    avatar: "https://ui.shadcn.com/placeholder.svg?height=40&width=40"
  }
]

const courseCategories = [
  { 
    title: 'UI/UX Design', 
    icon: Pencil, 
    color: 'from-[#EC4899] to-pink-600',
    students: '15K+'
  },
  { 
    title: 'Web Development', 
    icon: Code, 
    color: 'from-[#8B5CF6] to-violet-600',
    students: '20K+'
  },
  { 
    title: 'Digital Marketing', 
    icon: Megaphone, 
    color: 'from-[#06B6D4] to-cyan-600',
    students: '12K+'
  },
  { 
    title: 'Practical Learning', 
    icon: GraduationCap, 
    color: 'from-[#F97316] to-orange-600',
    students: '18K+'
  },
]

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isWhyOpen, setIsWhyOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold">Innovate</span>
                <span className="text-2xl font-bold text-[#F97316]">X</span>
                <span className="text-2xl font-bold">Tech</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">Home</a>
              <div className="relative group">
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors flex items-center">
                  Courses
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
                </a>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">UI/UX Design</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Web Development</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Digital Marketing</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Practical Learning</a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors flex items-center">
                  Why Innovate X Tech?
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
                </a>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About Us</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Blog</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Career Services</a>
                  </div>
                </div>
              </div>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link 
                href="/sign-in" 
                className="text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/sign-up" 
                className="bg-[#8B5CF6] text-white px-4 py-2 rounded-md hover:bg-[#7C3AED] transition-colors"
              >
                Sign Up
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 shadow-md"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">Home</a>
                <div>
                  <button onClick={() => setIsCoursesOpen(!isCoursesOpen)} className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">
                    Courses
                    <ChevronRight className={`w-4 h-4 ml-1 transform transition-transform ${isCoursesOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isCoursesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">UI/UX Design</a>
                      <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">Web Development</a>
                      <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">Digital Marketing</a>
                      <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">Practical Learning</a>
                    </div>
                  )}
                </div>
                <div>
                  <button onClick={() => setIsWhyOpen(!isWhyOpen)} className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">
                    Why Innovate X Tech?
                    <ChevronRight className={`w-4 h-4 ml-1 transform transition-transform ${isWhyOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isWhyOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">About Us</a>
                      <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">Blog</a>
                      <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">Career Services</a>
                    </div>
                  )}
                </div>
                <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] transition-colors">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-50" />
        <div className="container mx-auto px-4 pt-32 pb-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Investing in{' '}
                <span className="text-gray-900 dark:text-gray-100">Knowledge</span> and{' '}
                <span className="text-[#F97316]">Your Future</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                Our e-learning programs have been developed to be a vehicle
                of delivering multimedia learning solutions for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full px-8 h-12 text-lg"
                >
                  Contact
                </Button>
                <div className="flex gap-8 items-center">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
                    <div className="text-gray-600 dark:text-gray-300">Career Courses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">1M+</div>
                    <div className="text-gray-600 dark:text-gray-300">Our Students</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">175K Assisted Students</span>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#8B5CF6] to-purple-400 p-1">
                <img
                  src="/learning illustration.jpg"
                  alt="Learning illustration"
                  className="w-full rounded-2xl bg-transparent"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Browse Top Essential Career Courses</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive selection of professional courses designed to accelerate your career growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden group cursor-pointer h-full bg-white dark:bg-gray-700 transition-colors duration-300">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="p-6"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{category.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{category.students} Students</p>
                    <div className="flex items-center text-[#8B5CF6] font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2  group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What Our Students Say</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from our community of learners who have transformed their careers through our courses
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Avatar>
                    <AvatarImage src={testimonials[activeTestimonial].avatar} />
                    <AvatarFallback>
                      {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonials[activeTestimonial].name}</div>
                    <div className="text-gray-600 dark:text-gray-300">{testimonials[activeTestimonial].role}</div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#8B5CF6] text-[#8B5CF6]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg italic">"{testimonials[activeTestimonial].content}"</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-[#8B5CF6]' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              At InnovateXTech, we're passionate about empowering individuals with cutting-edge skills for the digital age.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://ui.shadcn.com/placeholder.svg?height=400&width=600"
                alt="Our team"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Innovators in Tech Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're a team of industry experts, educators, and tech enthusiasts dedicated to bridging the gap between traditional education and the rapidly evolving tech industry.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our mission is to provide accessible, high-quality tech education that prepares learners for real-world challenges and opportunities in the digital landscape.
              </p>
              <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">Learn More About Us</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach to Education */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Approach to Education</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We believe in a holistic approach that combines theoretical knowledge with practical skills, fostering both job-readiness and self-reliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-purple-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Job-Ready Skills</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our curriculum is designed in collaboration with industry leaders to ensure you gain the most relevant and in-demand skills.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Hands-on projects mirroring real-world scenarios</li>
                <li>Industry-standard tools and technologies</li>
                <li>Soft skills development for workplace success</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-orange-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Self-Reliance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We empower you to become a self-sufficient learner and problem-solver, ready to tackle any challenge in your tech career.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Critical thinking and problem-solving focus</li>
                <li>Adaptive learning techniques</li>
                <li>Continuous learning mindset cultivation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">InnovateXTech</h4>
              <p className="text-gray-400">Empowering the next generation of tech innovators.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}