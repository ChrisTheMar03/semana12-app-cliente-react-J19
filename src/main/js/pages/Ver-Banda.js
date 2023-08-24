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
            <table>
                <thead>
                    <th>
                        Musico
                    </th>
                    <th>Instrumento</th>
                </thead>
                <tbody>
                    {
                        integrantes.map((v,k)=>(
                            <tr key={integrantes.ID}>
                                <td>{integrantes.MUSICO}</td>
                                <td>{integrantes.INSTRUMENTO}</td>
                            </tr>
                        ))
                    }
                    
                    
                </tbody>
            </table>
            <Link to={`/ver-banda/${id}/nuevo-integrante`}>Nuevo Integrante</Link> |
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerBanda