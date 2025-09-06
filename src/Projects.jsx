import project1 from "./assets/project.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";
const data = [
  { title: "DESIGN PORTFOLIO", tech: ["HTML", "CSS"], img: project1 },
  { title: "E-LEARNING LANDING PAGE", tech: ["HTML", "CSS"], img: project2 },
  { title: "TODO WEB APP", tech: ["HTML", "CSS", "JAVASCRIPT"], img: project3 },
  { title: "ENTERTAINMENT WEB APP", tech: ["HTML", "CSS", "JAVASCRIPT"], img: project4 },
  { title: "MEMORY GAME", tech: ["HTML", "CSS", "JAVASCRIPT"], img: project5 },
  { title: "ART GALLERY SHOWCASE", tech: ["HTML", "CSS", "JAVASCRIPT"], img: project6 },
]

export default function Projects() {
  return (
    <section className="border-b border-grayDark/60">
      <div className="mx-auto max-w-container px-6 md:px-8 py-14 md:py-20">
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
          <a href="#contact" className="font-medium tracking-wider text-green border-b-2 border-green pb-1">
            CONTACT ME
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {data.map((p) => (
            <article key={p.title} className="group">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img src={p.img} alt='project' className="w-full h-56 md:h-72 object-cover" />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                  <a className="font-semibold border-b-2 border-green text-green" href="#">VIEW PROJECT</a>
                  <a className="font-semibold border-b-2 border-green text-green" href="#">VIEW CODE</a>
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-bold">{p.title}</h3>
              <ul className="flex gap-4 text-grayLight/70 text-sm mt-2">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}