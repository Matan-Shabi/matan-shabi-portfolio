"use client"

import WhatsAppLogo from "./whatsapp-logo"

interface WhatsAppButtonProps {
    phoneNumber: string
    message?: string
    className?: string
}

export default function WhatsAppButton({
                                           phoneNumber,
                                           message = "Hello, I'd like to connect with you!",
                                           className = "",
                                       }: WhatsAppButtonProps) {
    // Remove any non-numeric characters from the phone number
    const formattedNumber = phoneNumber.replace(/\D/g, "")

    const handleClick = () => {
        // Create WhatsApp URL with phone number and pre-filled message
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank")
    }

    return (
        <button
            onClick={handleClick}
            className={`flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${className}`}
            aria-label="Contact via WhatsApp"
            title="Contact me on WhatsApp"
        >
            <WhatsAppLogo className="w-5 h-5 md:w-6 md:h-6" />
        </button>
    )
}
