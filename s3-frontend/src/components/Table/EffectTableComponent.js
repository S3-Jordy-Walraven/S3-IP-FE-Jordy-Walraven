import React,{ useEffect, useState } from 'react'
import EffectItem from '../EffectItem'

const EffectTableComponent = (props) => {


    const [Effects, setEffects] = useState([])

    useEffect(() => {
        if (props.effects != null && props.effects !== undefined)
            if (Array.isArray(props.effects.data))
                setEffects(props.effects.data)


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.effects])

    return (
        <div style={{ margin: "50px" }}>
            <div className='row'>
                {Effects.map((effect) => (
                    <div key={effect.id} className='col-md-2' style={{ width: "400px", height: "300px", marginBottom: "40px" }} >
                        <EffectItem effect={effect} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EffectTableComponent