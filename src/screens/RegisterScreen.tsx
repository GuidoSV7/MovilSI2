import React from 'react'
import { Text, View, TextInput, Platform, KeyboardAvoidingView, Keyboard, Alert, TouchableOpacity } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> {
    navigation:any
}

export const RegisterScreen = ({ navigation }: Props) => {

    const { nombre,apellido,telefono,email, password,password_confirmation, onChange } = useForm({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        password: '',
        password_confirmation: ''
     });

     const onRegister = () => {
        console.log({nombre,apellido,telefono,email, password,password_confirmation});
        Keyboard.dismiss();
        // signIn({ correo: email, password });
    }
    
    return (
        <>
            
            <KeyboardAvoidingView
                    style={{ flex: 1, backgroundColor:'#5856D6' }}
                    behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
                >
            <View style={loginStyles.formContainer}>
                <WhiteLogo/>
    
                         <Text style={ loginStyles.title }>Registro</Text>

                         <Text style={ loginStyles.label }>Nombre:</Text>
                        <TextInput 
                            placeholder="Ingrese su nombre:"
                            placeholderTextColor="rgba(255,255,255,0.4)"
                            
                            underlineColorAndroid="white"
                            style={[ 
                                loginStyles.inputField,
                                ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                            ]}
                            selectionColor="white"
    
                            onChangeText={ (value) => onChange(value, 'nombre') }
                            value={ nombre }
                            onSubmitEditing={ onRegister }
    
    
                            autoCapitalize="words"
                            autoCorrect={ false }
                        />

                        <Text style={ loginStyles.label }>Apellido:</Text>
                        <TextInput 
                            placeholder="Ingrese su apellido:"
                            placeholderTextColor="rgba(255,255,255,0.4)"
                            
                            underlineColorAndroid="white"
                            style={[ 
                                loginStyles.inputField,
                                ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                            ]}
                            selectionColor="white"
    
                            onChangeText={ (value) => onChange(value, 'apellido') }
                            value={ apellido }
                            onSubmitEditing={ onRegister }
    
    
                            autoCapitalize="words"
                            autoCorrect={ false }
                        />

                        <Text style={ loginStyles.label }>Telefono:</Text>
                        <TextInput 
                            placeholder="Ingrese su telefono:"
                            placeholderTextColor="rgba(255,255,255,0.4)"
                            
                            underlineColorAndroid="white"
                            style={[ 
                                loginStyles.inputField,
                                ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                            ]}
                            selectionColor="white"
    
                            onChangeText={ (value) => onChange(value, 'telefono') }
                            value={ telefono }
                            onSubmitEditing={ onRegister }
    
    
                            autoCapitalize="none"
                            autoCorrect={ false }
                        />
    
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
    
                            onChangeText={ (value) => onChange(value, 'email') }
                            value={ email }
                            onSubmitEditing={ onRegister }
    
    
                            autoCapitalize="none"
                            autoCorrect={ false }
                        />
    
                        <Text style={ loginStyles.label }>Password:</Text>
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
    
                            onChangeText={ (value) => onChange(value, 'password') }
                            value={ password }
                            onSubmitEditing={ onRegister }
    
    
                        />

                        <Text style={ loginStyles.label }>Password Confirmation:</Text>
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
    
                            onChangeText={ (value) => onChange(value, 'password_confirmation') }
                            value={ password_confirmation }
                            onSubmitEditing={ onRegister }
    
    
                        />
    
                        {/* Boton login */}
                        <View style={ loginStyles.buttonContainer }>
                            <TouchableOpacity
                                activeOpacity={ 0.8 }
                                style={ loginStyles.button }
                                onPress={onRegister}
                                
                            >
                                <Text style={ loginStyles.buttonText } >Crear Cuenta</Text>
                            </TouchableOpacity>
                        </View>
    
                        {/* Crear una nueva cuenta */}
                        <View style={ loginStyles.newUserContainer  }>
                            <TouchableOpacity
                                activeOpacity={ 0.8 }
                                onPress={ () => navigation.replace('LoginScreen') }
                            >
                                <Text style={ loginStyles.buttonText }>Volver al login</Text>
                            </TouchableOpacity>
                        </View>
                        
    
            </View>
    
            </KeyboardAvoidingView>
            
                        
    
        </>
      )
}
