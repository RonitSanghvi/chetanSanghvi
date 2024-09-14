import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

export default function Header() {
  return (
    <BlurFade
      delay={0}
      duration={0.7}
      inView
      className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-b from-black/65 to-black/0 text-primary-foreground"
    >
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        {/* <BriefcaseIcon className="h-6 w-6" /> */}
        <span className="sr-only">Experienced Financial Advisor</span>
      </Link>
      <nav className="mx-auto flex gap-4 sm:gap-10">
        <Link href="#" className="text-sm lg:text-lg tracking-wider font-thin hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm lg:text-lg tracking-wider font-thin hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm lg:text-lg tracking-wider font-thin hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-sm lg:text-lg tracking-wider font-thin hover:underline underline-offset-4" prefetch={false}>
          Achievements
        </Link>
        <Link href="#" className="text-sm lg:text-lg tracking-wider font-thin hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </BlurFade>
  );
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
  
