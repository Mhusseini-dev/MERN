import React from 'react'

const MessageDisplayComponent = (props) => {
    return (
        <div>
            <>
            <h1>Box Creator:</h1>
            <div>{props.message.map((item, index)=>{
            let style ={background:item, height:"250px", width:"250px"};
            return <div key={index}  style={style}>box</div>
    })}</div>
        </>
        </div>
    )
}

export default MessageDisplayComponent
