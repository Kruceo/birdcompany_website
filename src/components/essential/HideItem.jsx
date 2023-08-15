import { createEffect, createSignal } from "solid-js";
import "./HideItem.less";

export default function HideItem(props){
    const [hidden,setHidden] = createSignal(true)
    const id = "id-" + Math.floor(Math.random()*10000)
    const handler = ()=>{
        const hiddenContentFrameEl = document.querySelector("#"+id+'>.hidden-content-frame')
        const hiddenContentEl = hiddenContentFrameEl.querySelector('.hidden-content')
        // hiddenContentEl.style.background = 'red'
        const height = hiddenContentEl.clientHeight
        // hiddenContentEl.innerHTML = height +' ' + hidden() + ' ' + Math.random()
        if(hidden()){
            hiddenContentFrameEl.style.height = height +'px'
        }
        else{
            hiddenContentFrameEl.style.height = '0px'
        }
        setHidden(!hidden())
    }
    return <div id={id}  class={`hide-item ${hidden()?"hidden":""} ${props.class??""}`}>
        <div onclick={()=>{
            handler()
        }} class="button">{props.buttonContent??"Press this"}</div>
        <div class="hidden-content-frame">
            <div class="hidden-content">
            {props.children}
            </div>
        </div>
    </div>
}