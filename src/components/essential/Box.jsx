import "./Box.less"

export default function Box(props){
    return <div class={"box " + props.class??''} {...props}>{props.children}</div>
}