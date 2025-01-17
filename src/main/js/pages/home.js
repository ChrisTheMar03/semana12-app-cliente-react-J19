const React = require('react');
const client = require('../client.js');
const {Link} = require('react-router-dom')

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {instrumentos: [],musicos: [],bandas:[]};
	}
	componentDidMount() {

		client({method: 'GET', path: '/api/instrumentos'}).done(response => {
			this.setState({instrumentos: response.entity._embedded.instrumentos});
		});

		client({method: 'GET', path: '/api/musicos'}).done(response => {
			this.setState({musicos: response.entity._embedded.musicos});
		});

		client({method: 'GET', path: '/api/bandas'}).done(response => {
			this.setState({bandas: response.entity._embedded.bandas});
		});


	}
	render() {
		return (
			<>
				<h1>Semana 13 HomePage</h1>
				<div style={{width:"100%",display:"flex"}}>
					<div style={{width:"calc(100%/3)"}}>
						<Titulo emogi="🎸" entidad="Instrumentos" />
						<InstrumentoList instrumentos={this.state.instrumentos}/>
						<Link to={"/nuevoinstrumento"}>Agregar Instrumento</Link>
					</div>
					<div style={{width:"calc(100%/3)"}}>
						<Titulo emogi="🎶" entidad="Musicos" />
						<MusicoList musicos={this.state.musicos}/>
						<Link to={"/nuevo"} >Agregar Musico</Link>
					</div>
					<div style={{width:"calc(100%/3)"}}>
						<Titulo emogi="🅱" entidad="Banda" />
						<BandasList bandas={this.state.bandas}/>
						<Link to={"/nuevobanda"} >Agregar Banda</Link>
					</div>
				</div>
				
				
				
			</>
		)
	}
}


const Titulo = (props)=>{
	return(
		<>
			<hr/>
			<h2>{props.emogi} - {props.entidad}</h2>
			<hr/>
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}

class BandasList extends React.Component{
	render(){
		const bandaz = this.props.bandas.map(b=> <Banda key={b._links.self.href} banda={b} /> )
		return(
			<table border="1">
				<thead>
					<th>Nombre</th>
					<th>Acciones</th>
				</thead>
				<tbody>
					{bandaz}
				</tbody>
			</table>
		)

	}
}

class Banda extends React.Component{
	render() {
		const id  = this.props.banda._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.banda.nombre}</td>
				<td>
					<Link to={"/verbanda/"+id} >Ver</Link>
				</td>
			</tr>
		)
	}
}



class InstrumentoList extends React.Component{
	render() {
		const instrumentos = this.props.instrumentos.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Acciones</th>
					</tr>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}
class MusicoList extends React.Component{
	render() {
		const musicos = this.props.musicos.map(musico =>
			<Musico key={musico._links.self.href} musico={musico}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{musicos}
				</tbody>
			</table>
		)
	}
}

class Instrumento extends React.Component{
	render() {
		//Ultimo elemento de la ruta
		const id  = this.props.instrumento._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>
					<Link to={"/obtener/"+id}>Obtener</Link>
				</td>
				<td>
					<Link to={"/editarinstru/"+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Musico extends React.Component{
	render() {
		const id  = this.props.musico._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.musico.nombre}</td>
				<td>
					<Link to={"/vermusico/"+id} >Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage