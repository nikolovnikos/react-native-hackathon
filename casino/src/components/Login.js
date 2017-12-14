import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';

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
            <View style={styles.container}>
                {
                    this.state.showLoginForm && <View>
                    <ScrollView style={{padding: 20}}>
                        <Text style={{fontSize: 27}}>
                            Login
                        </Text>
                        <TextInput placeholder='Username' />
                        <View style={{margin:7}} />
                        <TextInput placeholder='Password' secureTextEntry={true}/>
                        <View style={{margin:7}} />
                        <Button onPress={this.onSubmit} title="Submit"/>
                    </ScrollView>
                    </View>
                }
                {
                    !this.state.showLoginForm && this.state.isLoggedIn && <View>
                    <Button onPress={this.onLogoutPress} title="Logout"/>
                    </View>
                }
                {
                    !this.state.isLoggedIn && !this.state.showLoginForm && <View>
                    <Button onPress={this.onLoginPress} title="Login"/>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 40,
    },
});