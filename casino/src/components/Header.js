import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SectionList,
  Image,
  Dimensions,
  Linking,
  WebView
} from 'react-native';
import { Constants } from 'expo';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Heder extends React.Component {

  state = {
      isLoggedIn: false,
      showLoginForm: false,
  }
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  _onPressButton = () => {
    let old = !this.state.visible
    this.setState({visible: old, showLoginForm: false})
  }

  onLoginPress = () => {
      this.setState({visible: false})
      if (this.state.showLoginForm === true) {
          this.setState({showLoginForm: false});
      }
      else {
          this.setState({isLoggedIn: false, showLoginForm: true});
      }
  };

  onLogoutPress = () => {
      this.setState({isLoggedIn: false, showLoginForm: false, visible: false});
  };

  onSubmit = () => {
      this.setState({isLoggedIn: true, showLoginForm: false});
  };

  onMenuClick(rounte) {
    this.props.onChangeMenu(rounte);
  }

  render() {
    return (
      <View style={styles.header}>
          <View style={styles.header_container}>
              <TouchableOpacity onPress={this._onPressButton} style={styles.menuIconWrap}>
                <Image source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/119047-200.png'}} style={styles.menuImage}  />
              </TouchableOpacity>
              <Image source={{uri: 'https://vogueplay.com/au/wp-content/uploads/2017/07/logo_casino_com_286%D1%85186.png'}}
              style={styles.logoImage} />
              <View style={styles.login_btn}>
               {
                   !this.state.showLoginForm && this.state.isLoggedIn && <View>
                   <TouchableOpacity onPress={this.onLogoutPress} style={styles.header_btns} >
                     <Text style={styles.text_def_1}>Logout</Text>
                   </TouchableOpacity>
                   </View>
               }
               {
                   !this.state.isLoggedIn &&  <View>
                   <TouchableOpacity onPress={this.onLoginPress} style={styles.header_btns} >
                     <Text style={styles.text_def_1}>Login</Text>
                   </TouchableOpacity>
                   </View>
               }
               </View>
            </View>
            {
                this.state.visible && <View>
                    <SectionList
                    style={styles.menuOpened}
                      sections={[
                        {title: 'Home', data: [{title: 'Login', route: '/login/'}, {title: 'Register', route: '/register/'}, {title: 'Mobile Casino', route: 'https://mobile.casino.com'}]},
                        {title: 'About us', data: [{title: 'About Mansion', route: '/about/'}, {title: 'Contact Us', route: '/contact/'}, {title: 'Careers', 'route': '/cariars/'}]},
                      ]}
                      renderItem={({item}) => <Text onPress={this.onMenuClick.bind(this, item.route)} style={styles.menuItem}>{item.title}</Text>}
                      renderSectionHeader={({section}) => <Text style={styles.sectionHeader} >{section.title}</Text>}
                      keyExtractor={(item, index) => index}
                    />
                </View>
            }
            {
               this.state.showLoginForm && <View style={styles.login_form}>
                 <ScrollView style={{padding: 20}}>
                     <Text style={{fontSize: 27}}>
                         Login
                     </Text>
                     <View style={{margin:5}} />
                     <TextInput placeholder='Username' style={styles.text_input}/>
                     <View style={{margin:5}} />
                     <TextInput placeholder='Password' secureTextEntry={true} style={styles.text_input}/>
                     <View style={{margin:7}} />
                     <TouchableOpacity onPress={this.onSubmit} style={[styles.header_btns, styles.submit_btn]}>
                       <Text style={styles.text_def_1}>Submit</Text>
                     </TouchableOpacity>
                 </ScrollView>
               </View>
            }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0
  },
  header_container: {
      flex: 0,
      height: 60,
      backgroundColor: '#000',
      top: 0,
      justifyContent: 'center',
      alignItems: 'center',
  },
  login_btn: {
      right: 10,
      position: 'absolute',
      top: 15
  },
  logoImage: {
    width: 143,
    height: 60,
    top: 0,
    position: 'absolute',

  },
  header_btns: {
    width: 50,
    height: 30,
    backgroundColor: "#FFA500",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  text_def_1 : {
    color: "#fff"
  },
  submit_btn : {
    width: 80
  },
  text_input : {
    paddingBottom: 5,
    paddingLeft: 5
  },
  menuIconWrap: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    left: 10,
    top: 15,
    position: 'absolute',
  },
  menuImage: {
    width: 20,
    height: 20,
  },
  menuOpened: {
    backgroundColor: '#000',
    width: '100%',
    top: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  sectionHeader: {
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: 'orange',
    marginTop: 10,
  },
  menuItem: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    width: '100%',
    color: '#fff',
  },
  login_form: {
      width: width,
      top: 0,
  }
});
