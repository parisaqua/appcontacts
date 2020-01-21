import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload)
            };
            default:
                return state;
    }
}

export class Provider extends Component {
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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;