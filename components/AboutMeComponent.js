import React, { Component } from 'react';
import { Card, ListItem } from 'react-native-elements'
import { View, ScrollView, Text, StyleSheet, Image, FlatList } from 'react-native';
import Loading from './LoadingComponent'
import Hr from "react-native-hr-component";
import baseUrl from '../shared/baseUrl';

class AboutMe extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'About Me'
    };

    render() {
        const renderHobbies = ({item, index}) => {
            return(
                <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvatar={{source: {uri: baseUrl + item.image}}} />
            )
        }


        if( this.props.screenProps.aboutme.isLoading ){
            return(
                <Loading/>
            );
        } else if (this.props.screenProps.aboutme.errMess ) {
            return(
            <View>
                <Text>{this.props.screenProps.aboutme.errMess}</Text>
            </View>
            );
            
        } else {
            return(   
                <ScrollView>
                    <Card title="Info Card" titleStyle={{backgroundColor: '#b4cffa'}}>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                style={{width: 200, height: 200}}
                                source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Emoji_u1f4a9.svg/240px-Emoji_u1f4a9.svg.png" }}
                                resizeMode={'contain'} 
                            />
                        </View>
                        <Text style={{margin: 10}}>             
                            Surname: {this.props.screenProps.aboutme.aboutme.surname}
                        </Text>
                        <Text style={{margin: 10}}>             
                            Given Name: {this.props.screenProps.aboutme.aboutme.givenname}
                        </Text>
                        <Text style={{margin: 10}}>             
                            Date of Birth: {this.props.screenProps.aboutme.aboutme.dob}
                        </Text>
                    </Card>
                    <Hr text='-'/>
                    <Card title="Hobbies" titleStyle={{backgroundColor: '#b4cffa'}}>
                        <FlatList
                            data={this.props.screenProps.aboutme.aboutme.hobbies}
                            renderItem={renderHobbies}
                            keyExtractor={items => items.id.toString()}
                        />
                    </Card>
                </ScrollView>
            );
        }
    }
}

const style = StyleSheet.create({
    
})
  
export default AboutMe;