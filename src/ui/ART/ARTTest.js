import React from 'react';

import {
    ART
} from 'react-native';

var {
    Path,
    Shape,
} = ART;

export default class Plant extends React.Component {
    render() {
        let d;
        return (
            <Shape {...this.props} d={d}/>
        );
    }
}