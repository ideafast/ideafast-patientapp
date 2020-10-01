import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography, Spacing, Stack} from '../styles';
import React from 'react';
import Contributions from '../containers/Contributions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Settings from '../containers/Settings';
import Dropdownmenu from '../containers/DropdownMenu';
import {useTranslation} from 'react-i18next';
export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const ContributionsStack = props => {
  const {t, i18n} = useTranslation('contributions');
  return (
    <StackNavigator screenOptions={Stack.headerStyle}>
      <StackScreen
        name="Contributions"
        component={Contributions}
        options={{
          title: t('title'),
          headerTitleStyle: Stack.headerTitleStyle,
          headerRight: () => (
            <SimpleLineIcons
              name="settings"
              color={Colors.WHITE}
              size={Typography.FONT_SIZE_30}
              style={{marginRight: Spacing.SCALE_16}}
              onPress={() => props.navigation.navigate('Settings')}
            />
          ),
          headerLeft: () => <Dropdownmenu />,
        }}
      />
      <StackScreen
        name="Settings"
        component={Settings}
        options={{title: t('settings.title')}}
      />
      <StackScreen
        name="Dropdownmenu"
        component={Dropdownmenu}
        options={{title: 'Drop Down'}}
      />
    </StackNavigator>
  );
};
