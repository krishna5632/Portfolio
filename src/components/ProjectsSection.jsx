import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const projectsRef = useRef([]);

  const projects = [
    {
      role: "Founder & Lead Developer",
      title: "NIT-C HUB",
      desc: "Developed a student community platform that connects students, alumni, and faculty with resource sharing, doubt discussion forums, campus updates, personalized profiles, and collaborative learning features to strengthen engagement across institutes",
      tech: "Javascript | React.js | Tailwind | MongoDB | Node.js | Gsap",
      image: project1,
      live: "https://www.nitchub.in/"
    },
    {
      role: "Lead Backend Developer & Frontend Contributor",
      title: "Shipment.com",
      desc: "Designed and developed a role-based logistics optimization platform with secure authentication, warehouse and dealer dashboards, shipment and truck management, shipment–truck matching algorithms, booking workflows, live tracking, and comprehensive analytics with CO₂ and cost-saving metrics.",
      tech: "React.js | Tailwind | MongoDB | Node.js | Javascript | Gsap",
      image: project2,
      live: "https://shipment-frontend-one.vercel.app/"
    },
    {
      role: "Frontend Contributor",
      title: "Prithvi'25",
      desc: "Contributed to the development and deployment of Prithvi ’25, the annual civil engineering fest website of NIT Calicut, collaborating with the tech and design teams to build a seamless, interactive, and user-friendly event platform.",
      tech: "Javascript | Next.js | Gsap | Tailwind ",
      image: project3,
      live: "https://www.prithvi25.in/"
    }
  ];

  useEffect(() => {
    projectsRef.current.forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 py-20">

      <h2 className="text-3xl font-bold mb-10 w-full max-w-6xl font-cinematic">
        Some Things I've Built
      </h2>

      <div className="space-y-20 w-full max-w-6xl">
        {projects.map((p, i) => (
          <div
            key={i}
            ref={(el) => (projectsRef.current[i] = el)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center border border-black/10 rounded-xl p-5"
          >
            {/* IMAGE */}
            <div className="rounded-lg overflow-hidden w-full">
              <img
                src={p.image}
                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg"
                alt={p.title}
              />
            </div>

            {/* TEXT */}
            <div className="space-y-4">
              <p className="text-sm text-gray-400 font-cinematic">{p.role}</p>

              <h3 className="text-2xl font-bold font-cinematic">{p.title}</h3>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                {p.desc}
              </p>

              <p className="text-sm text-gray-500 break-words">
                {p.tech}
              </p>

              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition font-cinematic text-sm sm:text-base"
              >
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
