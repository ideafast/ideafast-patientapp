/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button} from 'react-native';

const ClickMe: () => React$Node = ({setNumber}) => {
  return (
    <Button
      title="Click Me"
      onPress={() => setNumber(Math.floor(100 * Math.random()))}
    />
  );
};

export default ClickMe;
