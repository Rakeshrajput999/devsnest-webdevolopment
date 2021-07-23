import React from 'react';

function Card(props) {
    return (
        <div>
            <h1>{props.food}</h1>

            <p>you have consumed {props.calory}</p>
            {console.log(props.food)}
        </div>
    );
}

export default Card;