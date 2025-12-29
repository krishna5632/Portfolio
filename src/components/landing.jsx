import { useEffect, useRef } from "react";
import gsap from "gsap";
import kImg from "../assets/k.jpeg";
import { Github, Linkedin } from "lucide-react";

const LandingSection = () => {
  const sectionRef = useRef(null);
  const developerRef = useRef(null);

  const playDecrypt = (el, finalText, duration = 700) => {
    if (!el) return;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let start = null;

    const frame = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const reveal = Math.floor(progress * finalText.length);

      el.textContent = finalText
        .split("")
        .map((c, i) =>
          i < reveal
            ? finalText[i]
            : chars[Math.floor(Math.random() * chars.length)]
        )
        .join("");

      if (progress < 1) requestAnimationFrame(frame);
      else el.textContent = finalText;
    };

    requestAnimationFrame(frame);
  };

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.3,
      ease: "power4.out",
    });

    const fadeItems = sectionRef.current?.querySelectorAll(".fade-item");
    if (fadeItems?.length) {
      gsap.from(fadeItems, {
        opacity: 0,
        y: 25,
        stagger: 0.2,
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
      });
    }

    setTimeout(() => {
      playDecrypt(developerRef.current, "Developer");
    }, 900);
  }, []);

  return (
    <section className="min-h-screen w-full bg-white relative flex justify-center items-center px-4 sm:px-6 pt-24">
      <div
        ref={sectionRef}
        className="relative max-w-5xl w-full bg-white border border-black/10 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 shadow-xl"
      >

        {/* LEFT */}
        <div className="flex-1 text-black space-y-3 fade-item">

          <p className="text-base sm:text-xl text-gray-700 font-cinematic">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-cinematic break-words leading-tight">
            KRISHNA SINGH.
          </h1>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-400 font-cinematic leading-snug break-words">
            I am a{" "}
            <span
              ref={developerRef}
              onMouseEnter={() => playDecrypt(developerRef.current, "Developer")}
              className="text-black inline-block font-mono tracking-wide cursor-pointer"
            >
              Developer
            </span>
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-lg break-words">
            I am a student at <span className=" font-semibold">NIT Calicut</span>,
            pursuing Civil Engineering. I build web applications, explore AI/ML,
            and love solving real-world problems through technology.
          </p>

          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            Learn more about me at:
          </p>

          <div className="flex items-center gap-4 sm:gap-5 mt-3">

            <a
              href="https://github.com/krishna5632"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 border border-black/40 rounded-full flex justify-center items-center hover:bg-black hover:text-white transition"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-singh-4a0a1929a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 border border-black/40 rounded-md flex justify-center items-center hover:bg-blue-600 hover:text-white transition"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://drive.google.com/file/d/14DzW9kcM62KJw3znFdhVXAM48COBzPZy/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition font-cinematic text-center text-sm sm:text-base"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center items-center fade-item">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg aspect-[4/5]">
            <img
              src={kImg}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
              alt="KRISHNA"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LandingSection;
