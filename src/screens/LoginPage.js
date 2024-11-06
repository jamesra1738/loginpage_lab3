import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button, Text, Checkbox, Provider as PaperProvider } from 'react-native-paper';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleSignUpPress = () => {
    navigation.navigate("Signup");
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Image source={require('../../assets/images/steam.png')} style={styles.logo} />
        <Text style={styles.header}>Sign in</Text>

        <TextInput
          label="Username"
          value={username}
          outlineColor="#1b2838"
          activeOutlineColor="#66c0f4"
          onChangeText={setUsername}
          mode="outlined"
          style={styles.input}
          right={<TextInput.Icon icon="account" />}
        />

        <TextInput
          label="Password"
          value={password}
          outlineColor="#1b2838"
          activeOutlineColor="#66c0f4"
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry
          style={styles.input}
          right={<TextInput.Icon icon="key" />}
        />

        <View style={styles.options}>
          <View style={styles.rememberMe}>
            <Checkbox
              status={rememberMe ? 'checked' : 'unchecked'}
              onPress={() => setRememberMe(!rememberMe)}
              color="#66c0f4"
            />
            <Text style={{ color: '#ffffff' }}>Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Recover Account')}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" style={styles.loginAccountButton} onPress={() => alert('Function not added yet!')}>
          Login
        </Button>
        <View style={styles.signUp}>
          <Text style={styles.text}>Don't have an account? |{' '}
            <Text style={styles.signUpLink} onPress={handleSignUpPress}>
              Sign up
            </Text>
          </Text>
        </View>

        <TouchableOpacity onPress={() => alert('Steam terms and conditions outline the legal and contractual responsibilities for users of Steam services.')}>
          <Text style={styles.terms}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.header2}>James Marl L. Radiaganding | BSIT-3R10</Text>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1b2838', 
  },
  logo: {
    width: 120,        
    height: 120,       
    marginBottom: 20,
    borderRadius: 60,  
    alignSelf: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',  
    textAlign: 'center',
  },
  header2: {
    fontSize: 10,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    color: '#cccccc',   
  },
  input: {
    width: '80%',
    marginBottom: 15,
    backgroundColor: '#2a475e', 
    color: '#ffffff',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#66c0f4',
    fontSize: 14,
  },
  loginAccountButton: {
    width: '80%',
    paddingVertical: 5,
    backgroundColor: '#66c0f4',
  },
  signUp: {
    marginTop: 15,
    fontSize: 15,
  },
  signUpLink: {
    color: '#66c0f4',
  },
  terms: {
    marginTop: 15,
    color: '#c7d5e0',
    fontSize: 12,
  },
});

export default LoginPage;
