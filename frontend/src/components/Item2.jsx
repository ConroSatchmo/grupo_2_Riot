import React from "react";

function Item2(props) {
  return (
    <div className="card my-2">
      <div className="card-body text-center">
        <h4 className="card-title">Nombre de usuario: {props.user_name}</h4>
        <p className="card-text">Email: {props.email}</p>
        <p className="card-text">Nombre: {props.first_name}</p>
        <p className="card-text">Apellido: {props.last_name}</p>
      </div>
    </div>
  );
}

export default Item2;
