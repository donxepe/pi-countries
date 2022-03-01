import './search.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { sort } from '../redux/actions'

export default function Sort(){
    const dispatch = useDispatch()

    function handleSelect(e){
        dispatch(sort(e.target.value))
    }

    return (
        <div>
            <select className='topItem' onChange={handleSelect}>
                <option>Ordenar...</option>
                <option value="Default">A...z</option>
                <option value="aDesc">Z...a</option>
                <option value="pAsc">Menor Población</option>
                <option value="pDesc">Mayor Población</option>
            </select>
        </div>
    );
    
}