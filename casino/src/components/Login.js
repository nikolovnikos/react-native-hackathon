import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width

export default class Login extends Component {

    state = {
        isLoggedIn: false,
        showLoginForm: false
    }

    onLoginPress = () => {
        this.setState({isLoggedIn: false, showLoginForm: true});
    };

    onLogoutPress = () => {
        this.setState({isLoggedIn: false, showLoginForm: false});
    };

    onSubmit = () => {
        this.setState({isLoggedIn: true, showLoginForm: false});
    };

    render() {
        return (
            <View style={styles.main_cont}>
            <View >
                {
                    !this.state.showLoginForm && this.state.isLoggedIn && <View>
                    <Button onPress={this.onLogoutPress} title="Logout" color="#FFA500"/>
                    </View>
                }
                {
                    !this.state.isLoggedIn && !this.state.showLoginForm && <View>
                    <Button onPress={this.onLoginPress} title="Login" color="#FFA500"/>
                    </View>
                }
            </View>
            {
                this.state.showLoginForm && <View style={styles.login_form}>
                <ScrollView style={{padding: 20}}>
                    <Text style={{fontSize: 27}}>
                        Login
                    </Text>
                    <TextInput placeholder='Username' />
                    <View style={{margin:7}} />
                    <TextInput placeholder='Password' secureTextEntry={true}/>
                    <View style={{margin:7}} />
                    <Button onPress={this.onSubmit} style={styles.login_btn} title="Submit" color="#FFA500"/>
                </ScrollView>
                </View>
            }
          </View>
        );
    }
}

const styles = StyleSheet.create({
    login_form: {
        width: width,
        top: 70,
    },
    main_cont: {
      flex: 0,
      backgroundColor: '#fff',
      right: 10,
      position: 'absolute'
    },
    container: {
        flex: 0,
        backgroundColor: '#fff',
        right: 10,
        position: 'absolute'
    },
});
