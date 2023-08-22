const React = require('react')
const {useState} = require('react')
const {Link} = require('react-router-dom')
const client = require('../client.js');

const NuevoMusica = ()=>{

    const [nombre,setNombre] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method:"POST",
            path:'/api/musicos',
            entity:{nombre:nombre},
            headers:{"Content-Type":"application/json"}
        }).done(()=>{
            //redirigir a nuestro home
            window.location="/"
        })
    }

    const handleChange=(e)=>{
        setNombre(e.target.value)
    }

    return(
        <>
            <h1>Nueva Musica</h1>
            <form onSubmit={ handleSubmit }>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' name="nombre" id="nombre" onChange={ handleChange }/>
                <input type='submit' value="Nuevo Musico"/>
            </form>
            <Link to={"/"}>Volver</Link>
        </>
    )
}
module.exports = NuevoMusica