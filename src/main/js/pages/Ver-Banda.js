const React = require('react')
const {useState,useEffect} = require('react')
const client = require('../client.js')
const {Link,useParams} = require('react-router-dom')

const VerBanda=()=>{

    const {id} = useParams();
    const [nombre,setNombre] = useState({})
    const [integrantes,setIntegrantes] = useState([])

    useEffect(()=>{    
        client({
            method:"GET",
            path:"/api/bandas/"+id
        }).done((body)=>{
            setNombre(body.entity)
        })

        client({
            method:"GET",
            path:"/api/bandas/"+id+"/formacion"
        }).done((body)=>{
            setIntegrantes(body.entity)
        })
        
    },[])


    return (
        <>
            <h1>Ver Banda</h1>
            <hr/>
            <h2>Musico: {nombre.nombre}</h2>
            <Link to="/">Volver</Link>
            <hr/>
            <h2>Formacion</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Musico</th>
                        <th>Instrumento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        integrantes.map((v,k)=>(
                            <tr key={v.ID}>
                                <td>{v.MUSICO}</td>
                                <td>{v.INSTRUMENTO}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Link to={`/verbanda/${id}/nuevointegrante`}>Nuevo Integrante</Link> |
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerBanda