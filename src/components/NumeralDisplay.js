/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text} from 'react-native';

const NumeralDisplay: () => React$Node = ({number}) => {
  return <Text>{number}</Text>;
};

export default NumeralDisplay;
