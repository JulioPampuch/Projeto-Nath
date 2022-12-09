import { ChatCenteredDots, Info, InstagramLogo, Key, List, Table, WhatsappLogo } from "phosphor-react"
import "./main.css"

const Main = () => {
  return (
    <section className="sectionIcons">
      <div className="icons">
        <WhatsappLogo size={32} />
        <p>WhatsApp</p>
      </div>
      <div className="icons">
        <InstagramLogo size={32} />
        <p>Instagram</p>
      </div>
      <div className="icons">
        <List size={32} />
        <p>Agendamentos</p>
      </div>
      <div className="icons">
        <Info size={32} />
        <p>Informações</p>
      </div>
      <div className="icons">
        <ChatCenteredDots size={32} />
        <p>Depoimentos</p>
      </div>
      <div className="icons">
        <Table size={32} />
        <p>Formulário</p>
      </div>
      <div className="icons">
        <Key size={32}/>
        <p>Chave Pix</p>
      </div>
    </section>

  )
}

export default Main