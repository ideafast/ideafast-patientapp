import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Colors, Spacing} from '../../styles';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

function LoadingIndicatorView() {
  return <ActivityIndicator color="#009b88" size="large" />;
}

const SupportDoc: () => React$Node = props => {
  const [renderedOnce, setRenderedOnce] = useState(false);
  let webview = null;

  const patFilenames = {
    AX6: 'ax6.html',
    BTF: 'byteflies.html',
    DRM: 'dreem.html',
    BED: 'ebed-sensor.html',
    BVN: 'biovotion.html',
    MMM: 'move-monitor.html',
    SMP: 'hubphone.html',
    TMA: 'stress-monitor.html',
    TFA: 'cantab-thinkfast.html',
    VTP: 'vital-patch.html',
    YSM: 'zk.html',
  };

  const updateSource = () => {
    setRenderedOnce(true);
  };

  props.navigation.setOptions({
    title: props.route.params.device.name,
  });

  const styleV = {
    flex: 1,
    fontSize: '104em',
  };

  let filenameWithPath = patFilenames[props.route.params.device.id];
  if (props.userLang != 'en') {
    filenameWithPath = props.userLang + '/' + filenameWithPath;
  }
  let localURI = 'file:///android_asset/site/pat/' + filenameWithPath;

  // comment
  console.log('');

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <WebView
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        style={{flex: 1, flexDirection: 'column'}}
        onLoad={updateSource}
        source={renderedOnce ? {uri: localURI} : undefined}
      />
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
