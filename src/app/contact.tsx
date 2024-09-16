import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="bg-[#141414] text-white py-10">
      <div className="mx-auto flex flex-col space-y-2 w-4/5">
        <h2 className="text-3xl md:text-5xl font-medium mx-auto">Get in Touch</h2>
        
        <div className="lg:flex lg:flex-row py-10 justify-around">
          <div className=''>
            <form className="rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-xl font-medium mb-2">
                  Your Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  // placeholder="Enter your name"
                  className="w-full rounded-md border-input text-white bg-transparent px-3 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  // placeholder="Enter your email"
                  className="w-full rounded-md border-input text-white bg-transparent px-3 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  // placeholder="Enter your message"
                  className="w-full rounded-md border-input text-white bg-transparent px-3 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-md bg-[#141414] border-2 border-white px-4 py-2 text-sm font-medium shadow hover:bg-black transition ease-in-out duration-200"
              >
                Submit
              </Button>
            </form>
          </div>

          <div className="hidden lg:block border-2 border-r h-96 mx-6 border-white" />

          <div className="pt-10 lg:pt-0 space-y-6 self-center">
            <div className="flex items-center gap-4">
              <LocateIcon className="w-6 h-6" />
              <div>
                <p className='font-bold'>SANGHVI INVESTMENT</p>
                <p>Near Luhar Pol, Manek Chowk</p>
                <p>Ahmedabad - 380015</p>
                <p>Gujarat, India</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <PhoneIcon className="w-6 h-6" />
              <span>+91 989 816 4035</span>
            </div>
            <div className="flex items-center gap-4">
              <MailIcon className="w-6 h-6" />
              <span>chetancsanghvi@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function FacebookIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  
  
  function LocateIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="2" x2="5" y1="12" y2="12" />
        <line x1="19" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="5" />
        <line x1="12" x2="12" y1="19" y2="22" />
        <circle cx="12" cy="12" r="7" />
      </svg>
    )
  }
  
  
  function MailIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function PhoneIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }