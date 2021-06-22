import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {cpfMask} from '../../components/Mask';

import {
  Container,
  Input,
  InputGroup,
  SubmitButton,
  SubmitButtonLabel,
  Form,
  Senha,
  FormBackground,
  ImageContainer,
} from './styles';

const image = require('../../assets/img/girl.png');
const eyeIcon = require('../../assets/img/eye.png');

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      popupShowed: false,
      fullName: '',
      cpf: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      isPasswordVisible: true,
      isPasswordConfirmationVisible: true,
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

  async submitSignIn() {
    const {cpf, fullName, email, password, passwordConfirmation} = this.state;

    if (password !== passwordConfirmation) {
      Alert.alert(
        'Tente novamente',
        'A confirmação de senha deve ser igual a senha informada',
      );
      return;
    }

    console.log({cpf, fullName, email, password});
    Alert.alert(
      'Cadastro realizado com sucesso',
      null,
      [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.goBack();
          },
        },
      ],
    );
  }

  render() {
    return (
        <Container>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "position" : null }
          enabled
          >

          <Form>
            <FormBackground>
              <Input
                // keyboardType="number-pad"
                returnKeyType="next"
                placeholder="Nome Completo"
                placeholderTextColor="#4E4F50"
                onChangeText={fullName => this.setState({fullName})}
                value={this.state.fullName}
              />
              <Input
                keyboardType="number-pad"
                returnKeyType="next"
                placeholder="CPF"
                placeholderTextColor="#4E4F50"
                onChangeText={cpf => this.maskCpf(cpf)}
                value={this.state.cpf}
              />
              <Input
                // keyboardType="number-pad"
                returnKeyType="next"
                autoCapitalize="none"
                placeholder="E-mail corporativo"
                placeholderTextColor="#4E4F50"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
              />

              <InputGroup>
                <Input
                  textContentType="password"
                  secureTextEntry={this.state.isPasswordVisible}
                  placeholder="Senha"
                  returnKeyType="next"
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
              </InputGroup>

              <InputGroup>
                <Input
                  textContentType="password"
                  secureTextEntry={this.state.isPasswordConfirmationVisible}
                  placeholder="Confirmar Senha"
                  returnKeyType="done"
                  placeholderTextColor="#4E4F50"
                  onChangeText={passwordConfirmation =>
                    this.setState({passwordConfirmation})
                  }
                  value={this.state.passwordConfirmation}
                />
                <ImageContainer
                  onPress={() =>
                    this.setState({
                      isPasswordConfirmationVisible: !this.state
                        .isPasswordConfirmationVisible,
                    })
                  }>
                  <Senha source={eyeIcon} />
                </ImageContainer>
              </InputGroup>

              <SubmitButton onPress={() => this.submitSignIn()}>
                <SubmitButtonLabel>Continuar</SubmitButtonLabel>
              </SubmitButton>
            </FormBackground>
          </Form>
          </KeyboardAvoidingView>
        </Container>
    );
  }
}
export default SignUp;
