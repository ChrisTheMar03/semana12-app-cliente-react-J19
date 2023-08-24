const React = require('react')
const {useState,useEffect} = require('react')
const client = require('../client.js')
const {Link,useParams} = require('react-router-dom')

const VerBanda=()=>{

    const {id} = useParams();
    const [nombre,setNombre] = useState({})

    useEffect(()=>{    
        client({
            method:"GET",
            path:"/api/bandas/"+id
        }).done((body)=>{
            setNombre(body.entity)
        })
        
    },[])


    return (
        <>
            <h1>Ver Banda</h1>
            <h2>Musico: {nombre.nombre}</h2>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerBanda