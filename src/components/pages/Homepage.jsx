import { createEffect } from "solid-js";
import Bar from "../essential/Bar";
import Content from "../essential/Content";
import "./Homepage.less"
import Footer from "../essential/Footer";
import MobileBar from "../essential/MobileBar";
export default function Homepage() {
  return (
    <main class="home">
      <Bar></Bar>
      {/* <MobileBar></MobileBar> */}
      <div class="homepage-wallpaper" >
        <div class="message2">
          <h1>Flying beyond the
            <br /><span>Expectations</span></h1>
        </div>
      </div>
      <Content>
        <section class="section1">
          <dir class="text">
            <h1>Your product has more beauty than you know!</h1>
            <p>A good take can show up all details.</p>
          </dir>

          <div class="image"></div>

        </section>
      </Content>
      <div class="card-grid-bg">
        <Content>
        <h2>Take a look in some styles!</h2>
          <div class="card-grid">
            <Card image="/image1.png"  title="Logo and Icons Creation">Titulo</Card>
            <Card image="/image2.png" title="Product Showcase"></Card>
            <Card image="/image3.png" title="Minimalist Illustration">Titulo</Card>
            <Card image="/image4.png" title="Modern Interface Design">Titulo</Card>
          </div>
        </Content>
      </div>
      <Footer></Footer>
    </main>
  );
}

function Card(props) {
  return <div class="card">
    <div class="image" style={{ "background-image": "url(" + props.image + ")" }}></div>
    <h3>{props.title}</h3>
  </div>
}