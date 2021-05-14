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

//import BytefliesEN from '../../i18n/docs/en/byteflies.md';
//import BytefliesDE from '../../i18n/docs/de/byteflies.md';
//import BytefliesNL from '../../i18n/docs/nl/byteflies.md';
//import AllContent from '../../i18n/docs';
//import {contentGetter} from '../../i18n/docs'

/*const docs = {
  BTF: {
    en: BytefliesEN,
    de: BytefliesDE,
    nl: BytefliesNL,
  }
}*/

/*const contentGetter = function (id) {
  return docs[id];
}*/

const SupportDoc: () => React$Node = props => {
  const [content, setContent] = useState('');
  let webview = null;
  /*useEffect(() => {
    const device = props.route.params.device;
    setContent(AllContent[device.id][props.userLang]);

    props.navigation.setOptions({
      title: device.name,
    });
  }, [props.route.params.device, props.navigation, props.userLang]);*/

  //const htmlFile = fs.readFileSync("../../assets/got-bbc.html");
  //const htmlFile = require('../../assets/html/got-bbc.html');

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

  console.log('debug');
  console.log(props.route.params.device.name);

  console.log(props.userLang);
  props.navigation.setOptions({
    title: props.route.params.device.name,
  });

  const styleV = {
    flex: 1,
    fontSize: '104em',
  };

  /*
  const handleWebViewNavigationStateChange = function(newNavState) {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    if (newNavState.url.includes('https://docs.ideafast.eu/pat/byteflies')) {
      //console.log('url is '+newNavState.url);
      let newURL = newNavState.url.replace('https://docs.ideafast.eu/pat/byteflies','file:///android_asset/byteflies.html');

      //let newURL = newNavState.url.replace('https://docs.ideafast.eu/pat/byteflies','');
      //newURL += `?t=${Date.now()}`;

      //ebview.getSettings().setJavaScriptEnabled(true);

      //const newURL = '#as-a-patient-do-i-need-to-do-anything-after-my-full-periods-of-use-of-a-specific-device--app-ends';
      //const newURL = 'http://bowdb.alexbowyer.com';
      console.log('redirecting to '+newURL);
      //const redirectTo = 'window.location = "' + newURL + '"';
      //webview.injectJavaScript(redirectTo);
      //webview.setCurrentURL(newURL);
      //console.log('ha');
      //webview.source = { uri: newURL };
      webview.setState({ url: `${newURL}` });

      //.loadUrl('http://bowdb.alexbowyer.com');
    }
    //console.log(newNavState);
  }
  */

  let filenameWithPath = patFilenames[props.route.params.device.id];
  if (props.userLang != 'en') {
    filenameWithPath = props.userLang + '/' + filenameWithPath;
  }

  //{{ uri: 'file:///android_asset/test.html' }}
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <WebView
        ref={ref => (webview = ref)}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        style={{flex: 1, flexDirection: 'column'}}
        allowUniversalAccessFromFileURLs={true}
        source={{uri: 'file:///android_asset/site/pat/' + filenameWithPath}}
        //source={{ uri: 'file:///android_asset/byteflies.html#as-a-patient-do-i-need-to-do-anything-on-a-daily-basis-or-all-n-days' }}
        //onNavigationStateChange={handleWebViewNavigationStateChange}
        /*onLoad={
            e => {
              webview.ref.getSettings().setBuiltInZoomControls(true);
            }
          }*/
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
