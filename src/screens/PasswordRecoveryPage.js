import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider } from 'react-native-paper';

const PasswordRecoveryPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text style={styles.header}>Forgot Password</Text>
                <Text style={styles.subHeader}>Enter your email and we'll send a link to reset your password.</Text>

                <TextInput
                    label="Email"
                    value={email}
                    outlineColor="#1b2838"  
                    activeOutlineColor="#66c0f4" 
                    onChangeText={setEmail}
                    mode="outlined"
                    style={styles.input}
                    right={<TextInput.Icon icon="email" />}
                />

                <Button
                    mode="contained"
                    onPress={() => alert('Success! Please check your email for confirmation.')}
                    style={styles.button}
                >
                    Submit
                </Button>
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',  
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 12,
    color: '#c7d5e0',  
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    marginBottom: 15,
    backgroundColor: '#2a475e',  
    color: '#ffffff',
  },
  button: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#66c0f4',  
  },
});

export default PasswordRecoveryPage;
