import React from 'react';
import PropTypes from 'prop-types'

function Titre(props) {
    return (
        <div>
            <h1>Hi, my name is {props.nom}.</h1>
        </div>
    )
}

Titre.propTypes = {
    nom: PropTypes.string.isRequired
}

export default Titre;