import React from 'react';
import ReactDOM from 'react-dom';
import './estilos/index.css';
import Isla from './Isla.js'

class App extends React.Component{

  constructor(props){
    super(props)

    this.mapa = [[1, 2], [3, 4], [3, 6], [5], [5], [0], [5]];
    this.islas = [
      {isla: "Puerto Escondido", texto: "", imagen: "puertoEscondido.png",
      textoLlegada: "Es hora de partir de la ciudad y las embarcaciones preparan su salida. Como sabrán aventureros, tendrán que ir a diferentes lugares antes de poder llegar a la Isla Escondida. Cada viaje que realicen tomará un día entero en realizarse. Es hora de partir, sin embargo uno de sus tripulantes les dice que hay dos posibles caminos a tomar: la Isla de Creta o la Isla de la Luna. La Isla de Creta es conocida por las piedras preciosas que posee y su sorprendente pueblo minero. En la Isla de la Luna encontrarás a una tribu que ha vivido ahí por generaciones, con tradiciones tan antiguas como el tiempo. Es tu momento de tomar una decisión, ¿a donde debe ir tu embarcación?"},
      {isla: "Isla de Creta",
      texto: "Acerca de la Isla de Creta: Se dice que en aquella isla vive un tranquilo pueblo minero, pero se ha escuchado que hay problemas en las minas. Es probable que necesites ARREGLAR algo dentro de las minas. Podrás tomar lo que encuentres en ellas.",
      textoLlegada: "Has llegado a la Isla de Creta. Cuando llegaste viste personas muy tristes por lo que está sucediendo y te han pedido que les ayudes a solucionar el problema que tienen en las minas. Has aceptado y has utilizado 1 PAQUETE DE HERRAMIENTAS para lograrlo. Agradecidos por tu obra te han dado 1 PAQUETE DE COMIDA. Es hora de salir nuevamente a otra isla. Esta vez al observar el mapa te das cuenta que puedes ir a la Isla del Sol o a la Isla del Fuego. Es tu momento de tomar una decisión, ¿a dónde debe ir tu embarcación?",
      imagen: "islaCreta.png"},
      {isla: "Isla de la Luna", texto: "Acerca de la Isla de la Luna: Se dice que en aquella isla vive una tribu que adora la Luna. La tribu no es amigable con los visitantes no deseados por lo que tendrás que HUIR lo más rápido posible. Del otro lado de la isla hay un tesoro que podrás tomar.", textoLlegada: "Has llegado a la Isla de la Luna. Al bajar se te ha hecho sospechoso el silencio de la Isla por lo que decidiste bajar a tus caballos para explorarla. Mientras la exploración se llevaba a cabo la tribu quiso atraparte y decidiste HUIR. Gracias a tus caballos pudiste lograrlo, pero gastaste 1 paquete de COMIDA. Al final de la isla encontraste 1 PAQUETE DE HERRAMIENTAS antiguas que podrán servirte en el resto del viaje. Es hora de salir nuevamente a otra isla. Esta vez al observar el mapa te das cuenta que puedes ir a la Isla del Sol o a la Isla del Aire. Es tu momento de tomar una decisión, ¿a dónde debe ir tu embarcación?", imagen: "islaLuna.png"},
      {isla: "Isla del Sol", texto: "Acerca de la Isla del Sol: Se dice que en la Isla del Sol habita un gigantesco cíclope que atormenta al pueblo que ahí vive. Es probable que necesites LUCHAR para derrotarlo. Podrás tomar el tesoro dentro de su cueva.", textoLlegada: "Has llegado a la Isla del Sol y por las historias decidiste a investigar el lugar. Sin darte cuenta el cíclope ha aparecido detrás de ti. Fue una pelea feroz y cansada. Para vencerlo necesitaste 1 paquete de ESPADAS, 1 COMIDA. Al vencerlo encontraste en su cueva un tesoro. Puedes abrirlo si tienes 1 PAQUETE DE HERRAMIENTAS. Los que lo abrieron encontraron $40 ROBINS que te servirán para terminar tu viaje. Es hora de salir nuevamente a otra isla. Esta vez al observar el mapa te das cuenta que tu siguiente viaje es a la Isla Escondida. ¿Tienes lo necesario para llegar? ", imagen: "islaSol.png"},
      {isla: "Isla del Fuego", texto: "Acerca de la Isla del Fuego: Se dice que en la Isla del Fuego el tiempo es fundamental. El calor abrumador puede atraparte por lo que será necesario IR LO MÁS RÁPIDO POSIBLE para poder cruzar la Isla. ", textoLlegada: "Has llegado a la Isla del fuego y el calor abrumador parecía no afectar a los caballos. Fuiste al final de la isla donde encontraste un oasis. Todo el camino hizo que tus caballos usarán 1 paquete de COMIDA. Encontraste $30 Robins que te servirán para terminar tu viaje. Es hora de salir nuevamente a otra isla. Esta vez al observar el mapa te das cuenta que tu siguiente viaje es a la Isla Escondida. ¿Tienes lo necesario para llegar?", imagen: "islaFuego.png"},
      {isla: "Isla Escondida", texto: "", textoLlegada: "¡Has llegado a la Isla Escondida!. Puedes comprobar que las leyendas son ciertas, al llegar encuentras un tesoro de $350 ROBINS.", imagen: "islaEscondida.png"},
      {isla: "Isla del Aire", texto: "Acerca de la Isla del Aire: Se dice que en la Isla del Aire hay un pueblo hermoso y lleno de riquezas, pero unos piratas lo han infestado. Tendrás que LUCHAR contra ellos para poder continuar tu travesía.", textoLlegada:" Has llegado a la Isla del Aire donde los piratas te estaban esperando. Se han robado tus caballos y pero pudiste vencerlos con 1 PAQUETE DE ESPADAS. Es hora de salir nuevamente a otra isla. Esta vez al observar el mapa te das cuenta que tu siguiente viaje es a la Isla Escondida. ¿Tienes lo necesario para llegar? ", imagen: "islaAire.png"}
    ]
    
    this.state = {
      currentIsland : 0
    };

    this.navigate = this.navigate.bind(this)
    this.islasDestino = this.islasDestino.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

//para desplegar las posibles islas destino
  islasDestino(){
    let newJSX = [];
    this.mapa[this.state.currentIsland].map((isla, index) => {

      //Para hacer el loop para regresar al inicio
      var nombreIsla = "";
      if(isla == "0"){
        nombreIsla = "Regresar al Inicio";
      }else{
        nombreIsla = this.islas[isla].isla;
      }

      newJSX.push( <div key={index} className="sectionIslaDestino1"> <Isla nombre={nombreIsla}
        texto={this.islas[isla].texto}
        onClick={() => this.navigate(isla)}
        imagen={this.islas[isla].imagen} /> </div>);
      })

      return newJSX;
  }

  navigate(isla){
    this.setState({
      currentIsland : isla
    })
    window.scrollTo(0, 0)
  }

  //Regresar a islas anteriores
  handleBack(){

  }

  render() {
  var indice = this.state.currentIsland;

  return (
    <div>
      <div className="superior">
        <img onClick={() => this.handleBack} src="/images/backIcon.png" id="backIcon" className="boton" alt="back" />
        <h1> {this.islas[indice].isla} </h1>
        <img className="imgIsla" src={"/images/" + this.islas[indice].imagen} alt="isla" />
      </div>
      <div className="inferior">
        <p>{this.islas[indice].textoLlegada}</p>
        <div className="flex-container">
          {this.islasDestino()}
        </div>
      </div>
    </div>
    );
  }

}

export default App;
