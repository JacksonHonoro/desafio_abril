import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Keyboard, ActivityIndicator, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  NameRepo,
  User,
  Avatar,
  OwnerLogin,
  Info,
  Data,
  ResetButton,
  TextButton,
} from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Repositórios',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    repos: [],
    loading: false,
  };

  async componentDidMount() {
    const repos = await AsyncStorage.getItem('repos');

    if (repos) {
      this.setState({repos: JSON.parse(repos)});
    }
  }

  componentDidUpdate(_, prevState) {
    const {repos} = this.state;

    if (prevState.repos !== repos) {
      AsyncStorage.setItem('repos', JSON.stringify(repos));
    }
  }

  handleSearchRepos = async () => {
    this.setState({loading: true});

    const {newUser} = this.state;

    if (!newUser) {
      Alert.alert('Digite um usuário');
      this.setState({loading: false});
    }

    const response = await api.get(`/users/${newUser}/repos`);

    this.setState({
      repos: response.data,
      newUser: '',
      loading: false,
    });

    Keyboard.dismiss();
  };

  handleReset = () => {
    this.setState({repos: ''});
  };

  handleNavigateUser = pageHtml => {
    const {navigation} = this.props;

    navigation.navigate('User', {pageHtml});
  };

  render() {
    const {repos, newUser, loading} = this.state;

    return (
      <Container>
        <Form>
          <Input
            placeholder="Digite um usuário"
            autoCapitalize="none"
            value={newUser}
            onChangeText={text => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleSearchRepos}
          />
          <SubmitButton loading={loading} onPress={this.handleSearchRepos}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="search" size={20} color="#FFF" />
            )}
          </SubmitButton>
        </Form>
        <ResetButton onPress={this.handleReset}>
          <TextButton>Limpar Lista</TextButton>
        </ResetButton>

        <List
          data={repos}
          keyExtractor={repo => String(repo.id)}
          renderItem={({item}) => (
            <User onPress={() => this.handleNavigateUser(item.html_url)}>
              <Data>
                <Avatar source={{uri: item.owner.avatar_url}} />
                <Info>
                  <NameRepo>{item.name}</NameRepo>
                  <OwnerLogin>{item.owner.login}</OwnerLogin>
                </Info>
              </Data>
              <Icon name="chevron-right" size={30} color="#999" />
            </User>
          )}
        />
      </Container>
    );
  }
}
