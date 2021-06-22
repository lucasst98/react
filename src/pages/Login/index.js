import React, {Component} from 'react';
import {Alert} from 'react-native';
import {cpfMask} from '../../components/Mask';

import {
  Container,
  TitleContainer,
  Title,
  FormTitle,
  Input,
  SubmitButton,
  SubmitButtonLabel,
  ForgotPasswordContainer,
  SignUpButton,
  SignUpText,
  Form,
  Senha,
  FormBackground,
  ImageContainer,
} from './styles';

const eyeIcon = require('../../assets/img/eye.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      password: '',
      isPasswordVisible: true,
    };
    this.maskCpf = this.maskCpf.bind(this);
  }

  maskCpf(e) {
    this.setState({cpf: cpfMask(e)});
  }

  validateFields() {
    const {cpf, password} = this.state;

    if (!cpf) {
      Alert.alert('Atenção', 'Informe o CPF');
      return false;
    }

    // TODO: valida cpf

    if (!password) {
      Alert.alert('Atenção', 'Informe a senha');
      return false;
    }

    return true;
  }

  async submitLogin() {
    const fieldsValid = this.validateFields();
    if (!fieldsValid) {
      return;
    }
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Container>
        <Form>
          <FormBackground>
            <Input
              keyboardType="number-pad"
              returnKeyType="done"
              placeholder="CPF"
              placeholderTextColor="#4E4F50"
              onChangeText={cpf => this.maskCpf(cpf)}
              value={this.state.cpf}
            />
            <Input
              textContentType="password"
              secureTextEntry={this.state.isPasswordVisible}
              placeholder="Senha"
              returnKeyType="done"
              placeholderTextColor="#4E4F50"
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />
            <ImageContainer
              onPress={() =>
                this.setState({
                  isPasswordVisible: !this.state.isPasswordVisible,
                })
              }>
              <Senha source={eyeIcon} />
            </ImageContainer>


            <SubmitButton onPress={() => this.submitLogin()}>
              <SubmitButtonLabel>Entrar</SubmitButtonLabel>
            </SubmitButton>

            <ForgotPasswordContainer>
              <SignUpButton
                onPress={() =>
                  this.props.navigation.navigate('SignUp')
                }>
                <SignUpText>cadastre-se</SignUpText>
              </SignUpButton>
            </ForgotPasswordContainer>
          </FormBackground>
        </Form>
      </Container>
    );
  }
}

export default Login;
