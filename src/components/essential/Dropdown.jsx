import { createEffect, createSignal } from "solid-js"
import "./Dropdown.less"
export default function Dropdown(props) {

    const allowClick = props.allowClick ?? true
    const defaultOpened = props.defaultOpened ?? false
    const linkTo = props.linkTo
    const [opened, setOpened] = createSignal(defaultOpened)
    if (linkTo) {
        createEffect(() => {
            document.querySelector(linkTo).addEventListener('click', () => {
                setOpened(!opened())
            })
        })



    }
    return <div {...props}
        onclick={allowClick ? props.onclick : ''}
        class={`dropdown ${opened() ? 'opened' : 'closed'} ${props.class}`}>
        <div class="content">
            {props.children}
        </div>
    </div>
}