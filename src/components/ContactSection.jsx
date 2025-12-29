export default function ContactSection() {
  return (
    <section className="w-full px-6 py-20 bg-white flex flex-col items-center">
      
      {/* MAIN WRAPPER */}
      <div className="max-w-6xl w-full">
        
        {/* TITLE */}
        <h2 className="text-3xl font-bold font-cinematic">
          Reach me at
        </h2>

        {/* SUB TEXT */}
        <p className="mt-3 text-gray-600">
          Send me an email at
        </p>

        {/* EMAIL */}
        <p className="text-2xl font-bold tracking-wide ">
          ikrishnasingh10@gmail.com
        </p>

        {/* FUN DESCRIPTION */}
        <p className="text-gray-600 mt-1">
          and let's build something awesome together.
        </p>

        {/* DIVIDER */}
        <hr className="mt-10 border-gray-300" />

        {/* FOOTER TEXT */}
        <div className="text-sm text-gray-600 mt-4">
          Copyright © 2025 — All rights reserved by 
          <span className="font-cinematic"> Krishna Singh</span>
        </div>
      </div>
    </section>
  );
}
