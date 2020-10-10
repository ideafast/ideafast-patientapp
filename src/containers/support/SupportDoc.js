import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors, Spacing} from '../../styles';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import AllContent from '../../i18n/docs';

import {MarkdownView} from 'react-native-markdown-view';

const SupportDoc: () => React$Node = props => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const device = props.route.params.device;
    setContent(AllContent[device.id][props.userLang]);

    props.navigation.setOptions({
      title: device.name,
    });
  }, [props.route.params.device, props.navigation, props.userLang]);

  return (
    <View style={styles.view}>
      <ScrollView style={styles.container}>
        <MarkdownView>{content}</MarkdownView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.WHITESMOKE,
  },
  container: {
    marginTop: Spacing.SCALE_16,
    paddingHorizontal: Spacing.SCALE_16,
  },
  text: {
    color: Colors.black,
  },
});

const mapStateToProps = state => state;

const SupportDocContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SupportDoc);

export default SupportDocContainer;
