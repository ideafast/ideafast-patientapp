/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Help: () => React$Node = props => {
  return (
    <View style={styles.view}>
        <View>
            <Text>Help!</Text>
        </View>
        <View>
            <Button
                title="FAQ"
                onPress={() => props.navigation.navigate('FAQ')}
            />
        </View>
        <View>
            <Button
                title="About Devices"
                onPress={() => props.navigation.navigate('AboutDevice')}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
  },
});

const mapStateToProps = state => state;

const HelpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Help);

export default HelpContainer;
