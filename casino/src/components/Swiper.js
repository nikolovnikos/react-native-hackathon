import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
const loading = require('./src/img/loading.gif')
const  imgList2 = [
    require('./src/img/banner_8.jpg'),
    require('./src/img/banner_9.jpg'),
    require('./src/img/banner_10.jpg'),
    require('./src/img/banner_11.jpg'),
  ]

const styles = {
  banner_view: {
    flex: 0,
    height: 270
  },
  swipper_wrapper: {
    height: 270
  },

  slide: {
    flex: 0,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 180,
  },
  image: {
    height: 180,
    flex: 1,
    backgroundColor: 'transparent',
    resizeMode: 'stretch',
    width: width
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 60,
    height: 60
  },

  dots: {
    position: 'absolute',
    flex: 0,
    height: 340,
    top: 0
  },

  buttons: {
    height: 30,
    top: 80,
  },

  buttonPrev: {
    transform: [{ rotate: '180deg'}],
    top: 10,
    flex:0
  },
  buttonText: {
    fontSize: 50,
    color: 'rgba(255,255,255,0.5)'
  },


}

const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={imgList2[props.i]}/>
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>)
}


export default class Banner extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imgList: [
        './src/img/banner_1.jpg',
        './src/img/banner_2.jpg',
        './src/img/banner_3.jpg',
        './src/img/banner_4.jpg',
      ],
      loadQueue: [0, 0, 0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }
  render () {
    return (
      <View style={styles.banner_view}>
        <Swiper showsButtons={true} loadMinimal loadMinimalSize={1} style={styles.swipper_wrapper} autoplay={true} autoplayTimeout={4} loop={true} paginationStyle={styles.dots}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.5)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: 'orange', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          buttonWrapperStyle={styles.buttons}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={[styles.buttonText, styles.buttonPrev]}>›</Text>}
          >
          {
            this.state.imgList.map((item, i) => <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              key={i} />)
          }
        </Swiper>
      </View>
    )
  }
}
