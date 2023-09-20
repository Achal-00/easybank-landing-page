import Contents from "./Contents";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <div className="bg-very-light-grey grid portrait:grid-rows-2 landscape:grid-cols-2">
      <HeroImage />
      <Contents />
    </div>
  );
}
