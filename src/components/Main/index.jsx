import Star from "./Star/index.jsx"
import StarFull from "./StartFull/index.jsx"
import "./style.jsx"
import { Banner, Container, ContainerMobile, Content, ContentArea, ContentButton } from "./style.jsx"


function Main(){ 
    return(
      <>
      <Container>
       <Content>
       <Banner />
        <p>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) <br /> retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </p>
       
       </Content>
        <ContentArea>
           <div className="contentHub div">
           <img src="../../../clock.png" alt="icon relógio" />
            <h3>51min</h3>
           </div>
             <div className="contentHub">
             <StarFull />
             <StarFull />
             <StarFull />
             <StarFull />
             <Star />
             </div>
            <h3>2021</h3>
        </ContentArea>
        <ContentButton>
            <button className="buttonFull">ASSISTA AGORA</button>
            <button className="buttonOff">TRAILER</button>
        </ContentButton>
      </Container>
      </>
    )
}

export default Main