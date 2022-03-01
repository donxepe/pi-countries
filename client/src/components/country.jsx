import './country.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard({name, flag, continent, id}){
    return (
        <div className='card'>
            <div>
                <h2>
                    <Link className='linkC' to={`/detail/${id}`}>
                        {name}
                    </Link>
                </h2>
            </div>
            <div>
                    <Link className='linkC' to={`/detail/${id}`}>
                        <img className='flag' src={flag} alt={`bandera de ${name}`} />
                    </Link>
            </div>
            <div>
                <h3>{continent}</h3>
            </div>
        </div>
    )
}



