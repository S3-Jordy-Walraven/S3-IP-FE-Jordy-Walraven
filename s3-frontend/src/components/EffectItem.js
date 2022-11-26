import React, { useEffect, useState } from 'react'
import Card from './layout/Card'
import classes from "../css/EffectItem.css"
import "../css/Canvas.css"



const EffectItem = (props) => {
    const [renderHtml, setRenderHtml] = useState("");
    useEffect(() => {

        if (props.effect.effectContent != null && props.effect.effectContent !== undefined && renderHtml === "") {
            let html = props.effect.effectContent;
            let num = html.split("<script>")[0].length + 8;
            let script = html.substring(0, num);
            let html2 = script + html.substring(num, html.length);
            setRenderHtml(html2)

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [renderHtml])

    function mouseOverCallback() {
        setRenderHtml("")
    }

    function toDetailPage(){

    }
    
    return (
        <Card>
            <iframe id="reloadCanvas" style={{ overflow: "hidden", marginBottom:"50px" }} title="canvas" srcDoc={renderHtml} sandbox="allow-scripts" width="100%" height="60%"  scrolling='no' loading='lazy' onMouseEnter={mouseOverCallback} onClick={toDetailPage}  >
            </iframe>
            <div className={classes.content}>
                <h3>{props.effect.effectName}</h3>
                <p>{props.effect.creatorName}</p>
            </div>
        </Card>

    )
}

export default EffectItem