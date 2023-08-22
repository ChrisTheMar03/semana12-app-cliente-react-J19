const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter,RouterProvider} = require('react-router-dom')

const HomePage = require('./pages/home.js')
const NuevoMusica = require('./pages/Nuevo-Musica.js')

const router = createBrowserRouter([
	{ path:"/" , element:<HomePage/> },
	{ path:"/nuevo" , element:<NuevoMusica/> }
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
document.getElementById('react'))
