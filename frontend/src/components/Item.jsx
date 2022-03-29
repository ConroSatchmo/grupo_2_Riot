import React from 'react'

function Item(props) {
    return (
        <div className="card my-2">
            <div className="card-body text-center">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{props.description}</p>
                <p className="card-text text-muted">${props.price}</p>
            </div>
        </div>
    )
}

export default Item