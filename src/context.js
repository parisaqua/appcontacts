import React, {Component} from 'react';

const Context = React.createContext();

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
        ]
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