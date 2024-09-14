import React from 'react'
import { Awards } from "./data/constants"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Achievements() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
            <div className="container px-4 md:px-6 space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Awards & Achievements</h2>
                    <p className="text-lg md:text-xl">
                        Recognizing my dedication and expertise in the industry.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Awards.map((data, index)=>(
                        <Card className="bg-black" key={index}>
                            <CardHeader className="flex flex-row space-x-3">
                            {data.icon}
                            <CardTitle className="text-white">{data.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                            <p className="text-white">{data.data}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}