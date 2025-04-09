// screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      alert('Please fill all fields');
      return;
    }
    const user = { username, email, password };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    alert('Sign Up Successful');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/carrot.png')} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.terms}>
        By continuing you agree to our <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.bottomText}>Already have an account? <Text style={styles.link}>Signup</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 52,
    height: 60,
    alignSelf: 'center',
    top:-60,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: 4,
  },
  subtitle: {
    color: '#777',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  terms: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#27ae60',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomText: {
    textAlign: 'center',
    color: '#777',
  },
});
