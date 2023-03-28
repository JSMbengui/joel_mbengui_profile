import { FC } from "react"

const Home: FC = () => {

  return (
    <>
      <main className="main_container">
        <section className="card">
          <header className="card_header">
            {/* <!-- <img src="./images/imagem.jpg" /> --> */}
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
      </main>
      <div className="info_container">
        <section className="info_container_item">
          <header className="info_container_header">
            <div>
              <h2 className="info_container_item_title">Artigos</h2>
              <h3 className="info_container_item_sub_title">Últimos artigos no meu blog</h3>
            </div>
            {/* <!-- <a href="#" className="info_container_item_link">Ver todos</a> --> */}
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
            {/* <!-- <a href="#" className="info_container_item_link">Ver todos</a> --> */}
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
            <a href="/">joelsmbengui</a>
          </strong>
          <nav>
            <a href="https://github.com/jsmbengui">GitHub</a>
            <a href="https://www.linkedin.com/in/me/joel-sebastião-mbengui">Linkedin</a>
          </nav>
        </footer>

      </div>
    </>
  )
}

export default Home