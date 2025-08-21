import Navbar from "@/components/shared/navbar";
import Hero from "./hero/hero";
import { SelectedWorks } from "./selected-works/selected-works";

const LandingPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <SelectedWorks/>
    </div>
  );
};

export default LandingPage;
