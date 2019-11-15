import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import { ListItem, Button, Rating, Card } from 'react-native-elements';
import Loading from './LoadingComponent';
import baseUrl from '../shared/baseUrl';

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Skills'
    };

    render() {
        const { navigate } = this.props.navigation;

        const renderSkills = ({item, index}) => {
            renderButton = false;
            if (item.cert){
                renderButton = true;
            } else {
                renderButton = false;
            }
            return(
                <ListItem
                    key={index}
                    title={
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
                    }
                    subtitle={
                        <View>
                            <Text>Proficiency: </Text>
                            <Rating startingValue={item.proficiency * 0.5} readonly imageSize={20}/> 
                            <Button disabled={!renderButton} title="More" disabledStyle={{width:0, height:0, backgroundColor:'rgba(255, 255, 255, 0)'}} disabledTitleStyle={{width:0, height:0, fontSize: 0}} onPress={ ()=> navigate('Skill', { skillid: item.id })}/>
                        </View>
                    }
                    leftAvatar={{source: {uri: baseUrl + item.image}, rounded: false, imageProps:{resizeMode: 'contain', height: 100, width: 100}, overlayContainerStyle:{backgroundColor:'transparent'} }}
                />
            );
        }
        
        if(this.props.screenProps.skills.isLoading){
            return(
                <Loading/>
            )
        } else if (this.props.screenProps.skills.errMess){
            return(
                <View>
                    <Text>{this.props.screenProps.skills.errMess}</Text>
                </View>
            )
        } else {
            return(
                <ScrollView>
                <Card title="Skills"  titleStyle={{backgroundColor: '#b4cffa'}}>
                    <FlatList
                        data={this.props.screenProps.skills.skills}
                        renderItem={renderSkills}
                        keyExtractor={items => items.id.toString()}
                    />
                </Card>
            </ScrollView>
            );
        }
    }
}

export default Skills;