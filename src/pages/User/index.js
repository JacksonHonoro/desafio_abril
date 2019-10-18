import React from 'react';
import {WebView} from 'react-native-webview';

import {Container} from './styles';

export default function User({navigation}) {
  return (
    <Container>
      <WebView source={{uri: navigation.getParam('pageHtml')}} />
    </Container>
  );
}

User.navigationOptions = {
  title: 'GitHub Repositório',
};
