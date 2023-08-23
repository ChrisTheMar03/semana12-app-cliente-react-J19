const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter,RouterProvider} = require('react-router-dom')

const HomePage = require('./pages/home.js')
const NuevoMusica = require('./pages/Nuevo-Musica.js');
const ObtenerInstrumento = require('./pages/Obtener-Instrumento.js');
const VerMusico = require('./pages/Ver-Musico.js');
const NuevoInstrumento = require('./pages/Nuevo-Instrumento.js');

const router = createBrowserRouter([
	{ path:"/" , element:<HomePage/> },
	{ path:"/nuevo" , element:<NuevoMusica/> },
	{ path:"/obtener/:id", element:<ObtenerInstrumento/>},
	{ path:"/vermusico/:id", element:<VerMusico/>},
	{ path:"/nuevoinstrumento", element:<NuevoInstrumento/>}
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
document.getElementById('react'))
