import React from 'react'
import EffectTableComponent from '../../components/EffectComponents/Table/EffectTableComponent';

function MyEffectPage(props) {
    return (
        <div data-testid="myEffectsPage-1">
            <div>
                <h1 style={{ textAlign: "center", marginTop: "20px", color: "white" }}>MY EFFECTS</h1>
            </div>
            <EffectTableComponent effects={props.effects}/>
        </div>
    )
}

export default MyEffectPage