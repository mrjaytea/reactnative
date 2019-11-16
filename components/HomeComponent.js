import React, { Component } from 'react';
import { ScrollView, Text, ImageBackground, StyleSheet, Image, View, Dimensions} from 'react-native';
import Hr from "react-native-hr-component";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16) * 1.6;
const imageWidth = dimensions.width * 1.6;


export class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ScrollView>
                <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.mainContainer}>
                        <Text style={style.title}>Welcome to my React Native App</Text>
                        <Hr text="."/>
                        <Text style={{fontSize: 20, marginBottom: 20}}>I would like to invite to explore all the pages in the App as well as my other Apps/Webs</Text>
                        <Text style={style.title}>BluePrint of this App</Text>
                        <View style={style.imageContainer}>
                            <Image style={{width: imageHeight, height: imageWidth}} source={require('../assets/architecture.jpg')}/>
                        </View>   
                    </View> 
                </ImageBackground>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    mainContainer:{
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        marginTop: 5
    },
    imageContainer:{
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 5
    }
})
  
export default Home;