import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography, Spacing, Stack} from '../styles';
import React from 'react';
import Devices from '../containers/Devices';
import Ble from '../containers/Ble';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useTranslation} from 'react-i18next';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const DevicesStack = props => {
  const {t, i18n} = useTranslation('devices');
  return (
    <StackNavigator screenOptions={Stack.headerStyle}>
      <StackScreen
        name="Devices"
        component={Devices}
        options={{
          title: t('title'),
          headerRight: () => (
            <SimpleLineIcons
              name="plus"
              color={Colors.WHITE}
              size={Typography.FONT_SIZE_30}
              style={{marginRight: Spacing.SCALE_16}}
              onPress={() => props.navigation.navigate('Ble')}
            />
          ),
        }}
      />
      <StackScreen
        name="Ble"
        component={Ble}
        options={{
          title: t('bluetooth.scanner'),
        }}
      />
    </StackNavigator>
  );
};
