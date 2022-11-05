import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number );

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
     return (
        <div className='Pokecard'>
            
            <h1 className='Pokecard-title'>{this.props.name}</h1>
            <div className='Pokecard-img'>
                <img  src={imgSrc} alt={this.props.name} />
            </div>
            <p className='Pokecard-data'> Type: <b>{this.props.type}</b></p>
            <p className='Pokecard-data'> Experience: <b>{this.props.exp}</b></p>
            
        </div>
        )
    }
}

export default Pokecard;