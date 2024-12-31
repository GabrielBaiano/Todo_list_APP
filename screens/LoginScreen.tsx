import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

interface Props {}

const LoginScreen: React.FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleLogin = () => {
    setUsernameError(null);
    setPasswordError(null);

    if (username === 'teste' && password === '123') {
      navigation.navigate('Home');
    } else {
      if (username !== 'teste') {
        setUsernameError('Username inválido');
      }
      if (password !== '123') {
        setPasswordError('Senha inválida');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name="rocket" size={30} color="#8A2BE2" style={styles.rocketIcon} />
        <Text style={styles.title}>todo</Text>
      </View>

      <TextInput
        style={[styles.input, usernameError && styles.inputError]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}

      <View style={styles.passwordInputContainer}>
        <TextInput
          style={[styles.passwordInput, passwordError && styles.inputError]}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    rocketIcon:{
        marginRight: 10
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#8A2BE2',
    },
  input: {
    width: '100%',
    height: 52,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: 52,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  eyeButton: {
    backgroundColor: '#8A2BE2',
    width: 52,
    height: 52,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    },
  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#8A2BE2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;