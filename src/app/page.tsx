
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-900 text-white">
      
      <section className="w-full h-screen bg-custom-image">
        <div className="bg-black/70 h-screen">
          <header className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-b from-black/65 to-black/15 text-primary-foreground">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
              <BriefcaseIcon className="h-6 w-6" />
              <span className="sr-only">Experienced Financial Advisor</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link href="#" className="text-sm lg:text-base font-medium hover:underline underline-offset-4" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm lg:text-base font-medium hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm lg:text-base font-medium hover:underline underline-offset-4" prefetch={false}>
                Services
              </Link>
              <Link href="#" className="text-sm lg:text-base font-medium hover:underline underline-offset-4" prefetch={false}>
                Achievements
              </Link>
              <Link href="#" className="text-sm lg:text-base font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
              </Link>
            </nav>
          </header>

          <div className="flex items-center h-full">
            <div className="space-y-4 lg:w-3/4 pl-8 md:pl-14 lg:pl-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Secure Your Future with Expert Financial Guidance</h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white">
                35 Years of Experience in LIC, Mutual Funds, and Share Market Investments
              </p>
              <div className="flex gap-4">
                {/* <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get a Consultation
                </Link> */}
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2">
          <div>
            <img
              src="/placeholder.svg"
              width="400"
              height="400"
              alt="About Image"
              className="rounded-lg"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-lg md:text-xl">
              I am a seasoned financial advisor with over 35 years of experience in the industry. I specialize in
              providing comprehensive financial solutions, including LIC policies, mutual funds, IPOs, and share market
              investments.
            </p>
            <p className="text-lg md:text-xl">
              Throughout my career, I have helped countless clients achieve their financial goals by offering
              personalized guidance and tailored strategies. My deep understanding of the market, coupled with my
              unwavering commitment to client success, has earned me a reputation as a trusted and reliable advisor.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#0077b6] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#00a8e8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover our comprehensive financial solutions tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <LigatureIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>LIC Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore our wide range of LIC policies to secure your future and protect your loved ones.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FoldersIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>Mutual Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diversify your investment portfolio with our expert-curated mutual fund options.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <StoreIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>Share Market</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlock the potential of the share market with our tailored investment strategies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <InfoIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>Financial Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive personalized financial guidance to achieve your long-term goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PiIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>IPOs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore the latest IPO opportunities and invest with confidence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <RecycleIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>Retirement Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Secure your golden years with our comprehensive retirement planning solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Awards & Achievements</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Recognizing my dedication and expertise in the industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <TrophyIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>Top Performing Advisor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Awarded the prestigious "Top Performing Advisor" title for three consecutive years.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MedalIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>LIC Achiever's Club</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Inducted into the exclusive LIC Achiever's Club for outstanding performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <StarIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>Client Satisfaction Award</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recognized for exceptional client satisfaction and service excellence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BriefcaseIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>Industry Leader</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Honored as an industry leader and invited to speak at prestigious financial conferences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BadgeIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>Certified Financial Planner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earned the prestigious Certified Financial Planner (CFP) designation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <HandshakeIcon className="w-8 h-8 text-[#0077b6]" />
                <CardTitle>Trusted Advisor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recognized by clients and peers as a trusted and reliable financial advisor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get in touch for personalized financial guidance and consultations.
            </p>
          </div>
          <div className="mx-auto max-w-md">
            <form className="grid gap-4">
              <Input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#0077b6]"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#0077b6]"
              />
              <Textarea
                placeholder="Message"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#0077b6]"
              />
              <Button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#0077b6] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#00a8e8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="w-full bg-[#0077b6] text-white py-6">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 Trusted Financial Advisor. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Awards
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BadgeIcon(props: any) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function FoldersIcon(props: any) {
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
      <path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" />
      <path d="M2 8v11a2 2 0 0 0 2 2h14" />
    </svg>
  )
}


function HandshakeIcon(props: any) {
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
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  )
}


function InfoIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LigatureIcon(props: any) {
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
      <path d="M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" />
      <path d="M6 12h4" />
      <path d="M14 12h2v8" />
      <path d="M6 20h4" />
      <path d="M14 20h4" />
    </svg>
  )
}


function MedalIcon(props: any) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  )
}


function PiIcon(props: any) {
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
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  )
}


function RecycleIcon(props: any) {
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
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  )
}


function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function StoreIcon(props: any) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}


function TrophyIcon(props: any) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}