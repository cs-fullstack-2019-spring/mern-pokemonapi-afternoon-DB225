import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Details from "./Details";

class ListPokemon extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
        };
        this.componentDidMount();
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=964')
            .then(data=>data.json())
            .then(allData=>this.setState({data:allData.results}))
    }


    render(){
        return this.state.data.map((eachPok,i)=>{
            console.log(i);
            return(
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{eachPok.name}</Card.Title>
                        <Card.Img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1)+".png"} />
                    </Card.Body>
                    {/*<Details />*/}
                </Card>
            )
        });
    }
}

export default ListPokemon;
