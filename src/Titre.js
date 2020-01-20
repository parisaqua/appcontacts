import React, { Component } from 'react';

class Titre extends Component {
    render() {
        return(
            <div>
                <h1>Ma poule, ça c'est du composant !</h1>
                {this.props.nom}
                {this.props.children}
            </div>
        )
    }
}

export default Titre;