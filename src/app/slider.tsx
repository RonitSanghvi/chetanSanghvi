import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Initial Opening",
    username: "2008",
    img: "/memories/img-1.jpg",
  },
  {
    name: "John",
    username: "2016",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "2018",
    img: "/memories/img-3.JPG",
  },
  {
    name: "Diwali",
    username: "2024",
    img: "/memories/img-4.jpg",
  },
  {
    name: "James",
    username: "@james",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
}: {
  img: string;
  name: string;
  username: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      {/* <div className="flex flex-row items-center gap-2"> */}
        <img className="w-80 h-52 rounded-md" width="1" height="1" alt="" src={img} />
        <div className="flex justify-between pt-2">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      {/* </div> */}
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="w-full bg-black">
        <div className="relative flex w-3/4 mx-auto flex-col items-center justify-center overflow-hidden bg-black rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
            ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
            ))}
        </Marquee> */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
        </div>
    </div>
  );
}
