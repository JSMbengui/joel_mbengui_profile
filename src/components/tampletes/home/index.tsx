import { FC } from "react"
import Link from 'next/link'

const Home: FC = () => {

  return (
    <div className="bg-neutral-900 block min-h-screen pb-10 pt-1 sm:pb-32">
      <div className="py-1 sm:py-5">
        <div className="container">
          <div className="flex justify-between items-center text-neutral-100">
            <Link href="/">
              <a className="text-md sm:text-xl text-white">js</a>
            </Link>
            <div className="flex text-md gap-5 sm:text-lg">
              <Link href="/">Home</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/labs">Lab</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="mt-5 mb-5 sm:mb-12 sm:mt-4">
          <h1 className="text-white font-bold mb-2 sm:mb-4 sm:text-9xl text-5xl">Joel Mbengui</h1>
          <p className="text-md sm:text-xl text-neutral-400">Software Enginer learning Backend and everything in between.</p>
        </div>


        <div className="divide-neutral-500 divide-y mb-5">
          <p className="text-md sm:text-xl text-neutral-400">
            Hi! My name is Joel Mbengui from Luanda, Angola. I am Software Engineer with experience in designing and developing systems, testing, debuggin to cloud providers
            or private server.
            <br />
            Passionate about Investiment, Blockchain and decentralized systems
          </p>
          <br />
          <br />
        </div>

        <div className="divide-neutral-500 divide-y mt-5" id="projects">
          <p className="text-white font-bold mb-2 sm:mb-4 sm:text-7xl text-3xl">Projects and Companies I work on:</p>

          <a
            href="#"
            className="flex justify-between cursor-pointer flex-col group hover:text-white items-start py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors">
            Anaya Lojas:
          </a>
          <a
            href="#"
            className="flex justify-between cursor-pointer flex-col group hover:text-white items-start py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors">
            Siri:
          </a>
          <a
            href="#"
            className="flex justify-between cursor-pointer flex-col group hover:text-white items-start py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors">
            MochiLab:
          </a>
        </div>

        <div className="divide-neutral-500 divide-y mt-5">
          <p className="text-white font-bold mb-2 sm:mb-4 sm:text-7xl text-3xl">Lastest articles</p>

          <a href="#" className="flex justify-between cursor-pointer flex-col group hover:text-white items-start py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors">Internet para desensolvedores de Software</a>
        </div>

      </div>

      <div className="container">
        <div className="mt-5 pt-5 sm:mt-16 sm:text-xl text-base text-center text-neutral-400">
          <div className="flex justify-center text-md gap-5 sm:text-lg">
            <Link href="mailto:joelsmbengui@gmail.com" >Mail</Link>
            <Link href="https://github.com/jsmbengui">GitHub</Link>
            <Link href="https://www.linkedin.com/in/me/joel-sebastião-mbengui">Linkedin</Link>
          </div>
          <br />
          © All rights reserved — Joel Mbengui
        </div>
      </div>

    </div>
  )
}

export default Home