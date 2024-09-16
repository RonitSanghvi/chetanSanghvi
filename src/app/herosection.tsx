import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import Header from "./header";

export default function HeroSection() {
  return (
    <section className="w-full h-screen">
      <video
        className="absolute inset- w-full h-full object-cover blur-md"
        src="/video.mp4"
        loop
        autoPlay
        muted
        playsInline
      />
      <div className="bg-black/70 h-screen">
        <Header />
        <BlurFade delay={1} duration={1} inView className="flex items-center h-full">
          <div className="space-y-4 lg:w-3/4 pl-8 md:pl-14 lg:pl-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Secure Your Future with Expert Financial Guidance
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white">
              Get Start Today! Your financial success is our priority.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white"
                prefetch={false}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
