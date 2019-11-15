import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Avatar, Rating, Card, Image } from 'react-native-elements';
import Loading from './LoadingComponent';
import baseUrl from '../shared/baseUrl';

class Skill extends Component {
    constructor(props) {
        super(props);
    }
    
    static navigationOptions = {
        title: "Skill"
    };

    render() {
        const id = this.props.navigation.getParam('skillid', '');
        const title = this.props.screenProps.skills.skills[id].name;

        if (this.props.screenProps.skills.isLoading) {
            return(
                <Loading />
            );
        } else if (this.props.screenProps.skills.errMess) {
            return(
                <View>
                    <Text>{this.props.screenProps.skills.errMess}</Text>
                </View>
            );
        } else {
            return (
                <ScrollView>
                    <Card 
                    title={
                        <View>
                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 5}}>
                                <Avatar size={50} source={{uri: baseUrl + this.props.screenProps.skills.skills[id].image }} imageProps={{resizeMode:'contain'}} rounded={false} containerStyle={{backgroundColor: 'transparent'}} overlayContainerStyle={{backgroundColor: 'transparent'}}/>
                                <Text style={{fontSize:30, fontWeight: 'bold', marginLeft: 10}}>{title}</Text>
                            </View>
                            <Text style={{fontSize:25, fontStyle:'italic'}}>{this.props.screenProps.skills.skills[id].category}</Text>
                            <Text>Proficiency: </Text>
                            <Rating startingValue={this.props.screenProps.skills.skills[id].proficiency * 0.5} readonly imageSize={20}/> 
                        </View>
                    }  
                    titleStyle={{backgroundColor: '#b4cffa'}}>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                style={{width: 300, height: 300}}
                                source={{uri: baseUrl + this.props.screenProps.skills.skills[id].cert }}
                                resizeMode={'contain'} 
                            />
                        </View>
                    </Card>
                </ScrollView>
            );
        }
    }
}

export default Skill;