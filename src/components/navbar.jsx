import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    const navItemsEls = navRef.current.querySelectorAll(".nav-item");
    if (navItemsEls && navItemsEls.length) {
      gsap.from(navItemsEls, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.4,
        ease: "power3.out",
      });
    }
  }, []);

  const navItems = [
    { label: "HOME", target: "#home" },
    { label: "PROJECTS", target: "#projects" },
    { label: "SKILLS", target: "#skills" },
    { label: "CONTACT", target: "#contact" },
  ];

  const scrollToSection = (target) => {
    gsap.to(window, {
      duration: 0.7,     // fast scroll
      scrollTo: target,
      ease: "power4.out",
    });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/70 border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <button
          onClick={() => scrollToSection("#home")}
          className="text-2xl font-bold tracking-widest text-black font-cinematic hover:opacity-80 transition"
        >
          KRISHNA
        </button>

        <ul className="hidden md:flex gap-10 text-black text-sm tracking-widest font-cinematic">
          {navItems.map((item, i) => (
            <li key={i} className="nav-item relative cursor-pointer">
              <button
                onClick={() => scrollToSection(item.target)}
                className="text-black hover:opacity-70 transition"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/14DzW9kcM62KJw3znFdhVXAM48COBzPZy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 border border-black/40 text-black text-sm hover:bg-black hover:text-white transition font-cinematic cursor-pointer text-center"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black text-xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white text-black px-6 py-5 space-y-4 font-cinematic">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                scrollToSection(item.target);
                setOpen(false);
              }}
              className="nav-item block text-sm tracking-widest"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
