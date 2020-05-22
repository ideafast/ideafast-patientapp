/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const FAQ: () => React$Node = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Question1:</Text>
              <Text style={styles.sectionDescription}>
                This is <Text style={styles.highlight}>answer1</Text> lalla..
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Question2:</Text>
              <Text style={styles.sectionDescription}>
                This is <Text style={styles.highlight}>answer2</Text> lalla..
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Question3</Text>
              <Text style={styles.sectionDescription}>
                This is <Text style={styles.highlight}>answer3</Text> lalla..
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Question4:</Text>
              <Text style={styles.sectionDescription}>
                This is <Text style={styles.highlight}>answer4</Text> lalla..
              </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Question5:</Text>
                <Text style={styles.sectionDescription}>
                    This is <Text style={styles.highlight}>answer5</Text> lalla..
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Question6:</Text>
                <Text style={styles.sectionDescription}>
                    This is <Text style={styles.highlight}>answer6</Text> lalla..
                </Text>
             </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Question7:</Text>
                <Text style={styles.sectionDescription}>
                    This is <Text style={styles.highlight}>answer7</Text> lalla..
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Question8:</Text>
                <Text style={styles.sectionDescription}>
                    This is <Text style={styles.highlight}>answer8</Text> lalla..
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Question9:</Text>
                <Text style={styles.sectionDescription}>
                    This is <Text style={styles.highlight}>answer9</Text> lalla..
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Question10:</Text>
                <Text style={styles.sectionDescription}>
                    This is <Text style={styles.highlight}>answer10</Text> lalla..
                    </Text>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps = state => state;

const FAQContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FAQ);

export default FAQContainer;
