import './search.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../redux/actions'

export default function Filter(){
    const dispatch = useDispatch()

    function handleSelect(e){
        dispatch(filter(e.target.value))
    }

    return (
        <div>
            <select className='topItem' onChange={handleSelect}>
                <option value="Default">Continente</option>
                <option value="Africa">África</option>
                <option value="North America">América del Norte</option>
                <option value="South America">América del Sur</option>
                <option value="Antarctica">Antártida</option>
                <option value="Asia">Ásia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceanía</option>
            </select>
        </div>
    );
    
}