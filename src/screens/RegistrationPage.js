import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Avatar, Text, Checkbox, Provider as PaperProvider } from 'react-native-paper';

const RegistrationPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Avatar.Icon size={80} icon="account" style={styles.avatar} />
                <Text style={styles.header}>Create an Account</Text>
                
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
                <TextInput
                    label="Confirm Password"
                    value={confirmPassword}
                    outlineColor="#1b2838"
                    activeOutlineColor="#66c0f4"
                    onChangeText={setConfirmPassword}
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
                        <Text style={styles.termsText}>I have read and agree to the </Text>
                    </View>
                    <TouchableOpacity onPress={() => alert('Steam terms and conditions outline the legal and contractual responsibilities for users of Steam services.')}>
                        <Text style={styles.terms}>terms of service.</Text>
                    </TouchableOpacity>
                </View>
                <Button
                    mode="contained"
                    onPress={() => alert('Your registration has been successful!')}
                    style={styles.button}
                >
                    Sign up
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
    avatar: {
        backgroundColor: '#777777',
        marginBottom: 30,
        alignSelf: 'center',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#ffffff',  
        textAlign: 'center',
    },
    input: {
        width: '80%',
        marginBottom: 15,
        backgroundColor: '#2a475e',  
        color: '#ffffff',
    },
    options: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        width: '80%',
    },
    rememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    termsText: {
        color: '#c7d5e0',  
    },
    terms: {
        color: '#66c0f4',  
    },
    button: {
        marginTop: 10,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#66c0f4',  
    },
});

export default RegistrationPage;
