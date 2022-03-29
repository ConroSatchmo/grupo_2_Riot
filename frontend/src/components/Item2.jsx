import React from "react";

function Item2(props) {
  return (
    <div className="card my-2">
      <div className="card-body text-center">
        <h4 className="card-title">Email: {props.email}</h4>
        <p className="card-text">Nombre de usuario: {props.user_name}</p>
        <p className="card-text">Nombre: {props.first_name}</p>
        <p className="card-text">Apellido: {props.last_name}</p>
      </div>
    </div>
  );
}

export default Item2;
