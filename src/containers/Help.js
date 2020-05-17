/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
/*import {Button, StyleSheet, Text, View, titleStyle} from 'react-native-elements';*/
import {mapDispatchToProps} from '../ducks/actions';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Help: () => React$Node = props => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
         <Text></Text>
      </View>
      <View style={styles.separator}>
         <Button
            title="FAQ"
            color='#841584'
            //color="#2E8B57"
            onPress={() => props.navigation.navigate('FAQ')}
         />
      </View>
      <View style={styles.separator}>
         <Button
            title="About Devices"
            color='#841584'
            //color="#2E8B57"
            onPress={() => props.navigation.navigate('AboutDevices')}
         />
       </View>
       <View style={styles.separator}>
          <Button
            title="Contact Us!"
            color='#841584'
            //color="#2E8B57"
            onPress={() => props.navigation.navigate('AboutDevices')}
           />
       </View>
    </View>
  );
};

/*const styles1 = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 10,
    marginHorizontal:60,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
});



const mapStateToProps = state => state;

const HelpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Help);

export default HelpContainer;
