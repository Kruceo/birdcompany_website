import "./Options.less"

export default function Options(props) {
    return <div
    {...props}
    class={"options-button " + props.class??''} style={{
        "grid-template-rows": `repeat(${props.barNum},1fr)`,
        width: props.width ?? '100%',
        height: props.width ?? '100%',
        gap: props.gap ?? "40%",
    }}
        
    >
        {Array.from(''.padEnd(props.barNum ?? 3, '1,')).map(each => {
            return <div
                style={{
                    background: props.color,
                    "border-radius": props.rounded ?? "0px",
                }}
                class="options-bar"></div>
        })}
    </div>
}