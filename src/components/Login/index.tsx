import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {faKey, faUser} from '@fortawesome/free-solid-svg-icons';
import MyButton from '../Button';
import Input from '../Input';
import styles from './style';

interface LoginData {
  username: string;
  password: string;
}
const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<LoginData>({
    username: '',
    password: '',
  });
  const loginHandler = () => {
    if (!loginData.username || !loginData.password) {
      console.log('Blank username or password!');
      return;
    }
    console.log(loginData);
    console.log('Handle login action');
  };
  const forgotPasswordHandler = () => {
    console.log('Process that user forgot password!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.content}>
        <View style={styles.inputWrap}>
          <Input
            icon={faUser}
            label="Username"
            placeholder="Enter your username >>>"
            onChangeText={text => {
              if (!text) setLoginData({...loginData, username: text});
              else setErrors({...errors, username: 'Username is required!'});
            }}
            error={errors.username}
          />
          <Input
            icon={faKey}
            label="Password"
            secureTextEntry={true}
            placeholder="Enter your password >>>"
            onChangeText={text => setLoginData({...loginData, password: text})}
          />
        </View>
        <TouchableOpacity onPress={forgotPasswordHandler}>
          <Text>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonWrap}>
          <MyButton title="Login" onPress={loginHandler} />
        </View>
      </View>
    </View>
  );
};

export default Login;
