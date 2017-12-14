import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions,
  TouchableOpacity,
  Animated,
  WebView
} from 'react-native';

const maxWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const WEBVIEW_REF = "WEBVIEW_REF";


export default class DetailScreen extends React.Component {



  renderContent() {
    return (
      <View  style={{ flex: 1, height: height, flexDirection: 'column', backgroundColor:'#d3d3d3'}}>
      <View style={styles.backButton}>
      <TouchableOpacity
      onPress={() => this.setState({showWebView: false})}
      >
      <Text>Go Back</Text>
      </TouchableOpacity>
      </View>


      <WebView
      ref={WEBVIEW_REF}
          source={{uri: 'https://mobile.casino.com/igaming/zeus/'}}
          startInLoadingState
     scalesPageToFit
     javaScriptEnabled

     style={{ flex: 1, height: 400, flexDirection: 'column'}}
        />


</View>
      );
  }

  state = {
    localPhoto: null,
    showWebView: false
  };

  componentWillReceiveProps(nextProps) {
    const { photo } = nextProps;
    if (photo) {
      this.setState({ localPhoto: photo });
    }
  }

  render() {
    const { onClose, openProgress, isAnimating } = this.props;
    const { localPhoto } = this.state;
    if (localPhoto) {
      return (

        <Animated.View
          style={{position:'absolute',top:-195,width:maxWidth,height:height}}
          pointerEvents={isAnimating || this.props.photo ? 'auto' : 'none'}
        >
                    { this.state.showWebView && this.renderContent() }
          { !this.state.showWebView   && <Animated.Image
            ref={r => (this._openingImageRef = r)}
            source={localPhoto.source}
            style={{
              width: maxWidth,
              height: 300,
              flex:1,
              flexDirection: 'column',
              opacity: openProgress.interpolate({
                inputRange: [0, 0.99, 0.995],
                outputRange: [0, 0, 1]
              })
            }}
          /> }

          { !this.state.showWebView   &&  <Animated.View
            style={[
              styles.body,
              {
                opacity: openProgress,
                backgroundColor: '#fff',
                transform: [
                  {
                    translateY: openProgress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [100, 0]
                    })
                  }
                ]
              }
            ]}
          >
            <Text style={styles.title}>
              - {localPhoto.postedBy}
            </Text>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </Animated.View>
        }
          <Animated.View
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              opacity: openProgress
            }}
            pointerEvents={isAnimating ? 'none' : 'auto'}
          >
              { !this.state.showWebView   && <TouchableOpacity
              onPress={() => onClose(localPhoto.id)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity> }

          </Animated.View>

          <Animated.View
            style={{
              position: 'absolute',
              top: 250,
              right: 20,
              opacity: openProgress
            }}
            pointerEvents={isAnimating ? 'none' : 'auto'}
          >

              { !this.state.showWebView   && <TouchableOpacity
              onPress={() => this.setState({showWebView: true})}
              style={styles.playButton}
            >
              <Text style={styles.closeText}>Play Now</Text>
              </TouchableOpacity>  }

          </Animated.View>


        </Animated.View>

      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    // fontFamily: 'Avenir Next',
    lineHeight: 50
  },
  description: {
    color: '#333',
    fontSize: 14
    // fontFamily: 'Avenir Next'
  },
  body: { flex: 1, padding: 15 },
  closeText: { color: 'white', backgroundColor: 'transparent' },
  closeButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    borderRadius: 5
  },

  playButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    borderRadius: 5
  },

  backButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    paddingTop: 30,
    paddingBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    borderRadius: 5
  }

});
