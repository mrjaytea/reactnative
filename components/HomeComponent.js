import React, { Component } from 'react';
import { ScrollView, Text, ImageBackground } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ScrollView>
                <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
                    <Text>Welcome to my React Native App</Text>
                    <Text>Welcome to my React Native App</Text>
                    <Text>Welcome to my React Native App</Text>
                </ImageBackground>
            </ScrollView>
        );
    }
}
  
export default Home;