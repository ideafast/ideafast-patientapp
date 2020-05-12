// import React, { Component } from 'react';
//
// export default class FetchRandomUsers extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { users: [] };
//     }
//
//     async componentDidMount() {
//         const response = await fetch('https://randomuser.me/api/?results=2');
//         const json = await response.json();
//         this.setState({ users: json.results });
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.state.users.map((user, i) => (
//                     <li key={i}>{user.name.title} {user.name.first} {user.name.last}</li>
//                 ))}
//             </ul>
//         );
//     }
//}

/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text} from 'react-native';

const FetchFilms: () => React$Node = props => {
  return <Text>'FetchFilms'</Text>;
};

export default FetchFilms;
