export default function Footer() {
  return (
    <footer className="border-t border-grayDark/60">
      <div className="mx-auto max-w-container px-6 md:px-8 py-10 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">adamkeyes</h1>
        <nav className="flex items-center gap-6 text-sm md:text-base">
          <a href="#" className="hover:text-green transition">GitHub</a>
          <a href="#" className="hover:text-green transition">LinkedIn</a>
          <a href="#" className="hover:text-green transition">Twitter</a>
        </nav>
      </div>
    </footer>
  )
}