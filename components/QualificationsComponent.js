import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import { Card, ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import Hr from "react-native-hr-component";
import baseUrl from '../shared/baseUrl';

class Qualifications extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Qualifications'
    };

    render() {
        const renderQualis = ({item, index}) => {
            return(
                <ListItem
                key={index}
                title={
                    <View style={{alignItems: 'center'}}>
                        <Image style={{width: 100, height: 100, marginBottom: 10}} source={{uri: baseUrl + item.image}} resizeMode={'contain'} />
                    </View>
                }
                subtitle={
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
                        <Text style={{fontStyle: 'italic'}}>{item.year}</Text>
                        <Text>{item.description}</Text>
                        <Hr text="-" />
                    </View>
                }
                hideChevron={true}
                />
            )
        }

        if (this.props.screenProps.qualifications.isLoading) {
            return(
                <Loading />
            );
        } else if (this.props.screenProps.qualifications.errMess) {
            return(
                <View>
                    <Text>{this.props.screenProps.qualifications.errMess}</Text>
                </View>
            );
        } else {
            return (
                <ScrollView>
                    <Card title="Qualifications"  titleStyle={{backgroundColor: '#b4cffa'}}>
                        <FlatList
                            data={this.props.screenProps.qualifications.qualifications}
                            renderItem={renderQualis}
                            keyExtractor={items => items.id.toString()}
                        />
                    </Card>
                </ScrollView>
            );
        }
    }
}

export default Qualifications;