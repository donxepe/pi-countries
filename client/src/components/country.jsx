import React from 'react';

export default function CountryCard({name,flag}){
    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <img src={flag} alt={`bandera de ${name}`} />
            </div>
        </div>
    )
}



