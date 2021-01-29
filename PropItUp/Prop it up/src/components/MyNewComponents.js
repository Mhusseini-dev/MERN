import React, {Component} from 'react';

const MyNewComponenets =(props) => {
    return <><h1> {props.firstName} , {props.lastName}</h1>
    <p>Age : {props.Age}</p>
    <p>Hair Color : {props.hair}</p></>
}
export default MyNewComponenets;