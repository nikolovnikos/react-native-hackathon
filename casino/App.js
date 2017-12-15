import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar
} from 'react-native'
import Swiper from 'react-native-swiper'


const { width } = Dimensions.get('window')
const maxWidth = Dimensions.get('window').width
const loading = require('./src/img/loading.gif')
const  imgList2 = [
    require('./src/img/banner_8.jpg'),
    require('./src/img/banner_9.jpg'),
    require('./src/img/banner_10.jpg'),
    require('./src/img/banner_11.jpg'),
  ]

import PHOTOS from './src/components/gametree/data';
import { processImages, buildRows, normalizeRows } from './src/components/gametree/utils';
import PhotoGallery from './src/components/gametree/PhotoGallery';
import GridItem from './src/components/gametree/GridItem';

import Footer from './src/components/Footer';
import Header from './src/components/Header';



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
  state = {
    imgList: [
      './src/img/banner_1.jpg',
      './src/img/banner_2.jpg',
      './src/img/banner_3.jpg',
      './src/img/banner_4.jpg',
    ],
    loadQueue: [0, 0, 0, 0],
    dataSource: [],
    scrolla: 0


  }
  componentWillMount() {
    const processedImages = processImages(PHOTOS);
    let rows = buildRows(processedImages, maxWidth);
    rows = normalizeRows(rows, maxWidth);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

      this.setState({dataSource: ds.cloneWithRows(rows)});
  }
  renderRow = (onPhotoOpen, row) =>
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between'
      }}
    >
      {row.map(item =>
        <GridItem item={item} key={item.id} onPhotoOpen={onPhotoOpen} />
      )}
    </View>;
  constructor (props) {
    super(props)
    this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }

  handleScroll(event: Object) {
    let scrolla = event.nativeEvent.contentOffset.y;
    this.setState({
      scrolla
    })
  }
  render () {
  //  console.log(this.state.scrolla);
    return (
      <ScrollView onScroll={this.handleScroll.bind(this)} scrollEventThrottle={16}>
        <StatusBar hidden={true} />
        <Header />
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
        <PhotoGallery
          renderContent={({ onPhotoOpen }) =>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this, onPhotoOpen)}
            />}
          onScroll={this.state.scrolla}
        />
        <Footer />
      </ScrollView>
    )
  }
}

const styles = {
  banner_view: {
    flex: 0,
    height: 195
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
