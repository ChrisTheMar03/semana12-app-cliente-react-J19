const React = require('react')
const {useState} = require('react')
const {Link} = require('react-router-dom')
const client = require('../client.js');

const NuevoInstrumento=()=>{

    const [instrumento,setInstrumento] = useState({
        nombre:'',
        categoria:'',
        descripcion:''
    })

    const handleChange=(e)=>{
        const valor = e.target.value
        const nam = e.target.name
        setInstrumento({...instrumento,[nam]:valor})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        client({
            method:"POST",
            path:'/api/instrumentos',
            entity:instrumento,
            headers:{"Content-Type":"application/json"}
        }).done(()=>{
            //redirigir a nuestro home
            window.location="/"
        })
    }

    return (
        <>
            <h1>Nuevo Instrumento</h1>
            <form onSubmit={ handleSubmit }>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' name='nombre' id='nombre' onChange={ handleChange } />
                <br />
                <label htmlFor='categoria'>Categoria</label>
                <input type='text' name='categoria' id='categoria' onChange={ handleChange } />
                <br />
                <label htmlFor='descripcion'>Descripcion</label>
                <input type='text' name='descripcion' id='descripcion' onChange={ handleChange } />
                <br /> 
                <input type='submit' value={"Guardar Instrumento"}/>
            </form>
            <br/>
            <Link to={"/"}>Volver</Link>
        </>
    )
}

module.exports = NuevoInstrumento