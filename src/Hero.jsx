import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import pfp from "./assets/image-removebg-preview(4).png"
export default function Hero() {
  return (
    <section className=" border-b border-grayDark/60">
      <div className="mx-auto max-w-container px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-[40px] leading-[1.1] md:text-[72px] md:leading-[1.05] font-bold tracking-tight">
            Nice to meet you!<br /> I’m <span className="text-green">Adam Keyes</span>.
          </h1>
          <p className="text-grayLight/80 mt-6 md:mt-8 max-w-md">
            Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
          </p>
          <a href="#contact" className="inline-block mt-8 md:mt-10 font-medium tracking-wider text-green border-b-2 border-green pb-1 mb-10">
            CONTACT ME
          </a>
        </div>
        <div className=" relative flex md:justify-end justify-center">
          <img className="z-[2] absolute md:bottom-[-20rem]" src={pfp} alt="Profile" />
          <div className="absolute z-[3] flex gap-7 text-4xl top-[-24rem] mr-5" >
            <FaGithub/>
            <FaLinkedin/>
            <FaTwitter/>
          </div>
        </div>
      </div>
    </section>
  )
}