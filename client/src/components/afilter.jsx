import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activityFilter } from '../redux/actions';


export default function ActivityFilter(){
    const dispatch = useDispatch()

    const stateActivities = useSelector((state)=> state.activities)

    function handleSelect(e){
        console.log(e.target.value)
        dispatch(activityFilter(e.target.value))
    }


    return (
        <div>
            <select onChange={handleSelect}>
                <option value="Default">Selecciona Actividad</option>
                {stateActivities && stateActivities.map((ac, i) => {
                    return <option key={i} value={ac.name}>{ac.name}</option>
                })
                }
            </select>
        </div>
    );
    
}