import React, {Component} from 'react';
import Home from './HomeComponent';
import AboutMe from './AboutMeComponent';
import Qualifications from './QualificationsComponent';
import Skills from './SkillsComponent';
import Skill from './SkillComponent';
import Sensors from './SensorsComponent';

import { View, Image, Stylesheet, Platform, ScrollView, Text } from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { fetchAboutMe, fetchQualifications, fetchSkills } from '../redux/ActionCreator'

// ======== Redux
// Map the states in the stores to the props in here
const mapStateToProps = state => {
    return {
        aboutme: state.aboutme,
        skills: state.skills,
        qualifications: state.qualifications
    }
}

// Connect all those dispatches to props
const mapDispatchToProps = (dispatch) => ({
    fetchAboutMe: function() {
                    dispatch(fetchAboutMe())
                },
    fetchQualifications: () => dispatch(fetchQualifications()),
    fetchSkills: () => dispatch(fetchSkills())
});

// ====== The routes of each page/component
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle:{
                backgroundColor: "#1a2653",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon name='menu' size={24} color="white" onPress={ () => navigation.toggleDrawer() } />
        })
    }
);

const AboutMeNavigator = createStackNavigator(
    {
        AboutMe: { screen: AboutMe }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle:{
                backgroundColor: "#1a2653",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon name='menu' size={24} color="white" onPress={ () => navigation.toggleDrawer() } />
        })
    }
);

const QualificationsNavigator = createStackNavigator(
    {
        Qualifications: { screen: Qualifications }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle:{
                backgroundColor: "#1a2653",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon name='menu' size={24} color="white" onPress={ () => navigation.toggleDrawer() } />
        })
    }
);

const SkillsNavigator = createStackNavigator(
    {
        Skills: { 
            screen: Skills,
            navigationOptions: ({navigation}) => ({
                headerStyle:{
                    backgroundColor: "#1a2653",
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff',
                },
                headerLeft: <Icon name='menu' size={24} color="white" onPress={ () => navigation.toggleDrawer() } />
            })},
        Skill: { screen: Skill }
    },
    {
        initialRouteName: 'Skills',
        // Apply to all the screens above, used for common options
        // In here, styles are applied
        navigationOptions: {
            headerStyle:{
                backgroundColor: "#1a2653",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
        },
    }
);

const SensorsNavigator = createStackNavigator(
    {
        Sensors: { screen: Sensors }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle:{
                backgroundColor: "#1a2653",
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
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/banner.png')} style={{width: 175, height: 175}} resizeMode={'contain'}/>
                    <Text style={{fontWeight: 'bold', fontSize: 20, textShadowColor: 'white', 
                    textShadowOffset:{width: 1, height: 1}}}>
                        Terry's React Native App
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
    AboutMe: {
        screen: AboutMeNavigator,
        navigationOptions: {
            title: "About me",
            // The name
            drawerLabel: "About me",
            // Include the icon, with a function
            drawerIcon: ({ tintColor} ) => (
                <Icon name='info' type='font-awesome' size={24} color={tintColor} />
            )
        }
    },
    Qualifications: {
        screen: QualificationsNavigator,
        navigationOptions: {
            title: "Qualifications",
            // The name
            drawerLabel: "Qualifications",
            // Include the icon, with a function
            drawerIcon: ({ tintColor} ) => (
                <Icon name='check' type='font-awesome' size={24} color={tintColor} />
            )
        }
    },
    Skills: {
        screen: SkillsNavigator,
        navigationOptions: {
            title: "Skills",
            // The name
            drawerLabel: "Skills",
            // Include the icon, with a function
            drawerIcon: ({ tintColor} ) => (
                <Icon name='cogs' type='font-awesome' size={24} color={tintColor} />
            )
        }
    },
    Sensors: {
        screen: SensorsNavigator,
        navigationOptions: {
            title: "Sensors",
            // The name
            drawerLabel: "Sensors",
            // Include the icon, with a function
            drawerIcon: ({ tintColor} ) => (
                <Icon name='thermometer-three-quarters' type='font-awesome' size={24} color={tintColor} />
            )
        }
    }
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

    constructor(props){
        super(props);
        this.state ={

        }
    }

    componentDidMount() {
        this.props.fetchAboutMe();
        this.props.fetchQualifications();
        this.props.fetchSkills()
    }

    render() {
        return(
            <View style={{ flex: 1}}>
                {/* onPress is a user interaction function */}
                <MainNavigator screenProps={this.props} />
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);