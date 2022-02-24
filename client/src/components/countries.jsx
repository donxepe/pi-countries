import React, { useEffect } from 'react';
import CountryCard from './country';
import { useDispatch, useSelector } from 'react-redux'
import { obtener } from '../redux/actions';
import Filter from './filter';
import Sort from './sort';


export default function Cards() {
    const dispatch = useDispatch()
    const renderCountries = useSelector((state) => state.filtered);
    
    useEffect(()=>{
        dispatch(obtener())
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h2>Paises del mundo</h2>
            <label>Filtrar por continente</label>
            <Filter />
            <label>Ordenar</label>
            <Sort />

            {renderCountries.length > 0 ? (
                renderCountries.map((c, i) => (
                <CountryCard 
                    key={i} 
                    name={c.name} 
                    flag={c.flag} 
                    continent={c.continent}
                />
                ))
            ):(
                <h2>Loading...</h2>
            )}
        </div>
    )
}