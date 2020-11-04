import * as React from 'react';

export function Greeting() {
    const [name, setName] = React.useState('');
    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input onChange={(event) => setName(event.target.value)} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    );
}
