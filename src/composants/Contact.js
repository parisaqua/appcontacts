import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="card card-body mb-3">
                <h4>{this.props.nom}</h4>
                <ul className="card card-body mb-3">
                    <li className="list-group-item">
                        Email : {this.props.email}
                    </li>
                    <li className="list-group-item">
                        Téléphone : {this.props.telephone}
                    </li>
                </ul> 
            </div>
        )
    }
}
