/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {ActivityIndicator, Button} from 'react-native';

const LoadingButton: () => React$Node = ({
  onPress,
  title,
  willUnmountOnSuccess = false,
}) => {
  const [isLoading, setLoading] = useState(false);

  const onButtonPressed = async () => {
    setLoading(true);
    await onPress();
    if (!willUnmountOnSuccess) {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return <Button title={title} onPress={onButtonPressed} />;
};

export default LoadingButton;

// /**
//  * @format
//  * @flow strict-local
//  */
// import React, {useEffect, useState} from 'react';
// import {ActivityIndicator, FlatList, Text} from 'react-native';
//
// const FetchFilms: () => React$Node = ({fetchFilms, films}) => {
//   const [isLoading, setLoading] = useState(true);
//
//   useEffect(() => {
//     if (isLoading) {
//       fetchFilms();
//       setLoading(false);
//     }
//   }, [isLoading, fetchFilms]);
//
//   return (
//     <>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={films}
//           keyExtractor={({id}, index) => id}
//           renderItem={({item}) => (
//             <Text>
//               {item.title}, {item.releaseYear}
//             </Text>
//           )}
//         />
//       )}
//     </>
//   );
// };
//
// export default FetchFilms;
