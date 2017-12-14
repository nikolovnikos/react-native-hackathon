import React,{Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Dimensions, ScrollView, Picker  } from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
    	<ScrollView >
	    	<View style={styles.socialNetworksBox}>
		        <Image
		          style={styles.socialNetworksImages}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/tw.png'}}
		        />
		        <Image
		          style={styles.socialNetworksImages}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/in.png'}}
		        />
		        <Image
		          style={styles.socialNetworksImages}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/fb.png'}}
		        />
		        <Image
		          style={styles.socialNetworksImages}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/yt.png'}}
		        />
	        </View>
	        <View style={styles.trustIconsBox}>
	       
	        	 <Image
		          style={{height: 17, width: 120, marginHorizontal: 10, marginTop: 10 }}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/trust-icons/gambleware.png'}}
		        />
		        <Image
		          style={{height: 31, width: 30, marginTop: 5, marginLeft: 5, }}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/trust-icons/18.png'}}
		        />	
		        <Image
		          style={{height: 40, width: 110, marginLeft:15 }}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/trust-icons/thawte.png'}}
		        />	
		        <Image
		          style={{height: 30, width: 30, marginLeft:15 }}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/trust-icons/remote-gambling.png'}}
		        />		

	        </View>
	           <View style={styles.trustIconsBox}>
	       
	        	 <Image
		          style={{height: 44, width: 100, marginHorizontal: 10, marginBottom: 10 }}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/trust-icons/gbga.png'}}
		        />
		        <Image
		          style={{height: 31, width: 60, marginTop: 5, marginLeft: 5, }}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/trust-icons/ibas.png'}}
		        />	
		        <Image
		          style={{height: 40, width: 110, marginLeft:15 }}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/trust-icons/gambling-comission.png'}}
		        />	
		        <Image
		          style={{height: 30, width: 30, marginLeft:15 }}
		          source={{uri: 'https://mobile.casino.com/mansiondesktop-theme/images/footer/trust-icons/gamcare.png'}}
		        />		

	        </View>
	        <View style={{backgroundColor: 'black', padding : 20, justifyContent: 'center', alignItems: 'center',}}>
		       		<Image
			          style={styles.bigIcons}
			          source={{uri: 'https://mobile.casino.com/library/FOOTER/Heart.png'}}
			        />
			        <Text style={styles.heading}>
			       		 Play mobile casino games on - the - go 
			        </Text>
			        <Text style={styles.heading}>with casino.com</Text>
			        <Text style={styles.textContent}>
			        	At Casino.com mobile our aim is simple– to provide an unrivalled online casino experience, wherever
			        </Text>
 					<Text style={styles.textLastLine}> you chose to play.</Text>
			        <Image
			          style={styles.bigIcons}
			          source={{uri: 'https://mobile.casino.com/library/FOOTER/Money.png'}}
			        />
			        <Text style={styles.heading}>
			       		 Fantastic mobile casino games
			        </Text>
			        <Text style={styles.textContent}>
			        	Our mobile casino has plenty of fantastic games 
			        </Text>
			        <Text style={styles.textLastLine}>ready to play on any mobile device</Text>	
			         <Image
			          style={styles.bigIcons}
			          source={{uri: 'https://mobile.casino.com/library/FOOTER/Dice.png'}}
			        />
			        <Text style={styles.heading}>
			       		 The best casino promotions and
			        </Text>
			         <Text style={styles.heading}>rewards</Text>
			        <Text style={styles.textContent}>
			        	If you are yet to make your first deposit at Casino.com, then sign up today and claim a
			        </Text>
			        <Text style={styles.textLastLine}>fantastic Welcome Bonus!</Text>
	        </View> 
	        <View>
	        	<Text style={styles.licenseText}>
	       			 Casino.com is licensed and regulated to offer online casino gaming services under the jurisdiction of Gibraltar.©2017 Casino.com is an internationally registered trademark.Casino.com is operated by ONISAC Ltd of Suite 732 Europort, Gibraltar under a license issued by the Gibraltar Licensing Authority, RGL No .053 and regulated by the Gibraltar Gambling Commissioner.For players located in Great Britain only, Casino.com is operated by Mansion Europe Holdings Ltd under a United Kingdom Gambling Commission Remote Operating Licence, Number 000 - 039448 - R - 319446. Only players above the age of 18 are permitted to play our games.
	        	</Text>	
	        </View>
        </ScrollView >
    );
  }
 
}
 const windowWidth = Dimensions.get('window').width;
  

  const styles = StyleSheet.create({
  		socialNetworksBox: {
  			backgroundColor : 'black',
  			flex:0,
  			height: 70,
  			flexDirection: 'row',
  			width: windowWidth,	
  			bottom:0,
  			padding:10,
  			
  		},
  		socialNetworksImages: {
  			width: 50,
  			height: 50,
  			marginHorizontal: 20, 
  		},
  		heading: { 
			color: 'white',
			fontWeight: 'bold', 
    		fontSize: 16,
    		fontFamily: 'Futura',
  		},

  		textContent: {
  			color: 'white',
  			fontFamily: 'Futura',
  		},

  		textLastLine: {
  			color: 'white',
  			fontFamily: 'Futura',
			marginBottom: 35
  		},

  		licenseText: {
  			fontFamily: 'Futura',
  			fontSize: 10,
  			textAlign: 'center',
  			paddingLeft : 10,
  			paddingRight: 10 
  		}, 

  		trustIconsBox: {
  			height: 50,
  			flexDirection: 'row',
  			width: windowWidth,	
  		},

  		bigIcons : {
  			width: 80, 
  			height: 80,
  			marginBottom: 5,
  		}

  });
