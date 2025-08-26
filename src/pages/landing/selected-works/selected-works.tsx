import works from "@/data/selected-works.json";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

export const SelectedWorks = () => {
  // Grid behavior: 1 column on mobile; 3 columns from md+. By spanning 2 columns for items
  // at positions 1, 4, and 6 (0,3,5 indexes), those cards appear wider than their row-mates.
  // This mimics an asymmetric grid where featured items take more horizontal space.
  return (
    <section className="w-full p-6 sm:p-8 md:p-16">
      <div className="w-full max-w-[1072px] mx-auto grid gap-y-10 md:gap-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <header className="flex flex-col gap-2 md:gap-1">
            <div className="flex flex-wrap items-end justify-start gap-2.5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[100%] -tracking-[3%]">
                Selected Works
              </h1>
              <h4 className="text-sm sm:text-base md:text-lg text-[#5A5874] leading-[100%] -tracking-[3%] font-medium px-2 pt-1 pb-1.5">
                2020 - 2025
              </h4>
            </div>
            <p className="w-full max-w-lg text-base md:text-lg text-[#454545] leading-normal -tracking-[.54px] font-medium">
              Get an inside look at the edits, stories, and moments that shaped
              each frame. Dive into my world of cinematic storytelling.
            </p>
          </header>

          {/* Desktop button (hidden on mobile) */}
          <Button
            variant={"secondary"}
            className="h-12 sm:h-14 w-full sm:w-fit flex items-center justify-center gap-2 md:inline-flex"
          >
            See all works <ArrowRight />
          </Button>

          {/* Mobile button (visible only below md) */}
          {/* <Button
            variant={"secondary"}
            className="h-12 w-full flex md:hidden items-center justify-center gap-2"
          >
            See all works <ArrowRight />
          </Button> */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-16">
          {works.map((item, idx) => {
            const isSeries = idx === 0 || idx === 3 || idx === 4;
            // const isFeatured = idx === 1 || idx === 2 || idx === 5; // kept for future use

            return (
              <div
                key={`${item.title}-${idx}`}
                className={[
                  "flex flex-col gap-4 md:gap-6 w-full",
                  isSeries ? "md:col-span-2" : "",
                ].join(" ")}
              >
                <div className="relative rounded-2xl w-full h-[400px] overflow-hidden group">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={[
                      "object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105",
                      isSeries && "object-top",
                      idx === 3 && "object-center!",
                      idx === 5 && "object-bottom",
                    ].join(" ")}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <Link
                      to={item.link}
                      className="flex items-center justify-center gap-2.5 h-14 w-fit font-medium px-8 py-4 bg-le-purple text-white rounded-full shadow-lg hover:bg-le-purple/80 transition hover:scale-105"
                    >
                      Watch Trailer{" "}
                      <ArrowRight className="inline size-[18px]" />
                    </Link>
                  </div>
                </div>

                <div>
                  <h1 className="flex gap-2 justify-start items-end mb-1">
                    <span className="font-semibold text-2xl sm:text-[26px] md:text-[28px] leading-[100%] -tracking-[3%] text-[#2A2936]">
                      {item.title}{" "}
                    </span>
                    <Badge className="py-[3px] px-1.5 rounded-full bg-[#DFDFDF] text-xs sm:text-sm font-medium text-[#636363] leading-[100%] -tracking-[3%]">
                      {item.type}
                    </Badge>
                  </h1>
                  <h3 className="flex justify-between items-end text-sm sm:text-base md:text-lg text-[#454545] leading-[100%] -tracking-[3%] font-medium">
                    <span className="truncate">{item.brands}</span>
                    <span>{item.year}</span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full">
          <Button
            variant={"primary"}
            className="h-12 sm:h-14 w-full sm:w-fit px-6 sm:px-8 py-3 sm:py-4 text-base flex items-center justify-center gap-2"
          >
            Start new project
          </Button>
          <Button
            variant={"secondary"}
            className="h-12 sm:h-14 w-full sm:w-fit px-6 sm:px-8 py-3 sm:py-4 text-base flex items-center justify-center gap-2"
          >
            See all works <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
