import React from 'react';
import Block from './Block';

function ChessRow(props) {
     var arr=[1,2,3,4,5,6,7,8]
    return (
        <div>
            {arr.map((item,index)=>{return(
                console.log((item))
            <Block Colour={{item}%2===0?"blackbox":"whitebox"}/>)}
            )}
        </div>
    );
}

export default ChessRow; 