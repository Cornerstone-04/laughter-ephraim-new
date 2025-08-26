import { Quote } from "lucide-react";

export const FavouriteQuote = () => {
  return (
    <section className="relative isolate overflow-hidden w-full min-h-screen flex items-center justify-center text-center">
      {/* AURORA BACKGROUND */}
      {/* <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#ffffff] via-[#FF4318] to-[#4F46E5]        
        "
      /> */}
      <div><img src="/gradient.png" alt="" /></div>

      <div className="mx-auto max-w-4xl px-6 sm:px-8 md:px-16 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Opening Quote */}
          <div className="">
            <Quote className="text-[#4F46E5] w-16 h-16 rotate-180" />
          </div>

          {/* Quote Text */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-white max-w-4xl">
            The essence of cinema is editing. It's the combination of what can
            be extraordinary images of people during emotional moments, or
            images in a general sense, put together in a kind of alchemy.
          </h2>

          {/* Closing Quote */}
          <div className="">
            <Quote className="text-[#4F46E5] w-16 h-16" />
          </div>
        </div>

        {/* Attribution */}
        <p className="text-xl md:text-2xl font-medium text-white mt-8">
          ~ Francis Ford Coppola
        </p>
      </div>
    </section>
  );
};
