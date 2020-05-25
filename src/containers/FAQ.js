import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
//import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Answer1 =
  'No. The warning has been already reported: https://github.com/archriss/react-native-snap-carousel/issues/672'
const Answer2 =
  'No, The warning will be fixed soon, as Animatable is open source and they are working on the problem';

const Answer3 =
  'Yes, I know, Do not worry, I am smart :|';

const Answer4 =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';
const Answer5 =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'Shall I report the warning on this page?',
    content: Answer1,
  },
  {
    title: 'Shall I worried about the warning on this page? ',
    content: Answer2,
  },
  {
    title: 'Do I know the rest of questions are fake and those are just for test?  ',
    content: Answer3,
  },
  {
    title: 'What sort of a device / application is this, what is it for and how does it work?',
    content: Answer4,
  },
  {
    title: 'Is it dangerous for my body if I use that?',
    content: Answer5,
  },
  {
    title: 'How long shall I keep that?',
    content: Answer1,
  },
  {
    title: 'What will need to be done before a patient can start using this?  ',
    content: Answer1,
  },
  {
    title: 'Question 8',
    content: Answer1,
  },
  {
    title: 'Question 9',
    content: Answer1,
  },
  {
    title: 'Question 10',
     content: Answer1,
  },

];

export default class FAQ extends Component {

  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.active]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.active]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
            <Text style={styles.content}>{section.content}</Text>
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    //marginTop: 2,
    paddingHorizontal: 14,
    //paddingTop: Constants.statusBarHeight,
  },
  title: {
    //textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: Colors.black,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    //textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  content: {
    //padding: 20,
    marginTop: 8,
    backgroundColor: '#fff',
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
  },

});
