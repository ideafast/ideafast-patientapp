// import React, { Component } from 'react';
//
// export default class NumeralDisplay extends Component {
//     constructor(props) {
//         super(props);
//         this.shouldComponentUpdate = (nextProps, nextState) => {
//             return this.props.number !== nextProps.number;
//         };
//     }
//
//     render() {
//         return (
//             <span>{this.props.number}</span>
//         );
//     }
// };

/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text} from 'react-native';

const NumeralDisplay: () => React$Node = props => {
  return <Text>'NumeralDisplay'</Text>;
};

export default NumeralDisplay;
