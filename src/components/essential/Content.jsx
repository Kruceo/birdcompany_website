import "./Content.less"

export default function Content(props) {
    return <>
        <header class={"content-out " + props.class??''}>
            <header class="content-inner">
                {props.children}
            </header>
        </header>
    </>
}