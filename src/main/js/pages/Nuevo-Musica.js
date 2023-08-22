const React = require('react')
const {Link} = require('react-router-dom')

const NuevoMusica = ()=>{
    return(
        <>
            <h1>Nueva Musica</h1>
            <Link to={"/"}>Volver</Link>
        </>
    )
}
module.exports = NuevoMusica