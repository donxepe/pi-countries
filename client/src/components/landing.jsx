import './landing.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {

    return(
            <div className='landing-main'>
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/c/c2/GDJ-World-Flags-Globe.svg' alt='globe with flags'/>
                <h1>
                    <Link className='landing-link' to={'/home'} >Entrar</Link>
                    
                </h1>
            </div>
        )

}