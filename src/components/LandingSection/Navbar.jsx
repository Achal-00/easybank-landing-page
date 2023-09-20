import { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.querySelector(".overlay").classList.replace("hidden", "grid");
      document.querySelector(".menu").src = "icon-close.svg";
    } else {
      document.querySelector(".overlay").classList.replace("grid", "hidden");
      document.querySelector(".menu").src = "icon-hamburger.svg";
    }
  }, [menu]);

  return (
    <div className="p-[5%] landscape:px-[10%] landscape:py-[0%] relative z-50 bg-white">
      <div className="landscape:hidden flex items-center justify-between">
        <img src="logo.svg" alt="logo" />
        <img
          src="icon-hamburger.svg"
          alt="menu"
          onClick={() => setMenu((prev) => !prev)}
          className="menu"
        />
        <div className="absolute bg-white w-[90%] py-[2em] text-center gap-[1em] rounded-[0.3em] text-[120%] text-dark-blue shadow-2xl top-[12em] left-1/2 -translate-x-1/2 -translate-y-1/2 hidden overlay">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="hidden landscape:flex items-center justify-between">
        <img src="logo.svg" alt="logo" className="w-[10em]" />
        <div className="flex gap-[2em]">
          <p className="py-[5%] text-greyish-blue border-b-2 border-transparent nav-links hover:cursor-pointer">
            Home
          </p>
          <p className="py-[5%] text-greyish-blue border-b-2 border-transparent nav-links hover:cursor-pointer">
            About
          </p>
          <p className="py-[5%] text-greyish-blue border-b-2 border-transparent nav-links hover:cursor-pointer">
            Contact
          </p>
          <p className="py-[5%] text-greyish-blue border-b-2 border-transparent nav-links hover:cursor-pointer">
            Blog
          </p>
          <p className="py-[5%] text-greyish-blue border-b-2 border-transparent nav-links hover:cursor-pointer">
            Careers
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r from-lime-green to-bright-cyan text-white rounded-full py-[0.5em] px-[1.5em] hover:opacity-80">
            Request Invite
          </button>
        </div>
      </div>
    </div>
  );
}
