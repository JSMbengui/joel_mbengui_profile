import { FC } from "react"

const Home: FC = () => {
  const Header = () => {
    return (
      <div>
        <div>
          <img />
          <h2>Joel Mbengui</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Experience</a></li>
          </ul>
        </nav>
      </div>
    )
  }
  const IntroAbout = () => {
    return (
      <div>
        <div>
          <h1>Hi, I´m Joel Sebastião Mbengui 👋🏼</h1>
          <p>
            I'm a Software developer from Luanda, Angola. I <a href="#">code</a>, <a href="#">write</a> and build stuff on internet.
          </p>
          <p>
            I'm a Software developer interested in design, under engineering and open source. I previues work at MochiLab.
          </p>
          <p>
            I'm focused on building products with TypeScrypt, specifically React and React-Native.
          </p>
          <p>
            When I'm not coding, I'm likely at the gym or surfing the city with my longboard.
          </p>
          <p>
            You can find me on <a href="#">GitHub</a>, <a href="#">Twitter</a> and <a href="#">LinkedIn</a>.
          </p>
        </div>
      </div>
    )
  }
  const IntroWrite = () => {
    return (
      <div>
        <header>
          <h3>Writings</h3>
          <p>The latests posts of my blog.</p>

          <div>
            <p>Em breve</p>
          </div>
        </header>
      </div>
    )
  }
  const IntroExperience = () => {
    return (
      <div>
        <header>
          <h3>Experience</h3>
          <p>Featured Experience projects.</p>

          <div>
            <p>Em breve</p>
          </div>
        </header>
      </div>
    )
  }
  const Contact = () => {
    return (
      <div>
        <header>
          <h3>Contact</h3>
          <p>Let's make something together.</p>

          <div>
            <p>Feel free to send me an email if you're looking for a front end engineer, have a question or just want to say hi! 🙋‍♂️</p>
            <a href="#">Say hello</a>
          </div>
        </header>
      </div>
    )
  }
  const Footer = () => {
    return (
      <div>
        <div>
          <a href="#">joelmbengui</a>
        </div>
        <nav>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Linkedin</a></li>
          </ul>
        </nav>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <IntroAbout />
      <IntroWrite />
      <IntroExperience />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home