import { React, useEffect, useState } from 'react'
import EffectTableComponent from '../../components/EffectComponents/Table/EffectTableComponent';
import EffectService from '../../services/EffectService';

function MyEffectPage(props) {
    const effectService = new EffectService();
    const [stateMyEffects, setMyEffects] = useState([]);

    useEffect(() => {
        console.log("STATE USER");
        console.log(props.stateUser);
        if(props.stateUser != null){
          setMyEffects(effectService.getEffectsByUser(props.stateUser.sub));
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    return (
        <div data-testid="myEffectsPage-1">
            <div>
                <h1 style={{ textAlign: "center", marginTop: "20px", color: "white" }}>MY EFFECTS</h1>
            </div>
            <EffectTableComponent effects={stateMyEffects}/>
        </div>
    )
}

export default MyEffectPage