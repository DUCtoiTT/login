import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);
        if (email === storedEmail && password === storedPassword) {
          alert('Login Successful');
        } else {
          alert('Invalid email or password');
        }
      } else {
        alert('No user found. Please sign up first.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image source={require('./assets/carrot.png')} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Enter your email and password</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logo: {
    width: 52,
    height: 60,
    alignSelf: 'center',
    top:-60,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    color: '#777',
    marginBottom: 32,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  forgot: {
    textAlign: 'right',
    color: '#27ae60',
    marginBottom: 24,
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  bottomText: {
    color: '#777',
    fontSize: 14,
  },
  link: {
    color: '#27ae60',
    fontWeight: '600',
    fontSize: 14,
  },
});