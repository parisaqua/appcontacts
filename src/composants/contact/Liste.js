import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';


export default class Liste extends Component {
    
    componentDidMount() {
        console.log('componentDidMount')
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount')
    }

    
    
    render() {

        return (
            <Consumer>
                {value =>{
                    return(
                        <Fragment>
                            <h1 className="display-4 my-4">Nos contacts :</h1>
                            {value.contacts.map(contact => (
                                <Contact 
                                    key={contact.id}
                                    id={contact.id}
                                    nom={contact.nom}
                                    email={contact.email}
                                    telephone={contact.telephone}
                                />
                            ))}
                        </Fragment>
                    )
                } }
            </Consumer>
        )

    }
}
