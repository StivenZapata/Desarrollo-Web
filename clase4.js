//Clase Padre
class Animal{
    constructor(especie,color,sonido,habitat){
        this.especie = especie;
        this.color = color;
        this.sonido = sonido;
        this.habitat = habitat;
    }

    moverse(tipomovimiento){
        console.log(`mi movimiento es: ${tipomovimiento}`);
    }
    determinarEspecie (){
        return this. especie;
    }
    SonidoCaracteristico(){
        return this.sonido;
    }
    dondeSeEncuentra(){
        return this.habitat;
    }
}
class Perro extends Animal{
    constructor(raza,color,sonido){
       /* this.raza = raza;
        this.color = color;
        this.sonido = sonido;*/
        super(raza,color,sonido,'Casa');//inicializa el constructor del padre
    }

    ladrar(){
        return this.sonido;
    }

    sentarse(){
        console.log('Me he sentado');
    }
}

const labrador = new Perro('labrador','Blanco','Woof');
labrador.sentarse();
console.log(labrador.SonidoCaracteristico());//Regresa en cosnole 'Woof'

//clases que reciben objetos 
//clase padre
class Musica {
    constructor(info){
        this .fehcaLanzamiento = info.fehcaLanzamineto
        this.artista = info.artista;
        this.genero = info.genero;
        this.titulo = info.titulo;
    }  
    
    reproducir(){
        console.log(`se esta reproduciendo ${this.titulo} del artista ${this.artista}`);
       } 
    
      pausar(){
        return `se ha pausado ${this.titulo} del artista ${this.artista}`;
      } 

}
// creo el objeto
const informacion ={
    fehcaLanzamiento: 1989,
    artista: 'madona',
    genero: 'pop',
    titulo: 'Like a virgin',

}
const pop = new Musica(informacion);//Creo una instancia
pop.reproducir();
 
const PopUno = new Musica(
    {
        fehcaLanzamiento: 1989,
        artista: 'Queen',
        genero: 'Rock',
        titulo:'another one bites the dust',
    }
);

PopUno.reproducir();