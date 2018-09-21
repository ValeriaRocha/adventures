import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.js'
/**/
class Isla extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showModal : false
    }

    this.handleToggleModal = this.handleToggleModal.bind(this)
    this.navigate = this.navigate.bind(this)
  }

  //mostrar o esconder modal
  handleToggleModal(){
    if(this.props.texto != ""){
      this.setState({showModal : !this.state.showModal}, () => {});
    } else {
      this.props.onClick();
    }
  }

  navigate(){
    this.handleToggleModal();
    this.props.onClick();
  }

  render() {
  return (
    <div className="opcion">
      <img className="imgIsla imgSelect boton" src={"images/" + this.props.imagen} alt="isla" onClick={() => this.handleToggleModal()}/>
      <h3> {this.props.nombre}</h3>

      {this.state.showModal &&
         <Modal nombreIsla={this.props.nombre}
                imagen={this.props.imagen}
                descripcion={this.props.texto}
                onClick={this.props.onClick}
                onClose={() => this.handleToggleModal()}
                onClickNavigate={() => this.navigate()}
                />
      }

   </div>
  );
}
}

export default Isla;
