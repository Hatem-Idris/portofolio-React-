const items = [
  { name: "HTML", exp: "4 Years Experience" },
  { name: "CSS", exp: "4 Years Experience" },
  { name: "JavaScript", exp: "4 Years Experience" },
  { name: "Accessibility", exp: "4 Years Experience" },
  { name: "React", exp: "3 Years Experience" },
  { name: "Sass", exp: "3 Years Experience" },
]

export default function Skills() {
  return (
    <section className="border-b border-grayDark/60">
      <div className="mx-auto max-w-container px-6 md:px-8 py-14 md:py-20 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
        {items.map((it) => (
          <div key={it.name}>
            <h3 className="text-2xl md:text-3xl font-bold">{it.name}</h3>
            <p className="text-grayLight/70 mt-2 text-sm md:text-base">{it.exp}</p>
          </div>
        ))}
      </div>
    </section>
  )
}