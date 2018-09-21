import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component{

  render() {

  return (
    <div className="modalOverlay">
      <div className="modal">
        <img src="images/closeIcon.png" alt="close" className="boton" onClick={this.props.onClose} id="close" />
        <img src={"images/" + this.props.imagen} className="imgIsla" alt="isla" />
        <h3>{this.props.nombreIsla}</h3>
        <p>{this.props.descripcion}</p>
        <p className="boton" onClick={this.props.onClickNavigate} id="navegar">Navegar</p>
      </div>
   </div>
  );
}
}

export default Modal;
