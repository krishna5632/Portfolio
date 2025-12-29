export default function SkillsSection() {
  return (
    <section className="w-full bg-white px-6 py-20 flex justify-center">
      <div className="max-w-6xl w-full">

        {/* ================= LANGUAGES ================= */}
        <h2 className="text-2xl font-bold font-cinematic mb-6">
          Languages I Speak
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {[
            
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          ].map((i, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={i.icon} className="w-12 h-12" />
              <p className="text-gray-700 mt-2">{i.name}</p>
            </div>
          ))}
        </div>


        {/* ================= FRAMEWORKS ================= */}
        <h2 className="text-2xl font-bold font-cinematic mb-6">
          Frameworks and Databases I Like
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
          {[
            
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          ].map((i, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={i.icon} className="w-12 h-12" />
              <p className="text-gray-700 mt-2 text-center">{i.name}</p>
            </div>
          ))}
        </div>


        {/* ================= LIBRARIES ================= */}
        <h2 className="text-2xl font-bold font-cinematic mb-6">
          Libraries & Services I Use
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/1261/1261163.png" },
            { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
           
          ].map((i, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={i.icon} className="w-12 h-12" />
              <p className="text-gray-700 mt-2 text-center">{i.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
