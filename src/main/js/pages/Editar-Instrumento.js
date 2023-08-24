
const React = require('react')
const {useState,useEffect} = require('react')
const {Link,useParams} = require('react-router-dom')
const client = require('../client.js')

const EditarInstrumentos=()=>{

    const {id} = useParams()

    const [instrumento,setInstrumento] = useState({})

    useEffect(()=>{
        client({
            method:"GET",
            path:"/api/instrumentos/"+id
        }).done((res)=>{
            setInstrumento(res.entity);
        })

    },[])

    

    const handleSubmit=(e)=>{
        e.preventDefault();
        client({
            method:"PATCH",
            path:"/api/instrumentos/"+id,
            entity:instrumento,
            headers:{"Content-Type":"application/json"}
        }).done(()=>{
            window.location="/"
        })
    }

    const handleChange=(e)=>{
        const {value,name} = e.target
        setInstrumento({...instrumento,[name]:value})
    }   

    return(
        <>
            <h1>Editar Instrumento</h1>
            <form onSubmit={ handleSubmit }>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' name='nombre' id='nombre' value={instrumento.nombre} onChange={ handleChange } />
                <br />
                <label htmlFor='categoria'>Categoria</label>
                <input type='text' name='categoria' id='categoria' value={instrumento.categoria} onChange={ handleChange } />
                <br />
                <label htmlFor='descripcion'>Descripcion</label>
                <input type='text' name='descripcion' id='descripcion' value={instrumento.descripcion} onChange={ handleChange } />
                <br /> 
                <input type='submit' value={"Editar"}/>
            </form>
        </>
    )
}

module.exports = EditarInstrumentos