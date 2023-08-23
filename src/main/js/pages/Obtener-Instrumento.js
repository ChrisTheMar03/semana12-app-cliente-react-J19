const React = require('react')
const {useState} = require('react')
const {Link,useParams} = require('react-router-dom')
const client = require('../client.js');

const ObtenerInstrumento=()=>{

    let {id} = useParams();
    const [instrumentos,setInstrumentos] = useState({})

    client({
        method:"GET",
        path:"/api/instrumentos/"+id
    }).done((res)=>{
        setInstrumentos(res.entity)
    })

    return(
        <>
            <h1>Ver Instrumento</h1>
            <h2>{instrumentos.nombre}</h2>
            <div>
                <ul>
                    <li>{instrumentos.nombre}</li>
                    <li>{instrumentos.categoria}</li>
                    <li>{instrumentos.descripcion}</li>
                </ul>
            </div>
            <Link to={"/"}>Volver</Link>
        </>
    )
}

module.exports = ObtenerInstrumento

