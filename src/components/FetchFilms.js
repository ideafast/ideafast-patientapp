/**
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';

const FetchFilms: () => React$Node = ({fetchFilms, films}) => {
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
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </>
  );
};

export default FetchFilms;
