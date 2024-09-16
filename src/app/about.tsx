import React from 'react'
import Link from "next/link"
import { Bio } from "./data/constants"
import BlurFade from "@/components/magicui/blur-fade";


export default function About() {
    return (
        <section
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#141414] to-black"
        >
            <BlurFade 
                className="container px-4 md:px-6 lg:px-16 grid gap-6 md:grid-cols-2"
                duration={1} delay={0.4} inView
            >
                <div>
                    <img
                    src="/profile.jpeg"
                    width="400"
                    height="400"
                    alt="About Image"
                    className="rounded-lg"
                    style={{ aspectRatio: "400/400", objectFit: "cover" }}
                    />
                </div>
                <div className="space-y-6 text-justify">
                    <h2 className="text-3xl md:text-5xl font-semibold">About Me</h2>
                    <p className="text-lg md:text-xl">
                    I am <b>{Bio.name}</b>, a financial advisor with over 35 years of experience in the industry. I specialize in
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
                    className="inline-flex h-10 items-center justify-center rounded-md border-white border-2 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#00a8e8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    >
                    Learn More
                    </Link>
                </div>
            </BlurFade>

            <div className="border-b w-4/5 border-white mx-auto my-14"></div>

            <BlurFade 
                duration={1} delay={0.4} inView
                className="flex flex-col space-y-6 items-center w-full"
            >
                <div className="mb-4">
                    <p className="text-xl lg:text-5xl tracking-widest font-semibold mb-2">SANGHVI INVESTMENT</p>
                    <p className="text-md lg:text-2xl">
                    A Legacy of Securing Future
                    </p>
                </div>
                
                <div className="w-4/5 text-justify font-extralight text-white">    
                    Established in 1988, Sanghvi Investments was founded with a clear mission: to provide long-term financial security for clients through Life Insurance Corporation (LIC) of India, the largest life insurance provider in the country, currently managing assets worth over $630 billion. From the outset, our focus was on offering comprehensive LIC policies tailored to meet the diverse needs of our clients, including solutions for young professionals, newborns, retirement planning, and protection against accidental injuries or loss of life.
                </div>
                <div className="w-4/5 text-justify font-extralight text-white">    
                    After achieving early success, Sanghvi Investments quickly expanded its offerings. In just a few short years, we launched a dedicated platform for investing in the Indian stock market, encompassing services such as stock buying, selling, market analysis, and future trend predictions for the NSE and BSE. Simultaneously, we introduced IPO investments, enabling our clients to participate in new growth opportunities.
                </div>
                <div className="w-4/5 text-justify font-extralight text-white">    
                    In 2000, we further broadened our portfolio by offering mutual fund investments, including options like Systematic Investment Plans (SIP) and lump sum investments. Today, Sanghvi Investments has facilitated millions of rupees in investments across a range of policies, stocks, and mutual funds. With the trust of hundreds of families, we continue to help clients plan and secure their financial futures, offering expert guidance tailored to their individual goals.
                </div>
            </BlurFade>
        </section>
    )
}