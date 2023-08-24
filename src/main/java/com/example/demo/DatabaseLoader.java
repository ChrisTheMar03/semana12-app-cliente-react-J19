package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repositoryI;
	private final MusicoRepository repositoryM;
	private final BandaRepository repositoryB;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(InstrumentoRepository repositoryI, MusicoRepository repositoryM,IntegranteRepository repositorN,BandaRepository repositoryB) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryN = repositorN;
		this.repositoryB=repositoryB;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryI.save(new Instrumento("Guitarra", "Cuerda", "de madera, con caja de resonancia, 6 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Ukelele","Cuerda","de madera, con caja de resonancia pequeña, 4 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Melódica","Viento","teclado pequeño de 2 octavas, sonorizado por soplido"));
		Instrumento ins=new Instrumento("Voz", "Viento", ".");
		this.repositoryI.save(ins);
		Instrumento gui=new Instrumento("Guitarra Electrica", "Electronico", ".");
		this.repositoryI.save(gui);

		this.repositoryI.save(new Instrumento("Bateria", "Percusion", "."));
		this.repositoryM.save(new Musico("Daniel F"));
		Musico m = new Musico("Freddy");
		this.repositoryM.save(m);
		Musico m2= new Musico("Brayan");
		this.repositoryM.save(m2);
		Banda banda = new Banda("Queen");
		this.repositoryB.save(banda);
		this.repositoryN.save(new Integrante(banda, m, ins));
		this.repositoryN.save(new Integrante(banda, m2, gui));
	}
}