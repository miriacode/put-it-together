import React, { Component } from "react";

export default class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age,
        }
    }

    sumar() {
        console.log("Adding one year");
        this.setState({
          age: this.state.age + 1,
        });
    }

    render(){
        return(
            <>
            <h3>{this.props.lastName}, {this.props.firstName}</h3>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
    
            <button onClick={()=> this.sumar()}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </>
        )
    }
}

