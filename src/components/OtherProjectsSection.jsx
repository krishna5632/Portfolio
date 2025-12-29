import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function OtherProjectsSection() {
  const [showMore, setShowMore] = useState(false);

  const projects = [
        {
      title: "WhatsApp Chat Analyzer",
      desc: "Developed a WhatsApp Chat Analyzer using Python and ML to extract insights like top senders, frequent words, emojis, links, and visualize chat activity trends with interactive plots.",
      tech: " Python | Matplotlib |  Pandas |Seaborn",
      link: "https://github.com/krishna5632/WHATSAPP-CHAT-ANALYZER"
    },

    {
      title: "Flight Route Optimization System",
      desc: "Built a Flight Route Optimization System with a CustomTkinter GUI that finds the best routes based on cost, time, or distance using Dijkstra’s algorithm, supports multi-stop flights, and visualizes routes on an interactive Folium map.",
      tech: " Python | CustomTkinter | Folium | Dijkstra's Algorithm",
      link: "#"
    },



  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 font-cinematic">
        Other Projects
      </h2>

      {/* GRID with more spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {visibleProjects.map((p, i) => (
          <div
            key={i}
            className="space-y-2 relative p-5 border rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 border border-black rounded-md hover:bg-black hover:text-white transition font-cinematic flex items-center gap-1"
              >
                Visit
                <ExternalLink size={14} />
              </a>
            </div>

            <h3 className="text-xl font-bold font-cinematic">
              {p.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {p.desc}
            </p>

            <p className="text-sm text-gray-500 font-cinematic mt-2">
              {p.tech}
            </p>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {projects.length > 3 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 border border-black rounded-md font-cinematic hover:bg-black hover:text-white transition"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
