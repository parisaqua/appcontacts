import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class Contact extends Component {
    
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    
    state= {
        show: false
    }

    supprimerContact = (id, dispatch) => {
       dispatch({type: 'DELETE_CONTACT', payload: id})
    }

    montrerContact = () => {
        this.setState({
            show: !this.state.show
        })
    }
    
    render() {

        return (
            <Consumer>
                { value => {
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {this.props.nom}&nbsp;
                                <i style={{cursor: 'pointer'}} 
                                className="fas fa-sort-down"
                                onClick={this.montrerContact}>
                                </i>
                                <i className="fas fa-times text-danger" 
                                style={{cursor: 'pointer', float: 'right'}}
                                onClick={ () => this.supprimerContact(this.props.id, value.dispatch) } >
                                </i>
                            </h4>
                            {this.state.show ? (
                                <ul className="card card-body mb-3">
                                    <li className="list-group-item">
                                        Email : {this.props.email}
                                    </li>
                                    <li className="list-group-item">
                                        Téléphone : {this.props.telephone}
                                    </li>
                                </ul> 
                            ): null}
                        </div>
                    )
                } }
            </Consumer>
        )
    }
}
