/**
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import * as actions from '../ducks/actions';

import ClickMe from '../components/ClickMe';
import FetchFilms from '../components/FetchFilms';
import NumeralDisplay from '../components/NumeralDisplay';

const Profile: () => React$Node = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => setData(json.movies))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.view}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <ClickMe setNumber={props.setNumber} />
          <NumeralDisplay number={props.number} />
          <FetchFilms />
          <Button
            title="Go to home"
            onPress={() => props.navigation.navigate('Home')}
          />
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
  },
});

function mapStateToProps(state) {
  return state;
}

const ProfileContainer = connect(
  mapStateToProps,
  actions,
)(Profile);

export default ProfileContainer;
