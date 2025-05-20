"use client"

import { useState } from "react"
import { UserPlus, Check } from "lucide-react"

interface ContactDetails {
    name: string
    phoneNumber: string
    email: string
    website: string
    linkedin: string
    jobTitle?: string
    company?: string
}

interface ContactDownloadButtonProps {
    contactDetails: ContactDetails
    className?: string
    variant?: "default" | "icon-only"
    iconSize?: number
}

export default function ContactDownloadButton({
                                                  contactDetails,
                                                  className = "",
                                                  variant = "default",
                                                  iconSize = 18,
                                              }: ContactDownloadButtonProps) {
    const [isSuccess, setIsSuccess] = useState(false)

    // Generate vCard content
    const generateVCard = () => {
        const { name, phoneNumber, email, website, linkedin, jobTitle, company } = contactDetails

        // Format according to vCard standard
        let vCard = "BEGIN:VCARD\n"
        vCard += "VERSION:3.0\n"
        vCard += `N:${name.split(" ").slice(1).join(" ")};${name.split(" ")[0]};;;\n`
        vCard += `FN:${name}\n`

        if (jobTitle) {
            vCard += `TITLE:${jobTitle}\n`
        }

        if (company) {
            vCard += `ORG:${company}\n`
        }

        vCard += `TEL;type=CELL:${phoneNumber}\n`
        vCard += `EMAIL:${email}\n`
        vCard += `URL:${website}\n`
        vCard += `URL;type=LINKEDIN:${linkedin}\n`
        vCard += "END:VCARD"

        return vCard
    }

    // Handle the download
    const handleDownload = () => {
        const vCard = generateVCard()
        const blob = new Blob([vCard], { type: "text/vcard" })
        const url = URL.createObjectURL(blob)

        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", `${contactDetails.name.replace(/\s+/g, "_")}.vcf`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Show success state
        setIsSuccess(true)
        setTimeout(() => setIsSuccess(false), 3000)
    }

    // Render icon-only variant (circular button)
    if (variant === "icon-only") {
        return (
            <button
                onClick={handleDownload}
                className={`flex items-center justify-center bg-gradient-to-r from-[#FF9900] to-[#FF5757] text-black p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${className}`}
                aria-label="Add contact to phone"
                title="Add contact to phone"
            >
                {isSuccess ? <Check size={iconSize} /> : <UserPlus size={iconSize} />}
            </button>
        )
    }

    // Render default variant (button with text)
    return (
        <button
            onClick={handleDownload}
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-all duration-300 w-full ${
                isSuccess ? "bg-green-600 text-white" : "bg-gradient-to-r from-[#FF9900] to-[#FF5757] text-black font-medium"
            } ${className}`}
            aria-label="Add contact to phone"
        >
            {isSuccess ? (
                <>
                    <Check size={iconSize} />
                    <span>Contact Saved!</span>
                </>
            ) : (
                <>
                    <UserPlus size={iconSize} />
                    <span>Add to Contacts</span>
                </>
            )}
        </button>
    )
}
