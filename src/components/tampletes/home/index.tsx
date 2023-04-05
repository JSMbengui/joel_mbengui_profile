import { FC } from "react"

const Home: FC = () => {

  return (
    <div className="bg-neutral-900 block min-h-screen pb-10 pt-1 sm:pb-32">
      <div className="py-1 sm:py-5">
        <div className="container">
          <div className="flex justify-between items-center text-neutral-100">
            <a href="/">
              js
            </a>
            <div className="flex text-md gap-5 sm:text-lg">
              <a href="/">Home</a>
              <a href="/#projects">Projects</a>
              <a href="/labs">Lab</a>
              <a href="/blog">Blog</a>
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

        <div className="divide-neutral-500 divide-y mt-5">
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
            <a href="mailto:joelsmbengui@gmail.com" >Mail</a>
            <a href="https://github.com/jsmbengui">GitHub</a>
            <a href="https://www.linkedin.com/in/me/joel-sebastião-mbengui">Linkedin</a>
          </div>
          <br />
          © All rights reserved — Joel Mbengui
        </div>
      </div>
      {/* <main className="main_container">
        <section className="card">
          <header className="card_header">
            
          </header>
          <div className="card_body">
            <div className="card_body_info">
              <h2 className="card_body_title">Joel Sebastião Mbengui</h2>
              <p className="card_body_description">Engenheiro de software, focado no desenvolvimento de software para web e a integração de APIs.</p>
              <p className="card_body_description">
                Eu gosto de design,
                e criar aplicações para web e integrações entre APIs
              </p>
            </div>

          </div>
          <footer className="card_footer">
            <a href="mailto:joelsmbengui@gmail.com" className="card_footer_proceed">Diz ola!</a>
          </footer>
        </section>
      </main> */}
      {/* <div className="info_container">
        <section className="info_container_item">
          <header className="info_container_header">
            <div>
              <h2 className="info_container_item_title">Artigos</h2>
              <h3 className="info_container_item_sub_title">Últimos artigos no meu blog</h3>
            </div>
          </header>
          <div className="not_found">
            <h3>Brevemente</h3>
          </div>
        </section>

        <section className="info_container_item">
          <header className="info_container_header">
            <div>
              <h2 className="info_container_item_title">Laboratorio</h2>
              <h3 className="info_container_item_sub_title">Projectos criados em tempo livre</h3>
            </div>
          </header>
          <div className="not_found">
            <h3>Brevemente</h3>
          </div>
        </section>

        <section className="info_container_item">
          <header className="info_container_header">
            <div>
              <h2 className="info_container_item_title">Contacto</h2>
              <h3 className="info_container_item_sub_title">Vamos criar algo juntos.</h3>
            </div>
          </header>
          <div className="contact_section">
            <p>Sinta-se avontade em enviar um email se estas a procura de um engenheiro de software, se tens uma pergunta ou
              apenas para dizer ola! 🙋‍♂️</p>

            <a href="mailto:joelsmbengui@gmail.com" className="card_footer_proceed">Envia um e-mail</a>
          </div>
        </section>

        <footer className="footer">
          <strong>
            <Link href="/">joelsmbengui</Link>
          </strong>
          <nav>
            <a href="https://github.com/jsmbengui">GitHub</a>
            <a href="https://www.linkedin.com/in/me/joel-sebastião-mbengui">Linkedin</a>
          </nav>
        </footer>

      </div> */}
    </div>
  )
}

export default Home