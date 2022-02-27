import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtener } from '../redux/actions';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Activity() {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const stateCountries = useSelector(state => state.countries)

    const [activity, setActivity] = useState({
        name: '',
        dificulty: '',
        duration: '',
        season: '',
        countries: new Set([]),
    });

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post("http://localhost:3001/activity", activity)
        alert("Actividad agregada")
        navigate('/home')
    }

    function handleChange(e) {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value,
        })
    }

    function handleSelect(e){
        setActivity({
            ...activity,
            countries: [...activity.countries, e.target.value],
        })
    }

    useEffect( () => {
        dispatch(obtener())
        //eslint-disable-next-line
    },[dispatch])
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input name="name" value={activity.name} onChange={handleChange} />
                <label>Dificultad</label>
                <input name="dificulty" value={activity.dificulty} onChange={handleChange} />
                <label>Duración (horas)</label>
                <input name="duration" value={activity.duration} onChange={handleChange} />
                <label>Temporada</label>
                <input name="season" value={activity.season} onChange={handleChange} />
                <label>Paises</label>
                <select onChange={handleSelect}>
                    {stateCountries.length > 0 && stateCountries.sort( (a,b) =>
                        {if (a.name > b.name) return 1
                        return -1})
                    .map((co,i) => {
                        return <option key={i} value={co.id}>{co.name}</option>
                    })}
                </select>
                <button type="submit">CREAR</button>
            </form>
        </div>
    );

}