import React from 'react';
import { StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SectionList,
  Image,} from 'react-native';  

export default class Heder extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  _onPressButton = () => {
    let old = !this.state.visible
    this.setState({
      visible: old
    })
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
            <TouchableOpacity onPress={this._onPressButton} style={styles.menuIconWrap}>
              <Image source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/119047-200.png'}} style={styles.menuImage}  />
            </TouchableOpacity>
        <Image source={{uri: 'https://vogueplay.com/au/wp-content/uploads/2017/07/logo_casino_com_286%D1%85186.png'}}
       style={styles.logoImage} />
      </View>
        {this.state.visible && <View>
          <SectionList
          style={styles.menuOpened}
            sections={[
              {title: 'Home', data: ['Login', 'Download']},
              {title: 'About us', data: ['About Mansion', 'Contact Us', 'Careers']},
            ]}
            renderItem={({item}) => <Text style={styles.menuItem}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    position: 'absolute',
    width: '100%'
  },
  logoImage: {
    width: 143,
    height: 88,
    top: 10,
  },
  menuIconWrap: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    left: 10,
    top: '45%',
    position: 'absolute',
  },
  menuImage: {
    width: 20,
    height: 20,  
  },
  menuOpened: {
    backgroundColor: '#000',
    width: '100%',
    top: 80,
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
});
