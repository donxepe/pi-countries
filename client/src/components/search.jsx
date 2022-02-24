import React  from 'react';
import { useDispatch } from 'react-redux';
import {obtener, search} from '../redux/actions'

export default function Search(){
    const dispatch = useDispatch()

    function handleSearch(e){
        if (e.target.value.length > 0) {
            dispatch(search(e.target.value))
        } else {
            dispatch(obtener())
        }
    }

    return (
        <div>
            <label>Buscar País</label>
            <input onChange={handleSearch} />
        </div>    

    )
}

