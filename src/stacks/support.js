import {createStackNavigator} from '@react-navigation/stack';
import {Stack} from '../styles';
import React from 'react';
import Support from '../containers/support/Support';
import SupportDoc from '../containers/support/SupportDoc';
import {useTranslation} from 'react-i18next';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const SupportStack = () => {
  const {t} = useTranslation('support');
  return (
    <StackNavigator screenOptions={Stack.headerStyle}>
      <StackScreen
        name="Support"
        component={Support}
        options={{
          title: t('text'),
        }}
      />
      <StackScreen name="SupportDoc" component={SupportDoc} />
    </StackNavigator>
  );
};
