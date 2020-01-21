import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        nom: '',
        email: '',
        telephone: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">Ajouter un contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input 
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Nom"
                            name="nom"
                            value={this.state.nom}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <label htmlFor="telephone">Téléphone</label>
                            <input 
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Téléphone"
                            name="telephone"
                            value={this.state.telephone}
                            onChange={this.onChange}
                            />
                        </div>
                        <input 
                            type="submit"
                            value="Ajouter un contact"
                            className="btn btn-block btn-primary mt-3"
                        />
                    </form>
                </div>
            </div>
        )
    }
}
