import "./Box.less"

export default function Box(props){
    return <div {...props} class={"box " + props.class??''}>{props.children}</div>
}