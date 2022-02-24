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
            <select onChange={handleSelect}>
                <option value="Default">Alfabético ↑</option>
                <option value="aDesc">Alfabético ↓</option>
                <option value="pAsc">Población ↓</option>
                <option value="pDesc">Población ↑</option>
            </select>
        </div>
    );
    
}