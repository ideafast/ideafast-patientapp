/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoadingButton from '../../src/components/LoadingButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const defaultProps = {
  disabled: false,
  onPress: () => {},
  title: 'This is a loading Button',
};

it('renders correctly', () => {
  renderer.create(<LoadingButton {...defaultProps} />);
});
