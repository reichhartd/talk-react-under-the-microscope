import * as React from 'react';

export class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    render() {
        return (
            <div style={{ margin: '200px' }}>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input onChange={(event) => this.setState({ name: event.target.value })} id="name" />
                </form>
                {this.state.name ? <strong>Hello {this.state.name}</strong> : 'Please type your name'}
            </div>
        );
    }
}
