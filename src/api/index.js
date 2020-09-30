// This file creates an instance of our API depending on configurations.
import LiveApi from './LiveApi';
import MockApi from './MockApi';

// Uses configuration from the .env
import Config from 'react-native-config';
const {API_URL, MOCK_API} = Config;
const isMockApi = MOCK_API === 'true';
const ApiType = isMockApi ? MockApi : LiveApi;

// Create an instance of the API for global use
const API = new ApiType(API_URL);

export {API};
