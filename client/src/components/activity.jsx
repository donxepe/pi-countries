import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtener } from '../redux/actions';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './activity.css'


export default function Activity() {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const stateCountries = useSelector(state => state.countries)

    function validate(){
        for (const prop in activity){
            if (activity[prop].length === 0)
            return false
        }
        if (activity.duration < 0 || activity.duration > 72) return false
        if (activity.name.match(/[^A-Za-zÀ-ȕ0-9 ]/)) return false
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
            alert("Asegurate de llenar todos los campos correctamente")
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
    },[])

    var names = ''

    return (
        <div>
            <form className='aForm' onSubmit={handleSubmit}>
                <div className='aRow'>
                    <label>Nombre</label>
                    <input className='aInput' name="name" value={activity.name} onChange={handleChange} />
                    {activity.name.length > 0 && activity.name.match(/[^A-Za-zÀ-ȕ0-9 ]/) && <h3 className='failValidate'>No se permiten caracteres especiales</h3>}
                </div>
                <div className='aRow'>
                    <label>Dificultad</label>
                    <select className='aInput' name="dificulty" onChange={handleChange}>
                        <option>Selecciona una</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
                <div className='aRow'>
                    <label>Duración (horas)</label>
                    <input className='aInput' name="duration" value={activity.duration} onChange={handleChange} />
                    {activity.duration.length > 0 && Number(activity.duration) < 1 && <h3 className='failValidate'>La duración mínima es de una hora</h3> }
                    {activity.duration.length > 0 && Number(activity.duration) > 72 && <h3 className='failValidate' >La duración máxima es de 72 horas</h3> }
                </div>
                <div className='aRow'>
                    <label>Temporada</label>
                    <select className='aInput' name='season' onChange={handleChange}>
                        <option>Selecciona una</option>
                        <option value='Primavera'>Primavera</option>
                        <option value='Verano'>Verano</option>
                        <option value='Otoño'>Otoño</option>
                        <option value='Invierno'>Invierno</option>
                    </select>
                </div>
                <div className='aRow'>
                    <label>Paises</label>
                    <select className='aInput' onChange={handleSelect}>
                        <option>Selecciona país</option>
                        {stateCountries.length > 0 && stateCountries.sort( (a,b) =>
                            {if (a.name > b.name) return 1
                            return -1})
                        .map((co,i) => {
                            return <option key={i} value={co.id}>{co.name}</option>
                        })}
                    </select>
                    <p>
                        {activity.countries[0] && activity.countries.map((co,i) =>{
                            stateCountries.forEach(element => {
                                if (co === element.id) {
                                names = `${element.name}`
                                }

                            });
                                return `${names} `
                        })}
                    </p>
                </div>
                <button className='aInput aButton' type="submit">CREAR</button>
            </form>
        </div>
    );

}