export default function HeroImage() {
  return (
    <div className="relative overflow-hidden">
      <img
        src="bg-intro-mobile.svg"
        alt=""
        className="absolute w-full landscape:hidden"
      />
      <img
        src="bg-intro-desktop.svg"
        alt=""
        className="absolute w-full hidden landscape:block scale-[1.6] left-3/4 -translate-x-1/2"
      />
      <img
        src="image-mockups.png"
        alt=""
        className="w-[50em] absolute bottom-0 left-1/2 -translate-x-1/2 landscape:left-2/3 landscape:-translate-x-1/2"
      />
    </div>
  );
}
