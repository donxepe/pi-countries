import React, { useEffect } from 'react';
import CountryCard from './country';
import { useDispatch, useSelector } from 'react-redux'
import { obtener } from '../redux/actions';


export default function Cards() {
    const dispatch = useDispatch()
    const renderCountries = useSelector((state) => state.filtered);
    
    useEffect(()=>{
        dispatch(obtener())
    }, [])

    return (
        <div>
            <h2>Paises del mundo</h2>
            {renderCountries.length > 0 ? (
                renderCountries.map((c, i) => (
                <CountryCard 
                    key={i} 
                    name={c.name} 
                    flag={c.flag} 
                />
                ))
            ):(
                <h2>Loading...</h2>
            )}
        </div>
    )
}