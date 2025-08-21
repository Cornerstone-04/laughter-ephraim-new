import { ArrowRight } from "lucide-react";
import Gallery from "./gallery";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="mt-12 sm:mt-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <h1
            className="
              uppercase font-semibold
              text-4xl xs:text-5xl sm:text-6xl md:text-8xl
              leading-[100%] -tracking-[4%]
              mb-3 sm:mb-4
            "
          >
            LAUGHTER EPHRAIM
          </h1>

          <p
            className="
              text-[#454545]
              text-base sm:text-lg md:text-xl
              leading-[100%] -tracking-[4%]
              max-w-[38rem] sm:max-w-[42rem]
              mb-5 sm:mb-6
            "
          >
            I am an AMVCA-nominated film editor with a passion to create
            stories. With 6 years in the film industry, I have developed a love
            for bringing stories to life with precision and creativity.
          </p>

          <Button
            variant="primary"
            rounded
            className="
              h-12 sm:h-14
              text-sm sm:text-base
              w-full sm:w-auto
              px-5 sm:px-6
              flex items-center justify-center gap-2.5
            "
            aria-label="Get in touch"
          >
            Get in touch <ArrowRight className="size-4 sm:size-5" />
          </Button>
        </div>
      </div>

      {/* Space before gallery on mobile, a bit more on larger screens */}
      <div className="mt-8 sm:mt-10">
        <Gallery />
      </div>
    </section>
  );
};

export default Hero;
