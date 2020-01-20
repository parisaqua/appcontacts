import React from 'react';
import PropTypes from 'prop-types';
import './Titre.css'

function Titre(props) {
    return (
        <div>
            <h1>Hi, my name is {props.nom}.</h1>
            <p className='text-warning'>Mon texte</p>
        </div>
    )
}

Titre.propTypes = {
    nom: PropTypes.string.isRequired
}

export default Titre;