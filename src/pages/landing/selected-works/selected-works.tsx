import works from "@/data/selected-works.json";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const SelectedWorks = () => {
  // Grid behavior: 1 column on mobile; 3 columns from md+. By spanning 2 columns for items
  // at positions 1, 4, and 6 (0,3,5 indexes), those cards appear wider than their row-mates.
  // This mimics an asymmetric grid where featured items take more horizontal space.
  return (
    <section className="p-16 w-full">
      <div className="w-full max-w-[1072px] mx-auto grid gap-y-16">
        <div className="flex justify-between items-end">
          <header className="flex flex-col gap-1">
            <div className="flex items-end justify-start gap-2.5">
              <h1 className="text-5xl font-semibold leading-[100%] -tracking-[3%]">
                Selected Works
              </h1>
              <h4 className="text-lg text-[#5A5874] leading-[100%] -tracking-[3%] font-medium px-2 pt-1 pb-1.5">
                2020 - 2025
              </h4>
            </div>
            <p className="w-full max-w-lg text-lg text-[#454545] leading-[100%] -tracking-[3%] font-medium">
              Get an inside look at the edits, stories, and moments that shaped
              each frame. Dive into my world of cinematic storytelling.
            </p>
          </header>
          <Button
            variant={"secondary"}
            className="h-14 w-fit flex items-center justify-center gap-2"
          >
            See all works <ArrowRight />
          </Button>
        </div>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {works.map((item, idx) => {
              const isFeatured = idx === 0 || idx === 3 || idx === 5; // 1st, 4th, 6th
              const isCapped = idx === 1 || idx === 2 || idx === 3; // 2nd, 3rd, 4th -> max 400px on desktop

              return (
                <li
                  key={`${item.title}-${idx}`}
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-[#e8e8e8] dark:border-[#2a2a2a] bg-white dark:bg-[#1b1b1b]",
                    isFeatured ? "md:col-span-2" : "md:col-span-1",
                    // Cap width for 2,3,4 on desktop and center them
                    isCapped ? "md:max-w-[400px] md:w-full md:mx-auto" : "",
                  ].join(" ")}
                >
                  <a
                    href={item.link || "#"}
                    className="block h-full w-full"
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noreferrer" : undefined}
                  >
                    {/* Media / thumbnail */}
                    <div
                      className={[
                        "w-full bg-[#f3f3f3] dark:bg-[#111] overflow-hidden",
                        "aspect-[16/9]",
                        isFeatured ? "md:aspect-[21/9]" : "",
                        isCapped ? "md:h-auto" : "h-[400px]",
                      ].join(" ")}
                    >
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-sm text-[#888]">
                          No image provided
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#5A5874]">
                          {item.type}
                        </span>
                        <span className="text-xs font-medium text-[#7a7a7a]">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold leading-tight -tracking-[2%]">
                        {item.title}
                      </h3>
                      {item.brands && (
                        <p className="text-sm md:text-base text-[#454545] dark:text-[#cfcfcf] -tracking-[2%]">
                          {item.brands}
                        </p>
                      )}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mx-auto flex items-center justify-center gap-4">
          <Button
            variant={"primary"}
            className="h-14 w-fit px-8 py-4 text-base flex items-center justify-center gap-2"
          >
            Start new project
          </Button>
          <Button
            variant={"secondary"}
            className="h-14 w-fit px-8 py-4 text-base flex items-center justify-center gap-2"
          >
            See all works <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
