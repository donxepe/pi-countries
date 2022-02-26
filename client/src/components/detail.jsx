import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../redux/actions';

export default function Detail(){
    const dispatch = useDispatch()
    const { cID } = useParams()

    useEffect(() => {
        dispatch(getDetails(cID))
        
        //eslint-disable-next-line
    }, [])

    const detailState = useSelector((state) => state.detail)
    
var {name, flag, continent, population, capital, subregion, area, activities, id} = detailState

    return (
        <div>
            <div>
                <h1>Detalle de pais</h1>
                <h1>{name} ({id})</h1>
            </div>
            <div>
                <h2>{continent}</h2>
            </div>
            <div>
                <img src={flag} alt={`bandera de ${name}`} />
            </div>
            <ul>
                <li>Población: {population} personas</li>
                <li>Capital: {capital}</li>
                <li>Subregión: {subregion}</li>
                <li>Área: {area} Km²</li>
                <li>Actividades: {activities} </li>
            </ul>
        </div>
    )
}