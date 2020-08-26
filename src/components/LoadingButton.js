/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {ActivityIndicator, Button} from 'react-native';

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
      color="#c71585"
    />
  );
};

export default LoadingButton;
