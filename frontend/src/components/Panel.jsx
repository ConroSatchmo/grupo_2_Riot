import React from 'react'

function Panel(props) {
    return (
        <div className='my-4 card' style={{backgroundColor: props.color, padding: '50px 70px'}}>
            <div className="card-body text-center">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text fs-5">Cantidad: {props.count}</p>
            </div>
        </div>
    )
}

export default Panel