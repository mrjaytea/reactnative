import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements';
import {Accelerometer, Barometer, Gyroscope, Magnetometer, MagnetometerUncalibrated, Pedometer} from 'expo-sensors';

class Sensors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accelerometerData: {},
            barometerData:{},
            gyroscopeData: {},
            magnetometerData: {},
        }
    }

    static navigationOptions = {
        title: 'Sensors'
    };


    componentDidMount() {
        this.onAccelerometerSubscribe();
        this.onBarometerSubscribe();
        this.onGyroscopeSubscribe();
        this.onMagnetometerSubscribe();
    }

    componentWillUnmount() {
        this.onAccelerometerUnsubscribe();
        this.onBarometerUnsubscribe();
        this.onGyroscopeUnsubscribe();
        this.onMagnetometerUnsubscribe();
    }

// ===================== Accelerometer
    slowAccelerometer() {
        Accelerometer.setUpdateInterval(2000);
    }

    fastAccelerometer() {
        Accelerometer.setUpdateInterval(500);
    }

    onAccelerometerSubscribe() {
        this.accelerometerSubscription = Accelerometer.addListener(result => {
            this.setState({accelerometerData: result});
        });
    }

    onAccelerometerUnsubscribe() {
        this.accelerometerSubscription && this.accelerometerSubscription.remove();
        this.accelerometerSubscription = null
    }

// ===================== Barometer
    onBarometerSubscribe() {
        this.barometerSubscription = Barometer.addListener(result => {
            this.setState({barometerData: result});
        });
    }

    onBarometerUnsubscribe() {
        this.barometerSubscription && this.barometerSubscription.remove();
        this.barometerSubscription = null
    }

// ===================== Gyroscope
    slowGyroscope() {
        Gyroscope.setUpdateInterval(2000);
    }

    fastGyroscope() {
        Gyroscope.setUpdateInterval(500);
    }

    onGyroscopeSubscribe() {
        this.gyroscopeSubscription = Gyroscope.addListener(result => {
            this.setState({gyroscopeData: result});
        });
    }

    onGyroscopeUnsubscribe() {
        this.gyroscopeSubscription && this.gyroscopeSubscription.remove();
        this.gyroscopeSubscription = null
    }
// ===================== Magnetometer
    slowMagnetometer() {
        Magnetometer.setUpdateInterval(2000);
    }

    fastMagnetometer() {
        Magnetometer.setUpdateInterval(500);
    }

    onMagnetometerSubscribe() {
        this.magnetometerSubscription = Magnetometer.addListener(result => {
            this.setState({magnetometerData: result});
        });
    }

    onMagnetometerUnsubscribe() {
        this.magnetometerSubscription && this.magnetometerSubscription.remove();
        this.magnetometerSubscription = null
    }

    render() {
        let xa = this.state.accelerometerData.x;
        let ya = this.state.accelerometerData.y;
        let za = this.state.accelerometerData.z;

        let {pressure = 0} = this.state.barometerData;

        let xg = this.state.gyroscopeData.x;
        let yg = this.state.gyroscopeData.y;
        let zg = this.state.gyroscopeData.z;

        let xm = this.state.magnetometerData.x;
        let ym = this.state.magnetometerData.y;
        let zm = this.state.magnetometerData.z;
    return (
        <ScrollView>
            <View style={styles.sensor}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 5}}>
                    <Icon name="cubes" type='font-awesome' size={20} style={{marginRight: 5}} />
                    <Text style={styles.title}>Accelerometer:</Text>
                </View>
                <Text style={styles.text}>(in Gs where 1 G = 9.81 m s^-2)</Text>
                <Text style={styles.text}>
                    x: {round(xa)} y: {round(ya)} z: {round(za)}
                </Text>
                <Text>Is surface flat? {isSurfaceFlat(xa, ya, za)}</Text>
                <Text style={styles.textWarning}>
                    {accelerometerWarning(xa, ya, za)}
                </Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.slowAccelerometer} style={styles.button}>
                    <Text>Slow</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.fastAccelerometer} style={styles.button}>
                    <Text>Fast</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.sensor}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 5}}>
                    <Icon name="compress" type='font-awesome' size={20} style={{marginRight: 5}} />
                    <Text style={styles.title}>Barometer:</Text>
                </View>
                <Text style={styles.text}>
                    Pressure: {round(pressure)} hPa
                </Text>
                <Text style={styles.textNotes}>If the reading increases as you grip the phone more tightly, that means the water resistance function is still working!</Text>
                <Text style={styles.textWarning}>{barometerWarning(pressure)}</Text>
            </View>

            <View style={styles.sensor}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 5}}>
                    <Icon name="refresh" type='font-awesome' size={20} style={{marginRight: 5}} />
                    <Text style={styles.title}>Gyroscope:</Text>
                </View>
                <Text style={styles.text}>
                    x: {round(xg)} y: {round(yg)} z: {round(zg)}
                </Text>
                <Text style={styles.textWarning}>
                    {gyroscopeWarning(xg, yg, zg)}
                </Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.slowGyroscope} style={styles.button}>
                    <Text>Slow</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.fastGyroscope} style={styles.button}>
                    <Text>Fast</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.sensor}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 5}}>
                    <Icon name="magnet" type='font-awesome' size={20} style={{marginRight: 5}} />
                    <Text style={styles.title}>Magnetometer:</Text>
                </View>
                <Text style={styles.text}>
                    x: {round(xm)} y: {round(ym)} z: {round(zm)}
                </Text>
                <Text style={styles.textNotes}>
                    {magnetDetect(xm, ym, zm)}
                </Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.slowMagnetometer} style={styles.button}>
                    <Text>Slow</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.fastMagnetometer} style={styles.button}>
                    <Text>Fast</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      
    );
  }
}

// Acc functions
function isSurfaceFlat(x, y, z) {
    if((x < 0.1 &&  y < 0.1 && z > 0.9) && (x > -0.1 &&  y > -0.1 && z > 0.9)) {
        return "Horizontally Flat";
    } 
    
    if( y > 0.9 && z < 0.1 ) {
        return "Vertically Flat";
    }

    return "Not Flat";
}

function accelerometerWarning(x, y, z){
    if(z > 0.5) {
        return "Using your phone with your neck down for a long time will hurt your neck";
    } else {
        return "";
    }
}

// Bar functions
function barometerWarning(n){
    if(n >= 1012) {
        return "You are gripping your phone too tightly";
    } else {
        return "";
    }
}

// Gyro functions
function gyroscopeWarning(x, y, z){
    if(x > 0.5 || y > 0.5 || z > 0.5){
        return "SHARP TURN";
    } else {
        return "";
    }
}

// Magnet functions
function magnetDetect(x, y, z){
    if(x > 300 || y > 300 || z > 300){
        return "Magnet is nearby";
    } else {
        return "";
    }
}

function round(n) {
    if (!n) {
      return 0;
    }
  
    return Math.floor(n * 100) / 100;
  }
  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: 5,
      marginBottom: 10
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: 10,
    },
    sensor: {
      marginTop: 45,
      paddingHorizontal: 10,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    text:{
      textAlign: 'left'
    },
    textWarning:{
        color: 'red'
    },
    textNotes:{
        color: 'green'
    }
  });
export default Sensors;