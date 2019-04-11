import React, { Component } from 'react';
import {Card} from "react-bootstrap";

class Details extends Component{
    constructor(props) {
        super(props);
        this.state={
            det:{},
        };
        this.details();
    }

    details(){
        fetch("https://pokeapi.co/api/v2")
            .then(det=>det.json())
            .then(allDet=>this.setState({det:allDet}))
    }
    render() {
        return (
            <div>
                <button onClick={this.details}>Details</button>
            </div>
        )
    }

}

export default Details;