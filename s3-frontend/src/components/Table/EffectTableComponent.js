import React from 'react'
import { useEffect, useState } from 'react'
import classes from "../../css/EffectItem.css"
import EffectItem from '../EffectItem'

const EffectTableComponent = (props) => {


    const [Effects, setEffects] = useState([])

    useEffect(() => {

        console.log(props.effect)
        if (props.effects != null && props.effects != undefined)
            if (Array.isArray(props.effects.data))
                setEffects(props.effects.data)

    }, [props.effects])

    return (
        <div style={{ margin: "50px" }}>
            <div className='row'>
                {Effects.map((effect) => (
                    <div className='col-md-2' style={{width:"400px",  height: "300px", marginBottom: "40px" }} >
                        <EffectItem effect={effect} />
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EffectTableComponent