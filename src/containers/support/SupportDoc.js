import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors, Spacing} from '../../styles';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import AllContent from '../../i18n/docs';
import {MarkdownView} from 'react-native-markdown-view';

import {RenderLocalImage, renderImage} from './RenderImage';

const testExample = `
 General Device Introduction
 ---------------------------
 
 The Axivity (AX6) is a wrist worn sensor for monitoring and recording movement including _body position, acceleration,_ and _direction_ . This data can be used to identify activities, such as sitting, walking, falling, etc. Axivity records data every second and stores it inside the small black sensor “puck” (Figure 1).
 
 **How does this device look?**
 
 Axivity comes in two parts: a silicone strap and a small sensor “puck” as illustrated in **Figure 1,** which is inserted inside the wristband and worn on the wrist (Figure 2).
 
 |Figure 1: Axivity wristband and sensor “puck”|**Figure 2:** Placement on a wrist|
 
 **What does it record?**
 
 The Axivity automatically records anonymised movement data on the sensor “puck”. This data includes: your _position of wrist_ , the _acceleration_ and the _direction_ that you move.
 
 **How is it used?**
 
 Axivity is worn on the **non-dominant** wrist - i.e. the side you use less - using the provided silicone strap during day and night. It can be worn for up to 9 days without having to be recharged and is suitable for day-to-day activities, including showering and bathing, but must not be worn for activities such as diving, swimming, and sauna/steam rooms.`;

const SupportDoc: () => React$Node = props => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const device = props.route.params.device;
    setContent(AllContent[device.id][props.userLang]);

    props.navigation.setOptions({
      title: device.name,
    });
  }, [props.route.params.device, props.navigation, props.userLang]);

  // note: https://github.com/Benjamin-Dobell/react-native-markdown-view/blob/fff1a8ff00a7da37d284a9d0951af6d508042ce4/renders.js#L30-L37
  return (
    <View style={styles.view}>
      <ScrollView style={styles.container}>
        <MarkdownView
          rules={{
            image: RenderLocalImage(renderImage),
          }}>
          {testExample}
        </MarkdownView>
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
