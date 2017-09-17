import React, {Component} from 'react';

class Stateful extends Component {
    render() {
        return <h3>Witaj {this.props.name}. Z tej strony stateful</h3>;
    }
}

export default Stateful;