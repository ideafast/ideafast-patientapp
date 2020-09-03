/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {ActivityIndicator, Button} from 'react-native';
import {Colors} from '../styles/Colors';

const LoadingButton: () => React$Node = ({
  disabled,
  onPress,
  title,
  willUnmountOnSuccess = false,
}) => {
  const [isLoading, setLoading] = useState(false);

  const onButtonPressed = async () => {
    setLoading(true);
    await onPress();
    if (!willUnmountOnSuccess) {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Button
      disabled={disabled}
      title={title}
      onPress={onButtonPressed}
      style={{color: Colors.primary}}
    />
  );
};

export default LoadingButton;
