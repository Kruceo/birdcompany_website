import { createEffect } from 'solid-js'
import './bar.less'
import { A } from '@solidjs/router'
import Options from './Options'
import Dropdown from './Dropdown'
const id = "id-" + Math.floor(Math.random() * 1000)
export default function Bar(props) {

    createEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 100) {
                document.querySelector('.bar.' + id).classList.add('filled')
            }
            else document.querySelector('.bar.' + id).classList.remove('filled')
        })
    })
    return <>
        <div class={"bar " + id + ` ${props.filled ? "default-filled" : ''}`}>
            <Options class="mobile-button" rounded="5px" gap="12px" width="35px"></Options>
            <Dropdown class="mobile-dropdown" defaultOpened={false} linkTo={".mobile-button"}>
                <A href="/">          <div>Main        </div></A>
                <A href="/howitworks"><div>How it works</div></A>
                <A href="/about">     <div>About us    </div></A>
            </Dropdown>
            <div class='icon'></div>
            <div class='routes'>
                <A href="/">          <div>Main        </div></A>
                <A href="/howitworks"><div>How it works</div></A>
                <A href="/about">     <div>About us    </div></A>
            </div>
        </div>
    </>
}