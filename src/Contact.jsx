export default function Contact() {
  return (
    <section id="contact" className="bg-grayDark/30">
      <div className="mx-auto max-w-container px-6 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Contact</h2>
            <p className="text-grayLight/80 mt-6 max-w-md">
              I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
            </p>
          </div>
          <form className="grid gap-6">
            <div>
              <input required placeholder="NAME" className="w-full bg-transparent border-b border-grayMid/60 p-3 outline-none placeholder:text-grayLight/60 focus:border-green" />
            </div>
            <div>
              <input type="email" required placeholder="EMAIL" className="w-full bg-transparent border-b border-grayMid/60 p-3 outline-none placeholder:text-grayLight/60 focus:border-green" />
            </div>
            <div>
              <textarea required placeholder="MESSAGE" className="w-full bg-transparent border-b border-grayMid/60 p-3 outline-none placeholder:text-grayLight/60 focus:border-green h-32" />
            </div>
            <div className="flex justify-end">
              <button className="font-medium tracking-wider text-green border-b-2 border-green pb-1">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}