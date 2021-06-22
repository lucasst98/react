import styled from 'styled-components/native';
import {Platform} from 'react-native';


export const Container = styled.View`
  padding: 28px;
  background: #fff;
  flex: 1;
`;


export const Input = styled.TextInput`
  border-color: #e9e9e9;
  border-width: 2px;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 16px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: #4e4f50;
`;


export const RememberPasswordLabel = styled.Text`
  margin-right: 8px;
  font-size: 14px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #1877f2;
  padding: 12px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  margin-top: 26px;
`;

export const SubmitButtonLabel = styled.Text`
  font-weight: normal;
  font-size: 22px;
  color: #eeeeee;
`;

export const ForgotPasswordContainer = styled.View`
  border-color: #e9e9e9;
  /* background: red; */
  border-top-width: 1px;
  margin-top: 36px;
  justify-content: space-between;
  flex-direction: row;
`;


export const ForgotPasswordText = styled.Text`
  font-weight: normal;
  font-size: 14px;
  color: #1877f2;
`;

export const SignUpButton = styled.TouchableOpacity`
  padding: 6px 15px 6px 0px;
`;

export const SignUpText = styled(ForgotPasswordText)``;

export const Form = styled.View`
  margin-top: 16px;
  /* background: red; */
  z-index: 5;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  position: absolute;
  top: -135px;
  right: -5px;
  z-index: 0;
  height: 260px;
  width: 160px;
`;

export const ImageContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'ios' ? '63px': '80px'};
  right: 0px;
  z-index: 0;
  padding: 10px;
`;

export const Senha = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 20px;
  width: 20px;
`;

export const FormBackground = styled.View`
  background: #fff;
  z-index: 10;
`;
