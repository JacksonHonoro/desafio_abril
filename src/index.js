import React from 'react';
import {StatusBar} from 'react-native';

import './config/reactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#26a4f2" />
      <Routes />
    </>
  );
}
