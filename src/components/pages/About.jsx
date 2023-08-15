import Bar from "../essential/Bar";
import Content from "../essential/Content";
import HideItem from "../essential/HideItem";
import "./About.less"
export default function About() {
    return <main class="about">
        <Bar filled></Bar>
        <section class="sect0">
            <Content class="start">
                <div class="profile-desc">
                    <img src="/bird3.png" alt="" />
                    <div class="text">
                        <h2>Imaginativa</h2>
                        <p>
                            a Imaginativa Design Studio é uma empresa de design ficticea, fundada em 2023 com o objetivo de facilitar o acesso e conversação entre uma gama de designers com diversos estilos e pensamentos.
                        </p>
                    </div>
                </div>
                {/* <img src="/image18.png" alt="" /> */}
            </Content>
        </section>
        <section class="sect1">
            <Content class="start">
            <div className="grid">
               <HideItem buttonContent="Qual o nosso objetivo?">
                   <p>
                    Levar com qualidade e rapidez o acesso a todo tipo estilo para pessoas e empresas.
                   </p>
               </HideItem>
               <HideItem buttonContent="Qual o nosso objetivo?">
                   <p>
                    Levar com qualidade e rapidez o acesso a todo tipo estilo para pessoas e empresas.
                   </p>
               </HideItem>
               <HideItem buttonContent="Qual o nosso objetivo?">
                   <p>
                    Levar com qualidade e rapidez o acesso a todo tipo estilo para pessoas e empresas.
                   </p>
               </HideItem>
               <HideItem buttonContent="Qual o nosso objetivo?">
                   <p>
                    Levar com qualidade e rapidez o acesso a todo tipo estilo para pessoas e empresas.
                   </p>
               </HideItem>
               </div>
            </Content>
        </section>
    </main>
}