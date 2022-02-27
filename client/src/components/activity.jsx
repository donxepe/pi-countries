import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtener } from '../redux/actions';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Activity() {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const stateCountries = useSelector(state => state.countries)

    function validate(){
        for (const prop in activity){
            if (activity[prop].length === 0)
            return false
        }
        return true
    }

    const [activity, setActivity] = useState({
        name: '',
        dificulty: '',
        duration: '',
        season: '',
        countries: new Set([]),
    });


    async function handleSubmit(e) {
        e.preventDefault()
        if (validate()){
            await axios.post("http://localhost:3001/activity", activity)
            alert("Actividad agregada")
            navigate('/home')
        } else {
            alert("Asegurate de llenar todos los campos")
        }
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
                <label>Dificultad (1 - 5)</label>
                <select name="dificulty" onChange={handleChange}>
                    <option>Selecciona una</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <label>Duración (horas)</label>
                <input name="duration" value={activity.duration} onChange={handleChange} />
                {activity.duration.length > 0 && Number(activity.duration) < 1 && <h1>La duración mínima es de una hora</h1> }
                <label>Temporada</label>
                <select name='season' onChange={handleChange}>
                    <option>Selecciona una</option>
                    <option value='Primavera'>Primavera</option>
                    <option value='Verano'>Verano</option>
                    <option value='Otoño'>Otoño</option>
                    <option value='Invierno'>Invierno</option>
                </select>
                <label>Paises</label>
                <select onChange={handleSelect}>
                    <option>Selecciona país</option>
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