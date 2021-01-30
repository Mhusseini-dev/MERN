import React, {Component} from 'react';


class MyNewComponenets extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName : this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            hairColor:this.props.haircolor
        }
    }
    changeAge = () => {
        this.setState({
            age: this.state.age + 1
        });
    }
    render(){
        const {firstName , lastName, age, hairColor} = this.state;
        return (
            <div>
                <h1>{firstName} , {lastName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.changeAge}>click me to increase age</button>
            </div>
        )
    }
}
export default MyNewComponenets; 