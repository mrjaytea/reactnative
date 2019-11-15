import React, { Component } from 'react';
import { ScrollView, Text, ImageBackground, StyleSheet } from 'react-native';

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
                    <Text style={style.title}>Welcome to my React Native App</Text>
                    <Text>I would like to invite to explore all the pages in the App as well as my other Apps/Webs</Text>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
  
export default Home;