import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

function LoadingIndicatorView() {
  return <ActivityIndicator color="#009b88" size="large" />;
}

const SupportDoc: () => React$Node = props => {
  const [renderedOnce, setRenderedOnce] = useState(false);

  // TODO: give filenames in docs repo IDs of the actual docs
  const filenames = {
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

  let filename = filenames[props.route.params.device.id];

  let localURI = `file:///android_asset/site/${props.userLang}/${filename}`;

  return (
    <View style={styles}>
      <WebView
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        style={styles}
        onLoad={updateSource}
        // TODO: provide error message rather than undefined here
        source={renderedOnce ? {uri: localURI} : undefined}
      />
    </View>
  );
};

const styles = {flex: 1, flexDirection: 'column'};

const mapStateToProps = state => state;

const SupportDocContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SupportDoc);

export default SupportDocContainer;
