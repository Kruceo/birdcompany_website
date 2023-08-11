import { createEffect } from "solid-js"
import "./Footer.less"

export default function Footer(){

    createEffect(()=>{
        
        const footer = document.querySelector('footer')
            if(footer.offsetTop < window.visualViewport.height){
                footer.style.marginTop = window.innerHeight - footer.offsetTop - footer.offsetHeight + 'px'
                // footer.innerHTML += `<div style="position:fixed;font-size:5vw; left:20px;top:20vh;background:red;">m:${footer.style.marginTop + " <br/>ot:" + footer.offsetTop}<br/>w:${window.innerHeight}</div>`
            }
        window.onresize = ()=>{
           
        }
        
        
    })


    return <footer>
       <div className="icon"/>
       <div className="grid">
            <div>
                <h3></h3>
            </div>
       </div>
       <p>Copyright© 2023 Imaginativa Design Studio. All Rights reserved</p>
    </footer>
}