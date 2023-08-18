import Bar from "../essential/Bar";
import Box from "../essential/Box";
import Content from "../essential/Content";
import DesignerCard from "../essential/DesignerCard";
import Footer from "../essential/Footer";
import HideItem from "../essential/HideItem";
import "./About.less"
export default function About() {
    return <main class="about">
        <Bar filled></Bar>
        <section class="sect0">
            <Content class="start">
                <Box class="profile-desc">

                    <div class="text">
                        <h1>Imaginativa <span>Design Studio</span></h1>
                        <p>
                            The Imaginativa Design Studio is a fictional design company founded in 2023. Our mission is to promote accessibility and interaction among a range of designers with diverse styles and perspectives.
                        </p>
                    </div>
                    <img src="/image11.png" alt="bird-image" />
                </Box>
            </Content>
        </section>
        <section class="sect1">
            <Content class="">
                <h2>Why choose us</h2>
                <br></br>
                <div className="grid">

                    <HideItem buttonContent={<h3>What Inspires Us?</h3>}>
                        <p>
                            Our inspiration stems from the pursuit of innovation. We love creative challenges and constantly seek new trends and technologies that can elevate design to a higher level.
                        </p>
                    </HideItem>

                    <HideItem buttonContent={<h3>How We Work</h3>}>
                        <p>
                            Our working process is collaborative and customer-centered. From conception to implementation, we value transparent communication to ensure that each project meets expectations and deadlines.
                        </p>
                    </HideItem>

                    <HideItem buttonContent={<h3>Behind the Studio</h3>}>
                        <p>
                            Get to know the talented team at Imaginativa Design Studio. We are designers, illustrators, and technical experts passionate about creating exceptional visual solutions that turn ideas into reality.
                        </p>
                    </HideItem>

                    <HideItem buttonContent={<h3>Our Mission</h3>}>
                        <p>
                            Our mission is to inspire and impact through design. We strive to exceed expectations, providing our clients with a unique design experience and results that speak for themselves.
                        </p>
                    </HideItem>
                </div>
            </Content>
        </section>

        <section class="sect2">
            <Content>
                <div className="grid">
                    <Box>
                        <h1>You with all benefits</h1>
                        <p><span class="bullet"></span> Competitive prices</p>
                        <p><span class="bullet"></span> High qualified team</p>
                        <p><span class="bullet"></span> On-time delivery</p>
                        <p><span class="bullet"></span> Creative and innovative design </p>
                        <p><span class="bullet"></span> Colaborative approach</p>
                        <p><span class="bullet"></span> Exclusive personalized solution for each client</p>
                        <p><span class="bullet"></span> High quality client service</p>
                        <p><span class="bullet"></span> Atention for all details</p>
                        <p><span class="bullet"></span> Late project accompaniment</p>
                        <p><span class="bullet"></span> Experience in a diversity of design areas </p>
                    </Box>
                    <Box></Box>
                </div>

            </Content>
        </section>
        <section class="sect3">
            <Content>
                <h2>Our team</h2>
                <div class="grid">
                    <DesignerCard width="200px" height="200px" title="Mia H." src="/person1.png"/>
                    <DesignerCard width="200px" height="200px" title="Emilia S." src="/person2.png"/>
                    <DesignerCard width="200px" height="200px" title="Kevin M." src="/person3.png"/>
                    <DesignerCard width="200px" height="200px" title="Emma T." src="/person4.png"/>
                    <DesignerCard width="200px" height="200px" title="Denis O." src="/person5.png"/>
                </div>
            </Content>
        </section>
        <Footer></Footer>
    </main>
}


