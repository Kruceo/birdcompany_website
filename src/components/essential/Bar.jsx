import { createEffect } from 'solid-js'
import './bar.less'
import { A } from '@solidjs/router'
const id = "id-"+Math.floor(Math.random()*1000)
export default function Bar(props) {
   
    createEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            if(window.scrollY > 100){
            document.querySelector('.bar.' + id).classList.add('filled')
            }
            else  document.querySelector('.bar.' + id).classList.remove('filled')
        })
    })
    return <>
        <div class={"bar " + id + ` ${props.filled?"default-filled":''}`}>

                <div class='icon'></div>
                <div class='routes'>
                    <A href="/">Main</A>
                    <A href="/howitworks">How it works</A>
                    <A href="/bar">About us</A>
                </div>
        </div>
    </>
}