import Navbar from "@/components/shared/navbar";
import Hero from "./hero/hero";
import { SelectedWorks } from "./selected-works/selected-works";
import { FavouriteQuote } from "./quote/favourite-quote";

const LandingPage = () => {
  return (
    <div className="relative grid grid-cols-1 gap-y-[40px]">
      <Navbar />
      <Hero />
      <SelectedWorks/>
      <FavouriteQuote/>
    </div>
  );
};

export default LandingPage;
