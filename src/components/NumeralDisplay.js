/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text} from 'react-native';

const NumeralDisplay: () => React$Node = props => {
  return <Text>{props.number}</Text>;
};

export default NumeralDisplay;
