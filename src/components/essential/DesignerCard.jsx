import "./DesignerCard.less"
export default function DesignerCard(props) {
    return <div class="designer-card">
        <div class="image" style={{
            "background-image": "url(" + props.src + ")" ?? 'none'
            , "width": props.width ?? '100%'
            , "height": props.height ?? '100%'
        }} />
        <h3>{props.title ?? "props.title"}</h3>
    </div>
}