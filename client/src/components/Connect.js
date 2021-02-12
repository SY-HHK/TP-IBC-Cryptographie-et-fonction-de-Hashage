import React, { Component } from 'react'

class Connect extends Component {

    render() {
        if (this.props.connected.code === 1)
            return (
                <small className="text-secondary">
                    {this.props.connected.email}
                </small>
            );
        else return (
            <small className="text-secondary">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#connect">Connect</button>
                {this.props.connected.email}
            </small>
        )
    }
}

export default Connect;
