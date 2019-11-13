import React, {Component} from 'react';
import Home from './HomeComponent';

import Constants from 'expo-constants'
import { View, Image, Stylesheet, Platform, ScrollView, Text } from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

// ====== The routes of each page/component
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle:{
                backgroundColor: "#6688FF",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon name='menu' size={24} color="white" onPress={ () => navigation.toggleDrawer() } />
        })
    }
);

// ==== Create the drawer nav with all the routes defined above
const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView forceInset={{ top:'always', horizontal: 'never'}}>
            <View>
                <View style= {{flex: 2}}>
                    <Text>
                        Ristorante con Fusion
                    </Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);


const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: "Home",
            // The name
            drawerLabel: "Home",
            // Include the icon, with a function
            drawerIcon: ({ tintColor} ) => (
                <Icon name='home' type='font-awesome' size={24} color={tintColor} />
            )
        }
    },
},
{
    initialRouteName: 'Home',
    drawerBackgroundColor: '#88AAFF',
    // Define the drawer to be the custom layout
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
        activeBackgroundColor: 'rgba(0, 0, 0, 0.25)',
        activeTintColor: 'white'
    }
});

class Main extends Component {

    render() {
        return(
            <View style={{ flex: 1}}>
                {/* onPress is a user interaction function */}
                <MainNavigator />
            </View>
        );
    }
}

export default Main;