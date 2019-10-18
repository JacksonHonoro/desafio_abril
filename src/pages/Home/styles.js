import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #2991ce;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.5 : 1)};
`;

export const ResetButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #f75959;
  border-radius: 4px;
  padding: 10px;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 5px 10px;
  border-bottom-width: 1px;
  border-color: #ddd;
`;

export const Data = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 10px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Info = styled.View`
  align-items: flex-start;
  margin: 0px 10px;
`;

export const NameRepo = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const OwnerLogin = styled.Text`
  font-size: 12px;
  color: #999;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
