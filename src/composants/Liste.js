import React, { Component, Fragment } from 'react';
import Contact from './Contact';


export default class Liste extends Component {
    
    state = {
        contacts: [
            {
                id : 1,
                nom : 'John Doe',
                email: 'j.doe@free.fr',
                telephone: '01-55-55-55-55'
            },
            {
                id: 2,
                nom : 'Frédéric Bastian',
                email: 'fba@free.fr',
                telephone: '01-55-55-55-45'
            },
            {
                id: 3,
                nom : 'Marie Poire',
                email: 'marie.p@wanadoo.fr',
                telephone: '01-55-55-55-73'
            }
        ]
    }

    supprime = (id) => {
        const nvContacts = this.state.contacts.filter(
            contact => contact.id !== id)
            this.setState({
                contacts: nvContacts
            })
    }
    
    render() {
        return (
            <Fragment>
                {this.state.contacts.map(contact => (
                    <Contact 
                        key={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        telephone={contact.telephone}
                        supprimeClick={() => this.supprime(contact.id)}
                    />
                ))}
            </Fragment>
        )
    }
}
