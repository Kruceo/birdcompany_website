import Bar from "../essential/Bar";
import Content from "../essential/Content";
import Footer from "../essential/Footer";
import "./HowItWorks.less"
export default function HowItWorks() {
    return <main>
        <Bar filled></Bar>
        <Content class="start">
            <section class="hiw title">
                <h1>Imaginative Process</h1>
            </section>

            <section class="hiw">
                <HiwCard side="left"  title="Search & Inspiration"        backgroundSrc="/tint.png"  src="/image14.png"  invert={false}  text={
                    // "O ponto de partida do processo de criação é a busca pela inspiração. A equipe da Imaginativa Design Studio se imerge em pesquisas, explorando tendências atuais, referências históricas, arte, cultura e o contexto em que o projeto se insere. Essa fase alimenta a criatividade, ajudando a equipe a entender os desafios, oportunidades e possibilidades."
                    "The creation process starts at inspiration. The Imaginativa team merge in search, exploring new trends, historical references, art, culture and the project insertion context. This phase fills the creativity, helping the team to understand the challenge, opportunities and possibilities"
                    } />
                <HiwCard side="right" title="Refinement & Selection"      backgroundSrc="/tint2.png" src="/image16.png"  invert={true}   text={
                    // "Depois de gerar várias ideias, é hora de selecionar os conceitos mais promissores. A equipe avalia cada proposta com base na viabilidade, alinhamento com os objetivos do projeto e potencial para surpreender e envolver. Os conceitos selecionados são então refinados e aprimorados, levando em consideração feedback interno e, muitas vezes, a colaboração estreita com o cliente."
                    "After to generate various ideas, it's time to select the promising concepts. The team evaluate each proposal based on viability, alignment with project objectives and surprise and involve potential. The concepts will be refined and improved, taking into account the internal feedback and, often the strict client colaboration" 
                    } />
                <HiwCard side="left"  title="Development & Production"    backgroundSrc="/tint3.png" src="/image17.png"  invert={true}   text={
                    // "Com os conceitos refinados em mãos, a equipe entra na fase de desenvolvimento e produção. Dependendo do tipo de projeto, isso pode envolver a criação de protótipos, design de interfaces, ilustrações, animações, layout de materiais impressos e muito mais. A Imaginativa Design Studio preza pela atenção aos detalhes, garantindo que cada elemento do projeto esteja alinhado com a visão final."
                    "With the refined concepts ready, the team joins to the phase of development and production. Depending on project type, this can involve the creation of prototypes, interface design, illustration, animation, printed material layout and much more. The Imaginative prays for attention to details, ensuring that each project element is aligned to final vision."
                    } />
            </section>
        </Content>
        <Footer></Footer>
    </main>
}

function HiwCard(props) {
    return <div class="hiw-sect">
        {props.side != "right" ?
            <div class="block">
                <h2>{props.title ?? "this is props.title"}</h2>
                <p>{props.text ?? "this is the props.text"}</p>
            </div> : null
        }
        <div class="block image-background" style={{"background-image":props.backgroundSrc??'tint.png',transform:props.invert?"scale(-1,1)":'none'}}>
            <div class="outer" style={{"background-image":`url("${props.backgroundSrc??'none'}")`}}></div>
            <div class="image" style={{ "background-image": `url("${props.src ?? "/image1.png"}")`, "-webkit-mask-image": "url('/mask.png')" }} alt="" />
        </div>
        {props.side == "right" ?
            <div class="block">
                <h2>{props.title ?? "this is props.title"}</h2>
                <p>{props.text ?? "this is the props.text"}</p>
            </div> : null
        }
    </div>
}