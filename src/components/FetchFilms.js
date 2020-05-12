/**
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';

const FetchFilms: () => React$Node = ({fetchFilms, films}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      fetchFilms();
      setLoading(false);
    }
  }, [isLoading, fetchFilms]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={films}
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
