"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    })

    // Reset form
    setFormData({ name: "", email: "", message: "" })

    // Clear status after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold mb-6 text-[#FF9900]">Send Me a Message</h3>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#0F1924]/80 border border-[#FF9900]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent transition-all duration-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#0F1924]/80 border border-[#FF9900]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent transition-all duration-300"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-[#0F1924]/80 border border-[#FF9900]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent resize-none transition-all duration-300"
          placeholder="Your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#FF9900] to-[#FF5757] hover:from-[#FF5757] hover:to-[#FF9900] text-black font-medium py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] shadow-lg"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={18} />
            <span>Send Message</span>
          </>
        )}
      </button>

      {submitStatus && (
        <div
          className={`mt-4 p-4 rounded-md ${
            submitStatus.success
              ? "bg-gradient-to-r from-green-900/30 to-green-800/30 text-green-300 border border-green-500/30"
              : "bg-gradient-to-r from-red-900/30 to-red-800/30 text-red-300 border border-red-500/30"
          } animate-fade-in`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  )
}
