import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard({name, flag, continent, id}){
    return (
        <div>
            <div>
                <h1>
                    <Link to={`/detail/${id}`}>
                        {name}
                    </Link>
                </h1>
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



