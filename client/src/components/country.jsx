import React from 'react';

export default function CountryCard({name, flag, continent}){
    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <img src={flag} alt={`bandera de ${name}`} />
            </div>
            <div>
                <h2>{continent}</h2>
            </div>
        </div>
    )
}



