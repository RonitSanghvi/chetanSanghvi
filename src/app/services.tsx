import { Solutions } from "./data/constants";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#141414]">
      <div className="container px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-lg md:text-xl">
            Discover our comprehensive financial solutions tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Solutions.map((data, index) => (
            <Card key={index} className="hover:scale-105 bg-[#272727] transition duration-200 ease-in">
              <CardHeader>
                <CardTitle className="text-white">{data.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">{data.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
