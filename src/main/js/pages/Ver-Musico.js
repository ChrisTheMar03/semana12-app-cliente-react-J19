const React = require('react')
const {useState} = require('react')
const client = require('../client.js')
const {Link,useParams} = require('react-router-dom')

const VerMusico=()=>{

    const {id} = useParams();
    const [nombre,setNombre] = useState({})

    client({
        method:"GET",
        path:"/api/musicos/"+id
    }).done((body)=>{
        setNombre(body.entity)
    })

    return (
        <>
            <h1>Musico Actual</h1>
            <h2>Musico: {nombre.nombre}</h2>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerMusico