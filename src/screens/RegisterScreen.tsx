import React from 'react'
import { Text, View, TextInput, Platform, KeyboardAvoidingView, Keyboard, Alert, TouchableOpacity } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';

export const RegisterScreen = () => {
    return (
        <>
            
            <KeyboardAvoidingView
                    style={{ flex: 1, backgroundColor:'#5856D6' }}
                    behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
                >
            <View style={loginStyles.formContainer}>
                <WhiteLogo/>
    
                         <Text style={ loginStyles.title }>Login</Text>
    
                        <Text style={ loginStyles.label }>Email:</Text>
                        <TextInput 
                            placeholder="Ingrese su email:"
                            placeholderTextColor="rgba(255,255,255,0.4)"
                            keyboardType="email-address"
                            underlineColorAndroid="white"
                            style={[ 
                                loginStyles.inputField,
                                ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                            ]}
                            selectionColor="white"
    
                            // onChangeText={ (value) => onChange(value, 'email') }
                            // value={ email }
                            // onSubmitEditing={ onLogin }
    
    
                            autoCapitalize="none"
                            autoCorrect={ false }
                        />
    
                        <Text style={ loginStyles.label }>Passoword:</Text>
                        <TextInput 
                            placeholder="*****"
                            placeholderTextColor="rgba(255,255,255,0.4)"
                            keyboardType="email-address"
                            underlineColorAndroid="white"
                            style={[ 
                                loginStyles.inputField,
                                ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                            ]}
                            selectionColor="white"
    
                            // onChangeText={ (value) => onChange(value, 'email') }
                            // value={ email }
                            // onSubmitEditing={ onLogin }
    
    
                        />
    
                        {/* Boton login */}
                        <View style={ loginStyles.buttonContainer }>
                            <TouchableOpacity
                                activeOpacity={ 0.8 }
                                style={ loginStyles.button }
                                
                            >
                                <Text style={ loginStyles.buttonText } >Login</Text>
                            </TouchableOpacity>
                        </View>
    
                        {/* Crear una nueva cuenta */}
                        <View style={ loginStyles.newUserContainer  }>
                            <TouchableOpacity
                                activeOpacity={ 0.8 }
                                onPress={ () => navigation.replace('RegisterScreen') }
                            >
                                <Text style={ loginStyles.buttonText }>Nueva cuenta </Text>
                            </TouchableOpacity>
                        </View>
    
            </View>
    
            </KeyboardAvoidingView>
            
                        
    
        </>
      )
}
