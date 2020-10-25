import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors, Spacing} from '../../styles';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import AllContent from '../../i18n/docs';
import {MarkdownView} from 'react-native-markdown-view';

import {RenderLocalImage} from './RenderImage';
import set from '@babel/runtime/helpers/esm/set';

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
 
 Axivity is worn on the **non-dominant** wrist - i.e. the side you use less - using the provided silicone strap during day and night. It can be worn for up to 9 days without having to be recharged and is suitable for day-to-day activities, including showering and bathing, but must not be worn for activities such as diving, swimming, and sauna/steam rooms.
 asdddddddddddddddddddddddw       3 433255254533254254235432432545_+{}":@!#$%^&&*()?><,./';lp[]=-0987654321 Device How To / setup for wear 
 ===============================

 The AX sensors are placed in the silicone wristband that is worn like a watch of fitness band.

 What sort of a device / application is this, what is it for and how does it work?
 ---------------------------------------------------------------------------------

 | |      |
 |:-------------:|:-------------:|
 |*   Axivity is a simple sensor device for recording movements in daily life, which you will be asked to wear for 5 days.|![](../images/ax6/1.jpeg)|
 |*   ![](../images/ax6/1.jpeg)|This is worn on your NON-DOMINANT wrist (the side you use less). It should be snug on your wrist, not too tight but not so loose that it could slip or twist. When a watch strap is worn the **buckle typically starts at 12 o'clock ** -- this would make the engraved pattern always face you on the 6 o'clock inside edge, and so always be closer to the thumb.|
 |*   If you have the watch on your LEFT arm, the engraving will be closer to your little finger.|![](../images/ax6/2.jpeg)|
 |*   ![](../images/ax6/2.jpeg)|If you have the watch on your RIGHT arm, the engraving will be closest to your thumb.|`;

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
        <MarkdownView
          rules={{
            image: RenderLocalImage,
          }}>
          {content}
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
